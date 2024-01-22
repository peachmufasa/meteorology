import $api from '../http';

export default class AuthService {
    static async login(login, password) {
        return $api.post('/*loginAddressApi*', {login, password})
            .then(response => response.data)
    }

    static async registration(login, password) {
        return $api.post('/*registrationAddressApi*', {login, password})
    }

    static async logout() {
        return $api.post('/*logoutAddressApi*')
    }
}
