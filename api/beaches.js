import api from './index'

const url = {
    beaches: 'https://us-central1-beach-e84a5.cloudfunctions.net/beaches'
}

export default {
    getBeaches: async () => {
        try {
            const response = await api.get(url.beaches)
            return response
        } catch (error) {
            return error
        }
    }
}
