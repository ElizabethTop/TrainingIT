import { useEffect, useState } from 'react'
import InfoCard from './modal-info-card'
import ModalAddCard from './modal-add-card'
import { CgArrowLongRight } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoading } from '../redux/slice/other'
import { getAllCards, getInfoUserExam, removeCard } from '../api/requests'
import {
  Container,
  Alternative,
  GroupList,
  Group,
  NameGroup,
  Cards,
  Card,
  Arrow,
  AddCard,
  ShowExams,
  DeleteIcon,
  BgBlocked,
  BgStatus,
} from './styled/recordingPC-styled'
import ExamList from './exam-list'

function RecordingPC() {
  const dispatch = useDispatch()
  const { userId, role } = useSelector((state) => state.user)
  const [displayInfo, setDisplayInfo] = useState(1)
  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const [isShowAddCard, setIsShowAddCard] = useState(false)
  const [isShowCard, setIsShowCard] = useState(false)

  const fetchCards = async () => {
    try {
      dispatch(changeLoading(true))
      const allCards = await getAllCards()

      const infoExam = await getInfoUserExam()

      const sortCard = allCards
        .reduce((acc, card) => {
          const findGroup = acc.find((group) => group.section === card.group)

          const updateCard = {
            ...card,
            questions: JSON.parse(card.questions),
            links: JSON.parse(card.links),
          }

          if (findGroup) {
            acc.forEach((group) => {
              if (group.section === card.group) {
                group.cards.push(updateCard)
              }
            })
          }
          if (!findGroup) {
            acc.push({
              section: card.group,
              cards: [updateCard],
            })
          }

          return acc
        }, [])
        .map((group) => {
          const newGropup = { ...group }
          newGropup.cards.sort((a, b) => {
            if (a.number > b.number) return 1
            if (a.number == b.number) return 0
            if (a.number < b.number) return -1
          })
          return newGropup
        })

      sortCard.reduce((acc, group) => {
        group.cards.forEach((card, index) => {
          card.blockedCard = false

          if (index === 0) {
            const findExm = infoExam.find((exam) => exam.cardHead === card.head)
            if (findExm) {
              card.status = findExm.status
            }
            return card
          }

          infoExam.forEach((exam) => {
            if (exam.cardHead === card.head) {
              card.status = exam.status
            }
            if (exam.cardHead === card.head && exam.passingExam !== 0) {
              const datePassing = new Date(0)
              datePassing.setSeconds(exam.passingExam)
              const difference = Math.round(
                (Date.now() - datePassing) / (1000 * 60 * 60 * 24)
              )

              card.blockedCard = difference >= 14 ? false : true
            } else {
              card.blockedCard = true
            }
          })
        })

        return acc
      }, [])

      setCards(sortCard)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const deleteCard = async (cardId) => {
    try {
      dispatch(changeLoading(true))
      await removeCard({ cardId })
      await fetchCards()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const showCard = (card) => {
    setSelectedCard(card)
    setIsShowCard(true)
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return !userId ? (
    <Container>
      <Alternative>
        <p>Пожалуйста авторизуйтесь, </p>
        <p>чтобы записаться на экзамены</p>
      </Alternative>
    </Container>
  ) : (
    <Container>
      {displayInfo === 1 && role === 'admin' && (
        <>
          <ShowExams bg={1}>
            <button onClick={() => setDisplayInfo(2)}>
              Список записавшихся
            </button>
          </ShowExams>
          <AddCard>
            <div>
              <button onClick={() => setIsShowAddCard(true)}>
                Добавить карточку
              </button>
            </div>
          </AddCard>
        </>
      )}
      {displayInfo === 2 && (
        <ShowExams bg={2}>
          <button
            onClick={() => {
              setDisplayInfo(1)
              fetchCards()
            }}
          >
            Вернуться к карточкам
          </button>
        </ShowExams>
      )}
      {displayInfo === 1 && (
        <GroupList>
          {cards.length === 0 && <h2>Карт пока что нет</h2>}
          {cards.map((group, index) => (
            <Group key={index}>
              <NameGroup>
                <h2>{group.section}</h2>
              </NameGroup>
              <Cards>
                {group.cards.map((card, index) => {
                  return (
                    <div key={index} className='card-and-arrow'>
                      <Card>
                        <div className='head' onClick={() => showCard(card)}>
                          <h3>{card.head}</h3>
                        </div>
                        {role === 'admin' && (
                          <DeleteIcon onClick={() => deleteCard(card.id)}>
                            <AiOutlineClose />
                          </DeleteIcon>
                        )}
                        {card.blockedCard && !card?.status && (
                          <BgBlocked>
                            Ещё не сдан предыдущий экзамен или не прошло 14 дней
                            с предыдущей сдачи
                          </BgBlocked>
                        )}
                        {card?.status && (
                          <BgStatus
                            bg={
                              card.status === 'Экзамен сдан'
                                ? 'green'
                                : card.status === 'В ожидании'
                                ? 'blue'
                                : 'red'
                            }
                            onClick={() => showCard(card)}
                          >
                            <p>{card.status}</p>
                          </BgStatus>
                        )}
                      </Card>
                      {!!(group.cards.length - 1 !== index) && (
                        <Arrow>
                          <CgArrowLongRight />
                        </Arrow>
                      )}
                    </div>
                  )
                })}
              </Cards>
            </Group>
          ))}
        </GroupList>
      )}
      {displayInfo === 2 && <ExamList />}
      {isShowCard && selectedCard && (
        <InfoCard
          selectedCard={selectedCard}
          setIsShowCard={setIsShowCard}
          fetchCards={fetchCards}
        />
      )}
      {isShowAddCard && (
        <ModalAddCard
          setIsShowAddCard={setIsShowAddCard}
          fetchCards={fetchCards}
        />
      )}
    </Container>
  )
}

export default RecordingPC
