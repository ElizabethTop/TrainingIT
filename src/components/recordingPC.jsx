import { CgArrowLongRight } from 'react-icons/cg'
import {
  Container,
  AllCards,
  CardGroup,
  Card,
  Arrow,
  AddCard,
} from './styled/recordingPC-styled'
import { useState } from 'react'
import InfoCard from './modal-info-card'
import ModalAddCard from './modal-add-card'

const cards = [
  {
    id: '12312312377',
    section: 'ESB',
    sequenceNumber: 1,
    head: 'SCRUM',
    questions: [
      'Зачем нужен Скрам бизнесу?',
      'Как нам выстроить оргструктуру, если мы используем Скрам: сколько продуктов, РO, PBL, команд, инкрементов?',
      'Как и кто определяет состав команд?',
      ' Как нам выбрать длину спринта?',
      'Зачем вообще нужен спринт?',
      'Как связаны спринты и релизы?',
      'На Обзоре спринта нет пользователей. Что ты думаешь об этом?',
      'За счет чего в Скраме обеспечивается адаптивность, скорость, доставка самого ценного?',
      'Если бы Скрам нужно было свести к одному элементу, то что бы это было?',
      'В чем твоя роль как Скрам-мастера сейчас?',
      'На каком уровне тебе удалось поработать: индивидуально, команда, несколько команд, продукт, организация?',
      'Какие значимые результаты команды и компании ты присваиваешь себе?',
      'Какими своими кейсами ты гордишься?',
      'Расскажи про кейс, где ты нарушил правило или ценность Скрам-мастер. Чему тебя это научило?',
      'Как выглядит структура компании в которой ты работаешь: сколько РО, сколько PBL, сколько команд? Может ли любая команда брать любой элемент PBL в работу? Кто РО? Что лежит в PBL? Приведи, пожалуйста, пару примеров.',
      'К каким изменениям в структуре компании ты причастен?',
    ],
    links: [
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
    ],
  },
  {
    id: '12312312372ffff7',
    section: 'ESB',
    sequenceNumber: 2,
    head: 'Методы управления',
    questions: [
      'Расскажите о себе',
      'Назовите свое главное достоинство?',
      'Назовите свой главный недостаток',
      'Каким вы видите себя через пять лет?',
      'Почему мы должны нанять именно вас?',
      'Как связаны спринты и релизы?',
      'Как вы узнали о вакансии?',
      'Почему вы хотите получить эту работу?',
    ],
    links: [
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://hr-portal.ru/story/27-rasprostranennyh-voprosov-dlya-sobesedovaniya-i-otvety-na-nih',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
    ],
  },
  {
    id: '12312312372ffff7',
    section: 'ESB',
    sequenceNumber: 3,
    head: 'English',
    questions: [
      'Расскажите о себе',
      'Назовите свое главное достоинство?',
      'Назовите свой главный недостаток',
      'Каким вы видите себя через пять лет?',
      'Почему мы должны нанять именно вас?',
      'Как связаны спринты и релизы?',
      'Как вы узнали о вакансии?',
      'Почему вы хотите получить эту работу?',
    ],
    links: [
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://hr-portal.ru/story/27-rasprostranennyh-voprosov-dlya-sobesedovaniya-i-otvety-na-nih',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
    ],
  },
  {
    id: '12312312372ffff7',
    section: 'LoL',
    sequenceNumber: 1,
    head: 'Jira',
    questions: [
      'Расскажите о себе',
      'Назовите свое главное достоинство?',
      'Назовите свой главный недостаток',
      'Каким вы видите себя через пять лет?',
      'Почему мы должны нанять именно вас?',
      'Как связаны спринты и релизы?',
      'Как вы узнали о вакансии?',
      'Почему вы хотите получить эту работу?',
    ],
    links: [
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://hr-portal.ru/story/27-rasprostranennyh-voprosov-dlya-sobesedovaniya-i-otvety-na-nih',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
    ],
  },
  {
    id: '12312312377vvvv',
    section: 'LoL',
    head: 'Confluens',
    sequenceNumber: 2,
    questions: [
      'Зачем нужен Скрам бизнесу?',
      'Как нам выстроить оргструктуру, если мы используем Скрам: сколько продуктов, РO, PBL, команд, инкрементов?',
      'Как и кто определяет состав команд?',
      ' Как нам выбрать длину спринта?',
      'Зачем вообще нужен спринт?',
      'Как связаны спринты и релизы?',
      'На Обзоре спринта нет пользователей. Что ты думаешь об этом?',
      'За счет чего в Скраме обеспечивается адаптивность, скорость, доставка самого ценного?',
      'Если бы Скрам нужно было свести к одному элементу, то что бы это было?',
      'В чем твоя роль как Скрам-мастера сейчас?',
      'На каком уровне тебе удалось поработать: индивидуально, команда, несколько команд, продукт, организация?',
      'Какие значимые результаты команды и компании ты присваиваешь себе?',
      'Какими своими кейсами ты гордишься?',
      'Расскажи про кейс, где ты нарушил правило или ценность Скрам-мастер. Чему тебя это научило?',
      'Как выглядит структура компании в которой ты работаешь: сколько РО, сколько PBL, сколько команд? Может ли любая команда брать любой элемент PBL в работу? Кто РО? Что лежит в PBL? Приведи, пожалуйста, пару примеров.',
      'К каким изменениям в структуре компании ты причастен?',
    ],
    links: [
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
      'https://ru.wikipedia.org/wiki/Scrum',
    ],
  },
]

function RecordingPC() {
  const [isShowAddCard, setIsShowAddCard] = useState(false)
  const [isShowCard, setIsShowCard] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const sortCard = cards
    .reduce((acc, card) => {
      const findGroup = acc.find((group) => group.section === card.section)

      if (findGroup) {
        acc.forEach((group) => {
          if (group.section === card.section) {
            group.cards.push(card)
          }
        })
      }
      if (!findGroup) {
        acc.push({
          section: card.section,
          cards: [card],
        })
      }

      return acc
    }, [])
    .map((group) => {
      const newGropup = { ...group }
      newGropup.cards.sort((a, b) => {
        if (a.sequenceNumber > b.sequenceNumber) return 1
        if (a.sequenceNumber == b.sequenceNumber) return 0
        if (a.sequenceNumber < b.sequenceNumber) return -1
      })
      return newGropup
    })

  const showCard = (card) => {
    setSelectedCard(card)
    setIsShowCard(true)
  }

  return (
    <Container>
      <AddCard>
        <div>
          <button onClick={() => setIsShowAddCard(true)}>
            Добавить карточку
          </button>
        </div>
      </AddCard>
      <AllCards>
        <CardGroup>
          <h2 style={{ marginTop: 0 }}>ESB</h2>
          <div className='group'>
            {sortCard.map((group, index) =>
              group.cards.map((card, index) => {
                if (card.section === 'ESB') {
                  return (
                    <>
                      {/* <div key={index} className='groupCards'> */}
                      <Card onClick={() => showCard(card)}>
                        <h3>{card.head}</h3>
                      </Card>
                      {!!(group.cards.length - 1 !== index) && (
                        <Arrow>
                          <CgArrowLongRight />
                        </Arrow>
                      )}
                      {/* </div> */}
                    </>
                  )
                }
              })
            )}
          </div>
        </CardGroup>
        <CardGroup>
          <h2>LoL</h2>
          <div className='group'>
            {sortCard.map((group, index) =>
              group.cards.map((card, index) => {
                if (card.section === 'LoL') {
                  return (
                    <>
                      {/* <div key={index} className='groupCards'> */}
                      <Card onClick={() => showCard(card)}>
                        <h3>{card.head}</h3>
                      </Card>
                      {!!(group.cards.length - 1 !== index) && (
                        <Arrow>
                          <CgArrowLongRight />
                        </Arrow>
                      )}
                      {/* </div> */}
                    </>
                  )
                }
              })
            )}
          </div>
        </CardGroup>
      </AllCards>
      {isShowCard && selectedCard && (
        <InfoCard selectedCard={selectedCard} setIsShowCard={setIsShowCard} />
      )}
      {isShowAddCard && <ModalAddCard setIsShowAddCard={setIsShowAddCard} />}
    </Container>
  )
}

export default RecordingPC
