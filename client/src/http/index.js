import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
} //авто подставка токена к каждому запросу. ТОкен получаем из локального хранилища по ключу token

$authHost.interceptors.request.use(authInterceptor) //интерсептор для запроса

export{
    $authHost,
    $host
}