import {create} from "zustand";
import PostService from "../service/PostService.js";

const postStore = create(() => ({
    addPost: async (post) => {
        try {
            return await PostService.addPost(post).then(resp => resp.post)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    deletePost: async (id) => {
        try {
            return await PostService.deletePost(id).then(resp => resp.post)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    findPosts: async (id) => {
        try {
            return await PostService.findPosts(id).then(resp => resp.posts)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    getAllPosts: async () => {
        try {
            return await PostService.getAllPosts().then(resp => resp.posts)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    getPost: async (id) => {
        try {
            return await PostService.getPost(id).then(resp => resp.post)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    updatePost: async (post) => {
        try {
            return await PostService.updatePost(post).then(resp => resp.post)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}));
export default postStore;