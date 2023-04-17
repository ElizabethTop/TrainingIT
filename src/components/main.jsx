import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { AiOutlineClose } from 'react-icons/ai'
import ModalNews from './modalNews'
import { changeLoading } from '../redux/slice/other'
import { getNews, removeNews } from '../api/requests'
import { date } from '../constant/constants'
import FotoStena from '../image/stena.jpg'
import ImgInfo1 from '../image/info.jpg'
import ImgInfo2 from '../image/info2.jpg'
import {
  MainContainer,
  Content,
  BoxCalendar,
  News,
  NewsBlock,
  LeftInfo,
  RightInfo,
  Month,
  Calend,
  HeadNews,
  AddNews,
  NoNews,
  DeleteNews,
} from './styled/main-styled'

const Main = () => {
  const [allNews, setAllNews] = useState([])
  const [isNewsModal, setDisplayNewsModal] = useState(false)
  const dispatch = useDispatch()

  let today = new Date()
  const dd = String(today.getDate())
  const mm = String(today.getMonth() + 1).padStart(2, '0')

  const testAllNews = [
    {
      header: 'Митап',
      theme: 'Тема: зачем я вас здесь собрал',
      description:
        'Описание: Джордж из Джунглей самый востребованный и слушаемый спикер современности. Стоимость очень мала - торгуемся на месте.',
      additional:
        'Оратор: Джордж из Джунглей. Когда: 1 апреля. Где: в конференц зале',
      fileInfo: {
        patch: FotoStena,
        name: 'Восход',
      },
    },
    {
      header: 'Митап',
      theme: 'Тема: зачем я вас здесь собрал',
      description:
        'Описание: Джордж из Джунглей самый востребованный и слушаемый спикер современности. Стоимость очень мала - торгуемся на месте.',
      additional:
        'Оратор: Джордж из Джунглей. Когда: 1 апреля. Где: в конференц зале',
      fileInfo: {
        patch: FotoStena,
        name: 'Восход',
      },
    },
  ]

  const fetchNews = async () => {
    try {
      dispatch(changeLoading(true))
      const allNews = await getNews()
      setAllNews(allNews.reverse())
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const deleteNews = async (newsId) => {
    try {
      dispatch(changeLoading(true))
      await removeNews({ newsId })
      await fetchNews()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <MainContainer>
      <Content>
        <BoxCalendar>
          <Month>
            <p>{dd}</p>
            <p>{date.month[mm]}</p>
          </Month>
          <Calend>
            <Calendar />
          </Calend>
        </BoxCalendar>
        <News>
          <HeadNews>
            <h2>Новости</h2>
            <AddNews onClick={() => setDisplayNewsModal(true)}>
              <button>Добавить новость</button>
            </AddNews>
          </HeadNews>
          {allNews.length === 0 && (
            <NoNews>
              <p>Новостей нет</p>
            </NoNews>
          )}
          {allNews.length > 0 &&
            allNews.map((news, index) => {
              return (
                <NewsBlock key={index}>
                  <DeleteNews onClick={() => deleteNews(news.id)}>
                    <span>
                      <AiOutlineClose />
                    </span>
                  </DeleteNews>
                  <LeftInfo>
                    <h3>{news.header}</h3>
                    <div>
                      <p>{news.theme}</p>
                      {news.additional.split('.').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                      <p>{news.description}</p>
                    </div>
                  </LeftInfo>
                  <RightInfo>
                    <img
                      src={
                        news.fileInfo?.patch
                          ? news.fileInfo?.patch
                          : index % 5 === 0
                          ? FotoStena
                          : index % 2 === 0
                          ? ImgInfo1
                          : ImgInfo2
                      }
                      alt='Картинка'
                    />
                  </RightInfo>
                </NewsBlock>
              )
            })}
        </News>
      </Content>
      {isNewsModal && (
        <ModalNews
          setDisplayNewsModal={setDisplayNewsModal}
          fetchNews={fetchNews}
        />
      )}
    </MainContainer>
  )
}

export default Main
