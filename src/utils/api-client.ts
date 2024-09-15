import axios from "axios";
import config from "./ipro-fix-config";

const defaultOptions = {
  baseURL: config.IPRO_FIX_API_BASE_URL
}

const getAuthApiClient = () => {
  const httpClient = axios.create(defaultOptions)
  console.log(config.IPRO_FIX_API_BASE_URL)
  httpClient.interceptors.request.use(
    async request => {
      const token = "BEARER_TOKEN"
      request.headers.Authorization = `Bearer ${token}`

      return request
    },
    error => {
      console.error(`Failed to send request [${error.message}]: ${error.config.url}`, error)
      return Promise.reject(error)
    }
  )

  httpClient.interceptors.response.use(
    response => {
      return response
    },
    error => {
      const status = error.response?.status as number
      console.error(`Failed to receive response [${error.message}]: ${error.config.url}`, error)
      return Promise.reject(error)
    }
  )

  return httpClient;
}

export { getAuthApiClient }