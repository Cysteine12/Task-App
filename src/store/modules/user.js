import axios from 'axios'
import router from '../../router'
const API = process.env.VUE_APP_API_URL

const state = () => ({
    posts: [],
    chats: [],
    events: [],
    status: '',
    error: ''
})

const getters = {
    getPostsState: state => state.status,
    posts: state => state.posts,
    chats: state => state.chats,
    events: state => state.events,
    postsError: state => state.error
}

const actions = {
    async followUser({ commit }, formData) {
        commit('follow_user_request')
        try {
            const res = await axios.put(`${API}/api/user/follow`, formData)
            if (res.data.success) {
                
                commit('follow_user_success', res.data.msg)

                return {
                    success: res.data.success,
                    msg: res.data.data,
                }
            } else {
                commit('follow_user_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('follow_user_error', err)
            return {
                err: err
            }
        }
    },
    async getPosts({ commit }, data) {
        commit('posts_request')
        try {
            const res = await axios.get(`${API}/api/user/timeline/${data.userId}/${data.pageId}`)
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
    async getFriendProfile({ commit }, userId) {
        commit('profile_request')
        try {
            const res = await axios.get(`${API}/api/user/profile/${userId}`)
            if (res.data.success) {
                commit('profile_success', res.data.user)
                return res.data
            } else {
                commit('profile_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('profile_error', err)
            return {
                err: err
            }
        }
    },
    async getEvents({ commit }, pageId) {
        commit('events_request')
        try {
            const res = await axios.get(`${API}/api/user/get-event/${pageId}`)
            if (res.data.success) {
                
                commit('events_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('events_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('events_error', err)
            return {
                err: err
            }
        }
    },
    async updateEvent({ commit }, formData) {
        commit('post_event_request')
        try {
            const res = await axios.put(`${API}/api/user/save-event`, formData)
            if (res.data.success) {
                
                commit('post_event_success', res.data.msg)

                return {
                    success: res.data.success,
                    msg: res.data.data,
                }
            } else {
                commit('post_event_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('post_event_error', err)
            return {
                err: err
            }
        }
    },
    async getFollowers({ commit }, userId) {
        commit('followers_request')
        try {
            const res = await axios.get(`${API}/api/user/get-follower/${userId}`)
            if (res.data.success) {
                
                commit('followers_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('followers_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('followers_error', err)
            return {
                err: err
            }
        }
    },
    async getFollowings({ commit }, userId) {
        commit('followings_request')
        try {
            const res = await axios.get(`${API}/api/user/get-following/${userId}`)
            if (res.data.success) {
                
                commit('followings_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('followings_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('followings_error', err)
            return {
                err: err
            }
        }
    },
    async getNotificationAlerts({ commit }) {
        commit('notifications_request')
        try {
            const res = await axios.get(`${API}/api/notification/alerts`)
            if (res.data.success) {

                commit('notifications_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('notifications_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('notifications_error', err)
            return {
                err: err
            }
        }
    },
    async getNotifications({ commit }) {
        commit('notifications_request')
        try {
            const res = await axios.get(`${API}/api/notification`)
            if (res.data.success) {

                commit('notifications_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('notifications_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('notifications_error', err)
            return {
                err: err
            }
        }
    },
    async updateNotifications({ commit }, formData) {
        try {
            const res = await axios.put(`${API}/api/notification/update`)
            if (res.data.success) {
            
                return {
                    success: res.data.success
                }
            } else {
                commit('post_event_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('post_event_error', err)
            return {
                err: err
            }
        }
    },
    async getChatListAlerts({ commit }) {
        commit('chatlist_request')
        try {
            const res = await axios.get(`${API}/api/chat/get-chat-list-alert`)
            if (res.data.success) {

                commit('chatlist_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('chatlist_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('chatlist_error', err)
            return {
                err: err
            }
        }
    },
    async getChatList({ commit }) {
        commit('chatlist_request')
        try {
            const res = await axios.get(`${API}/api/chat/get-chat-list`)
            if (res.data.success) {

                commit('chatlist_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('chatlist_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('chatlist_error', err)
            return {
                err: err
            }
        }
    },
    async getChats({ commit }, formData) {
        commit('chats_request')
        try {
            const res = await axios.post(`${API}/api/chat/get-chat`, formData)
            if (res.data.success) {

                commit('chats_success', res.data.data)
                return {
                    success: res.data.success,
                    data: res.data.data
                }
            } else {
                commit('chats_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('chats_error', err)
            return {
                err: err
            }
        }
    },
    async saveChat({ commit }, formData) {
        commit('post_chat_request')
        try {
            const res = await axios.put(`${API}/api/chat/save-chat`, formData)
            if (res.data.success) {
                
                commit('post_chat_success', res.data.msg)

                return {
                    success: res.data.success,
                    msg: res.data.msg
                }
            } else {
                commit('post_chat_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('post_chat_error', err)
            return {
                err: err
            }
        }
    },
    async getSearchResults({ commit }, searchInput) {
        commit('search_request')
        try {
            const res = await axios.get(`${API}/api/user/search/${searchInput}`)
            if (res.data.success) {
                commit('search_success', res.data.user)
                return res.data
            } else {
                commit('search_error', res.data.err)
                return {
                    err: res.data.err
                }
            }
        } catch (err) {
            commit('search_error', err)
            return {
                err: err
            }
        }
    },
}

const mutations = {
    follow_user_request(state) {
        state.status = 'loading..'
    },
    follow_user_success(state, msg) {
        state.status = msg
    },
    follow_user_error(state, err) {
        state.status = 'Change failed, Try again!',
        state.error = err
    },
    posts_request(state) {
        state.status = 'loading..'
    },
    posts_success(state, data) {
        state.status = '',
        state.posts = data.data
    },
    posts_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    profile_request(state) {
        state.status = 'loading..'
    },
    profile_success(state, posts) {
        state.status = ''
    },
    profile_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    events_request(state) {
        state.status = 'loading..'
    },
    events_success(state, events) {
        state.status = '',
        state.events = events
    },
    events_error(state, err) {
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
    post_event_request(state) {
        state.status = 'loading..'
    },
    post_event_success(state, msg) {
        state.status = msg
    },
    post_event_error(state, err) {
        state.status = 'Event upload failed, Try again!',
        state.error = err
    },
    followers_request(state) {
        state.status = 'loading..'
    },
    followers_success(state, followers) {
        state.status = '',
        state.posts = followers
    },
    followers_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    followings_request(state) {
        state.status = 'loading..'
    },
    followings_success(state, followings) {
        state.status = '',
        state.posts = followings
    },
    followings_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    post_request(state) {
        state.status = 'loading..'
    },
    post_success(state, post) {
        state.status = '',
        state.posts = post
    },
    post_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    notifications_request(state) {
        state.status = 'loading..'
    },
    notifications_success(state, posts) {
        state.status = '',
        state.posts = posts
    },
    notifications_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    chatlist_request(state) {
        state.status = 'loading..'
    },
    chatlist_success(state, chats) {
        state.status = '',
        state.chats = chats
    },
    chatlist_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    chats_request(state) {
        state.status = 'loading..'
    },
    chats_success(state, chats) {
        state.status = '',
        state.chats = chats
    },
    chats_error(state, err) {
        state.status = 'Please reload the page!',
        state.error = err
    },
    post_chat_request(state) {
        state.status = 'loading..'
    },
    post_chat_success(msg) {
        state.status = msg
    },
    post_chat_error(state, err) {
        state.status = 'Chat failed to send, Try again!',
        state.error = err
    },
    search_request(state) {
        state.status = 'loading..'
    },
    search_success(state, posts) {
        state.status = ''
    },
    search_error(state, err) {
        state.status = 'Please try again!',
        state.error = err
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}