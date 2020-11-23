<template>
  <div class="like-icon">
    <div class="love-icon">
      <input id="like-toggle" type="checkbox" @input="onChange($event.target.checked)" />
      <label for="like-toggle" class="heart"> </label>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="ring"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LikeIcon',
  data() {
    return {}
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    },
  },
}
</script>

<style scoped lang="scss">
$heart-color: #b7c0c5;
$heart-active-color: hsl(354deg 81% 63%);

.like-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  /* 爱心样式 */
  .love-icon {
    position: relative;
    width: 16px;
    height: 16px;
    pointer-events: auto;

    .heart {
      position: absolute;
      width: 100%;
      height: 100%;
      background: $heart-color;
      cursor: pointer;
      transform: rotate(-45deg);
      left: 0;
      top: 0;

      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
      }

      &::before {
        top: -50%;
        right: 0;
      }

      &::after {
        right: -50%;
        top: 0;
      }
    }
  }

  /* 线的样式 */
  .lines {
    position: absolute;
    top: 4px;
    z-index: 1;
    width: 16px;
    height: 16px;
    pointer-events: none;

    .line {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 1px;
      opacity: 0.6;

      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $heart-color;
        transform: scaleX(0);
        transform-origin: left;
      }

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          transform: rotate($i * 60deg + 30deg) translate(36px);
        }
      }
    }
  }

  /** 圈圈 */
  // .ring {
  //   position: absolute;
  //   z-index: -1;
  //   top: 50%;
  //   left: 50%;
  //   width: 30px;
  //   height: 30px;
  //   //background: transparent;
  //   border-radius: 50%;
  //   //opacity: 0.3;
  //   pointer-events: none;
  //   background-color: chartreuse;

  //   &::before {
  //     position: absolute;
  //     content: "";
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     //opacity: 0.3;
  //     border-radius: inherit;
  //     pointer-events: none;
  //     box-sizing: border-box;
  //     border: yellow 5px solid;
  //   }
  // }

  /* 装载动画 */
  input {
    position: absolute;
    opacity: 0;

    &:checked {
      & ~ {
        .heart {
          background: $heart-active-color;
          animation: scale-out-elastic 1.2s ease-out reverse forwards;
        }

        .lines {
          .line::before {
            background-color: $heart-active-color;
            animation: slide-left-right 0.4s ease-in forwards;
          }
        }

        // .ring {
        //   background: var(--heart-color);
        //   animation: scale-out-bigger 0.75s cubic-bezier(0, 1, 0.5, 1) forwards;

        //   &::before {
        //     animation: scale-out 0.75s cubic-bezier(0, 1, 0.5, 1) forwards;
        //   }
        // }
      }
    }
  }
}

/* 动画 */
@keyframes scale-out-elastic {
  0% {
    transform: rotate(-45deg) scale(1);
  }

  4% {
    transform: rotate(-45deg) scale(1);
  }

  8% {
    transform: rotate(-45deg) scale(1);
  }

  14% {
    transform: rotate(-45deg) scale(1);
  }

  18% {
    transform: rotate(-45deg) scale(1);
  }

  26% {
    transform: rotate(-45deg) scale(1.01);
  }

  28% {
    transform: rotate(-45deg) scale(1.01);
  }

  40% {
    transform: rotate(-45deg) scale(0.98);
  }

  42% {
    transform: rotate(-45deg) scale(0.98);
  }

  56% {
    transform: rotate(-45deg) scale(1.05);
  }

  58% {
    transform: rotate(-45deg) scale(1.04);
  }

  72% {
    transform: rotate(-45deg) scale(0.87);
  }

  86% {
    transform: rotate(-45deg) scale(1.37);
  }

  100% {
    transform: rotate(-45deg) scale(0);
  }
}

@keyframes slide-left-right {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform-origin: right;
  }
}

@keyframes scale-out {
  to {
    transform: scale(1.02);
  }
}

@keyframes scale-out-bigger {
  0% {
    border: black 0 solid;
    margin-top: -15px;
    margin-left: -15px;
  }

  50% {
    border: black 5px solid;
    margin-top: -23px;
    margin-left: -20px;
  }

  100% {
    border: black 0 solid;
    margin-top: -15px;
    margin-left: -15px;
  }
}
</style>
