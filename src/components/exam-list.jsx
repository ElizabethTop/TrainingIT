import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeLoading } from '../redux/slice/other'
import { changeUserInfoExam, getInfoExams } from '../api/requests'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import {
  Container,
  Box,
  Group,
  Exams,
  Exam,
  DeleteIcon,
  ButtonExam,
} from './styled/exam-list-styled'
import { removeExam } from '../api/requests'

const ExamList = () => {
  const dispatch = useDispatch()
  const [exams, setExams] = useState([])

  const fetchExams = async () => {
    try {
      dispatch(changeLoading(true))
      const exams = await getInfoExams()

      const sortExams = exams.reduce((acc, exam) => {
        const findExamName = acc.find(
          (group) => group.section === exam.cardHead
        )

        const updateExam = {
          ...exam,
          userData: JSON.parse(exam.userData),
        }

        if (findExamName) {
          acc.forEach((group) => {
            if (group.section === exam.cardHead) {
              group.exams.push(updateExam)
            }
          })
        }
        if (!findExamName) {
          acc.push({
            section: exam.cardHead,
            exams: [updateExam],
          })
        }

        return acc
      }, [])

      setExams(sortExams)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const changeInfoUser = async (booleanStatus, examId) => {
    try {
      dispatch(changeLoading(true))
      const status = booleanStatus ? 'Экзамен сдан' : 'Экзамен не сдан'
      const passingExam = Math.round(Date.now() / 1000)
      await changeUserInfoExam({
        examId,
        status,
        passingExam,
      })
      await fetchExams()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const deleteExm = async (examId) => {
    try {
      dispatch(changeLoading(true))

      await removeExam({
        examId,
      })
      await fetchExams()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const getDate = (seconds) => {
    const date = new Date(0)
    date.setSeconds(seconds)
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.')
  }

  useEffect(() => {
    fetchExams()
  }, [])

  return (
    <Container>
      <Box>
        {exams.length === 0 && <h3>Список пуст</h3>}
        {exams.map((group, index) => (
          <Group key={index}>
            <h2>Карточка: {group.section}</h2>
            <Exams>
              {group.exams.map((exam, index) => (
                <Exam key={index}>
                  <div className='data'>
                    <div className='fio'>
                      <p>
                        {exam.userData.firstName} {exam.userData.lastName}
                      </p>
                      <p>({exam.userData.role})</p>
                    </div>
                    <div className='details'>
                      <p>статус: {exam.status}</p>
                      {exam.passingExam !== 0 && (
                        <p>дата сдачи: {getDate(exam.passingExam)}</p>
                      )}
                    </div>
                  </div>
                  <div className='buttons-exam'>
                    <ButtonExam
                      bg={'green'}
                      onClick={() => changeInfoUser(true, exam.id)}
                    >
                      Сдан
                    </ButtonExam>
                    <ButtonExam
                      bg={'red'}
                      onClick={() => changeInfoUser(false, exam.id)}
                    >
                      Не сдан
                    </ButtonExam>
                  </div>
                  <DeleteIcon onClick={() => deleteExm(exam.id)}>
                    <IoIosCloseCircleOutline />
                  </DeleteIcon>
                </Exam>
              ))}
            </Exams>
          </Group>
        ))}
      </Box>
    </Container>
  )
}

export default ExamList
