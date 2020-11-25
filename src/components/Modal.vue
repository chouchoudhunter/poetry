<template>
  <transition
    enter-active-class="animation-modal-in"
    leave-active-class="animation-modal-out"
  >
    <div v-if="visible" class="modal">
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
// import Event from '@/model/VueEvent'
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
  mounted() {
    // Event.$on('close-all-modal', () => {
    //   console.log(123)
    //   this.close()
    // })
    // Event.$emit('close-all-modal')
    console.log('mounted')
  },
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
.modal {
  position: absolute;
  z-index: 101;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;

  .modal-bg {
    height: 100%;
    width: 100%;

    .modal-content {
      pointer-events: auto;
      border-radius: 20px 20px 0 0;
      height: 90%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.15);

      &::before {
        background: url('../assets/bg.jpg') fixed no-repeat center center / cover;
        filter: blur(10px);
        margin: -30px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: ' ';
        z-index: -1;
      }

      .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        i {
          margin: 15px;
          font-size: 18px;
          display: inline-block;
          position: relative;
          z-index: 110;
          color: black;
        }
      }
    }
  }
}
</style>
