<template>
<div class="body-toggle">

  <!-- Page Wrapper -->
  <div id="wrapper">

      <!-- Sidebar -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          <!-- Sidebar - Brand -->
          <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
              <div class="sidebar-brand-icon rotate-n-15">
                  <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">Task App</div>
          </router-link>

          <!-- Divider -->
          <hr class="sidebar-divider my-0">

          <!-- Nav Item - Dashboard -->
          <li class="nav-item active">
              <router-link to="/" class="nav-link">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Home</span></router-link>
          </li>

          <!-- Divider -->
          <hr class="sidebar-divider">

          <!-- Heading -->
          <div class="sidebar-heading">
              Interface
          </div>

          <!-- Nav Item - Pages Collapse Menu -->
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  <i class="fas fa-fw fa-cog"></i>
                  <span>Dashboard</span>
              </a>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">My Dashboard:</h6>
                      <router-link to="/post/create" class="collapse-item">Create New Post</router-link>
                      <router-link to="/dashboard" class="collapse-item">My Posts</router-link>
                      <router-link to="/my-events" class="collapse-item">My Events</router-link>
                  </div>
              </div>
          </li>

          <!-- Nav Item - Utilities Collapse Menu -->
          <li class="nav-item">
              <router-link to="/profile" class="nav-link" aria-expanded="true">
                  <i class="fas fa-fw fa-wrench"></i>
                  <span>Profile</span>
              </router-link>
          </li>

          <li class="nav-item">
              <router-link to="/my-chats" class="nav-link" aria-expanded="true">
                  <i class="fas fa-fw fa-users"></i>
                  <span>Chats</span>
              </router-link>
          </li>

          <!-- Divider -->
          <hr class="sidebar-divider">

          <!-- Heading -->
          <div class="sidebar-heading">
              Addons
          </div>

          <!-- Nav Item - Pages Collapse Menu -->
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                  aria-expanded="true" aria-controls="collapsePages">
                  <i class="fas fa-fw fa-folder"></i>
                  <span>Others</span>
              </a>
              <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <router-link to="/about" class="collapse-item">About</router-link>
                      <button class="btn collapse-item" data-toggle="modal" data-target="#logoutModal">
                        Logout
                      </button>
                  </div>
              </div>
          </li>

          <!-- Divider -->
          <hr class="sidebar-divider d-none d-md-block">

          <!-- Sidebar Toggler (Sidebar) -->
          <div class="text-center d-none d-md-inline">
              <button @click.prevent="sidebarToggle" class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

          <!-- Sidebar Message -->
          <div class="sidebar-card d-none d-lg-flex">
              <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
              <p class="text-center mb-2">
                <strong>TASK APP</strong> is packed with premium features for your convenience and learning!
              </p>

          </div>

      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

          <!-- Main Content -->
          <div id="content">

              <!-- Topbar -->
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                  <!-- Sidebar Toggle (Topbar) -->
                  <button @click.prevent="sidebarToggle" id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                      <i class="fa fa-bars"></i>
                  </button>

                  <!-- Topbar Search -->
                  <form
                      @submit.prevent="searchForm"
                      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                      <div class="input-group">
                          <input v-model="searchInput" type="text" class="form-control bg-light border-0 small" placeholder="Search for users..."
                              aria-label="Search" aria-describedby="basic-addon2" required>
                          <div class="input-group-append">
                              <button class="btn btn-primary" type="submit">
                                  <i class="fas fa-search fa-sm"></i>
                              </button>
                          </div>
                      </div>
                  </form>

                  <!-- Topbar Navbar -->
                  <ul class="navbar-nav ml-auto">

                      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                      <li class="nav-item dropdown no-arrow d-sm-none">
                          <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fas fa-search fa-fw"></i>
                          </a>
                          <!-- Dropdown - Messages -->
                          <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                              aria-labelledby="searchDropdown">
                              <form 
                                @submit.prevent="searchForm"
                                class="form-inline mr-auto w-100 navbar-search"
                              >
                                  <div class="input-group">
                                      <input v-model="searchInput" type="text" class="form-control bg-light border-0 small"
                                          placeholder="Search for..." aria-label="Search"
                                          aria-describedby="basic-addon2" required>
                                      <div class="input-group-append">
                                          <button class="btn btn-primary" type="submit">
                                              <i class="fas fa-search fa-sm"></i>
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </li>

                      <!-- Nav Item - Alerts -->
                      <li v-if="notifications" class="nav-item dropdown no-arrow mx-1">
                          <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fas fa-bell fa-fw"></i>
                              <!-- Counter - Alerts -->
                              <span class="badge badge-danger badge-counter">{{ notifications.length }}+</span>
                          </a>
                          <!-- Dropdown - Alerts -->
                          <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="alertsDropdown">
                              <h6 class="dropdown-header">
                                  My Notifications
                              </h6>
                              <router-link to="/my-notifications" v-for="notification in notifications" :key="notification.index" class="dropdown-item d-flex align-items-center">
                                  <div class="mr-3">
                                      <div class="icon-circle bg-primary">
                                          <i class="fas fa-user text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div class="small text-gray-500">{{ getTime(notification.createdAt) }} · {{ getDate(notification.createdAt) }}</div>
                                      <span :class="{ 'font-weight-bold': !notification.seen }">{{ notification.body }}</span>
                                  </div>
                              </router-link>
                              <router-link to="/my-notifications" class="dropdown-item text-center small text-gray-500">Show All Alerts</router-link>
                          </div>
                      </li>

                        <!-- Nav Item - Messages -->
                      <li v-if="chats" class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">{{ chats.length }}</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    My Messages
                                </h6>
                                <router-link 
                                    :to="`/chat/${getFriendId(chat)}`"
                                    v-for="chat in chats"
                                    :key="chat.index"
                                    class="dropdown-item d-flex align-items-center"
                                >
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" :src="chat.photo"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">{{ chat.message }}...</div>
                                        <div class="small text-gray-500">
                                            {{ chat.name }} ·  {{ getTime(chat.createdAt) }} | {{ getDate(chat.createdAt) }}
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="/my-chats" class="dropdown-item text-center small text-gray-500">Read More Messages</router-link>
                            </div>
                      </li>

                      <div class="topbar-divider d-none d-sm-block"></div>

                      <!-- Nav Item - User Information -->
                      <li v-if="user" class="nav-item dropdown no-arrow">
                          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ user.name }}</span>
                              <img class="img-profile rounded-circle"
                                  :src="user.photo">
                          </a>
                          <!-- Dropdown - User Information -->
                          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="userDropdown">
                              <router-link to="/profile" class="dropdown-item" href="#">
                                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Profile
                              </router-link>
                              <div class="dropdown-divider"></div>
                              <button class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Logout
                              </button>
                          </div>
                      </li>

                  </ul>

              </nav>
              <!-- End of Topbar -->

              <!-- Begin Page Content -->
              <div class="container-fluid">

                  <!-- Page Heading -->
                  <div class="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 class="h3 mb-0 text-gray-800">{{ header }}</h1>
                      <router-link to="/post/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                              class="fas fa-download fa-sm text-white-50"></i> Create New Post</router-link>
                  </div>

                  <!-- Content Row -->
                  <slot name="body-content"></slot>

              </div>
              <!-- /.container-fluid -->

          </div>
          <!-- End of Main Content -->

          <!-- Footer -->
          <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                  <div class="copyright text-center my-auto">
                      <span>Copyright &copy; Your Website 2021</span>
                  </div>
              </div>
          </footer>
          <!-- End of Footer -->

      </div>
      <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <button class="btn scroll-to-top rounded" @click.prevent="scrollToTop">
      <i class="fas fa-angle-up"></i>
  </button>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div class="modal-footer">
                  <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <button @click.prevent="logoutForm" class="btn btn-primary" data-dismiss="modal">Logout</button>
              </div>
          </div>
      </div>
  </div>

</div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'MainLayout',
  props: {
      header: {
          type: String,
          default: ''
      }
  },
  setup() {
    const navigation = ref([])
    const user = ref(null)
    const searchInput = ref(null)
    const notifications = ref(null)
    const chats = ref([])
    const authCheck = ref({
      status: '',
      err: ''
    })
    const statCheck = ref({
      status: '',
      err: ''
    })

    const router = useRouter()
    const store = useStore()

    const isLoggedIn = computed(() => store.getters.isLoggedIn)
    onMounted(async () => {
      if (isLoggedIn.value) {
        sidebarToggle()

        await store.dispatch('getProfile')
  
        authCheck.value.status = await store.getters.authState
        user.value = await store.getters.user

        const res = await store.dispatch('getNotificationAlerts')
        notifications.value = await res.data

        await store.dispatch('getChatListAlerts')
        chats.value = await store.getters.chats
        
        statCheck.value.status = await store.getters.getPostsState
      }
    })

    const getFriendId = (chat) =>{
        if (chat.userA == user.value._id) {
            return chat.userB
        } else {
            return chat.userA
        }
    }

    const getDate = (datetime) =>{
        const newDate = new Date(datetime).toString()
        return newDate.substring(0, 10)
    }
    const getTime = (datetime) =>{
        const newDate = new Date(datetime).toString()
        return newDate.substring(16, 21)
    }

    const searchForm = async () => {
        router.push({ name: 'SearchResult', params: { text: searchInput.value }})
    }

    const sidebarToggle = async () => {
      var body = document.getElementsByClassName('body-toggle')[0]
      body.classList.toggle('sidebar-toggled')
      var sidebar = document.getElementById('accordionSidebar')
      sidebar.classList.toggle('toggled')
    }
    const scrollToTop = async () => {
      window.scrollTo(0, 0)
    }
    const logoutForm = async () => {
      await store.dispatch('logout')
    }

    return {
      navigation,
      isLoggedIn,
      user,
      searchForm,
      searchInput,
      notifications,
      chats,
      getFriendId,
      getDate,
      getTime,
      sidebarToggle,
      scrollToTop,
      logoutForm
    }
  },
}
</script>


<style>

</style>
