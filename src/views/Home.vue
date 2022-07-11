<template>
<MainLayout header="Home">
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

              <!-- Followers Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
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

              <!-- Followers Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Saved Events</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ user.savedEvent.length }}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">{{ user.name }}'s Timeline</h6>
                  <div class="dropdown no-arrow">
                      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink">
                          <div class="dropdown-header">Dropdown Header:</div>
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                  </div>
              </div>
              <div class="card-body">
                  <div class="text-center">
                      <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                          src="img/undraw_posting_photo.svg" alt="...">
                  </div>
                  <p>Hello there, <br>Always be reminded to keep track of your saved events from your timeline</p>
                  <router-link to="/my-events" rel="nofollow">Browse Your Saved Events Now &rarr;</router-link>
              </div>
          </div>

          <!-- Approach -->
          <div v-if="posts !== ''">
            <Post 
              v-for="post in posts"
              :key="post.index"
              :post="post"
              :showbutton="trueM"
            />
          </div>

      </div>
  </div>
  </template>
</MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue'
import Post from '@/components/Post.vue'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    Post
  },
  setup() {
    const trueM = true
    const store = useStore()
    const posts = ref([])
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
      await store.dispatch('getPosts',  user.value._id)
      
      statCheck.value.status = await store.getters.getPostState
      statCheck.value.err = await store.getters.postError
      posts.value = await store.getters.post
    })

    return {
      trueM,
      statCheck,
      user,
      posts
    }
  }
}
</script>