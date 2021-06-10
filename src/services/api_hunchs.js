import api_fetch from './api_fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default {

    getAllHunchs: async () => {
        const response = await api_fetch.get('/hunchs')
        return response
    },

    getAllHunchsById: async (id) => {
        const response = await api_fetch.get('/hunchs')
        return response?.data?.filter(hunch => hunch?.user?.id === id)
    },

    createHunchs: async (idJackpot, idConfrontation, homeGoals, awayGoals, winner) => {

        console.log(idJackpot, idConfrontation, homeGoals, awayGoals, winner)
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const data = {
            resultHunch: {
                confrontation: {
                    id: idConfrontation
                },
                golsHome: homeGoals,
                golsVisiting: awayGoals,
                classified: {
                    id: winner
                }
            },
            user: {
                id: user.id
            },
            jackpot: {
                id: idJackpot
            }
        }
        if (!winner){
            delete data.resultHunch.classified
        }
        const request = await api_fetch.post('/hunchs', data)
        return request
    },

    updateHunchs: async (idHunch, idJackpot, idConfrontation, homeGoals, awayGoals, winner) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const data = {
            resultHunch: {
                confrontation: {
                    id: idConfrontation
                },
                golsHome: homeGoals,
                golsVisiting: awayGoals,
                classified: {
                    id: winner
                }
            },
            user: {
                id: user.id
            },
            jackpot: {
                id: idJackpot
            }
        }
        if (!winner){
            delete data.resultHunch.classified
        }
        const request = await api_fetch.put(`/hunchs/${idHunch}`, data)
        return request
    },

    getHunchByChampionshipAndUser: async (id) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/hunchs/findManyByChampionshipContainsIdAndUserContainsId/${id}/${user.id}`)
        return response
    },

    getOneByConfrontationAndJackpotAndUser: async (idConfrontation, idJackpot) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/hunchs/findOneByConfrontationContainsIdAndUserContainsIdAndJackpotContainsId/${idConfrontation}/${user.id}/${idJackpot}`)
        return response
    }


}
