import api_fetch from './api_fetch'

export default {

    getAllConfrontation: async () => {
        const response = await api_fetch.get(`/confrontations`)
        return response
    },

    getAllConfrontationByChampionships: async (id) => {
        const response = await api_fetch.get(`/confrontations/findManyByLaterHourAndChampionshipContainsId/${id}`)
        return response
    },

}