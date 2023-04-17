import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const registration = async ({
  login,
  password,
  firstName,
  lastName,
  role,
}) => {
  const response = await axiosInstance.post(`registration`, {
    login,
    password,
    firstName,
    lastName,
    role,
  })
  return response.data
}

export const logining = async ({ login, password }) => {
  const response = await axiosInstance.post(`login`, {
    login,
    password,
  })
  return response.data
}

export const deleteUser = async ({ userId }) => {
  const response = axiosInstance.delete(`user/${userId}`)
  return response
}

export const getAllUsers = async () => {
  const response = await axiosInstance.get(`users`)
  return response.data
}
