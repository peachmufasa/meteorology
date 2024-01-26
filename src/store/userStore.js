import {create} from "zustand";
import UserService from "../service/UserService.js";

const userStore = create(() => ({
    addUser: async (user) => {
        try {
            return await UserService.addUser(user).then(resp => resp.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    deleteUser: async (id) => {
        try {
            return await UserService.deleteUser(id).then(resp => resp.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    getAllUsers: async () => {
        try {
            return await UserService.getAllUsers().then(resp => resp.users)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    getUser: async (id) => {
        try {
            return await UserService.getUser(id).then(resp => resp.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    updateUser: async (user) => {
        try {
            return await UserService.updateUser(user).then(resp => resp.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}));
export default userStore;