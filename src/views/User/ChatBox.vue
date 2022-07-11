<template>
<MainLayout header="Chax Box">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Messages</h6>
              </div>
              <div class="card-body">
                <div class="p-1">
                    <StatCheck v-if="statCheck" :statCheck="statCheck" />

                    <div 
                      v-if="chats && user" 
                      class="scroll-container"
                    >
                      <div
                        v-for="chat in chats.message"
                        :key="chat.index"
                        class="my-1"
                      >
                          <div>
                            <span 
                              class="message"
                              :class="(chat.userId == user._id ? 'current-user':'')"
                            >
                              {{ chat.message }}
                            </span>
                          </div>
                      </div>
                    </div>

                    <div class="card-footer">
                      <form class="send-form" @submit.prevent="formSubmit" enctype="multipart/form-data">
                        <input type="text" v-model="form.text" class=""
                            placeholder="Message" required>
                        <button type="submit">
                          <i class="far fa-paper-plane"></i>
                        </button>
                      </form>
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
  props: ['id'],
  setup(props) {
      // Form functionality
    const chats = ref(null)
    const user = ref(null)
    const form = ref({
      text: ''
    })
    const statCheck = ref({
      status: '',
      err: ''
    })

    const jumpToButtom = () => {
      let element = document.getElementsByClassName("scroll-container")
      element.scrollTop = element.scrollHeight
    }

    const store = useStore()

    onMounted(async () => {
      const formData = {
        friendId: props.id
      }
      await store.dispatch('getChats', formData)

      statCheck.value.status = await store.getters.getPostsState
      user.value = await store.getters.user
      chats.value = await store.getters.chats
      if (chats.value != null) {
        jumpToButtom()
      }
    })

    const formSubmit = async () => {
      // Send Post
        const formData = {
          friendId: props.id,
          message: form.value.text
        }
        statCheck.value.status = 'Sending...'
        statCheck.value.err = ''
        const res = await store.dispatch('saveChat', formData)
        
        chats.value.message.push({
          userId: user.value._id,
          message: form.value.text
        })
        form.value.text = ''
        jumpToButtom()
  
        if (res.success === true) {
          statCheck.value.status = res.msg
          setTimeout(() => {
            statCheck.value.status = ''
          }, 3000)
        } else {
          statCheck.value.status = await store.getters.authState
          statCheck.value.err = res.err
        }
    }


    return {
      form,
      formSubmit,
      statCheck,
      chats,
      user
    }
  }
}
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.message {
  border-radius: 5px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 14px;
  background: #e2e2e2;
  color: #252525;
  flex-direction: column;
}

.current-user {
  justify-content: flex-end;
  text-align: right;
  background: #4766ee;
  color: #fff;
}

.flex {
  display: flex;
}

.send-form {
  display: flex;
}

.send-form input[type="text"] {
  flex: 1 1 100%;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px 0 0 8px;
  color: #333;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  background-color: #f3f3f3;
  transition: 0.4s time;
}

.send-form button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  padding: 10px 15px;
  border-radius: 0 8px 8px 0;
  background-color: #372dc5;
  color: #fff;
  font-weight: 700;
}
</style>