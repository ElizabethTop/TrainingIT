import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { recordOnExam } from '../api/requests'
import { changeLoading } from '../redux/slice/other'
import {
  DetailCard,
  ContentCard,
  CloseIconCard,
  Window,
  Box2,
  Questions,
  Links,
  Box3,
} from './styled/modal-info-card-styled'

function InfoCard({ selectedCard, setIsShowCard, fetchCards }) {
  const dispatch = useDispatch()
  const { userId, userData, role } = useSelector((state) => state.user)

  const clouseModal = async () => {
    setIsShowCard(false)
  }

  const recording = async () => {
    try {
      dispatch(changeLoading(true))

      const newUserData = {
        ...userData,
        role,
      }

      await recordOnExam({
        userId,
        userData: newUserData,
        cardId: selectedCard.id,
        cardHead: selectedCard.head,
        status: 'В ожидании',
      })

      await clouseModal()
      await fetchCards()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  return (
    <DetailCard>
      <ContentCard>
        <CloseIconCard onClick={clouseModal}>
          <AiOutlineClose />
        </CloseIconCard>
        <Window>
          <h3>{selectedCard.head}</h3>
          <Box2>
            <Questions>
              <span>Вопросы:</span>
              {selectedCard.questions.map((question, index) => (
                <p key={index}>
                  {index + 1}. {question}
                </p>
              ))}
            </Questions>
            <Links>
              <span>Полезные ссылки:</span>
              {selectedCard.links.map((link, index) => (
                <p key={index}>
                  <a
                    href={link.includes('http') ? link : `https://${link}`}
                    target='_blank'
                  >
                    {link}
                  </a>
                </p>
              ))}
            </Links>
          </Box2>
          <Box3>
            <button onClick={recording}>Записаться</button>
          </Box3>
        </Window>
      </ContentCard>
    </DetailCard>
  )
}

export default InfoCard
