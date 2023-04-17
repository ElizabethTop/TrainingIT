import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registration, logining, deleteUser } from '../../api/authorizat'

const initialState = {
  userId: '',
  data: {
    firstName: '',
    lastName: '',
    login: '',
  },
  role: '',
  loadingAuth: false,
  errorAuth: null,
}

export const registrationUser = createAsyncThunk(
  'user/registrationUser',
  async function (
    { login, password, firstName, lastName },
    { rejectWithValue }
  ) {
    try {
      const response = await registration({
        login,
        password,
        firstName,
        lastName,
      })
      return response
    } catch (error) {
      console.log('При регистрации произошла ошибка: ', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async function ({ login, password }, { rejectWithValue }) {
    try {
      const response = await logining({ login, password })
      return response
    } catch (error) {
      console.log('Во время авторицации произошла ошибка: ', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteAccount = createAsyncThunk(
  'user/deleteAccount',
  async function ({ userId }, { rejectWithValue }) {
    try {
      const response = await deleteUser({ userId })
      return response
    } catch (error) {
      console.log('Произошла ошибка при удалении аккаунта: ', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    cleanerLocal(state) {
      state.userId = initialState.userId
      state.data = initialState.data
      state.role = initialState.role

      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('data')
      localStorage.removeItem('role')
    },
    setUserData(state) {
      const userId = localStorage.getItem('userId')
      const data = localStorage.getItem('data')
      const role = localStorage.getItem('role')

      if (userId) state.userId = JSON.parse(userId)
      if (data) state.fio = JSON.parse(data)
      if (role) state.role = JSON.parse(role)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.data = action.payload.data
        state.role = action.payload.role

        localStorage.setItem('token', JSON.stringify(action.payload.token))
        localStorage.setItem('userId', JSON.stringify(action.payload.userId))
        localStorage.setItem('data', JSON.stringify(action.payload.data))
        localStorage.setItem('role', JSON.stringify(action.payload.role))
        state.loadingAuth = false
      })
      .addCase(registrationUser.pending, (state) => {
        state.loadingAuth = true
        state.errorAuth = null
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.loadingAuth = false
        state.errorAuth = action.payload
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.data = action.payload.data
        state.role = action.payload.role

        localStorage.setItem('token', JSON.stringify(action.payload.token))
        localStorage.setItem('userId', JSON.stringify(action.payload.userId))
        localStorage.setItem('data', JSON.stringify(action.payload.data))
        localStorage.setItem('role', JSON.stringify(action.payload.role))
        state.loadingAuth = false
      })
      .addCase(loginUser.pending, (state) => {
        state.loadingAuth = true
        state.errorAuth = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loadingAuth = false
        state.errorAuth = action.payload
      })

      .addCase(deleteAccount.fulfilled, (state) => {
        state.loadingAuth = false
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loadingAuth = true
        state.errorAuth = null
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loadingAuth = false
        state.errorAuth = action.payload
      })
  },
})

export default userSlice.reducer
export const { cleanerLocal, setUserData } = userSlice.actions
