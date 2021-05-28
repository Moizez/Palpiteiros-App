import api_fetch from './api_fetch'

export default {

    onSignIn: async (email, password) => {
        const data = { email: email, password: password }
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
        const request = await apiFetchPost('/users', data)
        return request
    },

}