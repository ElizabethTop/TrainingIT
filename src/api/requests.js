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
