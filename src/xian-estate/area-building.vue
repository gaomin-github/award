<template>
    <div class="building-wrapper">
        <section
            class="horz building-title"
            v-if="buildings && buildings.length > 0"
        >
            <section class="name">房间号</section>
            <section class="space">面积</section>
            <section class="unit-price">单价(元)</section>
            <section class="total-price">总价(万元)</section>
        </section>

        <section
            class="building-list"
            v-if="buildings && buildings.length > 0 "
        >
            <section
                class="building-list-item horz"
                v-for="(building, key) in buildings"
                :key="key"
            >
                <section class="name">{{ building.buildingId }}</section>
                <section class="space">{{ building.space }}</section>
                <section class="unit-price">{{ building.unitPrice }}</section>
                <section
                    class="total-price"
                >{{ Math.ceil(parseInt(building.totalPrice) / 10000) }}</section>
            </section>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import request from 'request';
export default {
    data(){
        return{
            buildings:[]
        }
    },
    computed:{
        ...mapGetters('estate',['getCurArea'])
    },
    mounted(){
        this._getBuildingInfo()
    },
    methods:{
        _getBuildingInfo(){
            let areaId = "8a901c28707bb13f0170e10d428d0913";
            request
            .get(`/xian/estateBuildings?areaId=${this.getCurArea.areaId}`)
            .then(res => {
                if (res.status === 200) {
                    this.buildings = res.data;
                    // console.log(this.buildings, 136);
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.building-wrapper{
    height:100%;
}
div{
    display: block;
    overflow: hidden;
    box-sizing: border-box;
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
    flex-shrink: 1;
    overflow-y: scroll;
    padding-bottom: 10px;
    background: rgba(255, 255, 255, 0.9);
    .building-list-item {
        padding: 0px 10px;
        line-height: 36px;
        border-bottom: 1px rgba(43, 116, 215, 0.4) solid;
        .name,
        .space,
        .unit-price {
            border-right: 1px rgba(43, 116, 215, 0.4) solid;
        }
    }
}
</style>