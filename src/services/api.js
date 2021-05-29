import api_fetch from './api_fetch'

export default {

    onSignIn: async (email, password) => {
        const data = { email, password }
        const request = await api_fetch.post('/users/signin', data)
        return request
    },

    onSignUp: async (values) => {
        const data = {
            name: values.name,
            cpf: values.cpf,
            phone: values.phone,
            email: values.email,
            password: values.password
        }
        const request = await api_fetch.post('/users', data)
        return request
    },

}