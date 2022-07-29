<template>
<MainLayout header="About Us">
  <template #body-content>
    <div class="row">
      <div class="col-xl-8 col-lg-7">
          
          <div class="profile-container d-flex justify-content-center align-items-center">
            <div class="profile-card">
              <div class="card-body">
                A Full Task management app with full CRUD functionality. <br>
Built with Mongo as database, Express.js for API logic and Vue.js with Vuex for front-end, designed with Bootstrap all running in Node.js environment.
<br><br>
*BACKEND*<br>
App also includes many dependencies such as jsonwebtoken, axios, multer, aws-sdk, etc. 
<br>
App runs 3 basic API calls: Auth, Post & User API we with create, retrieve, update and delete functions. 
<br><br>
*FRONTEND*<br>
App major functionality through Vuex Store includes:<br>
- Register new User & Login Pages<br>
- Get, Edit, and Delete Personal Profile. <br>
- Get Personal timeline with your post and followed user's post. <br>
- Get Personal posts. <br>
- Create, Get, Edit and Delete Post.<br>
- Get friends profile.<br>
- Get friends timeline and posts. <br>
- Save and Unsave Events.<br>
- Send and Get Chats<br>
- Follow and Unfollow Users.<br>
- Get Notifications on new Followers. <br>
- Get Message alerts.<br>
<br>
<br>
To run application:<br>

In the server directory : "npm install && npm run dev"<br>
In the client directory : "npm install && npm run serve"<br>
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

export default {
 name: 'About',
  components: {
    MainLayout
  },
  setup() {

  }
}
</script>

<style scoped>
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

.user{
position: relative;
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

</style>