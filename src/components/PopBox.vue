<template>
  <transition enter-active-class="animation-popBox-bg-in" leave-active-class="animation-popBox-bg-out">
    <div v-if="visible" class="pop-box">
      <div class="pop-box-bg"></div>
      <div v-click-outside="close" class="pop-box-content animation-popBox-in animation-popBox-out">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import '@/style/animation.scss'
export default {
  name: 'PopBox',
  props: {
    visible: {
      type: Boolean,
      defalut: false,
    },
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    close() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss">
.pop-box {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .pop-box-bg {
    z-index: 998;
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(97, 97, 97, 0.1);
    backdrop-filter: 20px;
  }

  .pop-box-content {
    z-index: 999;
    background-image: linear-gradient(45deg, #cc6aa5, #3e91cc);
    background-size: 200% 100%;
    box-shadow: 0 0 8px 2px rgba(54, 54, 54, 0.1);
    width: 80%;
    max-width: 500px;
  }
}
</style>
