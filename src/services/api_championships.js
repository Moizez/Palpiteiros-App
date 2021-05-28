import api_fetch from './api_fetch'

export default {

    getAllOfficialChampionships: async () => {
        const response = await api_fetch.get('/championships')
        return response
    },

    getOfficialChampionshipsById: async (id) => {
        const response = await api_fetch.get(`/championships/${id}`)
        return response
    },

    getOfficialChampionshipsByGroup: async () => {
        const response = await api_fetch.get(`/groups`)
        return response
    },

}