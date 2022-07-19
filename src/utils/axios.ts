import axios from 'axios'
import { githubBaseUrl } from '../consts'

export const axiosInstance = axios.create({ baseURL: githubBaseUrl })
