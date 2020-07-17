<template>
  <div :class="[`menu-node-wrapper`, `menu-${nodeParam.path?nodeParam.path.length:0}`]">
    <div class="label" @click="handleToggle">
      <!-- {{nodeParam.name}} -->
      ,{{nodeParam.title}}
      </div>
    <template v-if="nodeParam.children&&expandStatus">
      <menu-node v-for="item in nodeParam.children" :key="item.id" :nodeParam="item"></menu-node>
    </template>
  </div>
</template>
<script>
export default {
  name: "menuNode",
  props: {
    nodeParam: {
      type: Object,
      default() {
        return {
          id: "",
          name: "",
          title: "",
          children: []
        };
      }
    }
  },
  data() {
    return {
      expandStatus: true
    };
  },
  mounted() {},
  methods: {
    handleToggle() {
      this.expandStatus = !this.expandStatus;
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-0,
.menu-1,
.menu-2,
.menu-3,
.menu-4 {
  line-height: 36px;
  padding-left: 15px;
}
.menu-0 {
  color: rgba(33, 33, 33, 1);
  font-size: 16px;
  font-weight: 500;
}
</style>