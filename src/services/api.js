import RequestController from '../controllers/RequestController';

const baseURL = '/api/users'

export default {
    checkToken: async () => { },

    onSignIn: async (email, password) => {
        const req = await RequestController.onPost(`${baseURL}/login`, {
            email, password
        })

        if (req.status === 200) {
            const json = await req.json()
            return json
        }else{
            return
        }

    },

    onSignUp: async (name, email, phone, password, cpf) => {
        const req = await RequestController.onPost(baseURL, {
            name, email, phone, password, cpf
        })

        const json = await req.json()
        return json
    }
}
