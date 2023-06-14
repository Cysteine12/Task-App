import axios from 'axios'
import router from '../../router'
const API = process.env.VUE_APP_API_URL

const state = () => ({
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: ''
})

const getters = {
    isLoggedIn : state => !!state.token,
    authState: state => state.status,
    user: state => state.user
}

const actions = {
    async login({ commit }, formData) {
        commit('auth_request')
        try {
            const res = await axios.post(`${API}/api/auth/login`, formData)
            if (res.data.success) {
                const token = res.data.token
                const user = res.data.user
                const msg = res.data.msg
                
                // Store token in localStorage
                localStorage.setItem('token', token)
                // Set axios defaults
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', msg, token, user)
                
                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('auth_error', res.data.msg)
                return {
                    err: res.data.msg
                }
            }
        } catch (err) {
            commit('auth_error', err)
            return {
                err: err
            }
        }
    },
    async register({ commit }, formData) {
        commit('register_request')
        try {
            const res = await axios.post(`${API}/api/auth/register`, formData)
            if (res.data.success) {
                const msg = res.data.msg
                
                commit('register_success', msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('register_error', res.data.msg)
                return {
                    err: res.data.msg
                }
            }
        } catch (err) {
            commit('register_error', err)
            return {
                err: err
            }
        }
    },
    async updateProfile({ commit }, data) {
        commit('edit_profile_request')
        try {
            const res = await axios.put(`${API}/api/auth/update/${data.id}`, data.formData)
            if (res.data.success) {

                const msg = res.data.msg
                commit('edit_profile_success', msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('edit_profile_error', res.data.msg)
                return {
                    err: res.data.msg
                }
            }
        } catch (err) {
            commit('edit_profile_error', err)
            return {
                err: err
            }
        }
    },
    async updateProfilePhoto({ commit }, data) {
        commit('edit_photo_request')
        try {
            const res = await axios.put(`${API}/api/auth/update-photo/${data.id}`, data.formData)
            if (res.data.success) {

                const msg = res.data.msg
                commit('edit_photo_success', msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('edit_photo_error', res.data.msg)
                return {
                    err: res.data.msg
                }
            }
        } catch (err) {
            commit('edit_photo_error', err)
            return {
                err: err
            }
        }
    },
    async deleteProfile({ commit }) {
        commit('delete_profile_request')
        try {
            const res = await axios.delete(`${API}/api/auth/delete`)
            if (res.data.success) {
                const msg = res.data.msg
                
                commit('delete_profile_success', msg)

                localStorage.removeItem('token')
                commit('logout')
                delete axios.defaults.headers.common['Authorization']
                router.push('/login')
                return
            } else {
                commit('delete_profile_error', res.data.msg)
                return {
                    err: res.data.msg
                }
            }
        } catch (err) {
            commit('delete_profile_error', err)
            return {
                err: err
            }
        }
    },
    async getProfile({ commit }) {
        commit('profile_request')
        const res = await axios.get(`${API}/api/auth/profile`)
        commit('profile_success', res.data.user)
        return res.data
    },
    async logout({ commit }) {
        localStorage.removeItem('token')
        commit('logout')
        delete axios.defaults.headers.common['Authorization']
        router.push('/login')
        return
    }
}

const mutations = {
    auth_request(state) {
        state.status = 'loading..'
    },
    auth_success(state, msg, token, user) {
        state.status = msg,
        state.token = token,
        state.user = user
    },
    auth_error(state, msg) {
        state.status = 'Authentication failed',
        state.error = msg
    },
    register_request(state) {
        state.status = 'loading..'
    },
    register_success(state, msg) {
        state.status = msg
    },
    register_error(state, msg) {
        state.status = 'Account update failed, Try again',
        state.error = msg
    },
    edit_profile_request(state) {
        state.status = 'loading..'
    },
    edit_profile_success(state, msg) {
        state.status = msg
    },
    edit_profile_error(state, msg) {
        state.status = 'Account update failed, Try again',
        state.error = msg
    },
    edit_photo_request(state) {
        state.status = 'loading..'
    },
    edit_photo_success(state, msg) {
        state.status = msg
    },
    edit_photo_error(state, msg) {
        state.status = 'Photo update failed, Try again',
        state.error = msg
    },
    delete_profile_request(state) {
        state.status = 'loading..'
    },
    delete_profile_success(state, msg) {
        state.status = msg
    },
    delete_profile_error(state, msg) {
        state.status = 'Account update failed, Try again',
        state.error = msg
    },
    profile_request(state) {
        state.status = 'loading..'
    },
    profile_success(state, user) {
        state.status = ''
        state.user = user
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}