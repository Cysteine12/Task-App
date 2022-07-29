<template>
<MainLayout header="Edit Profile">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Edit Profile</h6>
              </div>
              <div v-if="user" class="card-body">
                <div class="p-4">
                    <StatCheck v-if="statCheck" :statCheck="statCheck" />
                    <form class="user" @submit.prevent="formSubmit">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" v-model="form.name" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="Full Name" required>
                            </div>
                            <div class="col-sm-6">
                                <input type="number" v-model="form.phone" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Phone Number" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="form.email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-user btn-block">
                            Update Account
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
  setup() {
      // Form functionality
    const user = ref(null)
    const form = ref({
      title: '',
      course: '',
      notes: '',
      teacher: '',
      deadline: ''
    })
    const statCheck = ref({
      status: '',
      err: ''
    })

    const router = useRouter()
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getProfile')

      statCheck.value.status = await store.getters.authState
      user.value = await store.getters.user
      form.value = await store.getters.user
    })

    const formSubmit = async () => {
      // Send Post
        const data = {
          id: user.value._id,
          formData: form.value
        }
        statCheck.value.status = 'Updating...'
        statCheck.value.err = ''
        const res = await store.dispatch('updateProfile', data)
  
        if (res.success === true) {
          statCheck.value.status = res.msg + ' Redirecting...'
          setTimeout(() => {
            router.push({ name: 'Profile' })
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
      user
    }
  }
}
</script>