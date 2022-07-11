<template>
<MainLayout header="Edit Post">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Edit Post</h6>
              </div>
              <div v-if="form" class="card-body">
                <div class="p-4">
                    <StatCheck v-if="postCheck" :statCheck="postCheck" />
                    <form class="user" @submit.prevent="formSubmit">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" v-model="form.title" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="Title" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" v-model="form.course" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Course" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="form.notes" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Your Notes" required>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" v-model="form.teacher" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Teacher" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="datetime" v-model="form.deadline" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Deadline (04/01/2022)" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-user btn-block">
                            Update Post
                        </button>
                    </form>
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
    const form = ref({
      title: '',
      course: '',
      notes: '',
      teacher: '',
      deadline: '',
      postId: '',
    })
    const postCheck = ref({
      status: '',
      err: ''
    })

    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getPost', props.id)

      postCheck.value.status = await store.getters.authState
      form.value = await store.getters.post
    })

    const formSubmit = async () => {
      // Send Post
        postCheck.value.status = ''
        postCheck.value.err = ''
        form.value.postId = props.id
        
        const res = await store.dispatch('updatePost', form.value)
  
        if (res.success === true) {
          postCheck.value.status = res.msg
        } else {
          postCheck.value.status = await store.getters.authState
          postCheck.value.err = res.err
        }
    }


    return {
      form,
      formSubmit,
      postCheck
    }
  }
}
</script>