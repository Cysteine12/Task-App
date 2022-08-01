<template>
<MainLayout header="Dashboard">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Approach -->
          <div v-if="posts.length > 0">
            <Post 
              v-for="post in posts"
              :key="post.index"
              :post="post"
              :showbutton="trueM"
            />
          </div>
          <div v-else class="card shadow mb-4">
            <div class="card-header py-3">No Posts on your dashboard yet. Create new posts now</div>
          </div>
          <br><br>

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
    const posts = ref([])
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
        await store.dispatch('getProfile')
        statCheck.value.status = await store.getters.authState
        user.value = await store.getters.user
        
        //-------------------//
        watchEffect(async () => {
            window.scrollTo(0, 0)
            const data = {
                userId: user.value._id,
                pageId: props.pageId ?? 1
            }
            await store.dispatch('getPostsByOwner', data)
            
            statCheck.value.status = await store.getters.getPostState
            statCheck.value.err = await store.getters.postError
            posts.value = await store.getters.post.data
            pagination.value.totalCount = await store.getters.post.postCount
            pagination.value.currentPage = props.pageId ?? 1
        })
    })

    return {
      trueM,
      statCheck,
      posts,
      pagination
    }
  }
}
</script>