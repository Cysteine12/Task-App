<template>
<MainLayout header="Create New Post">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Create New Post</h6>
              </div>
              <div class="card-body">
                <div class="p-4">
                    <StatCheck v-if="postCheck" :statCheck="postCheck" />
                    <form class="user" @submit.prevent="formSubmit">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" v-model="form.title" class="form-control" id="exampleFirstName"
                                    placeholder="Title" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" v-model="form.course" class="form-control" id="exampleLastName"
                                    placeholder="Course" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea v-model="form.notes" rows="6" placeholder="Your Notes" class="form-control" required>
                            </textarea>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" v-model="form.teacher" class="form-control"
                                    id="exampleInputPassword" placeholder="Teacher" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="datetime" v-model="form.deadline" class="form-control"
                                    id="exampleRepeatPassword" placeholder="Deadline (04/01/2022)" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-user btn-block">
                            Send Post
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
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
 name: 'Home',
  components: {
    MainLayout,
    StatCheck
  },
  setup() {
    // Form functionality
    const form = ref({
      title: '',
      course: '',
      notes: '',
      teacher: '',
      deadline: ''
    })
    const postCheck = ref({
      status: '',
      err: ''
    })

    const router = useRouter()
    const store = useStore()

    const formSubmit = async () => {
      // Send Post
        postCheck.value.status = 'Uploading..'
        const res = await store.dispatch('postPost', form.value)
  
        if (res.success === true) {
          postCheck.value.status = res.msg + '. Redirecting..'
          setTimeout(() => {
            router.push({ name: 'Dashboard'})
          }, 3000)
        } else {
          postCheck.value.status = await store.getters.authState
          postCheck.value.err = res.err
        }
    }


    return {
      form,
      formSubmit,
      postCheck,
    }
  }
}
</script>