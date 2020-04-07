<template>
    <div class="xianEstate-wrapper">
        <div v-if="buildingList && buildingList.length > 0" class="building">
            <section v-for="building in buildingList" :key="building.href" class="building-item">
                <div class="building-item-title">
                    <div class="building-item-label" v-html="building.label"></div>
                    <div class="building-item-arrow">》</div>
                </div>
                <div class="building-item-time">备案时间：{{ building.time }}</div>
                <div class="building-item-route drive">
                    <div class="building-item-route-way">开车：</div>
                    <div class="building-item-route-distance">
                        距离
                        {{ Math.ceil(parseInt(building.drivingRoute.distance) / 100) / 10 }}
                        公里,历时
                        {{ Math.ceil(parseInt(building.drivingRoute.duration) / 60) }} 分钟
                    </div>
                </div>

                <div class="building-item-route bus">
                    <div class="building-item-route-way">乘公交：</div>
                    <div class="building-item-route-distance">
                        距离
                        {{ Math.ceil(parseInt(building.busRoute.distance) / 100) / 10 }}
                        公里，历时
                        {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
                        分钟，需步行：{{ building.busRoute.walking_distance }}米
                    </div>
                </div>

                <div class="building-item-garden">周边{{ building.aroundGarden.length }}家公园</div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            buildingList: []
        };
    },
    mounted() {
        console.log("xian-estate ", 12);
        document.title = "xian";
        this._initPropertyList();
    },
    methods: {
        _initPropertyList() {
            axios.get("/xian/xianProperty").then(res => {
                console.log(res, 46);
                if (res.status === 200) {
                    this.buildingList = res.data;
                }
            });
            // fetch("/xian/xianProperty", {
            //   method: "get",
            // })
            //   .then((res) => {
            //     console.log(res, 48);
            //     return res.json();
            //   })
            //   .then((data) => {
            //     // this.buildingList = data;
            //     console.log(data, 53);
            //   });
        }
    }
};
</script>
<style lang="scss" scoped>
div,
section {
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.xianEstate-wrapper {
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
}
.building {
    overflow-y: scroll;
    height: 100%;
    padding: 0px 15px;
    &-item {
        margin: 15px 0px;
        padding: 5px 10px;
        border-radius: 12px;
        background: rgba(13, 54, 151, 1);
        // display: flex;
        &-title {
            display: flex;
            align-items: center;
        }
        &-label {
            flex: 1;
            line-height: 26px;
            font-size: 16px;
            font-weight: 600;
            color: rgba(255, 178, 12, 1);
            margin-right: 10px;
        }
        &-arrow {
            width: 30px;
            font-size: 20px;
            font-weight: 800;
            color: rgb(255, 255, 255);
        }
        &-time {
            line-height: 20px;
            font-size: 12px;
            color: rgba(210, 210, 210, 1);
        }
        &-route {
            display: flex;
            flex-direction: row;
            align-items: top;
            line-height: 20px;
            font-size: 14px;
            margin: 5px 0px;
        }

        .drive {
            color: rgba(255, 255, 255, 1);
            font-weight: 500;
        }
        .bus {
            color: rgba(215, 215, 215, 1);
            font-weight: 400;
        }
        &-route-way {
            width: 100px;
        }
        &-route-distance {
            flex: 1;
            flex-shrink: 1;
        }
        &-garden {
            line-height: 24px;
            font-size: 12px;
            color: rgba(230, 230, 230, 1);
        }
    }
}
</style>
