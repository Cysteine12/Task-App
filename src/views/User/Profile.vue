<template>
<MainLayout header="My Profile">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">
          
          <div v-if="user" class="profile-container d-flex justify-content-center align-items-center">
            <div class="profile-card">
              <div class="upper">
                <img src="/img/Desert.jpg" class="img-fluid">
              </div>

              <div class="user text-center">
                <div class="profile">
                  <img :src="user.photo" class="rounded-circle" width="80">
                </div>
              </div>

              <div class="mt-5 text-center">
                <h4 class="mb-0">{{ user.name }}</h4>
                <span class="text-muted d-block mb-2"><i class="fas fa-envelope"></i> {{ user.email }}</span>
                <span class="text-muted d-block mb-2"><i class="fas fa-phone-alt"></i> 0{{ user.phone }}</span>
                
                <div class="d-flex justify-content-between align-items-center my-4 px-4">

                  <router-link :to="`/followers/${user._id}`" class="stats">
                    <h6 class="mb-0">Followers</h6>
                    <span>{{ user.follower.length }}</span>
                  </router-link>
                  <router-link :to="`/followings/${user._id}`" class="stats">
                    <h6 class="mb-0">Following</h6>
                    <span>{{ user.following.length }}</span>
                  </router-link>
                  <router-link to="/my-events" class="stats">
                    <h6 class="mb-0">Saved Events</h6>
                    <span>{{ user.savedEvent.length }}</span>
                  </router-link>

                </div>
                <div class="my-2">
                  <router-link to="/profile/edit" class="btn btn-primary btn-sm mr-2 small">
                      Edit <i class="fas fa-edit" aria-hidden="true"></i>
                  </router-link>
                  <router-link to="/profile/edit-photo" class="btn btn-primary btn-sm mr-2 small">
                      Photo <i class="fas fa-image" aria-hidden="true"></i>
                  </router-link>
                  <button @click.prevent="deleteSubmit" class="btn btn-danger btn-sm small">
                      Delete <i class="far fa-trash-alt" aria-hidden="true"></i>
                  </button>
                </div>
                <StatCheck v-if="statCheck" :statCheck="statCheck" />
              </div>
            </div>
          </div>
          <div class="modal fade">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                      </div>
                      <div class="modal-body">Select "lgiiiii" below if you are ready to end your current session.</div>
                      <div class="modal-footer">
                          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                          <button @click.prevent="buttonAction" class="btn btn-primary" data-dismiss="modal">Logout</button>
                      </div>
                  </div>
              </div>
          </div>
          <!-- <Alert /> -->
      </div>
  </div>
  </template>
</MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue'
import StatCheck from '@/components/StatCheck.vue'
import Alert from '@/components/Alert.vue'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck,
    Alert
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
/* 
.profile-container{
height: 100vh;
} */

.profile-card{

width: 380px;
border: none;
border-radius: 15px;
box-shadow: 0px 4px 10px gray;
padding: 8px;
background-color: #fff;
position: relative;
}

.upper{

height: 100px;

}

.upper img{

width: 100%;
border-top-left-radius: 10px;
border-top-right-radius: 10px;

}

.user{
position: relative;
}

.profile img{
height: 80px;
width: 80px;
margin-top:2px;
box-shadow: 0px 4px 10px gray;
}

.profile{

position: absolute;
top:-50px;
left: 38%;
height: 90px;
width: 90px;
border:3px solid #fff;

border-radius: 50%;

}

.btn{

border-radius: 5px;
padding-left: 15px;
padding-right: 15px;
}

.stats span{

font-size: 29px;
}
@media(max-width: 576px){
.stats h6{
  font-size: 13px;
}
.stats span{
  font-size: 20px;
}
}

.small {
  padding: 3px 5px;
  font-size: 12px;
}
</style>