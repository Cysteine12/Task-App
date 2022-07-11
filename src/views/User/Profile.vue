<template>
<MainLayout header="Profile">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->-
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">My Profile Details</h6>
              </div>
              <div v-if="user" class="card-body">
                <div>
                    <img :src="user.photo" alt="" class="img">
                </div>
                <div class="p-4">
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Profile Name: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.name }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Email: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.email }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Phone: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.phone }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Followers: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.follower.length }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Following: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.following.length }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Saved Events: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.savedEvent.length }}</span>
                        <br>
                    </div>
                </div>
              </div>
              <div class="card-footer">
                <router-link to="/profile/edit" class="btn btn-primary btn-user btn-block">
                    Edit Profile
                </router-link>
                <button @click.prevent="deleteSubmit" class="btn btn-danger btn-user btn-block">
                    Delete Profile
                </button>
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
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck,
  },
  setup() {

    const user = ref(null)
    const statCheck = ref({
      status: '',
      err: ''
    })
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getProfile')

      statCheck.value.status = await store.getters.authState
      user.value = await store.getters.user
    })

    const deleteSubmit = async () => {
      await store.dispatch('deleteProfile')
    }

    return {
      statCheck,
      user,
      deleteSubmit
    }
  }
}
</script>

<style scoped>
.img {
    height: 150px;
		width: 150px;
		border-radius: 50%;
		border: 5px solid #4f5ddb;
		display: flex;
		margin: 0 auto;
}
</style>