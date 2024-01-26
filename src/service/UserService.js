import $api from '../http';

export default class UserService {
    static async addUser(user) {
        return $api.post('/api/add-user', JSON.stringify({user: user}))
            .then(response => response.data)
    }

    static async deleteUser(id) {
        return $api.delete(`/api/delete-user`, {data: JSON.stringify({id: id})})
            .then(response => response.data)
    }

    static async getAllUsers(){
        return $api.get('/api/get-users')
            .then(response => response.data)
    }

    static async getUser(id){
        return $api.get(`/api/get-user?id=${id ?? ''}`)
            .then(response => response.data)
    }

    static async updateUser(user) {
        return $api.put('/api/update-user', JSON.stringify({user: user}))
            .then(response => response.data)
    }
}
