<template>
  <div class="xianEstate-wrapper">
    <!-- <div class="test">
          <div @click="sendEmail">email test</div>
      </div> -->
    <modal :show="showEmailModal" widthP="95%" class="email-modal" dir="center">
      <div class="email">
        <div class="email-status">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <i class="fa fa-check confirm"></i>
        </div>
        <input type="text" class="email-content" />
        <div class="email-type">
          <select>
            <option v-for="item in emailType">
              {{ item ? item : "自定义" }}
            </option>
          </select>
        </div>
        <div class="email-send">
          <i class="fa fa-paper-plane"></i>
        </div>
      </div>
      <div class="tip">订阅后，出现最新备案价，将会发邮件提醒您哦</div>
    </modal>
    <div class="header">高新周边楼盘参考</div>
    <div class="content">
      <transition name="in" mode="out-in">
        <div
          class="building"
          v-if="areaList && areaList.length > 0"
          ref="building"
        >
          <section
            v-for="building in areaList"
            :key="building.href"
            class="building-item"
            @click="stepTo(building)"
          >
            <div class="building-item-title" v-html="building.label"></div>
            <div class="building-item-time">备案时间：{{ building.time }}</div>

            <div class="building-item-unitprice">
              单价：最低 <span>{{ building.minUnitPrice }}</span> 元，最高
              <span>{{ building.maxUnitPrice }}</span> 元
            </div>

            <div class="building-item-drive">
              <section class="label">开车：</section>
              <section class="building-item-content">
                距离
                <span>
                  {{
                    Math.ceil(
                      parseInt(building.drivingRoute.distance || 0) / 100
                    ) / 10
                  }}
                </span>
                公里,需要
                <span>{{
                  Math.ceil(parseInt(building.drivingRoute.duration) / 60)
                }}</span>
                分钟
              </section>
            </div>
            <div class="building-item-bus">
              <section class="building-item-label">乘公交：</section>
              <section class="building-item-content">
                距离{{
                  Math.ceil(parseInt(building.busRoute.distance || 0) / 100) /
                    10
                }}
                公里，需要
                {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
                分钟，需要步行{{ building.busRoute.walking_distance }}米
              </section>
            </div>
            <div class="building-item-bus">
              <section class="building-item-label">乘公交：</section>
              <section class="building-item-content">
                距离{{
                  Math.ceil(parseInt(building.busRoute.distance || 0) / 100) /
                    10
                }}
                公里，需要
                {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
                分钟，需要步行{{ building.busRoute.walking_distance }}米
              </section>
            </div>
            <div class="building-item-garden">
              周边
              <span
                >&nbsp;{{
                  building.garden ? building.garden.num : 0
                }}&nbsp;</span
              >家公园
            </div>
          </section>
        </div>
        <loading :imgUrl="loadingUrl" class="loading" v-else></loading>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import request from "request";
import loading from "components/ui-loading.vue";
import modal from "components/ui-modal.vue";

export default {
  components: {
    loading,
    modal,
  },
  data() {
    return {
      areaList: [],
      scrollTop: 0,
      loadingUrl: require("./imgs/house.png"),
      showEmailModal: true,
      curEmail: "",
      emailType: ["qq.com", "163.com", "126.com", null],
    };
  },
  computed: {
    ...mapState("estate", ["curArea"]),
  },

  mounted() {
    document.title = "高德";
    this._initPropertyList();
    this._initScroll();
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
    sendEmail() {
      request({
        url: "/common/email",
        method: "post",
        data: {
          to: "gaomin5@xiaomi.com",
          subject: "",
        },
      }).then((res) => {
        console.log(res, 128);
      });
    },
    _initScroll() {
      window.addEventListener("scroll", this._scrollHandler, true);
    },
    _scrollHandler() {
      this.scrollTop = this.$refs.building.scrollTop;
    },
    _initPropertyList() {
      request.get("/xian/estateArea").then((res) => {
        if (res.status === 200) {
          this.areaList = res.data;
        }
      });
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
.test {
  color: #fff;
}
.tip {
  line-height: 36px;
  color: #666;
}
.email {
  display: flex;
  background: #fff;
  line-height: 42px;
  border: 1px red solid;
  &-status {
    flex-shrink: 1;

    width: 30px;
    height: 30px;
    i {
      width: 100%;
      height: 100%;
      font-size: 24px;
    }
    .confirm {
      color: rgba(13, 112, 183, 1);
    }
  }
  &-content {
    flex: 1;
    flex-shrink: 1;
    border: 1px black solid;
    padding-left: 10px;
    font-size: 18px;
  }
  &-send {
    flex-shrink: 1;

    width: 38px;
    height: 38px;
    text-align: center;
    border: 1px blue solid;
    i {
      width: 100%;
      height: 100%;
      font-size: 24px;
      color: rgba(13, 112, 183, 1);
    }
  }
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
  border-radius: 5px;
  &-item {
    margin-bottom: 15px;
    padding: 10px;
    background: rgba(20, 53, 129, 1);
    /* background: rgba(237, 237, 237, 1); */
    border-radius: 5px;

    &-title {
      line-height: 28px;
      font-size: 18px;
      font-weight: 600;
      /* color: rgba(1, 1, 1, 1); */
      color: rgb(255, 178, 11);
    }
    &-time {
      line-height: 20px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      /* color: rgba(155, 155, 155, 1); */
    }
    &-unitprice {
      line-height: 30px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      span {
        color: rgba(243, 88, 67, 1);
        font-weight: 600;
      }
    }
    &-drive {
      /* color: rgba(25, 25, 25, 1); */

      margin: 3px 0px;
      line-height: 26px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      span {
        color: rgb(255, 178, 11);
      }
    }
    &-bus,
    &-garden {
      line-height: 24px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }
    &-garden {
      span {
        line-height: 24px;
        color: rgba(112, 226, 30, 1);
        font-size: 16px;
        font-weight: 600;
      }
    }

    &-bus,
    &-garden,
    &-drive {
      display: flex;
      &-label {
        width: 60px;
        flex-shrink: 1;
        text-align: justify;
        text-align-last: justify;
      }
    }
    &-content {
      flex: 1;
      flex-shrink: 1;
      justify-content: start;
    }
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
