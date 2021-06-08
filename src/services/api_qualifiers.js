import api_fetch from './api_fetch'

export default {
    getAllOctaves: async () => {
        const response = await api_fetch.get('/eliminatories/findOctaves')
        return response
    },

    getAllQuarterfinals: async () => {
        const response = await api_fetch.get('/eliminatories/findWednesdays')
        return response
    },

    getAllSemis: async () => {
        const response = await api_fetch.get('/eliminatories/findSemi')
        return response
    },

    getAllFinals: async () => {
        const response = await api_fetch.get('/eliminatories/findEnd')
        return response
    },
}