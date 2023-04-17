import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { ImCheckmark } from 'react-icons/im'
import { changeLoading } from '../redux/slice/other'
import { createArticle } from '../api/requests'
import {
  Container,
  Window,
  Head,
  Inputs,
  FirstLine,
  SecondLine,
  Publicbutton,
  CloseIcon,
  Links,
} from './styled/modalArticle-styled'

const ModalArticle = ({ setIsOpenAddArt, fetchArticles }) => {
  const { userId, data } = useSelector((state) => state.user)

  const [group, setGroup] = useState('')
  const [article, setArticle] = useState('')
  const [text, setText] = useState('')
  const [valueInputLink, setValueInputLink] = useState('')
  const [links, setLinks] = useState([])

  const dispatch = useDispatch()

  const clouseModal = async () => {
    setGroup('')
    setArticle('')
    setText('')
    setValueInputLink('')
    setLinks('')
    setIsOpenAddArt(false)
  }

  const addNews = async () => {
    try {
      dispatch(changeLoading)
      const author = {
        userId,
        data,
      }

      await createArticle({
        group,
        article,
        text,
        links: JSON.stringify(links),
        author,
      })
      await clouseModal()
      await fetchArticles()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
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
        <CloseIcon onClick={clouseModal}>
          <IoIosCloseCircleOutline />
        </CloseIcon>
        <Head>
          <p>Новая статья</p>
        </Head>
        <Inputs>
          <FirstLine>
            <div>
              <span>Название группы</span>
              <input value={group} onChange={(e) => setGroup(e.target.value)} />
            </div>
            <div>
              <span>Название статьи</span>
              <input
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
            </div>
          </FirstLine>
          <SecondLine>
            <span>Текст</span>
            <span className='note'>
              (для разделения абзацев поставьте знак @ , пример: "Представьте:
              ...текст. @")
            </span>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </SecondLine>
        </Inputs>
        <Links>
          <span>Полезные ссылки:</span>
          <div className='links'>
            {links.map((link, index) => (
              <p key={index}>• {link}</p>
            ))}
          </div>
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
        </Links>
        <Publicbutton>
          <button onClick={addNews}>Создать статью</button>
        </Publicbutton>
      </Window>
    </Container>
  )
}

export default ModalArticle
