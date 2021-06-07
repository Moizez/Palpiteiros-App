import api_fetch from './api_fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default {

    getAllHunchs: async () => {
        const response = await api_fetch.get('/hunchs')
        return response
    },

    createHunchs: async (idJackpot, idConfrontation, homeGoals, awayGoals) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const data = {
            resultHunch: {
                confrontation: {
                    id: idConfrontation
                },
                golsHome: homeGoals,
                golsVisiting: awayGoals
            },
            user: {
                id: user.id
            },
            jackpot: {
                id: idJackpot
            }
        }

        const request = await api_fetch.post('/hunchs', data)
        return request
    },

    updateHunchs: async (idHunch, idJackpot, idConfrontation, homeGoals, awayGoals) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const data = {
            resultHunch: {
                confrontation: {
                    id: idConfrontation
                },
                golsHome: homeGoals,
                golsVisiting: awayGoals
            },
            user: {
                id: user.id
            },
            jackpot: {
                id: idJackpot
            }
        }

        const request = await api_fetch.put(`/hunchs/${idHunch}`, data)
        return request
    },

    getHunchByChampionshipAndUser: async (id) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/hunchs/findManyByChampionshipContainsIdAndUserContainsId/${id}/${user.id}`)
        return response
    },

    getOneByConfrontationAndJackpotAndUser: async (idConfrontation, idJackpot)=>{
        ///findManyByConfrontationContainsIdAndUserContainsIdAndJackpotContainsId/
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/hunchs/findOneByConfrontationContainsIdAndUserContainsIdAndJackpotContainsId/${idConfrontation}/${user.id}/${idJackpot}`)
        return response
    }


}
