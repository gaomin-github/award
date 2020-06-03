<template>
    <section class="area-wrapper">
        <section class="header">
            <section class="header-icon" @click="backHandler">返回</section>
            {{ getAreaLabel() }}
        </section>
        <section class="content">
            <section class="tabs" v-if="tabs && tabs.length > 0">
                <section
                    class="tabs-item"
                    :class="tab.key"
                    v-for="tab in tabs"
                    :key="tab.key"
                    @click="changeTab(tab)"
                    :style="`background:${tab.color}`"
                >{{ tab.label }}</section>
            </section>
            <area-building class="map-con" v-if="curTabKey==='list'"/>
            <area-map class="map-con" v-if="curTabKey === 'map'"/>
            <area-assess class="assess-con con" v-if="curTabKey === 'assess'" :assess="areaInfo.assess" @updateArea="setCurArea(areaInfo)" />
        </section>

        <section class="map-container" id="map-container"></section>
      </section>
      <!-- <section class="assess-con con" v-show="curTabKey === 'assess'">
        <assess :assess="areaInfo.assess" @updateArea="setCurArea(areaInfo)" />
      </section> -->
    </section>
  </section>
</template>
<script>
import request from "request";
import { mapState, mapMutations } from "vuex";
export default {
    components: {
        areaMap:()=>import('./area-map.vue'),
        areaAssess: () => import("./area-assess.vue"),
        areaBuilding:()=>import('./area-building.vue')
    },
    data() {
        return {
            areaInfo: {},
            tabs: [
                {
                    key: "list",
                    label: "所有房间",
                    color: "rgba(43, 116, 215, 1)"
                },
                {
                    key: "map",
                    label: "地图查看",
                    color: "rgba(115, 163, 9, 1)"
                },
                {
                    key: "assess",
                    label: "评价",
                    color: "rgba(254, 148, 73, 1)"
                }
            ],
            curTabKey: "list",
        };
    },
    async mounted() {
        document.title = "高德";
        this._initPrevPage();
    },
    methods: {
        ...mapMutations("estate", ["setCurArea"]),
        _initPrevPage() {
            let areaInfo = this.$route.query.areaInfo;
            this.areaInfo = JSON.parse(areaInfo);
            this.setCurArea(this.areaInfo);
        },
        getAreaLabel() {
            if (this.areaInfo.label) {
                let label = this.areaInfo.label.replace(
                    /(&middot;|&ldquo;|&rdquo;)/g,
                    ""
                );
                return label;
            } else {
                return this.areaInfo.label;
            }
        },
        changeTab(tab) {
            this.curTabKey = tab.key;
        },
        backHandler() {
            this.$router.go(-1);
        }
    }
};
</script>
 <style lang="scss" scoped>
section {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.area-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(9, 41, 114, 0.95);
  display: flex;
  flex-direction: column;
}
.header {
  flex-shrink: 1;
  position: relative;
  line-height: 30px;
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(245, 245, 245, 0.9);
  text-align: center;
  &-icon {
    color: rgba(245, 245, 245, 0.9);
    text-align: center;
        color: rgba(245, 245, 245, 0.9);
        position: absolute;
        left: 10px;
        font-size: 15px;
  }
}
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 15px 15px 3px 3px;
padding:5px;
  background: rgba(255, 255, 255, 0.98);
}
.tabs {
    flex-shrink: 1;
    display: flex;
    justify-content: space-around;
    margin-bottom:10px;
    color: rgba(255, 255, 255, 0.8);
    &-item {
        padding: 0px 10px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        flex: 1;
    }
  section:first-child {
    border-radius: 20px 0px 0px 20px;
  }
  section:last-child {
    border-radius: 0px 20px 20px 0px;
  }
}
    
</style> 
