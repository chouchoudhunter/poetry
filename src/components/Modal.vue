<template>
  <transition
    enter-active-class="animation-modal-in"
    leave-active-class="animation-modal-out"
  >
    <div v-if="visible" class="modal">
      <div class="modal-bg">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-header-left">
              <slot name="header-left"></slot>
            </div>
            <div class="modal-header-right">
              <i
                class="el-icon-close"
                :class="{'animation-rotate-right':isCloseHover,'animation-rotate-left':!isCloseHover}"
                @mouseenter="switchCloseHover(true)"
                @mouseleave="switchCloseHover(false)"
                @click="close()"
              ></i>
            </div>
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
      box-shadow: 0 0 8px 2px rgba(54, 54, 54, 0.1);
      background-image: linear-gradient(45deg, #3e91cc, #2dcca7);
      background-size: 200% 100%;

      .modal-main {
        height: 100%;
      }

      .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .modal-header-left,
        .modal-header-right {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
        }

        .modal-header-left {
          justify-content: flex-start;
        }

        .modal-header-right {
          justify-content: flex-end;
        }

        i {
          margin: 15px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
