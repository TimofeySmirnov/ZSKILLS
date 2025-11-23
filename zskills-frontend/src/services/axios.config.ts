import { JWTUtils } from "@/utils/jwtUtils";
import logoutUtil from "@/utils/logout.util";
import axios, {AxiosError, type AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000
})

api.interceptors.request.use(config => {
    const token = JWTUtils.getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(res => res,
    async (error: AxiosError) => {
        if(error.response?.status === 401) {
            logoutUtil()
        }
        return Promise.reject(error)
    }
)
export default api