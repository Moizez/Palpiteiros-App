import api_fetch from './api_fetch'

export default {

    getRankingByJackpot: async (id) => {
        const response = await api_fetch.get(`/rankings/findClassification/${id}`)
        return response
    },
}