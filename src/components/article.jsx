import { PAGE_MATERIALS } from '../constant/constants'
import {
  Container,
  Content,
  GoBack,
  Head,
  Body,
  Text,
  Links,
} from './styled/article-styled'

const Article = ({ displayArticle, setDisplayArticle, setMaterialsPage }) => {
  const goBack = () => {
    setMaterialsPage(PAGE_MATERIALS.ALL_ARTICLES)
    setDisplayArticle(null)
  }

  return (
    <Container>
      <Content>
        <GoBack>
          <button onClick={goBack}>{'<<<'} Вернуться назад</button>
        </GoBack>
        <Head>
          <p>{displayArticle.article}</p>
        </Head>
        <Body>
          <Text>
            <p>{displayArticle.text}</p>
          </Text>
          <Links>
            <span>Полезные ссылки:</span>
            <div>
              {JSON.parse(displayArticle.links).length === 0 && (
                <p className='noLinks'>ссылок нет</p>
              )}
              {JSON.parse(displayArticle.links).map((link) => (
                <p>
                  <a
                    href={link.includes('http') ? link : `https://${link}`}
                    target='_blank'
                  >
                    {link}
                  </a>
                </p>
              ))}
            </div>
          </Links>
        </Body>
      </Content>
    </Container>
  )
}

export default Article
