import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeLoading } from '../redux/slice/other'
import { loginUser, registrationUser } from '../redux/slice/user'
import { PAGES } from '../constant/constants'
import {
  Сontainer,
  Login,
  Box1,
  Input,
  Box2,
  SignButton,
  RegButton,
  Button,
  Registration,
  RegBox,
  Registrat,
  Back,
} from './styled/authorization-a-styled'

const Authorization = ({ setCurrentPage }) => {
  const [isRegistration, setIsRegistration] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('никто')

  const dispatch = useDispatch()

  const clearInfo = () => {
    setLogin('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  const signIn = async (status) => {
    try {
      dispatch(changeLoading(true))
      if (status === 'registration') {
        dispatch(
          registrationUser({ login, password, firstName, lastName, role })
        ).then((resp) => {
          if (resp) {
            clearInfo()
            setCurrentPage(PAGES.MAIN)
          }
        })
      }
      if (status === 'login') {
        dispatch(loginUser({ login, password })).then((resp) => {
          if (resp) {
            clearInfo()
            setCurrentPage(PAGES.MAIN)
          }
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(changeLoading(false))
    }
  }

  return (
    <Сontainer>
      {!isRegistration && (
        <Login>
          <Box1>
            <div>
              <h2>Войти</h2>
              <Input>
                <span>Логин</span>
                <input
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Input>
              <Input>
                <span>Пароль</span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Input>
            </div>
            <SignButton>
              <Button onClick={() => signIn('login')}>Войти</Button>
            </SignButton>
          </Box1>
          <Box2>
            <div>
              <h2>Нет аккаунта?</h2>
              <p>
                Присоединяйтесь к нам, чтобы быть в курсе всех новостей! А также
                проходить тесты и изучать новый материал!
              </p>
            </div>
            <RegButton>
              <Button onClick={() => setIsRegistration(true)}>
                Зарегистрироватьcя
              </Button>
            </RegButton>
          </Box2>
        </Login>
      )}
      {isRegistration && (
        <Registration>
          <Back>
            <button onClick={() => setIsRegistration(false)}>Назад</button>
          </Back>
          <h2>Регистрация</h2>
          <RegBox>
            <Input>
              <span>Имя</span>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Input>
            <Input>
              <span>Фамилия</span>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Input>
            <Input>
              <span>Придумайте логин</span>
              <input value={login} onChange={(e) => setLogin(e.target.value)} />
            </Input>
            <Input>
              <span>Придумайте пароль</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Input>
          </RegBox>
          <Registrat>
            <button onClick={() => signIn('registration')}>
              Зарегистрироватьcя
            </button>
          </Registrat>
        </Registration>
      )}
    </Сontainer>
  )
}

export default Authorization
