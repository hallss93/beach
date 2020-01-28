import api from './index'

const url = {
    beachs: 'https://api.myjson.com/bins/atb5y'
}

export default {
    getBeachs: async () => {
        try {
            const response = await api.get(url.beachs)
            return response
        } catch (error) {
            return error
        }
    }
}
