<template>
<MainLayout header="My Events">
  <template #body-content>
    <div class="row" id="page-top">
      <div class="col-xl-8 col-lg-7">

          <!-- Approach -->
          <div v-if="events !== ''">
            <Post 
              v-for="event in events"
              :key="event.index"
              :post="event[0]"
              :showbutton="falseM"
              :showbutton2="trueM"
            />
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
    const falseM = false
    const store = useStore()

    const events = ref([])
    const user = ref(null)
    const statCheck = ref({
      status: '',
      err: ''
    })


    onMounted(async () => {

        await store.dispatch('getEvents')
        
        statCheck.value.status = await store.getters.getPostState
        statCheck.value.err = await store.getters.postError
        events.value = await store.getters.events
    })

    return {
      trueM,
      falseM,
      statCheck,
      user,
      events
    }
  }
}
</script>