import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:pageId?',
    name: 'Home',
    component: Home,
    props: (route) => ({ pageId: Number.parseInt(route.params.pageId, 10)  || 1 }),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/User/Profile.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/profile/edit',
    name: 'Edit-Profile',
    component: () => import('../views/User/Edit.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/profile/edit-photo',
    name: 'Edit-Photo',
    component: () => import('../views/User/EditPhoto.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/dashboard/:pageId?',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    props: (route) => ({ pageId: Number.parseInt(route.params.pageId, 10)  || 1 }),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/post/create',
    name: 'Create-Post',
    component: () => import('../views/Post/Create.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/post/edit/:id',
    name: 'Edit-Post',
    component: () => import('../views/Post/Edit.vue'),
    props: true,
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/my-events/:pageId?',
    name: 'Events',
    component: () => import('../views/User/Events.vue'),
    props: (route) => ({ pageId: Number.parseInt(route.params.pageId, 10)  || 1 }),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/followers/:userId',
    name: 'Followers',
    component: () => import('../views/User/Followers.vue'),
    props: true,
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/followings/:userId',
    name: 'Followings',
    component: () => import('../views/User/Followings.vue'),
    props: true,
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/my-notifications',
    name: 'Notification',
    component: () => import('../views/Notification.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/my-chats',
    name: 'ChatList',
    component: () => import('../views/User/ChatList.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/chat/:id',
    name: 'ChatBox',
    component: () => import('../views/User/ChatBox.vue'),
    props: true,
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/user/profile/:id',
    name: 'FriendProfile',
    component: () => import('../views/FriendProfile.vue'),
    props: true,
    meta: {
      ensureAuth: true
    },
    beforeEnter: async (to, from) => {
      const user = await store.getters.user
      if (await user._id === to.params.id) {
        return '/profile'
      } else {
        return true
      }
    }
  },
  {
    path: '/user/timeline/:id/:pageId?',
    name: 'FriendTimeline',
    component: () => import('../views/FriendTimeline.vue'),
    props: (route) => ({ 
      pageId: Number.parseInt(route.params.pageId, 10)  || 1, 
      id: route.params.id 
    }),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/search/:text',
    name: 'SearchResult',
    component: () => import('../views/SearchResult.vue'),
    props: true,
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      ensureGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      ensureGuest: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      ensureAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta: {
      ensureAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.ensureAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.ensureGuest)) {
    if (store.getters.isLoggedIn) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router