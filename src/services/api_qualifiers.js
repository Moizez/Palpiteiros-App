import api_fetch from './api_fetch'

export default {
    getAllOctaves: async () => {
        const response = await api_fetch.get('/eliminatories/findOctaves')
        return response
    },
}