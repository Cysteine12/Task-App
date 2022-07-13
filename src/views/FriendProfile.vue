<template>
<MainLayout v-if="user" :header="user.name + '\'s Profile'">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div v-if="user" class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">My Profile Details</h6>
              </div>
              <div class="card-body">
                <StatCheck v-if="statCheck" :statCheck="statCheck" />
                <div class="p-4">
                    <div>
                        <img :src="user.photo" alt="" class="img">
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Profile Name: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.name }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Email: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.email }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Phone: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.phone }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Followers: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.follower.length }}</span>
                        <br>
                    </div>
                    <div class="p-2">
                        <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Following: </span>
                        <span class="my-0 mx-3 font-weight-bold inline text-start">{{ user.following.length }}</span>
                        <br>
                    </div>
                </div>
              </div>
              <div class="card-footer">
                <button v-if="showFollowButton" @click.prevent="followUser(user._id)" class="btn btn-success btn-user btn-block">
                    {{ followButton }}
                </button>
                <button v-else-if="!showFollowButton" @click.prevent="unfollowUser(user._id)" class="btn btn-success btn-user btn-block">
                    {{ followButton }}
                </button>
                <div class="my-2 row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <router-link :to="'/chat/' + user._id" class="btn btn-primary btn-user btn-block">
                            Message
                        </router-link>
                    </div>
                    <div class="col-sm-6">
                        <router-link :to="'/user/timeline/' + user._id" class="btn btn-primary btn-user btn-block">
                            View Timeline
                        </router-link>
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
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck,
  },
  props: ['id'],
  setup(props) {

    const user = ref(null)
    const followButton = ref('Follow User')
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
            followButton.value = 'Unfollow User'
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
            followButton.value = 'Follow User'
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
</style>