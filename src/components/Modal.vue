<template>
  <transition enter-active-class="animation-modal-in" leave-active-class="animation-modal-out">
    <div v-show="visible" class="modal">
      <div class="modal-bg">
        <div class="modal-content">
          <div class="modal-header">
            <i
              class="el-icon-close"
              :class="{'animation-rotate-right':isCloseHover,'animation-rotate-left':!isCloseHover}"
              @mouseenter="switchCloseHover(true)"
              @mouseleave="switchCloseHover(false)"
              @click="close()"
            ></i>
          </div>
          <div class="modal-main">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import '@/style/animation.scss'
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
    return { isCloseHover: false }
  },
  computed: {},
  methods: {
    switchCloseHover(status) {
      this.isCloseHover = status
    },
    close() {
      this.$emit('update:visible', false)
      this.$emit('close-modal')
    },
  },
}
</script>
<style lang="scss">
.modal{
  position: absolute;
  z-index: 101;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  .modal-bg{
    height: 100%;
    width: 100%;
    .modal-content{
      pointer-events: auto;
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
          margin: 15px;
          font-size: 18px;
          display: inline-block;
          position: relative;
          z-index: 110;
        }
      }
    }
  }
}
</style>
