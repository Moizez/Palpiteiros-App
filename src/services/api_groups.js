import api_fetch from './api_fetch'

export default {

    getAllGroups: async () => {
        const response = await api_fetch.get('/groups')
        return response
    },

    getGroupsById: async (id) => {
        const response = await api_fetch.get(`/groups/${id}`)
        return response
    },

    getGroupsByChampionshipId: async (id) => {
        const response = await api_fetch.get(`/groups/findManyByChampionshipOfId/${id}`)
        return response
    },

}