import RequestController from '../controllers/RequestController';

const baseURL = '/api/users'
//const baseURL = 'http://192.168.1.127:8080/api/users'

export default {

    onSignIn: async (email, password) => {
        const data = { email, password }
        const request = await RequestController.onPost(`${baseURL}/login`, data)
        if (request.status >= 200 && request.status <= 299) {
            const json = await request.json()
            return json
        } else {
            return
        }

    },

    onSignUp: async (name, email, phone, password, cpf) => {

        const data = { name, email, phone, password, cpf }
        const request = await RequestController.onPost(baseURL, data)
        if (request.status >= 200 && request.status <= 299) {
            const json = await request.json()
            return json
        } else {
            return
        }
    }
}
