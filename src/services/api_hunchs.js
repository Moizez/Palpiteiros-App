import api_fetch from './api_fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default {

    getAllHunchs: async () => {
        const response = await api_fetch.get('/hunchs')
        return response
    },

    createHunchs: async (confrontationId, homeGoals, awayGoals, jackpotId) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        console.log(user.id, confrontationId, homeGoals, awayGoals, jackpotId)
        const data = {
            resultHunch: {
                confrontation: {
                    id: confrontationId
                },
                golsHome: homeGoals,
                golsVisiting: awayGoals
            },
            user: {
                id: user.id
            },
            jackpot: {
                id: jackpotId
            }
        }

        const request = await api_fetch.post('/hunchs', data)
        return request
    },

    getHunchByChampionshipAndUser: async (id) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/hunchs/findManyByChampionshipContainsIdAndUserContainsId/${id}/${user.id}`)
        return response
    },


}