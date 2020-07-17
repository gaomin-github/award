<template>
  <div class="sidebar-wrapper">
    <div v-for="item in menuList" :key="item.id">
      <menu-node :nodeParam="item" />
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
      menuList: []
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
        params: {
          // userId: userInfo.userId
        }
      });
      console.log(res, 39);
      if (res.status === 200 && res.data.status) {
        this.menuList = res.data;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>