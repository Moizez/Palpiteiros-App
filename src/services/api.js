import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.196:8080/api/users',
})

export default api