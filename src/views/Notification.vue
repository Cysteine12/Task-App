<template>
<MainLayout header="My Notifications">
  <template #body-content>
    <div v-if="user" class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Content Row -->
          <div class="row">

              <!-- Followers Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                      Followers</div>
                                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ user.follower.length }}</div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-users fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- Followers Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                      Following</div>
                                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ user.following.length }}</div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-users fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">My Notifications</h6>
              </div>
              <div class="card-body">
                  <div class="text-center">
                      <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                          src="img/undraw_posting_photo.svg" alt="...">
                  </div>
                  <p>Hello there, <br>Always be reminded you can only see posts of people you folllow on your timeline.</p>
                  <router-link to="/dashboard" rel="nofollow">Browse My Timeline Now &rarr;</router-link>
              </div>
          </div>

          <!-- Approach -->
          <div 
            v-for="notification in notifications"
            :key="notification.index"
            class="card shadow mb-4"
          >
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <div>
                    <img class="home-img rounded-circle float-start" src="img/undraw_profile.svg">
                    <span class="my-0 mx-3 font-weight-bold text-primary inline text-start">
                        <span>
                            New {{ notification.type }}
                        </span>
                    </span>
                </div>
            </div>
            <div class="card-body">
                <StatCheck v-if="statCheck" :statCheck="statCheck" />
                <p class="my-3 mx-3">{{ notification.body}}</p>
            </div>
            <div class="card-footer">
                <router-link :to="'/user/profile/' + notification.senderId" class="my-0 mx-3 inline font-weight-bold text-primary text-start">Check Profile</router-link>
            </div>
        </div>
      </div>
  </div>
  </template>
</MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue'
import StatCheck from '@/components/StatCheck.vue'
import Post from '@/components/Post.vue'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck,
    Post
  },
  setup() {
    const trueM = true
    const store = useStore()
    const notifications = ref([])
    const user = ref(null)
    const statCheck = ref({
      status: '',
      err: ''
    })


    onMounted(async () => {
      await store.dispatch('getProfile')

      statCheck.value.status = await store.getters.authState
      user.value = await store.getters.user

      //-------------------//
      const res = await store.dispatch('getNotifications')
        
      statCheck.value.status = await store.getters.getPostsState
      notifications.value = await res.data
    })

    return {
      trueM,
      statCheck,
      user,
      notifications
    }
  }
}
</script>