import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const { userId } = useSelector((state) => state.user)

  const [allArticles, setAllArticles] = useState([])
  const [sortArticles, setSortArticles] = useState([])
  const [isOpenAddArt, setIsOpenAddArt] = useState(false)
  const [materialsPage, setMaterialsPage] = useState(
    PAGE_MATERIALS.ALL_ARTICLES
  )
  const [displayArticle, setDisplayArticle] = useState(null)
  const [searchValue, setSearchValue] = useState('')

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
        const findGroup = group.nameGroup
          .toLowerCase()
          .includes(`${searchValue.toLowerCase()}`)

        if (findGroup) {
          acc.push(group)
        }

        if (!findGroup) {
          group.articles.forEach((article) => {
            const isFind = article.article
              .toLowerCase()
              .includes(`${searchValue.toLowerCase()}`)
            if (isFind) {
              acc.push(article)
            }
          })
        }

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
              {userId && (
                <AddArticle>
                  <button onClick={() => setIsOpenAddArt(true)}>
                    + Добавить статью
                  </button>
                </AddArticle>
              )}
            </SearchDocument>
            <ListDocument>
              {sortArticles.length === 0 && (
                <NoArticles>
                  <p>Статей нет</p>
                </NoArticles>
              )}
              {sortArticles.map((line, index) => {
                if (line?.nameGroup) {
                  return (
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
                            {userId && (
                              <span onClick={() => deleteArticle(article.id)}>
                                <AiOutlineClose />
                              </span>
                            )}
                          </div>
                        ))}
                      </Articles>
                    </Group>
                  )
                }
                if (!line?.nameGroup) {
                  return (
                    <Articles>
                      <div key={index}>
                        <p onClick={() => openArticle(line)}>{line.article}</p>
                        {userId && (
                          <span onClick={() => deleteArticle(line.id)}>
                            <AiOutlineClose />
                          </span>
                        )}
                      </div>
                    </Articles>
                  )
                }
              })}
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
