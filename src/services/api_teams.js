import api_fetch from './api_fetch'

export default {

    getFlagById: async (id) => {
        const response = await api_fetch.get(`/findByShield/${id}`)
        return response
    },

}