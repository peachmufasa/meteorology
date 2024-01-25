import $api from '../http';

export default class PostService {
    static async addPost(post) {
        return $api.post('/api/add-post', JSON.stringify({post: post}))
            .then(response => response.data)
    }

    static async deletePost(id) {
        return $api.delete(`/api/delete-post`, {data: JSON.stringify({id: id})})
            .then(response => response.data)
    }

    static async findPosts(searchString) {
        return $api.get(`/api/find-posts?substring=${searchString}`)
            .then(response => response.data)
    }

    static async getAllPosts(){
        return $api.get('/api/get-all-posts')
            .then(response => response.data)
    }

    static async getPost(id){
        return $api.get(`/api/get-post?id=${id}`)
            .then(response => response.data)
    }

    static async updatePost(post) {
        return $api.put('/api/update-post', JSON.stringify({post: post}))
            .then(response => response.data)
    }
}
