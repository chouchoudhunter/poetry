<template>
  <div v-if="visible" class="modal">
    <div class="modal-bg">
      <div class="modal-content">
        <div class="modal-header"><i class="el-icon-close"></i></div>
        <div class="modal-main">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    // 可见性
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss">
.modal{
  position: fixed;
  z-index: 9;
  height: 100%;
  width: 100%;
  background-color: grey;
}
</style>
