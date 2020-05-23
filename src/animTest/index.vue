<template>
  <div class="anim-wrapper">
    <div v-for="com in comList" :key="com" @click="changeCom(com)" class="bar">
      {{ com }}
    </div>
    <div class="item">
      <transition :name="transitionName" @enter="handleEnter">
        <component :is="curCom" class="item-con"></component>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comList: ["aCom", "bCom", "cCom"],
      curCom: "aCom",
      animDuration: 0,
      transitionName: "",
    };
  },
  components: {
    aCom: () => import("./com/aCom.vue"),
    bCom: () => import("./com/bCom.vue"),
    cCom: () => import("./com/cCom.vue"),
  },
  methods: {
    changeCom(param) {
      this.curCom = param;
    },
    handleEnter() {
      this.transitionName = "com";
      this.animDuration = "1000";
      console.log("handleEnter", 31);
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  display: block;
  overflow: hidden;
}
.anim-wrapper {
  width: 100%;
  height: 100%;
}
.bar {
  line-height: 38px;
}
.item {
  width: 300px;
  height: 100px;
  position: relative;
}
.item-con {
  position: absolute;
  width: 100%;
  height: 100%;
}
.com-enter {
  transform: translate(0, 100%);
}
.com-leave-to {
  transform: translate(0, -100%);
}
.com-enter-to,
.com-leave {
  transform: translate(0, 0);
}
.com-enter-active {
  transition: all 2s ease;
}
.com-leave-active {
  transition: all 2s ease-in;
}
</style>
