<template>
<MainLayout header="Edit Photo">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Edit Photo</h6>
              </div>
              <div class="card-body">
                <div class="p-4">
                    <StatCheck v-if="statCheck" :statCheck="statCheck" />
                    <form class="user" @submit.prevent="formSubmit" enctype="multipart/form-data">
                        <div class="form-control">
                            <label for="img-file">Upload Image</label>
                            <input type="file" ref="photo" class="form-control-file" required/>
                        </div>
                        <br>
                        <br>
                        <button type="submit" class="btn btn-primary btn-user btn-block">
                            Update Photo
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
import { onMounted, ref } from 'vue'
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
    const photo = ref(null)
    const user = ref(null)
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
    })

    const formSubmit = async () => {
      // Send Post
        let formData = new FormData();
        formData.append('photo', photo.value.files[0])
        const data = {
          id: user.value._id,
          formData: formData
        }
        statCheck.value.status = 'Updating...'
        statCheck.value.err = ''
        const res = await store.dispatch('updateProfilePhoto', data)

        if (res.success === true) {
          statCheck.value.status = res.msg + ' Redirecting..'
          setTimeout(() => {
            router.go(-1)
          }, 3000)
        } else {
          statCheck.value.status = await store.getters.authState
          statCheck.value.err = res.err
        }
    }


    return {
      photo,
      formSubmit,
      statCheck
    }
  }
}
</script>