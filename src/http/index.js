import axios from 'axios'

export const API_URL = 'https://87d6-87-225-75-74.ngrok-free.app/api/v1'
export const TEST_API_RUL = 'https://jsonplaceholder.typicode.com'

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        'ngrok-skip-browser-warning': true,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// })

export default $api