import axios from 'axios'

const api_fut = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/campeonatos/',
    headers: {
        'Authorization': 'Bearer live_7df37af973031bf7169d41f48163d9'
    }
})

export default api_fut