import { PAGE_MATERIALS } from '../constant/constants'
import {
  Container,
  Content,
  GoBack,
  Head,
  Body,
  Text,
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
        </Body>
      </Content>
    </Container>
  )
}

export default Article
