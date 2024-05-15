import axios from 'axios';

export const sendNotification = async (notification) => {
    try {
        const result = await axios.post('http://localhost:9902/notifications', notification)

        return result.data.success
    } catch (error) {
        return false
    }
}