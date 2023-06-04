import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(
    localStorage.getItem('token')
  )}`
  return config
})

export const getNews = async () => {
  const response = await axiosInstance.get(`news`)
  return response.data
}

export const createNews = async ({
  header,
  theme,
  description,
  additional,
  fileInfo,
  author,
}) => {
  const response = await axiosInstance.post(`news`, {
    header,
    theme,
    description,
    additional,
    fileInfo,
    author,
  })
  return response
}

export const removeNews = async ({ newsId }) => {
  const response = await axiosInstance.delete(`news/${newsId}`)
  return response
}

export const getArticles = async () => {
  const response = await axiosInstance.get(`articles`)
  return response.data
}

export const createArticle = async ({
  group,
  article,
  text,
  links,
  author,
}) => {
  const response = await axiosInstance.post(`article`, {
    group,
    article,
    text,
    links,
    author,
  })
  return response
}

export const removeArticle = async ({ articleId }) => {
  const response = await axiosInstance.delete(`article/${articleId}`)
  return response
}

export const getAllCards = async () => {
  const response = await axiosInstance.get(`cards`)
  return response.data
}

export const createCard = async ({ group, head, number, questions, links }) => {
  const response = await axiosInstance.post(`card`, {
    group,
    head,
    number,
    questions,
    links,
  })
  return response
}

export const removeCard = async ({ cardId }) => {
  const response = await axiosInstance.delete(`card/${cardId}`)
  return response
}

export const recordOnExam = async ({
  userId,
  userData,
  cardId,
  cardHead,
  status,
}) => {
  const response = await axiosInstance.post(`exam`, {
    userId,
    userData,
    cardId,
    cardHead,
    status,
  })
  return response
}

export const removeExam = async ({ examId }) => {
  const response = await axiosInstance.delete(`exam/${examId}`)
  return response
}

export const getInfoExams = async () => {
  const response = await axiosInstance.get(`exams`)
  return response.data
}

export const getInfoUserExam = async (status) => {
  const response = await axiosInstance.get(`examuser`, {
    status,
  })
  return response.data
}

export const changeUserInfoExam = async ({
  examId,
  status,
  passingExam,
  dateExam,
}) => {
  const response = await axiosInstance.patch(`exam/${examId}`, {
    status,
    passingExam,
    dateExam,
  })
  return response
}

export const deleteUser = async ({ userId }) => {
  const response = axiosInstance.delete(`user/${userId}`)
  return response
}

export const getAllUsers = async () => {
  const response = await axiosInstance.get(`users`)
  return response.data
}
