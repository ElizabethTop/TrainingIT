import { useDispatch, useSelector } from 'react-redux'
import { NavContainer, Sections, HeadNav } from './styled/navigate-styled'
import { PAGES } from '../constant/constants'
import { useEffect, useState } from 'react'
import { cleanerLocal } from '../redux/slice/user'
import { setUserData } from '../redux/slice/user'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch()
  const { userId } = useSelector((state) => state.user)

  const [navigate, setNavigate] = useState([
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
  ])

  const logout = async () => {
    dispatch(cleanerLocal())
  }

  useEffect(() => {
    const localUserId = localStorage.getItem('userId')
    if (!userId && localUserId) {
      dispatch(setUserData())
    }
  }, [])

  useEffect(() => {
    if (!userId) {
      setNavigate([
        ...navigate,
        {
          text: 'Вход',
          numberPage: PAGES.SIGN_IN,
        },
      ])
    }
    if (userId) {
      const newNavigate = navigate.filter((nav) => nav.text !== 'Вход')
      setNavigate(newNavigate)
    }
  }, [userId])

  return (
    <NavContainer>
      <Sections>
        {navigate.map((page, index) => (
          <HeadNav
            key={index}
            select={currentPage === page.numberPage}
            onClick={() => setCurrentPage(page.numberPage)}
          >
            {page.text}
          </HeadNav>
        ))}
        {userId && <HeadNav onClick={logout}>Выйти из ЛК</HeadNav>}
      </Sections>
    </NavContainer>
  )
}

export default Navigation
