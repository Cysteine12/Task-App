<template>
<MainLayout v-if="user" :header="user.name  + '\'s Followers'">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Followers Profile Details</h6>
              </div>
              <div v-if="results != ''" class="card-body">
                <div
                    v-for="result in results"
                    :key="result.index"
                    class="card my-2 py-2 px-3 nav-link d-flex flex-row align-items-center justify-content-between"
                >
                    <div class="d-flex align-items-center">
                      <div class="image-small mr-3">
                          <img class="rounded-circle" :src="result.photo"
                              alt="...">
                          <div class="status-indicator bg-success"></div>
                      </div>
                      <span class="my-0 mx-1 font-weight-bold text-primary inline text-start">{{ result.name }}</span>
                    </div>
                    <div>
                      <router-link
                        :to="`/user/profile/${result._id}`"
                        class="btn btn-outline btn-inline"
                      >
                        View Profile
                      </router-link>
                    </div>
                </div>
              </div>
              <div v-else class="card-body">
                No Followers Yet!
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
 name: 'Followers',
  components: {
    MainLayout,
    StatCheck,
  },
  props: ['userId'],
  setup(props) {

    const user = ref(null)
    const results = ref([])
    const statCheck = ref({
      status: '',
      err: ''
    })
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getFriendProfile', props.userId)

      statCheck.value.status = await store.getters.authState
      user.value = await store.getters.user

      const res = await store.dispatch('getFollowers', props.userId)
      results.value = res.data
    })

    return {
      statCheck,
      user,
      results
    }
  }
}
</script>
<style scoped>
.image-small img {
  max-height: 30px;
  max-width: 30px;
}

.btn-outline {
  padding: 3px;
  border: 1px solid #3c3cbe;
  border-radius: 5px;
}
</style>