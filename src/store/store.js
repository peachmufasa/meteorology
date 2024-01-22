import { create } from "zustand";
import AuthService from "../service/AuthService.js";

const useStore = create((set) => ({
    user: {},

    setUser: (user) =>
        set(() => ({
            user: {user}
        })),
    clearUser: () =>
        set(() => ({
            user: {}
        })),

    isAuth: false,

    setAuth: (bool) =>
        set(() => ({
            isAuth: bool
        })),

    login: async (login, password) => {
        try {
            const response = await AuthService.login(login, password)
            localStorage.setItem('token', response?.data?.accessToken) // *accessToken* - name of attr access token in bd
            set({
                user: response?.data?.user,
                isAuth: true,
            })
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    registration: async (login, password) => {
        try {
            const response = await AuthService.registration(login, password)
            localStorage.setItem('token', response?.data?.accessToken) // *accessToken* - name of attr access token in bd
            set({
                user: response?.data?.user,
                isAuth: true,
            })
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    logout: async () => {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            set({
                user: {},
                isAuth: false,
            })
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

}));
export default useStore;