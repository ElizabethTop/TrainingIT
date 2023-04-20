import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ImCheckmark } from 'react-icons/im'
import {
  Container,
  Window,
  CloseModal,
  Content,
  Box,
  InputPlus,
  AddButton,
} from './styled/modal-add-card'

function ModalAddCard({ setIsShowAddCard }) {
  const [group, setGroup] = useState('')
  const [head, setHead] = useState('')
  const [number, setNumber] = useState('')
  const [valueInputQuest, setValueInputQuest] = useState('')
  const [questions, setQuestions] = useState([])
  const [valueInputLink, setValueInputLink] = useState('')
  const [links, setLinks] = useState([])

  const addQuestion = () => {
    if (!valueInputQuest) return
    const newQuestions = [...questions, `${valueInputQuest}`]
    setQuestions(newQuestions)
    setValueInputQuest('')
  }

  const addLink = () => {
    if (!valueInputLink) return
    const newLinks = [...links, `${valueInputLink}`]
    setLinks(newLinks)
    setValueInputLink('')
  }

  return (
    <Container>
      <Window>
        <CloseModal onClick={() => setIsShowAddCard(false)}>
          <AiOutlineClose />
        </CloseModal>
        <Content>
          <h3>Добавление карты</h3>
          <Box>
            <div className='row'>
              <span>Раздел</span>
              <input value={group} onChange={(e) => setGroup(e.target.value)} />
            </div>
            <div className='row'>
              <span>Заголовок</span>
              <input value={head} onChange={(e) => setHead(e.target.value)} />
            </div>
            <div className='row'>
              <span>Порядковый номер</span>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <InputPlus>
              <span>Вопросы:</span>
              {questions.length > 0 && (
                <div className='array'>
                  {questions.map((question, index) => (
                    <p key={index}>
                      {index + 1}. {question}
                    </p>
                  ))}
                </div>
              )}
              <div className='input'>
                <p>
                  <input
                    value={valueInputQuest}
                    onChange={(e) => setValueInputQuest(e.target.value)}
                  />
                </p>
                <span onClick={addQuestion}>
                  <ImCheckmark />
                </span>
              </div>
            </InputPlus>
            <InputPlus isLinks={true}>
              <span>Полезные ссылки:</span>
              {links.length > 0 && (
                <div className='array'>
                  {links.map((link, index) => (
                    <p key={index}>• {link}</p>
                  ))}
                </div>
              )}
              <div className='input'>
                <p>
                  <input
                    value={valueInputLink}
                    onChange={(e) => setValueInputLink(e.target.value)}
                  />
                </p>
                <span onClick={addLink}>
                  <ImCheckmark />
                </span>
              </div>
            </InputPlus>
          </Box>
          <AddButton>
            <button>Создать</button>
          </AddButton>
        </Content>
      </Window>
    </Container>
  )
}

export default ModalAddCard
