<template>
  <section class="modal-wrapper">
    <!-- <transition name="mask" mode="in-out"> -->
    <ui-mask v-if="show"> </ui-mask>
    <!-- </transition> -->
    <transition :name="dir" mode="out-in">
      <!-- <template > -->
      <section
        v-if="show"
        class="modal modal-center"
        :style="`width:${widthP}`"
      >
        <slot></slot>
      </section>
      <!-- </template> -->
    </transition>
  </section>
</template>
<script>
import uiMask from "./ui-mask.vue";

export default {
  props: {
    dir: {
      type: String,
      default: "bottom",
    },
    title: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
    widthP: {
      type: String,
      default: "80%",
    },
  },
  components: {
    uiMask,
  },
  model: {
    prop: "show",
    event: "close",
  },
  mounted() {
    console.log(this.dir, 45);
  },
  methods: {
    closeModal() {
      console.log("close current modal");
      this.$emit("close", false);
      console.log(`current:${this.show}`);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  display: block;
  box-sizing: border-box;
}
.modal {
  position: fixed;
  background: #f8f8f8;
  padding: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  &-header {
    flex-shrink: 1;
    margin-top: 28px;
    display: flex;
  }
  &-title {
    font-size: 36px;
    color: #000000;
    height: 41px;
    line-height: 41px;
    flex: 1;
  }
  &-close {
    width: 20px;
    height: 0px;
    padding-top: 20px;
    margin-top: 0px;
    flex-shrink: 1;
    background: url("./imgs/close_btn.png") 0 0 no-repeat;
    background-size: 100% auto;
  }
  &-content {
    flex: 1;
    flex-shrink: 1;
    overflow-y: scroll;
  }
  &-content::-webkit-scrollbar {
    display: none;
  }
}
.modal-top {
  top: 0px;
}
.modal-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.mask-enter,
.mask-leave-to {
  opacity: 0;
}
.mask-enter-to,
.mask-leave {
  opacity: 1;
}
.mask-enter-active,
.mask-leave-active {
  transition: opacity 1s;
}

.center-enter,
.center-leave-to {
  .modal {
    width: 0px;
    height: 0px;
    opacity: 0;
    background: red;
  }
}
.center-enter-to,
.center-leave {
  .modal {
    width: 100%;
    height: 100%;
    opacity: 1;
    background: blue;
  }
}
.center-enter-active {
  .modal {
    transition: all 3s ease;
  }
}
</style>
