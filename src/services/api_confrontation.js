import api_fetch from './api_fetch'

export default {

    getAllConfrontation: async () => {
        const response = await api_fetch.get(`/confrontations`)
        return response
    },

    getAllConfrontationsClosed: async () => {
        const response = await api_fetch.get(`/confrontations/findManyByEnd`)
        return response
    },

    getConfrontationsByChampionships: async (id) => {
        const response = await api_fetch.get(`/confrontations/findManyByBeforeOfGameChampionshipContainsId/${id}`)
        return response
    },

    getConfrontationsClosedByChampionships: async (id, limit) => {
        const response = await api_fetch.get(`/confrontations/findManyByAfterOfGameChampionshipContainsIdAndLimit/${id}/${limit}`)
        return response
    },

}