import api_fetch from './api_fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default {

    onSignIn: async (email, password) => {
        const data = { email, password }
        const request = await api_fetch.post('/users/signin', data)
        return request
    },

    onSignUp: async (values) => {
        const data = {
            name: values.name,
            phone: values.phone,
            email: values.email,
            password: values.password
        }
        const request = await api_fetch.post('/users', data)
        return request
    },

    onJackpotRegister: async (jackpotId) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const data = {
            user: {
                id: user.id
            },
            jackpot: {
                id: jackpotId
            }
        }
        const request = await api_fetch.post('/registers', data)
        return request
    },

    hasRegister: async (jackpotId) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/jackpots/isByUserContainsIdAndJackpotContainsId/${user.id}/${jackpotId}`)
        return response
    },

    onGetUserById: async () => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []
        const response = await api_fetch.get(`/users/${user.id}`)
        return response
    },

    onUpdateUser: async (values) => {
        const user = await JSON.parse(await AsyncStorage.getItem('@palpiteiros:user')) || []

        const data = {
            name: values.name,
            phone: values.phone,
            email: values.email,
            password: values.password
        }
        const request = await api_fetch.put(`/users/${user.id}`, data)
        return request
    },

}