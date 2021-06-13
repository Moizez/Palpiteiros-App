import api_fetch from './api_fetch'

export default {

    getAllOctaves: async (id) => {
        const response = await api_fetch.get(`/eliminatories/findOctaves/${id}`)
        return response
    },

    getAllQuarterfinals: async (id) => {
        const response = await api_fetch.get(`/eliminatories/findQuarterfinals/${id}`)
        return response
    },

    getAllSemis: async (id) => {
        const response = await api_fetch.get(`/eliminatories/findSemi/${id}`)
        return response
    },

    getAllFinals: async (id) => {
        const response = await api_fetch.get(`/eliminatories/findEnd/${id}`)
        return response
    },
}