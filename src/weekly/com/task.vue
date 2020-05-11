<template>
    <div class="task-wrapper">
        <header-tool @back="back" />
        <header class="user">
            <div class="user-info">
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
            </div>
        </header>
        <nav>
            <div class="prev">查看上周</div>
            <div class="cur">本周任务</div>
        </nav>
        <div class="schedule">
            <div class="schedule-item schedule-item-label">
                <div class="content">任务内容</div>
                <div class="worth">分值</div>
                <div class="process">完成</div>
            </div>
            <div v-if="scheduleList">
                <schedule
                    v-for="(item, index) in scheduleList"
                    :key="item.subId"
                    v-model="scheduleList[index]"
                    @editScheduleNum="editScheduleNum"
                    @deleteSchedule="deleteSchedule"
                ></schedule>
            </div>
            <!-- <div class="add-icon" @click="addSchedule">+</div> -->
            <i class="plus-circle" @click="addSchedule"></i>
        </div>
    </div>
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
            "updateCurUser"
        ]),
        back() {
            let schedules = this.scheduleList.filter((schedule, index) => {
                if (schedule.content && schedule.content.length > 0)
                    return true;
                else return false;
            });
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
.task-wrapper {
    display: block;
    height: 100%;
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
.schedule {
    position: relative;
    &-item-label {
        color: rgba(95, 142, 100, 1);
        display: flex;
        line-height: 32px;

        padding: 5px 5px;
        background-color: rgba(246, 245, 220, 1);
        border-bottom: 1px rgba(104, 162, 112, 1) solid;
        font-size: 16px;
        height: auto;
    }
    .content {
        flex: 1;
        flex-shrink: 1;
    }
    .worth,
    .process {
        width: 50px;
        text-align: center;
    }
    .add-icon {
        width: 24px;
        line-height: 24px;
        text-align: center;
        vertical-align: top;
        border-radius: 50%;
        font-size: 18px;
        background: rgba(66, 144, 55, 1);
        color: rgba(255, 255, 255, 1);
    }
}
.result {
    margin: 20px 10px;
}
.number-err {
    border-bottom: 1px red dashed;
}
</style>
