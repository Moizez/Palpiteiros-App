const baseURL = 'http://192.168.1.127:8080/api/users'

export default {
    checkToken: async () => { },

    onSignIn: async (email, password) => {
        const req = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })
        if (req.status === 200) {
            const json = await req.json()
            return json
        }else{
            return
        }

    },

    onSignUp: async (name, email, phone, password, cpf) => {
        const req = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, password, cpf })
        })
        const json = await req.json()
        return json
    }
}