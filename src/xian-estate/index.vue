<template>
  <div class="xianEstate-wrapper">
    <email v-if="showEmailModal" @handleEmail="handleEmail" />
    <!-- <div class="test">
          <div @click="sendEmail">email test</div>
      </div> -->

    <div class="header">
      高新周边楼盘参考
      <ui-switch
        class="switch-btn"
        :switchBool="switchBool"
        @changeStatus="handleSwitchStatus"
      ></ui-switch>
    </div>
    <div class="content">
      <div
      class="building"
      v-if="areaList && areaList.length > 0"
      ref="building"
      >
          <estate-info-default v-for="(item,key) in defaultListSize" :key="key" v-show="showDefaultList"></estate-info-default>
          <div class="building-item" v-for="(building,buildingIndex) in areaList"
          :key="building.href" >
            <estate-info :bInfo="building"></estate-info>
            <!-- <estate-info v-if="buildingIndex<1"></estate-info> -->
          </div>
                  
        </div>
        <!-- <loading :imgUrl="loadingUrl" class="loading" v-else></loading> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import request from "request";
import loading from "components/ui-loading.vue";

export default {
  components: {
    loading,
    estateInfo:()=>import('./estate-info.vue'),
    estateInfoDefault:()=>import('./estate-info-default.vue'),
    email: () => import("./email.vue"),
    uiSwitch: () => import("components/ui-switch.vue"),
  },
  data() {
    return {
      areaList: [],
      scrollTop: 0,
      loadingUrl: require("./imgs/house.png"),
      showEmailModal: false,
      switchBool: false, //开关状态
      defaultListSize:3,
      showDefaultList:true,
    };
  },
  computed: {
    ...mapState("estate", ["curArea"]),
  },

  mounted() {
    document.title = "高德";
    this._initPropertyList();
    this._initScroll();
    this._initHm();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this._scrollHandler, true);
  },
  activated() {
    if (this.scrollTop) {
      this.$refs.building.scrollTo(0, this.scrollTop);
    }
  },
  methods: {
    ...mapMutations("estate", ["setCurArea"]),
    _initScroll() {
      window.addEventListener("scroll", this._scrollHandler, true);
    },
    _scrollHandler() {
      let buildingEl = this.$refs.building;
      if (buildingEl) {
        this.scrollTop = buildingEl.scrollTop;
      }
    },
    _initPropertyList() {
      request.get("/xian/estateArea").then((res) => {
        if (res.status === 200) {
          this.areaList = res.data;
          let that=this;
            that.showDefaultList=false;
        }
      });
    },
    _initHm(){
        // 百度统计打点
    },
    stepTo(area) {
      let areaStr = JSON.stringify(area);
      this.setCurArea(area);
      this.$router.push({
        name: "gxBuilding",
        query: {
          areaInfo: areaStr,
        },
      });
    },
    handleEmail(param) {
      this.showEmailModal = param;
    },
    handleSwitchStatus(param) {
      this.switchBool = param;
      if (this.switchBool) {
        this.showEmailModal = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
div,
section {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.xianEstate-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(9, 41, 114, 0.95);
  display: flex;
  flex-direction: column;
}
.header {
  height: 80px;
  flex-shrink: 1;
  /* color: rgba(33, 176, 125, 1); */
  color: rgba(255, 255, 255, 0.85);

  line-height: 80px;
  font-size: 20px;
  font-weight: 600;
  padding: 0px 20px;
  .switch-btn {
    position: absolute;
    right: 20px;
    top: 10px;
  }
}
.content {
  flex-shrink: 1;
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  background: rgb(245, 245, 245);
  position: relative;
}
.building {
  height: 100%;
  overflow-y: scroll;
  /* border-radius: 5px; */
  &-item {
    margin-bottom: 10px;
  }
}
.loading {
  display: inline-block;
  width: 55px;
  height: 55px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.in-enter,
.in-leave-to {
  opacity: 0;
}
.in-enter-to,
.in-leave {
  opacity: 1;
}
.in-enter-active,
.in-leave-active {
  transition: all 1s ease;
}
</style>
