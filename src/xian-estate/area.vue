<template>
    <section class="area-wrapper">
        <section class="header">
            <section class="header-icon" @click="backHandler">返回</section>
            <!-- {{ getAreaLabel() }} -->
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
            <area-building class="map-con" v-show="curTabKey==='list'"/>
            <area-map class="map-con" v-show="curTabKey === 'map'"/>
            <area-assess class="assess-con con" v-show="curTabKey === 'assess'" :assess="areaInfo.assess" @updateArea="setCurArea(areaInfo)" />
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
            curTabKey: "assess",
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
            console.log(this.curTabKey, 368);
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
    /* background: #0d243b; */
    display: flex;
    flex-direction: column;
}
.header {
    /* display: flex; */
    /* height: 60px; */
    flex-shrink: 1;
    position: relative;
    line-height: 30px;
    padding: 10px 40px;
    font-size: 18px;
    font-weight: 600;
    color: rgba(245, 245, 245, 0.9);
    text-align: center;
    /* color: rgba(255, 178, 11, 1); */
    &-icon {
        color: rgba(245, 245, 245, 0.9);
        position: absolute;
        left: 10px;
    }
}
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0px 3px;
    /* padding: 5px 0px; */
    border-radius: 15px 15px 3px 3px;

    background: rgba(255, 255, 255, 0.98);
}
.tabs {
    flex-shrink: 1;
    display: flex;
    justify-content: space-around;
    padding: 10px 10px 5px;
    color: rgba(255, 255, 255, 0.8);
    &-item {
        padding: 0px 10px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        flex: 1;
    }
    .list {
        /* background-color: rgba(43, 116, 215, 1); */
        /* background-color: rgba(13, 36, 59, 0.8); */
        /* border-radius: 20px 0px 0px 20px; */
        color: rgba(255, 255, 255, 0.85);
    }
    .map {
        /* border-radius: 0px 20px 20px 0px; */

        /* background: rgba(254, 148, 73, 1); */
    }
    section:first-child {
        border-radius: 20px 0px 0px 20px;
    }
    section:last-child {
        border-radius: 0px 20px 20px 0px;
    }
}



.con {
    flex: 1;
}

</style>
