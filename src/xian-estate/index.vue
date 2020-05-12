<template>
    <div class="xianEstate-wrapper">
        <section class="header">高新周边楼盘参考</section>
        <div class="content">
            <div v-if="areaList && areaList.length > 0" class="building">
                <section
                    v-for="building in areaList"
                    :key="building.href"
                    class="building-item"
                    @click="stepTo(building)"
                >
                    <div class="building-item-title" v-html="building.label"></div>
                    <div class="building-item-time">备案时间：{{ building.time }}</div>
                    <div class="building-item-drive">
                        <section class="label">开车：</section>
                        <section class="building-item-content">
                            距离
                            <span>
                                {{
                                Math.ceil(parseInt(building.drivingRoute.distance||0) / 100) / 10
                                }}
                            </span>
                            公里,需要
                            <span>
                                {{
                                Math.ceil(parseInt(building.drivingRoute.duration) / 60)
                                }}
                            </span>
                            分钟
                        </section>
                    </div>
                    <div class="building-item-bus">
                        <section class="building-item-label">乘公交：</section>
                        <section class="building-item-content">
                            距离{{
                            Math.ceil(parseInt(building.busRoute.distance||0) / 100) / 10
                            }}
                            公里，需要
                            {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
                            分钟，需要步行{{ building.busRoute.walking_distance }}米
                        </section>
                    </div>
                    <div class="building-item-garden">
                        周边
                        <span>&nbsp;{{ building.garden ? building.garden.num : 0 }}&nbsp;</span>家公园
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import request from "request";
export default {
    data() {
        return {
            areaList: []
        };
    },
    mounted() {
        console.log("xian-estate ", 12);
        document.title = "高德";
        this._initPropertyList();
    },
    methods: {
        _initPropertyList() {
            request.get("/xian/estateArea").then(res => {
                console.log(res, 46);
                if (res.status === 200) {
                    this.areaList = res.data;
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
        },
        stepTo(area) {
            let areaStr = JSON.stringify(area);
            console.log(areaStr, 74);
            // this.$router.push({
            //   name: "xianBuilding",
            //   params: {
            //     areaInfo: area,
            //   },
            // });
            this.$router.push({
                name: "xianBuilding",
                query: {
                    areaInfo: areaStr
                }
            });
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
}
.content {
    flex-shrink: 1;
    flex: 1;
    padding: 5px 10px;
    border-radius: 10px;
    background: rgb(245, 245, 245);
}
.building {
    height: 100%;
    overflow-y: scroll;
    &-item {
        margin: 15px 0px;
        padding: 5px;
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

        &-drive {
            /* color: rgba(25, 25, 25, 1); */
            color: rgba(255, 255, 255, 0.9);

            margin: 3px 0px;
            line-height: 26px;
            font-size: 16px;
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
                color: rgba(243, 88, 67, 1);
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
</style>
