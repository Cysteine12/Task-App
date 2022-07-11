<template>
<div>

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome New User!</h1>
                                    </div>
                                    <StatCheck v-if="authCheck" :statCheck="authCheck" />
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
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" v-model="form.password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" required>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" v-model="form.confirm_password" class="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" required>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </button>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <router-link to="/login">Already have an Account? Login!</router-link>
                                        <a class="small" href="register.html"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</div>
</template>

<script>
import StatCheck from '@/components/StatCheck.vue'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'

export default {
  components: {
    StatCheck
  },
  setup() {
    const form = ref({
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      phone: ''
    })
    const authCheck = ref({
      status: '',
      err: ''
    })

    onMounted(() => {
      document.body.classList.add('bg-gradient-primary')
    })

    onUnmounted(() =>{
      document.body.classList.remove('bg-gradient-primary')
    })

    const router = useRouter()
    const store = useStore()

    const formSubmit = async () => {
      // Validate form data

      const checkForm = ref(false)
      if (form.value.password === form.value.confirm_password) {
        if (form.value.password.length > 6) {
          checkForm.value = true
        } else {
          authCheck.value.err = 'Password length must be above 6 characters'
          checkForm.value = false
        }
      } else {
        authCheck.value.err = 'Passwords do not match'
        checkForm.value = false
      }

      // Register Account
      if (checkForm.value) {
        
        authCheck.value.status = 'Registering...'
        authCheck.value.err = ''
        const res = await store.dispatch('register', form.value)
  
        if (res.success === true) {
          authCheck.value.status = res.msg + ' Redirecting...'

          setTimeout(() => {
            router.push({ name: 'Login'})
          }, 3000)
        } else {
          authCheck.value.status = await store.getters.authState
          authCheck.value.err = res.err
        }
      }
    }

    return {
      form,
      formSubmit,
      authCheck
    }
  }
}
</script>