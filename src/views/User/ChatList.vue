<template>
<MainLayout header="My Chat List">
  <template #body-content>
    <div class="row" id="page-top">
      <div class="col-xl-8 col-lg-7">

          <!-- Approach -->
          <div v-if="chats !== ''">
            <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <span class="my-0 mx-3 font-weight-bold text-primary inline text-start">
                        Your Chat List
                    </span>
                </div>
                <div class="card-body">
                    <StatCheck v-if="statCheck" :statCheck="statCheck" />
                    <router-link 
                        :to="`/chat/${getFriendId(chat)}`"
                        v-for="chat in chats"
                        :key="chat.index"
                        class="card py-1 px-3 nav-link d-flex flex-row align-items-center justify-content-between"
                    >
                        <div>
                          <span class="my-0 mx-1 font-weight-bold text-primary inline text-start">{{ chat.name }}:</span>
                          <span class="my-0 mx-1"> {{ chat.message }}...</span>
                        </div>
                        <div>
                          <div class="my-0 mx-0 font-small"> {{ getTime(chat.createdAt) }}</div>
                          <div class="my-0 mx-0 font-small"> {{ getDate(chat.createdAt) }}</div>
                        </div>
                    </router-link>
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
    const store = useStore()

    const chats = ref([])
    const user = ref(null)
    const statCheck = ref({
      status: '',
      err: ''
    })


    onMounted(async () => {
        user.value = await store.getters.user

        await store.dispatch('getChatList')
        
        statCheck.value.status = await store.getters.getPostsState
        statCheck.value.err = await store.getters.postsError
        chats.value = await store.getters.chats
    })

    const getFriendId = (chat) =>{
        if (chat.userA == user.value._id) {
            return chat.userB
        } else {
            return chat.userA
        }
    }
    const getDate = (datetime) =>{
        const newDate = new Date(datetime).toString()
        return newDate.substring(0, 15)
    }
    const getTime = (datetime) =>{
        const newDate = new Date(datetime).toString()
        return newDate.substring(16, 21)
    }

    return {
      statCheck,
      chats,
      getFriendId,
      getDate,
      getTime,
    }
  }
}
</script>

<style scoped>
.nav-link:hover {
    background: #d3d3d3;
}

.font-small {
  font-size: 10px;
}
</style>