<template>
<MainLayout header="My Events">
  <template #body-content>
    <div class="row" id="page-top">
      <div class="col-xl-8 col-lg-7">

          <!-- Approach -->
          <div v-if="events.length > 0">
            <Post 
              v-for="event in events"
              :key="event.index"
              :post="event"
              :showbutton="falseM"
              :showbutton2="trueM"
            />
          </div>
          <div v-else class="card p-3 shadow mb-4">
            No saved events yet.
          </div>

          <div v-if="pagination.totalCount">
            <Pagination :pagination="pagination" />
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
import Pagination from '@/components/Pagination.vue'
import { onMounted, watchEffect } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck,
    Post,
    Pagination
  },
  props: {
    pageId: {
        type: Number,
        default: 1
    }
  },
  setup(props) {
    const trueM = true
    const falseM = false
    const events = ref([])
    const user = ref(null)
    const pagination = ref({
      currentPage: props.pageId ?? 1,
      totalCount: null,
      perPage: 2
    })
    const statCheck = ref({
      status: '',
      err: ''
    })
    
    const store = useStore()

    onMounted(async () => {
        watchEffect(async () => {
            window.scrollTo(0, 0)
            await store.dispatch('getEvents', props.pageId ?? 1)
            
            statCheck.value.status = await store.getters.getPostState
            statCheck.value.err = await store.getters.postError
            events.value = await store.getters.events.data
            pagination.value.totalCount = await store.getters.events.eventCount
            pagination.value.currentPage = props.pageId ?? 1
        })
    })

    return {
      trueM,
      falseM,
      statCheck,
      user,
      events,
      pagination
    }
  }
}
</script>