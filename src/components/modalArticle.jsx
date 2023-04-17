import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCloseCircleOutline } from 'react-icons/io'
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
  const [links, setLinks] = useState('')

  const dispatch = useDispatch()

  const clouseModal = async () => {
    setGroup('')
    setArticle('')
    setText('')
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
        links,
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
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </SecondLine>
        </Inputs>
        <Links>
          <span>Полезные ссылки</span>
          <input value={links} onChange={(e) => setLinks(e.target.value)} />
        </Links>
        <Publicbutton>
          <button onClick={addNews}>Создать статью</button>
        </Publicbutton>
      </Window>
    </Container>
  )
}

export default ModalArticle
