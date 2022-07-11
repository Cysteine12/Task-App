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
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <StatCheck v-if="authCheck" :statCheck="authCheck" />
                                    <form class="user" @submit.prevent="formSubmit">
                                        <div class="form-group">
                                            <input type="email" v-model="form.email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model="form.password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <hr>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>                                        
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <router-link to="/register">Create an Account!</router-link>
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
      email: '',
      password: ''
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


    const store = useStore()

    const formSubmit = async () => {
      authCheck.value = {
          status: 'loading',
          err: ''
      }
      const res = await store.dispatch('login', form.value)

      if (res.success === true) {
        authCheck.value.status = res.msg
        location.reload()
        
      } else {
        authCheck.value.status = await store.getters.authState
        authCheck.value.err = res.err
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

<style>

</style>