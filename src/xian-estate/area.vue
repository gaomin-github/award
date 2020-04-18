<template>
  <section class="area-wrapper">
    <section class="header">
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
        >
          {{ tab.label }}
        </section>
      </section>

      <section
        class="horz building-title"
        v-if="buildings && buildings.length > 0 && curTabKey === 'list'"
      >
        <section class="name">房间号</section>
        <section class="space">面积</section>
        <section class="unit-price">单价(元)</section>
        <section class="total-price">总价(万元)</section>
      </section>

      <section
        class="building-list"
        v-if="buildings && buildings.length > 0 && curTabKey === 'list'"
      >
        <section class="building-list-item horz" v-for="building in buildings">
          <section class="name">{{ building.buildingId }}</section>
          <section class="space">{{ building.space }}</section>
          <section class="unit-price">{{ building.unitPrice }}</section>
          <section class="total-price">
            {{ Math.ceil(parseInt(building.totalPrice) / 10000) }}
          </section>
        </section>
      </section>

      <section class="map" v-if="curTabKey === 'map'">
        <section class="garden" v-if="gardens && gardens.length > 0">
          <section v-for="garden in gardens" class="garden-item">
            {{ garden.name }},距离{{ garden.distance }}米
          </section>
        </section>
        <section class="map-container" id="map-container"></section>
      </section>
    </section>
  </section>
</template>
<script>
import request from "request";
const GDKEY = "17569efbd54a284b8bd0ce338ae71616";

export default {
  data() {
    return {
      areaInfo: {},
      buildings: [],
      gardens: [],
      tabs: [
        {
          key: "list",
          label: "所有房间",
        },
        {
          key: "map",
          label: "地图查看",
        },
      ],
      curTabKey: "map",
    };
  },
  mounted() {
    this._initPrevPage();
    this._getBuildingInfo();
    this._initMapScript();
    this._initGardens();
  },
  methods: {
    _initPrevPage() {
      let areaInfo = this.$route.query.areaInfo;
      this.areaInfo = JSON.parse(areaInfo);
      console.log(this.areaInfo, 15);
    },
    _getBuildingInfo() {
      let areaId = "8a901c28707bb13f0170e10d428d0913";
      request.get(`/xian/estateBuildings?areaId=${areaId}`).then((res) => {
        if (res.status === 200) {
          this.buildings = res.data;
        }
      });
    },
    _initMapScript() {
      window.onLoad = () => {
        console.log("92 onLoad");
        this._initMapContainer();
      };
      let url = `https://webapi.amap.com/maps?v=1.4.15&key=${GDKEY}&callback=onLoad`;
      let mapScriptEl = document.createElement("script");
      mapScriptEl.charset = "utf-8";
      mapScriptEl.src = url;
      document.head.appendChild(mapScriptEl);
    },
    _initMapContainer() {
      let mapObj = new AMap.Map("map-container", {
        zoom: 11,
        viewMode: "3D",
      });
    },
    _initGardens() {
      request
        .get(`/xian/aroundGarden?originLocation=${this.areaInfo.location}`)
        .then((res) => {
          if (res.status === 200) {
            this.gardens = res.data;
          }
        });
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
    changeTab() {},
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
.area-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(9, 41, 114);
  display: flex;
  flex-direction: column;
}
.header {
  /* height: 60px; */
  flex-shrink: 1;
  line-height: 45px;
  padding: 0px 10px;
  font-size: 18px;
  color: rgba(255, 178, 11, 1);
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 3px 10px;
  /* padding: 5px 0px; */
  border-radius: 15px 15px 3px 3px;

  background: rgba(255, 255, 255, 0.9);
}
.tabs {
  flex-shrink: 1;
  display: flex;
  justify-content: space-around;
  padding: 5px 10px;
  color: rgba(255, 255, 255, 0.8);
  &-item {
    padding: 0px 10px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    flex: 1;
  }
  .list {
    background-color: rgba(43, 116, 215, 1);

    border-radius: 20px 0px 0px 20px;
    color: rgba(255, 255, 255, 0.85);
  }
  .map {
    border-radius: 0px 20px 20px 0px;

    background: rgba(254, 148, 73, 1);
  }
}

.horz {
  display: flex;
  justify-content: space-between;
  .name,
  .space,
  .unit-price,
  .total-price {
    flex: 1;
    text-align: center;
  }
}
.building-title {
  padding: 0px 10px;
  line-height: 30px;
  border-top: 1px rgba(63, 116, 185, 1) solid;
  border-bottom: 1px rgba(63, 116, 185, 1) solid;
  background-color: rgba(43, 116, 215, 1);
  color: rgba(255, 255, 255, 0.9);

  .name,
  .space,
  .unit-price {
    border-right: 1px rgba(63, 116, 185, 0.8) solid;
  }
}
.building-list {
  flex: 1;
  overflow-y: scroll;
  padding-bottom: 10px;
  background: rgba(255, 255, 255, 0.9);
  .building-list-item {
    padding: 0px 10px;
    .name,
    .space,
    .unit-price {
      border-right: 1px rgba(43, 116, 215, 0.4) solid;
    }
    line-height: 34px;
    border-bottom: 1px rgba(43, 116, 215, 0.4) solid;
  }
}

.map {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.garden {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  &-item {
    line-height: 24px;
  }
}
.map-container {
  width: 100%;
  flex: 1;
}
</style>
