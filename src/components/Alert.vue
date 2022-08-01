<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="false">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div class="modal-body">Select "lgiiiii" below if you are ready to end your current session.</div>
              <div class="modal-footer">
                  <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <button @click.prevent="buttonAction" class="btn btn-primary" data-dismiss="modal">Logout</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
 name: 'Alert',
  props: {},
  setup(props) {

    const user = ref(null)

    const buttonAction = async () => {
      console.log('hello');
    }

    return {
      user,
      buttonAction
    }
  }
}
</script>

<style>

</style>