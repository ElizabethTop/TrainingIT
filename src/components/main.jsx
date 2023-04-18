import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const dispatch = useDispatch()
  const { userId } = useSelector((state) => state.user)

  const [allNews, setAllNews] = useState([])
  const [isNewsModal, setDisplayNewsModal] = useState(false)

  let today = new Date()
  const dd = String(today.getDate())
  const mm = String(today.getMonth() + 1).padStart(2, '0')

  const fetchNews = async () => {
    try {
      dispatch(changeLoading(true))
      const allNews = await getNews()
      const updateNews = allNews.map((news, index) => {
        if (!news.fileInfo) {
          news.fileInfo =
            index % 5 === 0 ? FotoStena : index % 2 === 0 ? ImgInfo1 : ImgInfo2
        }
        return news
      })
      setAllNews(updateNews.reverse())
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
            {userId && (
              <AddNews onClick={() => setDisplayNewsModal(true)}>
                <button>Добавить новость</button>
              </AddNews>
            )}
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
                  {userId && (
                    <DeleteNews onClick={() => deleteNews(news.id)}>
                      <span>
                        <AiOutlineClose />
                      </span>
                    </DeleteNews>
                  )}
                  <LeftInfo>
                    <div className='head'>
                      <h3>{news.header}</h3>
                    </div>
                    <div className='text'>
                      <p>Тема: {news.theme}</p>
                      <p className='description'>
                        Описание: {news.description}
                      </p>
                      {news.additional.split('@').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </LeftInfo>
                  <RightInfo>
                    <img
                      src={news.fileInfo?.patch || news.fileInfo || null}
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
