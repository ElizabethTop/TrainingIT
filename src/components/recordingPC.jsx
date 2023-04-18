import {
  Container,
  Repair,
  AllCards,
  Card,
  ContentCard,
  ButtonCard,
} from './styled/recordingPC-styled'

function RecordingPC() {
  const cards = [
    {
      head: 'Кибер безопасность',
      text: 'Повысить уровень знаний и умений в области кибер безопасности',
    },
    {
      head: 'Пожаротушение',
      text: 'Получить навыки обращения с огнетушителем',
    },
    {
      head: 'Печатать слепым методом',
      text: 'Научиться печать на клавиатуре, не смотря на неё',
    },
    {
      head: 'Тест',
      text: 'Научиться печать на клавиатуре, не смотря на неё',
    },
  ]

  return (
    <Container>
      <AllCards>
        {cards.map((card, index) => (
          <Card key={index}>
            <ContentCard>
              <p className='head'>{card.head}</p>
              <p className='text'>{card.text}</p>
            </ContentCard>
            <ButtonCard>
              <button>Записаться</button>
            </ButtonCard>
          </Card>
        ))}
      </AllCards>
    </Container>
  )
}

export default RecordingPC
