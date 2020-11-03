<template>
  <div v-if="visible" class="modal">
    <div class="modal-bg">
      <div class="modal-content">
        <div class="modal-header"><i class="el-icon-close animation-rotate" :class="{}"></i></div>
        <div class="modal-main">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/style/animation.css'
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
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  .modal-bg{
    height: 100%;
    width: 100%;
    .modal-content{
      box-shadow: 0 0 7px 1px rgba(211, 211, 211, 0.815);
      border-radius: 20px 20px 0 0;
      background-color: white;
      height: 90%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      .modal-header{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        i{
          padding: 15px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
