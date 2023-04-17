import { NavContainer, Sections, HeadNav } from './styled/navigate-styled'
import { PAGES } from '../constant/constants'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const head = [
    {
      text: 'Главная',
      numberPage: PAGES.MAIN,
    },
    {
      text: 'Запись на ПК',
      numberPage: PAGES.RECORDING_PC,
    },
    {
      text: 'Материалы',
      numberPage: PAGES.MATERIALS,
    },
    {
      text: 'Вход',
      numberPage: PAGES.SIGN_IN,
    },
  ]

  return (
    <NavContainer>
      <Sections>
        {head.map((page, index) => (
          <HeadNav
          key={index}
            select={currentPage === page.numberPage}
            onClick={() => setCurrentPage(page.numberPage)}
          >
            {page.text}
          </HeadNav>
        ))}
      </Sections>
    </NavContainer>
  )
}

export default Navigation
