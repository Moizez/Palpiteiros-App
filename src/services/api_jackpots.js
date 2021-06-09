import api_fetch from './api_fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default {

    getAllJackpots: async () => {
        const response = await api_fetch.get('/jackpots')
        return response
    },

    getJackpotsByUserId: async () => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/jackpots/findManyByUserContainsId/${user.id}`)
        return response
    },

    getJackpotsByUserIdOfLength: async () => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const jacks = await api_fetch.get(`/jackpots/findManyByUserContainsId/${user.id}`)
        return jacks.data.length;
    },
}
