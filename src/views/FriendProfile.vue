<template>
<MainLayout v-if="user" :header="user.name + '\'s Profile'">
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
                <span class="text-muted d-block mb-2">{{ user.email }}</span>
                <span class="text-muted d-block mb-2">0{{ user.phone }}</span>
                <button v-if="showFollowButton" @click.prevent="followUser(user._id)" class="btn btn-success btn-sm mr-2 shadow">
                    {{ followButton }}
                </button>
                <button v-else-if="!showFollowButton" @click.prevent="unfollowUser(user._id)" class="btn btn-success btn-sm mr-2 shadow">
                    {{ followButton }}
                </button>
                
                <div class="d-flex justify-content-center align-items-center my-4 px-4">

                  <router-link :to="`/followers/${user._id}`" class="stats mx-2">
                    <h6 class="mb-0">Followers</h6>
                    <span>{{ user.follower.length }}</span>
                  </router-link>
                  <router-link :to="`/followings/${user._id}`" class="stats mx-2">
                    <h6 class="mb-0">Following</h6>
                    <span>{{ user.following.length }}</span>
                  </router-link>

                </div>
                <div class="my-2">
                  <router-link :to="'/chat/' + user._id" class="btn btn-primary btn-sm mr-2 shadow">
                      Message
                  </router-link>
                  <router-link :to="'/user/timeline/' + user._id" class="btn btn-primary btn-sm shadow">
                      View Timeline
                  </router-link>
                </div>
                <StatCheck v-if="statCheck" :statCheck="statCheck" />
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
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'FriendProfile',
  components: {
    MainLayout,
    StatCheck,
  },
  props: ['id'],
  setup(props) {

    const user = ref(null)
    const followButton = ref('Follow')
    const showFollowButton = ref(true)
    const statCheck = ref({
      status: '',
      err: ''
    })
    const store = useStore()

    onMounted(async () => {
      const res = await store.dispatch('getFriendProfile', props.id)

      user.value = res.user
    })

    const followUser = async (id) => {
        followButton.value = 'Saving...'
        statCheck.value.status = ''
        const data = {
            action: 'follow',
            following: id
        }
        const res = await store.dispatch('followUser', data)
        if (res.success) {
            statCheck.value.status = res.msg
            followButton.value = 'Unfollow'
            showFollowButton.value = false
        } else {
            followButton.value = res.err
        }
    }
    const unfollowUser = async (id) => {
        followButton.value = 'Saving...'
        statCheck.value.status = ''
        const data = {
            action: 'unfollow',
            following: id
        }
        const res = await store.dispatch('followUser', data)
        if (res.success) {
            statCheck.value.status = res.msg
            followButton.value = 'Follow'
            showFollowButton.value = true
        } else {
            followButton.value = res.err
        }
    }

    return {
      statCheck,
      user,
      followUser,
      unfollowUser,
      followButton,
      showFollowButton
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

</style>