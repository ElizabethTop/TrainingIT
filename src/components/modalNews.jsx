import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { changeLoading } from '../redux/slice/other'
import { createNews } from '../api/requests'
import {
  Container,
  Window,
  Head,
  Inputs,
  AddImg,
  FirstLine,
  SecondLine,
  Publicbutton,
  CloseIcon,
} from './styled/modalNews-styled'

const ModalNews = ({ setDisplayNewsModal, fetchNews }) => {
  const { userId, data } = useSelector((state) => state.user)

  const [header, setHeader] = useState('')
  const [theme, setTheme] = useState('')
  const [description, setDescription] = useState('')
  const [additional, setAdditional] = useState('')
  const [fileInfo, setFileInfo] = useState(null)

  const dispatch = useDispatch()

  const clouseModal = async () => {
    setTheme('')
    setDescription('')
    setAdditional('')
    setDisplayNewsModal(false)
  }

  const addNews = async () => {
    try {
      dispatch(changeLoading)
      const author = {
        userId,
        data,
      }

      await createNews({
        header,
        theme,
        description,
        additional,
        fileInfo: fileInfo === null ? '' : fileInfo,
        author,
      })

      await clouseModal()
      await fetchNews()
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
          <p>Новая новость</p>
        </Head>
        <Inputs>
          <FirstLine>
            <div>
              <span>Заголовок:</span>
              <input
                type='text'
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              />
            </div>
            <div>
              <span>Тема:</span>
              <input
                type='text'
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </FirstLine>
          <FirstLine>
            <div>
              <span>Описание:</span>
              <input
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </FirstLine>
          <SecondLine>
            <span>Дополнительная информация:</span>
            <span className='note'>
              (для разделения абзацев поставьте знак @ , пример: "Тема:
              ...текст. @")
            </span>
            <textarea
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
            />
          </SecondLine>
        </Inputs>
        {/* <AddImg>
          <span>Добавить картинку: </span>
          <input type='file' />
        </AddImg> */}
        <Publicbutton>
          <button onClick={addNews}>Опубликовать</button>
        </Publicbutton>
      </Window>
    </Container>
  )
}

export default ModalNews
