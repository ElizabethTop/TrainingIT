import { AiOutlineClose } from 'react-icons/ai'
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

function InfoCard({ selectedCard, setIsShowCard }) {
  return (
    <DetailCard>
      <ContentCard>
        <CloseIconCard onClick={() => setIsShowCard(false)}>
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
            <button>Записаться</button>
          </Box3>
        </Window>
      </ContentCard>
    </DetailCard>
  )
}

export default InfoCard
