<template>
  <div class="alert fade show" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true" style="display: block; padding-right: 17px;">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{ alertData.header }}</h5>
                  <button @click.prevent="$emit('closeAlert')" class="close" type="button" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div class="modal-body">{{ alertData.body }}</div>
              <div class="modal-footer">
                  <button @click.prevent="$emit('closeAlert')" class="btn btn-secondary" type="button" data-dismiss="alert">Cancel</button>
                  <button @click.prevent="$emit('successAlert')" class="btn btn-primary" data-dismiss="modal">{{ alertData.button }}</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
 name: 'Alert',
  props: {
    alertData: {
      type: Object,
      required: true
    }
  },
  setup() {

    return {
    }
  }
}
</script>

<style>
.alert {
  position: absolute;
  top: 0;

}
</style>