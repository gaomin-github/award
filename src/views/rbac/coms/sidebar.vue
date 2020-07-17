<template>
  <div class="sidebar-wrapper">
    <template v-if="hasSpread">

    <div v-for="item in menuList" :key="item.id">
      <menu-node :nodeParam="item" />
    </div>
    </template>
    <div class="btn" @click="changeStatus">
      <template v-if="hasSpread">《《</template>
      <template v-else>》》</template>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import request from "request";
export default {
  components: {
    menuNode: () => import("./menuNode")
  },
  data() {
    return {
      menuList: [],
      hasSpread: true
    };
  },
  computed: {
    ...mapState("rbac", ["userInfo"]),
    ...mapGetters("rbac", ["getUserInfo"])
  },
  mounted() {
    console.log("sidebar mounted");
    this._initPermissionRoute();
  },
  methods: {
    async _initPermissionRoute() {
      let userInfo = this.getUserInfo;
      console.log(userInfo, 22);
      let res = await request({
        url: "/backend_rbac/userAuth",
        method: "get",
        params: {}
      });
      console.log(res, 38);
      if (res.status === 200 && res.data) {
        this.menuList = res.data;
        return;
      }
    },
    changeStatus() {
      this.hasSpread = !this.hasSpread;
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-wrapper {
  width: 100%;
  height: 100%;
  font-size: 24px;
  position: relative;
  padding-right:50px;
}
.btn {
  position: absolute;
  right: 5px;
  top: 10px;
  padding: 5px 10px;
  font-size: 18px;
}
</style>