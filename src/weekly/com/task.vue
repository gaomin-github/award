<template>
<!-- <transition name="slid"> -->
    <div class="task-wrapper">
        <!-- <header-tool @back="back" /> -->
        <header class="user">
            <!-- <div class="user-info">
                <p class="user-info-name">
                    welcome
                    <span>{{ curUser.userName }}</span> ~
                </p>
                <p class="user-info-score">
                    total score is
                    <span>{{ totalValue }}</span>
                </p>
                <p class="user-info-score">
                    You've already get
                    <span>{{ score }}</span>
                </p>
            </div>
            <div class="user-score">
                <circle-chart :score="totalValue ? score / totalValue : 0"></circle-chart>
            </div> -->
        </header>
        <!-- <nav>
            <div class="prev">查看上周</div>
            <div class="cur">本周任务</div>
        </nav> -->
        <div class="content">

            <div class="title">
                Your Schedules
            </div>

            <div class="schedule" v-if="scheduleList">
                <!-- <div class="schedule-item schedule-item-label">
                    <div class="content">任务内容</div>
                    <div class="worth">分值</div>
                    <div class="process">完成</div>
                </div> -->
                <schedule
                class="schedule-item"
                    v-for="(item, index) in scheduleList"
                    :key="item.subId"
                    :order="index"
                    v-model="scheduleList[index]"
                    @editScheduleNum="editScheduleNum"
                    @deleteSchedule="deleteSchedule"
                ></schedule>
                <!-- <div class="add-icon" @click="addSchedule">+</div> -->
            </div>
        </div>
        <i class="icon fa fa-plus" @click="addSchedule"></i>
    </div>
<!-- </transition> -->
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { throttle } from "lib/throttle.js";
import request from "request";
import schedule from "./schedule.vue";
import circleChart from "./circleChart.vue";

export default {
    components: {
        headerTool: () => import("./headerTool.vue"),
        schedule,
        circleChart
    },
    data() {
        return {};
    },
    computed: {
        ...mapState("weekly", ["scheduleList", "taskId", "curUser"]),
        ...mapGetters("weekly", ["totalValue", "score"])
    },
    mounted() {
        this._initTask();
    },
    beforeDestroy() {
        this._saveTask();
    },
    methods: {
        ...mapMutations("weekly", [
            "initTask",
            "insertSchedule",
            "updateSchedule",
            "deleteSchedule",
            "updateCurUser",
        ]),
        back() {
            let schedules =[]
            if(this.scheduleList&&this.scheduleList.length>1){
                schedules=this.scheduleList.filter((schedule, index) => {
                    if (schedule.content && schedule.content.length > 0)
                    return true;
                else return false;
            });
            }else{
                schedules=this.scheduleList;
            } 
            this.initTask({
                taskId: this.taskId,
                schedules
            });
            this._saveTask();
            this.updateCurUser(null);
        },
        _initTask() {
            request
                .get(`/task/task?userId=${this.curUser.userId}`)
                .then(res => {
                    if (res.status === 200 && res.data) {
                        this.initTask(res.data[0]);
                        console.log(this.scheduleList,104)
                    } else {
                        request
                            .get(
                                `/task/createTask?userId=${this.curUser.userId}`
                            )
                            .then(newRes => {
                                if (newRes.status === 200 && newRes.data) {
                                    this.initTask(newRes.data);
                                }
                            });
                    }
                });
        },
        addSchedule() {
            let newSchedule = {
                subId: Math.random(),
                content: "",
                worth: null,
                process: null
            };
            this.insertSchedule(newSchedule);
        },
        editScheduleNum(item) {
            throttle(() => {
                item = this._checkNum(item);
                this.updateSchedule(item);
                this._saveTask();
            }, 500)();
        },
        // deleteSchedule(item) {},
        _saveTask() {
            // console.log(this.scheduleList, 130);
            let scheduleStr = encodeURIComponent(
                JSON.stringify(this.scheduleList)
            );
            request
                .get(
                    `/task/updateTask?taskId=${this.taskId}&scheduleStr=${scheduleStr}`
                )
                .then(res => {
                    if (res.status === 200) {
                        return res.data;
                    }
                });
        },
        _checkNum(item) {
            if (
                Number(item.worth) < Number(item.process) ||
                Number(item.worth) < 0 ||
                Number(item.process) < 0
            ) {
                item.errStatus = true;
            } else {
                item.errStatus = false;
            }
            return item;
        }
    }
};
</script>
<style lang="scss" scoped>
// .slid-leave-to{
//     transform:translateX(100%)
// }
// .slid-leave-active{
//     transition:all 2s ease;
// }
// @keyframes slid {
//     0%{
//         transform:translateX(100%);
//     }
//     100%{
//         transform:translateX(0);
//     }
// }

.task-wrapper {
    // animation:slid 1s;
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(242,245,249,1);
    display: flex;
    flex-direction: column;
    // top:0;
}
div,
header,
nav,
p {
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input,
textarea {
    appearance: none;
    background: none;
    border: none;
    outline: none;
    height: 100%;
    font-size: 14px;
}
header,
.user {
    display: flex;
    padding: 10px;
    &-info {
        flex: 1;
        flex-shrink: 1;

        &-name {
            line-height: 34px;
            font-size: 18px;
            color: rgba(90, 82, 83, 1);
            font-weight: 600;
            span {
                font-size: 22px;
            }
        }
        &-score {
            line-height: 24px;
            font-size: 14px;
            color: rgba(68, 70, 69, 1);
            span {
                color: rgba(220, 24, 24, 1);
            }
        }
    }
    &-score {
        margin-top: 10px;
        flex-shrink: 1;
        min-width: 100px;
    }
}
nav {
    display: flex;
    position: relative;
    line-height: 42px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(66, 144, 55, 1);
    .prev {
        font-size: 14px;
        position: absolute;
        left: 10px;
        color: rgba(245, 236, 177, 1);
        font-size: 15px;
    }
    .cur {
        font-size: 16px;
        text-align: center;
        width: 100%;
        color: rgba(245, 236, 177, 1);
        font-weight: 600;
        font-size: 18px;
    }
}
.content{
    flex:1;
    border:1px red solid;
    border-radius:15px;
    margin:10px 10px 20px;
    overflow-y: scroll;
    background:rgba(255,255,255,1);
    .title{
        font-size: 24px;
        font-weight: 500;
        line-height: 41px;
        color:rgba(65,71,85,1);
    }
    .schedule{
        flex:1;
        margin-top:10px;
    }
}
.schedule{
    padding:10px 15px;

    &-item{
        // margin-top:10px;
    }
}
// .schedule {

//     position: relative;
//     &-item-label {
//         color: rgba(95, 142, 100, 1);
//         display: flex;
//         line-height: 32px;

//         padding: 5px 5px;
//         background-color: rgba(246, 245, 220, 1);
//         border-bottom: 1px rgba(104, 162, 112, 1) solid;
//         font-size: 16px;
//         height: auto;
//     }
//     // .content {
//     //     flex: 1;
//     //     flex-shrink: 1;
//     // }
//     // .worth,
//     // .process {
//     //     width: 50px;
//     //     text-align: center;
//     // }
//     .add-icon {
//         width: 24px;
//         line-height: 24px;
//         text-align: center;
//         vertical-align: top;
//         border-radius: 50%;
//         font-size: 18px;
//         background: rgba(66, 144, 55, 1);
//         color: rgba(255, 255, 255, 1);
//     }
// }
.icon{
     flex-shrink: 1;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 1);
  width: 42px;
  height: 42px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  font-size: 28px;

  background: rgba(66, 144, 55, 1);
}
.result {
    margin: 20px 10px;
}
.number-err {
    border-bottom: 1px red dashed;
}
</style>
