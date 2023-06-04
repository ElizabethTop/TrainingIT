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
  Input,
} from './styled/exam-list-styled'
import { removeExam } from '../api/requests'
import ModalDateExam from './modal-date-exam'

const ExamList = () => {
  const dispatch = useDispatch()
  const [allExams, setAllExams] = useState([])
  const [sortExams, setSortExams] = useState([])
  const [isShowDateWindow, setIsShowDateWindow] = useState(false)
  const [examIdForEdit, setExamIdForEdit] = useState('')
  const [searchValue, setSearchValue] = useState('')

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

      setAllExams(sortExams)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const changeInfoUser = async (booleanStatus, exam) => {
    try {
      dispatch(changeLoading(true))
      const status = booleanStatus ? 'Экзамен сдан' : 'Экзамен не сдан'
      const passingExam = Math.round(Date.now() / 1000)
      await changeUserInfoExam({
        examId: exam.id,
        status,
        passingExam,
        dateExam: exam.dateExam,
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

  const openDateModal = (examId) => {
    setExamIdForEdit(examId)
    setIsShowDateWindow(true)
  }

  const closeDateModal = () => {
    setExamIdForEdit('')
    setIsShowDateWindow(false)
  }

  const saveDateExam = async (date) => {
    try {
      dispatch(changeLoading(true))
      const dateExam = date.getTime() / 1000
      await changeUserInfoExam({
        examId: examIdForEdit,
        status: 'В ожидании',
        passingExam: 0,
        dateExam,
      })
      await fetchExams()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  useEffect(() => {
    if (searchValue) {
      const newsSortArticles = allExams.reduce((acc, group) => {
        group.exams.forEach((exam) => {
          const findFirstName = exam.userData.firstName
            .toLowerCase()
            .includes(`${searchValue.toLowerCase()}`)
          const findLastName = exam.userData.lastName
            .toLowerCase()
            .includes(`${searchValue.toLowerCase()}`)

          if (findFirstName || findLastName) {
            acc.push(exam)
          }
        })

        return acc
      }, [])

      setSortExams(newsSortArticles)
    }

    if (!searchValue) {
      setSortExams(allExams)
    }
  }, [allExams, searchValue])

  useEffect(() => {
    fetchExams()
  }, [])

  return (
    <Container>
      <Input>
        <h3>Поиск по имени или фамилии</h3>
        <p>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </p>
      </Input>
      <Box>
        {sortExams.length === 0 && <h3>Список пуст</h3>}
        {sortExams.map((elem, index) => (
          <Group key={index}>
            {elem?.section ? (
              <>
                {' '}
                <h2>Карточка: {elem.section}</h2>
                <Exams>
                  {elem.exams.map((exam, index) => (
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
                          {exam.dateExam !== 0 && (
                            <p>
                              назначенная дата экзамена:{' '}
                              {getDate(exam.dateExam)}
                            </p>
                          )}
                          {exam.passingExam !== 0 && (
                            <p>экзамен был сдан: {getDate(exam.passingExam)}</p>
                          )}
                        </div>
                      </div>
                      <div className='buttons-exam'>
                        <ButtonExam
                          bg={'rgba(0, 17, 255, 0.7)'}
                          onClick={() => openDateModal(exam.id)}
                        >
                          Назначить дату
                        </ButtonExam>
                        <ButtonExam
                          bg={'green'}
                          onClick={() => changeInfoUser(true, exam)}
                        >
                          Сдан
                        </ButtonExam>
                        <ButtonExam
                          bg={'red'}
                          onClick={() => changeInfoUser(false, exam)}
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
              </>
            ) : (
              <>
                <h2>Карточка: {elem.cardHead}</h2>
                <Exams>
                  <Exam key={`ex_${index}`}>
                    <div className='data'>
                      <div className='fio'>
                        <p>
                          {elem.userData.firstName} {elem.userData.lastName}
                        </p>
                        <p>({elem.userData.role})</p>
                      </div>
                      <div className='details'>
                        <p>статус: {elem.status}</p>
                        {elem.dateExam !== 0 && (
                          <p>
                            назначенная дата экзамена: {getDate(elem.dateExam)}
                          </p>
                        )}
                        {elem.passingExam !== 0 && (
                          <p>экзамен был сдан: {getDate(elem.passingExam)}</p>
                        )}
                      </div>
                    </div>
                    <div className='buttons-exam'>
                      <ButtonExam
                        bg={'rgba(0, 17, 255, 0.7)'}
                        onClick={() => openDateModal(elem.id)}
                      >
                        Назначить дату
                      </ButtonExam>
                      <ButtonExam
                        bg={'green'}
                        onClick={() => changeInfoUser(true, elem)}
                      >
                        Сдан
                      </ButtonExam>
                      <ButtonExam
                        bg={'red'}
                        onClick={() => changeInfoUser(false, elem)}
                      >
                        Не сдан
                      </ButtonExam>
                    </div>
                    <DeleteIcon onClick={() => deleteExm(elem.id)}>
                      <IoIosCloseCircleOutline />
                    </DeleteIcon>
                  </Exam>
                </Exams>
              </>
            )}
          </Group>
        ))}
      </Box>
      {isShowDateWindow && (
        <ModalDateExam
          closeDateModal={closeDateModal}
          saveDateExam={saveDateExam}
        />
      )}
    </Container>
  )
}

export default ExamList
