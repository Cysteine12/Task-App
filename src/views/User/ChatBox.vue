<template>
<MainLayout>
  <template #body-content>
    <div class="row">
      
      <div class="col-md-8 col-xl-6 chat">
        <div v-if="user && friendData" class="card" id="body">
          <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img :src="friendData.photo" class="rounded-circle user_img">
                <span class="online_icon"></span>
              </div>
              <div class="user_info">
                <span>Chat with {{ friendData.name }}</span>
                <p v-if="chats">{{ chats.message.length }} Messages</p>
              </div>
            </div>
            <span @click.prevent="toggleMenu" id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
            <div class="action_menu menu-toggle">
              <ul>
                <router-link :to="`/user/profile/${friendData._id}`">
                  <li>
                      <i class="fas fa-user-circle"></i> View Profile
                  </li>
                </router-link>
                <router-link :to="`/user/timeline/${friendData._id}`">
                  <li>
                      <i class="fas fa-users"></i> View Timeline
                  </li>
                </router-link>
              </ul>
            </div>
          </div>

          <div v-if="chats && user" class="card-body scroll-container msg_card_body">
            <div
              v-for="chat in chats.message"
              :key="chat.index"
              class="my-1"
            >
              <div 
                v-if="chat.userId != user._id"
                class="d-flex justify-content-start mb-4"
              >
                <div class="img_cont_msg">
                  <img :src="friendData.photo" class="rounded-circle user_img_msg">
                </div>
                <div class="msg_cotainer">
                  {{ chat.message }}
                  <span class="msg_time">
                    {{ getTime(chat.createdAt) }}, {{ getDate(chat.createdAt) }}
                  </span>
                </div>
              </div>

              <div 
                v-else
                class="d-flex justify-content-end mb-4"
              >
                <div class="msg_cotainer_send">
                  {{ chat.message }}
                  <span class="msg_time_send">
                    <span 
                      v-if="chat.createdAt && chat.createdAt !== 'Sending' && chat.createdAt !== 'Sent'"
                    >
                      {{ getTime(chat.createdAt) }}, {{ getDate(chat.createdAt) }}
                    </span>
                    <span v-else>
                      <span v-if="chat.createdAt">{{ chat.createdAt }}</span>
                      <span v-else>Now</span>
                    </span>
                  </span>
                </div>
                <div class="img_cont_msg">
                  <img :src="user.photo" class="rounded-circle user_img_msg">
                </div>
              </div>
            </div>
          </div>
          <div v-else class="card-body scroll-container msg_card_body">
            <span class="text-white">
              Hello there, start a conversation with {{ friendData.name }} now 
              <i class="fas fa-laugh-wink"></i>
            </span>
          </div>

          <div class="card-footer">
            <form @submit.prevent="formSubmit" class="input-group">
              <div class="input-group-append">
                <span class="input-group-text attach_btn"><i class="fas fa-envelope"></i></span>
              </div>
              <textarea 
                v-model="form.text" 
                class="form-control type_msg" placeholder="Type your message..." required
              >
              </textarea>
              <button class="form-button input-group-append">
                <span class="input-group-text send_btn"><i class="far fa-paper-plane"></i></span>
              </button>
            </form>
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
 name: 'ChatBox',
  components: {
    MainLayout,
    StatCheck,
    Post
  },
  props: ['id'],
  setup(props) {
    const chats = ref(null)
    const friendData = ref(null)
    const user = ref(null)
    const form = ref({
      text: ''
    })
    const statCheck = ref({
      status: '',
      err: ''
    })

    const store = useStore()

    onMounted(async () => {
      const formData = {
        friendId: props.id
      }
      await store.dispatch('getChats', formData)

      statCheck.value.status = await store.getters.getPostsState
      user.value = await store.getters.user
      chats.value = await store.getters.chats.chat
      friendData.value = await store.getters.chats.friendData
      
      if (await chats.value && await user.value) {
        stickToButtom()
      }
    })

    const formSubmit = async () => {

        if (chats.value === null) chats.value = { message: [] }
        chats.value.message.push({
          userId: user.value._id,
          message: form.value.text,
          createdAt: 'Sending'
        })
        form.value.text = ''
        setTimeout(() => {
          stickToButtom()
        }, 500)

        const formData = {
          friendId: props.id,
          message: chats.value.message[chats.value.message.length - 1].message
        }
        const res = await store.dispatch('saveChat', formData)
          
        if (res.success === true) {
          chats.value.message[chats.value.message.length - 1].createdAt = 'Sent'

          setTimeout(() => {
            chats.value.message[chats.value.message.length - 1].createdAt = null
          }, 3000)
        } else {
          chats.value.message[
            chats.value.message.length - 1
          ].createdAt = await store.getters.authState + ' ' + res.err
        }
    }

    const toggleMenu = () => {
      let element = document.getElementsByClassName("action_menu")[0]
      element.classList.toggle('menu-toggle')
    }
    const stickToButtom = () => {
      let element = document.getElementsByClassName("scroll-container")[0]
      element.scrollTop = element.scrollHeight
    }
    const getDate = (datetime) =>{
        const newDate = new Date(datetime).toString()
        return newDate.substring(0, 10)
    }
    const getTime = (datetime) =>{
        const newDate = new Date(datetime).toString()
        return newDate.substring(16, 21)
    }


    return {
      form,
      formSubmit,
      statCheck,
      chats,
      user,
      friendData,
      toggleMenu,
      getDate,
      getTime
    }
  }
}
</script>

<style scoped>

#body, .card-header, .card-footer {
  background: #2e6699;
  background: -webkit-linear-gradient(to right, #2e6699, #2c4160, #0d102d);
  background: linear-gradient(to right, #2e6699, #2c4160, #0d102d);
}

.chat{
    margin-top: auto;
    margin-bottom: auto;
  }
  .card{
    height: 600px;
    border-radius: 15px !important;
    background-color: rgba(0,0,0,0.4) !important;
    box-shadow: 0px 4px 10px gray;
  }
  .card-body {
    margin-bottom: 60px;
  }
  .msg_card_body{
    overflow-y: auto;
  }
  .card-header{
    border-radius: 15px 15px 0 0 !important;
    border-bottom: 1px solid #fff !important;
  }
  .card-footer{
    border-radius: 0 0 15px 15px !important;
    border-top: 0 !important;
    position: absolute;
    bottom: 0;
    width: 100%;
}
  .container{
    align-content: center;
  }
  .type_msg{
    background-color: rgba(0,0,0,0.3) !important;
    border:0 !important;
    color:white !important;
    height: 60px !important;
    overflow-y: auto;
  }
  .type_msg:focus{
      box-shadow:none !important;
      outline:0px !important;
  }
  .attach_btn{
    border-radius: 15px 0 0 15px !important;
    background-color: rgba(0,0,0,0.3) !important;
    border:0 !important;
    color: white !important;
    cursor: pointer;
  }
  .send_btn{
    border-radius: 0 15px 15px 0 !important;
    background-color: transparent !important;
    border:0 !important;
    color: white !important;
    cursor: pointer;
  }
  .user_img{
    height: 70px;
    width: 70px;
    border:1.5px solid #f5f6fa;
  
  }
  .user_img_msg{
    height: 40px;
    width: 40px;
    border:1.5px solid #f5f6fa;
  
  }
.img_cont{
    position: relative;
    height: 70px;
    width: 70px;
}
.img_cont_msg{
    height: 40px;
    width: 40px;
}
.online_icon{
  position: absolute;
  height: 15px;
  width:15px;
  background-color: #4cd137;
  border-radius: 50%;
  bottom: 0.2em;
  right: 0.4em;
  border:1.5px solid white;
}
.user_info{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}
.user_info span{
  font-size: 20px;
  color: white;
}
.user_info p{
font-size: 10px;
color: rgba(255,255,255,0.6);
}
.msg_cotainer{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 15px;
  background-color: #0096bc;
  padding: 10px;
  position: relative;
  white-space: pre-line;
  color: #fff;
}
.msg_cotainer_send{
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 15px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
  white-space: pre-line;
  color: #fff;
}
.msg_time{
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(255,255,255,0.5);
  font-size: 10px;
  white-space: nowrap;
}
.msg_time_send{
  position: absolute;
  right:0;
  bottom: -15px;
  color: rgba(255,255,255,0.5);
  font-size: 10px;
  white-space: nowrap;
}
.msg_head{
  position: relative;
}
#action_menu_btn{
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}
.menu-toggle {
  display: none;
}
.action_menu{
  z-index: 2;
  position: absolute;
  padding: 15px 0;
  background-color: rgba(0,0,0,0.5);
  color: white;
  border-radius: 15px;
  top: 30px;
  right: 15px;
}
.action_menu ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.action_menu ul li{
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
  color: #fff;
}
.action_menu ul li i{
  padding-right: 10px;

}
.action_menu ul li:hover{
  cursor: pointer;
  background-color: rgba(0,0,0,0.2);
}
.form-button {
  appearance: none;
  border: none;
  outline: none;
  background-color: rgba(0,0,0,0.3) !important;
  display: block;
  padding: 10px 15px;
  border-radius: 0 8px 8px 0;
  color: #fff;
  font-weight: 700;
}
@media(max-width: 576px){
.contacts_card{
  margin-bottom: 15px !important;
}
}
	
</style>
