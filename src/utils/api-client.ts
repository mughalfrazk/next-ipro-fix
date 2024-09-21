import axios from "axios";
import config from "./ipro-fix-config";
import { getSession } from "next-auth/react";

const defaultOptions = {
  baseURL: config.NEXT_PUBLIC_IPRO_FIX_BASE_URL
}

const getAuthApiClient = () => {
  const httpClient = axios.create(defaultOptions)
  httpClient.interceptors.request.use(
    async request => {
      const session = await getSession()
      request.headers.Authorization = `Bearer ${session?.user.access_token ?? ""}`
      return request
    },
    error => {
      console.error(`Failed to send request [${error.message}]: ${error.config.url}`)
      return Promise.reject(error)
    }
  )

  httpClient.interceptors.response.use(
    response => response,
    error => {
      // const status = error.response?.status as number
      console.error(`Failed to receive response [${error.message}]: ${error.config.url}`)
      return Promise.reject(error)
    }
  )

  return httpClient;
}

export { getAuthApiClient }