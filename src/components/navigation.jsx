import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  NavContainer,
  Sections,
  HeadNav,
  Detail,
  UserList,
  WindowUL,
  CloseIcon,
  ListUL,
  User,
  DeleteUser,
} from './styled/navigate-styled'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { PAGES } from '../constant/constants'
import { cleanerLocal } from '../redux/slice/user'
import { setUserData } from '../redux/slice/user'
import { deleteUser, getAllUsers } from '../api/authorizat'
import { changeLoading } from '../redux/slice/other'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch()
  const { userId, role } = useSelector((state) => state.user)

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
  const [isShowUL, setIsShowUL] = useState(false)
  const [usersList, setUsersList] = useState([])

  const logout = async () => {
    setIsShowUL(false)
    dispatch(cleanerLocal())
    setCurrentPage(PAGES.MAIN)
  }

  const fetchAllUsers = async () => {
    try {
      dispatch(changeLoading(true))
      const usersList = await getAllUsers()
      setUsersList(usersList)
      if (usersList.length === 0) {
        logout()
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  const removeUser = async (userId) => {
    try {
      dispatch(changeLoading(true))
      await deleteUser({ userId })
      await fetchAllUsers()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
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
      fetchAllUsers()
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
        {userId && role === 'admin' && (
          <Detail onClick={() => setIsShowUL(true)}>Доп инфо</Detail>
        )}
        {isShowUL && (
          <UserList>
            <WindowUL>
              <CloseIcon onClick={() => setIsShowUL(false)}>
                <IoIosCloseCircleOutline />
              </CloseIcon>
              <div className='headUL'>
                <p>Список всех пользователей</p>
              </div>
              <ListUL>
                {usersList.map((user, index) => (
                  <User key={index}>
                    <div>
                      <p>Имя: {user.first_name}</p>
                      <p>Фамилия: {user.first_name}</p>
                      <p>Логин: {user.login}</p>
                      <p>Роль: {`${user.role}`}</p>
                    </div>
                    <DeleteUser onClick={() => removeUser(user.id)}>
                      <span>
                        <AiOutlineClose />
                      </span>
                    </DeleteUser>
                  </User>
                ))}
              </ListUL>
            </WindowUL>
          </UserList>
        )}
      </Sections>
    </NavContainer>
  )
}

export default Navigation
