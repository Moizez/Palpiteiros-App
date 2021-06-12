import api_fetch from './api_fetch'

export default {

    getAllConfrontation: async () => {
        const response = await api_fetch.get(`/confrontations`)
        return response
    },

    getConfrontationByChampionships: async (id) => {
        const response = await api_fetch.get(`/confrontations/findManyByBeforeOfGameChampionshipContainsId/${id}`)
        return response
    },


    getConfrontationClosedByChampionships: async (id) => {
        const response = await api_fetch.get(`/confrontations/findManyByEnd`)
        return response
    },

}