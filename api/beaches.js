import api from './index'

const url = {
    beaches: 'https://api.myjson.com/bins/8z3oe'
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
