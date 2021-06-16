import api_fetch from './api_fetch'

export default {

    getProfileByID: async (id) => {
        const response = await api_fetch.get(`/profiles/${id}`)
        return response
    },

    getProfiles: async () => {
        const response = await api_fetch.get(`/profiles`)
        return response
    },
}
