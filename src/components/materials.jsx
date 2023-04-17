import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import ModalArticle from './modalArticle'
import Article from './article'
import { changeLoading } from '../redux/slice/other'
import { getArticles, removeArticle } from '../api/requests'
import {
  Container,
  Box,
  SearchDocument,
  Input,
  AddArticle,
  ListDocument,
  Group,
  HeadGroup,
  Articles,
  NoArticles,
} from './styled/materials-styled'
import { PAGE_MATERIALS } from '../constant/constants'

const Materials = () => {
  const dispatch = useDispatch()

  const [allArticles, setAllArticles] = useState([])
  const [sortArticles, setSortArticles] = useState([])
  const [isOpenAddArt, setIsOpenAddArt] = useState(false)
  const [materialsPage, setMaterialsPage] = useState(
    PAGE_MATERIALS.ALL_ARTICLES
  )
  const [displayArticle, setDisplayArticle] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const testX = [
    {
      id: 'aadsf-21nnnnn414',
      group: 'Лала',
      nameArticle: 'Что такое Ла-ла-ла',
      text: 'суета',
      links: '',
    },
    {
      id: 'aadsf-214rrrrr14',
      group: 'Творчество',
      nameArticle: 'Творческие картины',
      text: 'текст тут',
      links: '',
    },
    {
      id: 'aadsf-21qqqq414',
      group: 'Лала',
      nameArticle: 'лу-лу-лу',
      text: 'суета',
      links: '',
    },
    {
      id: 'aadsf-214a0i814',
      group: 'Всякая всячина',
      nameArticle: 'Как организовать конференцию',
      text: 'текст тут',
      links: '',
    },
    {
      id: 'aadsf-2141ghjju14',
      group: 'Всякая всячина',
      nameArticle: 'Почему небо голубое',
      text: 'Синий цвет неба объясняется явлением под названием «рэлеевское рассеяние». Оно представляет собой рассеяние света или другого электромагнитного излучения частицами гораздо меньшими, чем длина волны излучения. Солнечное излучение, достигающее поверхности Земли после рассеяния в атмосфере, называется рассеянным небесным излучением. Волны света наименьшей длины легко рассеиваются, в частности синие световые волны, поэтому мы видим небо голубым. Итак, Солнце излучает лучи, которые имеют белый цвет. Белый, как известно, включает в себя все цвета видимого нам спектра. Свидетельство тому – радуга. Она возникает по той причине, что солнечный свет, попадая в капельки воды, преломляется и распадается на разные цвета. Голубое небо мы тоже наблюдаем по чем-то похожей причине. Дело в том, что в воздухе множество молекул газа, которые и рассеивают солнечный свет. Частицы света разлетаются в разные стороны, поэтому голубой цвет неба виден и землянам, и космонавтам с МКС в виде голубого ореола. Но почему же именно голубой, ведь в спектре как минимум семь цветов, как говорится: «Каждый охотник желает знать, где сидит фазан!».',
      links: '',
    },
    {
      id: 'aadsf-214www14',
      group: 'Всякая всячина',
      nameArticle: 'Зимой и летом одним цветом',
      text: 'текст тут',
      links: '',
    },
    {
      id: 'aadsf-214asdf14',
      group: 'Наука',
      nameArticle: 'Как организовать конференцию',
      text: 'текст тут',
      links: '',
    },
    {
      id: 'aadsf-21411114',
      group: 'Наука',
      nameArticle: 'Почему небо голубое',
      text: 'текст тут',
      links: '',
    },
    {
      id: 'aadsf-214142344',
      group: 'Наука',
      nameArticle: 'Зимой и летом одним цветом',
      text: 'текст тут',
      links: '',
    },
  ]

  const fetchArticles = async () => {
    try {
      dispatch(changeLoading(true))
      const allArticles = await getArticles()

      const group = allArticles.reduce((acc, article) => {
        const findNameGroup = acc.find(
          (group) => group.nameGroup === article.group
        )
        if (findNameGroup) {
          acc.forEach((group) => {
            if (group.nameGroup === article.group) {
              group.articles.push(article)
            }
          })
        }
        if (!findNameGroup) {
          acc.push({
            nameGroup: article.group,
            articles: [article],
          })
        }
        return acc
      }, [])

      setSortArticles(group)
      setAllArticles(group)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const openArticle = (article) => {
    setDisplayArticle(article)
    setMaterialsPage(PAGE_MATERIALS.ARTICLE)
  }

  const deleteArticle = async (articleId) => {
    try {
      dispatch(changeLoading(true))
      await removeArticle({ articleId })
      await fetchArticles()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  useEffect(() => {
    if (searchValue) {
      const newsSortArticles = allArticles.reduce((acc, group) => {
        group.articles.forEach((article) => {
          const isFind = article.article
            .toLowerCase()
            .includes(`${searchValue.toLowerCase()}`)
          if (isFind) {
            acc.push(group)
          }
        })

        return acc
      }, [])

      setSortArticles(newsSortArticles)
    }

    if (!searchValue) {
      setSortArticles(allArticles)
    }
  }, [searchValue])

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div>
      <Container>
        {materialsPage === PAGE_MATERIALS.ALL_ARTICLES && (
          <Box>
            <SearchDocument>
              <Input>
                <h3>Поиск по документам</h3>
                <p>
                  <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </p>
              </Input>
              <AddArticle>
                <button onClick={() => setIsOpenAddArt(true)}>
                  + Добавить статью
                </button>
              </AddArticle>
            </SearchDocument>
            <ListDocument>
              {sortArticles.length === 0 && (
                <NoArticles>
                  <p>Статей нет</p>
                </NoArticles>
              )}
              {sortArticles.map((line, index) => (
                <Group key={index}>
                  <HeadGroup>
                    <p>{line.nameGroup}</p>
                  </HeadGroup>
                  <Articles>
                    {line.articles.map((article, index) => (
                      <div key={index}>
                        <p onClick={() => openArticle(article)}>
                          {article.article}
                        </p>
                        <span onClick={() => deleteArticle(article.id)}>
                          <AiOutlineClose />
                        </span>
                      </div>
                    ))}
                  </Articles>
                </Group>
              ))}
            </ListDocument>
            {isOpenAddArt && (
              <ModalArticle
                setIsOpenAddArt={setIsOpenAddArt}
                fetchArticles={fetchArticles}
              />
            )}
          </Box>
        )}
      </Container>
      {materialsPage === PAGE_MATERIALS.ARTICLE && (
        <Article
          displayArticle={displayArticle}
          setDisplayArticle={setDisplayArticle}
          setMaterialsPage={setMaterialsPage}
        />
      )}
    </div>
  )
}

export default Materials
