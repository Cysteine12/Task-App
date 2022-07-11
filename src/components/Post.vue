<template>
    <div v-if="post != '' && user">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <div>
                    <img class="home-img rounded-circle float-start" src="img/undraw_profile.svg">
                    <span class="my-0 mx-3 font-weight-bold text-primary inline text-start">
                        <router-link 
                            :to="'/user/profile/' + post.userId" 
                            v-if="post.userId != user._id"
                        >
                            {{ post.name }}
                        </router-link>
                        <span v-else>
                            {{ post.name }}
                        </span>
                    </span>
                </div>
                <div 
                    v-if="post.userId == user._id"
                    class="dropdown no-arrow"
                >
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Manage Post:</div>
                        <router-link :to="'/post/edit/' + post._id" class="dropdown-item">Edit Post</router-link>
                        <button @click.prevent="deletePost(post._id)" class="dropdown-item">Delete Post</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <StatCheck v-if="postCheck" :statCheck="postCheck" />
                <span class="my-0 mx-3 font-weight-bold text-primary inline text-start">{{ post.course }}</span>
                <span class="my-0 mx-3 font-weight-bold text-primary inline text-start">{{ post.title }}</span>
                <p class="my-3 mx-3">{{ post.notes}}</p>
                <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Teacher: </span>
                <span class="my-0 mx-3 font-weight-bold inline text-start">{{ post.teacher}}</span>
                <br>
                <span class="my-0 mx-3 inline font-weight-bold text-primary text-start">Deadline: </span>
                <span class="my-0 mx-3 font-weight-bold inline text-start">{{ post.deadline}}</span>
                
            </div>
            <div v-if="showbutton" class="card-footer">
                <button @click.prevent="saveEvent(post._id)" href="#" class="btn btn-primary btn-user btn-block">
                    {{ eventButton }}
                </button>
            </div>
            <div v-if="showbutton2" class="card-footer">
                <button @click.prevent="unsaveEvent(post._id)" href="#" class="btn btn-primary btn-user btn-block">
                    {{ eventButton2 }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import StatCheck from '@/components/StatCheck.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
 name: 'Post',
  props: {
      post: {
          type: Object,
          default: ''
      },
      showbutton: {
          type: Boolean,
          default: true
      },
      showbutton2: {
          type: Boolean,
          default: false
      }
  },
  components: {
    StatCheck
  },
  setup() {
    const user = ref(null)
    const eventButton = ref('Save to events')
    const eventButton2 = ref('Unsave event')
    const postCheck = ref({
      status: '',
      err: ''
    })
    const store = useStore()

    onMounted(async () => {
      user.value = await store.getters.user
    })

    const saveEvent = async (id) => {
        eventButton.value = 'Saving...'
        const data = {
            event_id: id,
            action: 'save'
        }
        const res = await store.dispatch('updateEvent', data)
            
        if (res.success) {
            eventButton.value = res.msg
        } else {
            eventButton.value = res.err
        }
    }

    const unsaveEvent = async (id) => {
        eventButton2.value = 'Removing...'
        const data = {
            event_id: id,
            action: 'unsave'
        }
        const res = await store.dispatch('updateEvent', data)
        if (res.success) {
            eventButton2.value = res.msg
        } else {
            eventButton2.value = res.err
        }
    }

    const deletePost = async (id) => {
        const res = await store.dispatch('deletePost', id)
        if (res.success) {
            postCheck.value.status = res.msg
        } else {
            postCheck.value.status = await store.getters.getPostState
            postCheck.value.err = await store.getters.postError
        }
    }


    return {
        user,
        saveEvent,
        unsaveEvent,
        eventButton,
        eventButton2,
        deletePost,
        postCheck
    }
  }
}
</script>