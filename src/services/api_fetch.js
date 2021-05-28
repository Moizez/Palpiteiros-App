const API = 'https://palpiteiros-api.herokuapp.com/api'

export default {

    post: async (endpoint, body) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        headers.append("Accept", 'application/json')

        const response = await fetch(API + endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })

        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json()
            if (json) {
                return {
                    data: json,
                    status: response.status
                }
            } else {
                return {
                    data: null,
                    status: response.status
                }
            }
        } else {
            return {
                data: null,
                status: response.status,
            }
        }
    },

    get: async (endpoint) => {

        const response = await fetch(API + endpoint)
        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json()
            if (json) {
                return {
                    data: json,
                    status: response.status
                }
            } else {
                return {
                    data: null,
                    status: response.status
                }
            }
        } else {
            return {
                data: null,
                status: response.status,
            }
        }
    },

    put: async (endpoint, body) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        headers.append("Accept", 'application/json')

        const response = await fetch(API + endpoint, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        })

        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json()
            if (json) {
                return {
                    data: json,
                    status: response.status
                }
            } else {
                return {
                    data: null,
                    status: response.status
                }
            }
        } else {
            return {
                data: null,
                status: response.status,
            }
        }
    },

    delete: async (endpoint) => {

        const response = await fetch(`${API + endpoint}`, { method: 'DELETE' })
        if (response.status >= 200 && response.status <= 299) {
            return {
                status: response.status
            }
        } else {
            return {
                status: response.status,
            }
        }
    }

}