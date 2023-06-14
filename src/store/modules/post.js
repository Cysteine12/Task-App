import axios from 'axios'
const API = process.env.VUE_APP_API_URL

const state = () => ({
    post: [],
    status: '',
    error: ''
})

const getters = {
    getPostState: state => state.status,
    post: state => state.post,
    postError: state => state.error
}

const actions = {
    async getPostsByOwner({ commit }, data) {
        commit('posts_request')
        try {
            const res = await axios.get(`${API}/api/post/owner/${data.userId}/${data.pageId}`)
            if (res.data.success) {

                commit('posts_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('posts_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('posts_error', err)
            return {
                err: err
            }
        }
    },  
    async getPost({ commit }, postId) {
        commit('post_request')
        try {
            const res = await axios.get(`${API}/api/post/${postId}`)
            if (res.data.success) {
                
                commit('post_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('post_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('post_error', err)
            return {
                err: err
            }
        }
    },
    async postPost({ commit }, formData) {
        commit('post_post_request')
        try {
            const res = await axios.post(`${API}/api/post`, formData)
            if (res.data.success) {
                
                commit('post_post_success', res.data.msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg,
                    postId: res.data.data._id
                }
            } else {
                commit('post_post_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('post_post_error', err)
            return {
                err: err
            }
        }
    },
    async updatePost({ commit }, formData) {
        commit('edit_post_request')
        try {
            const res = await axios.put(`${API}/api/post/${formData.postId}`, formData)
            if (res.data.success) {
                
                commit('edit_post_success', res.data.msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('edit_post_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('edit_post_error', err)
            return {
                err: err
            }
        }
    },
    async deletePost({ commit }, postId) {
        commit('delete_post_request')
        try {
            const res = await axios.delete(`${API}/api/post/${postId}`)
            if (res.data.success) {
                
                commit('delete_post_success', res.data.msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('delete_post_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('delete_post_error', err)
            return {
                err: err
            }
        }
    }
}

const mutations = {
    posts_request(state) {
        state.status = 'loading..'
    },
    posts_success(state, post) {
        state.status = '',
        state.post = post
    },
    posts_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    post_post_request(state) {
        state.status = 'loading..'
    },
    post_post_success(state, msg) {
        state.status = msg
    },
    post_post_error(state, err) {
        state.status = 'Post upload failed, Try again!',
        state.error = err
    },
    edit_post_request(state) {
        state.status = 'loading..'
    },
    edit_post_success(state, msg) {
        state.status = msg
    },
    edit_post_error(state, err) {
        state.status = 'Post update failed, Try again!',
        state.error = err
    },
    delete_post_request(state) {
        state.status = 'loading..'
    },
    delete_post_success(state, msg) {
        state.status = msg
    },
    delete_post_error(state, err) {
        state.status = 'Post delete failed, Try again!',
        state.error = err
    },
    post_request(state) {
        state.status = 'loading..'
    },
    post_success(state, post) {
        state.status = '',
        state.post = post
    },
    post_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}