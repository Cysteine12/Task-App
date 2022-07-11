<template>
<MainLayout v-if="user" :header="user.name + '\'s Timeline'">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

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
import StatCheck from '@/components/StatCheck.vue'
import Post from '@/components/Post.vue'
import { useRouter } from 'vue-router'
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
  props: ['id'],
  setup(props) {
    const trueM = true
    const store = useStore()

    // Others
    const posts = ref([])
    const user = ref(null)
    const statCheck = ref({
      status: '',
      err: ''
    })

    onMounted(async () => {
      const res = await store.dispatch('getFriendProfile', props.id)
      user.value = res.user

      //-------------------//
      await store.dispatch('getPostsByOwner',  user.value._id)
      
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