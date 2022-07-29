<template>
  <nav class="my-3" aria-label="Page navigation example">
    <ul v-if="pagesIndex !== ''" class="pagination justify-content-center">
        <li 
            :class="{ disabled: page.currentPage === 1 }"
            class="page-item"
        >
            <router-link :to="`${currentRoute}/${page.currentPage-1}`" class="page-link">Previous</router-link>
        </li>
        <li 
            v-for="pageIndex in pagesIndex"
            :key="pageIndex.index"
            class="page-item"
        >
            <router-link 
                :to="`${currentRoute}/${pageIndex}`" 
                :class="{ current: page.currentPage === pageIndex }"
                class="page-link"
            >
                {{ pageIndex }}
            </router-link>
        </li>
        <li 
            :class="{ disabled: page.currentPage === page.totalPage }"
            class="page-item"
        >
            <router-link :to="`${currentRoute}/${page.currentPage+1}`" class="page-link">Next</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Pagination',
  props: {
    pagination: {
          type: Object
      }
  },
  setup(props) {
    const currentRoute = ref(null)
    const path = useRouter().currentRoute.value.fullPath
    if (path === '/') {
        currentRoute.value = ''
    } else {
        currentRoute.value = path
    }
    
    const page = ref({
        currentPage: props.pagination.currentPage,
        totalCount: props.pagination.totalCount,
        perPage: props.pagination.perPage,
        totalPage: Math.round(props.pagination.totalCount/props.pagination.perPage)
    })

    watchEffect(() => {
        page.value.currentPage = props.pagination.currentPage
    })

    let pagesIndex = []
    for (let i = 1; i <= page.value.totalPage; i++) {
        pagesIndex.push(i)
    }


    return {
        page,
        pagesIndex,
        currentRoute
    }
  }
}
</script>

<style>
.current {
    background: #2b60d1;
    color: #fff;
}
</style>