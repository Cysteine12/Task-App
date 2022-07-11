<template>
<MainLayout header="Search Results">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->-
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Users Profile Details</h6>
              </div>
              <div v-if="results" class="card-body">
                <div class="p-4">
                    <div 
                        v-for="result in results"
                        :key="result.index"
                        class="p-2"
                    >
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">User Name: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ result.name }}</span>
                        <br><br>
                        <router-link :to="'/user/profile/' + result._id" class="btn btn-primary btn-user btn-block">
                            More Details
                        </router-link>
                        <hr>
                    </div>
                </div>
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
import { onMounted, watchEffect } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck,
  },
  props: ['text'],
  setup(props) {

    const user = ref(null)
    const results = ref(null)
    const statCheck = ref({
      status: '',
      err: ''
    })
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getProfile')

      statCheck.value.status = await store.getters.authState
      user.value = await store.getters.user

      const res = await store.dispatch('getSearchResults', props.text)
      results.value = res.data
    })

    watchEffect(async () => {
        results.value = null
        const res = await store.dispatch('getSearchResults', props.text)
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