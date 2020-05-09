<template>
    <div class="task-wrapper">
        <header class="user">
            <div class="user-info">
                <p class="user-info-name">welcome {{curUser.userName}} ~</p>
                <p class="user-info-score">
                    total score is
                    <span>{{totalValue}}</span>
                </p>
                <p class="user-info-score">
                    You've already get
                    <span>{{score}}</span>
                </p>
            </div>
            <div class="user-score">
                <circle-chart :score="20"></circle-chart>
            </div>
        </header>
        <nav>
            <div class="prev">查看上周</div>
            <div class="cur">本周任务</div>
        </nav>
        <div class="schedule">
            <div class="schedule-item schedule-item-label">
                <div class="schedule-item-content">任务内容</div>
                <div class="schedule-item-worth">分值</div>
                <div class="schedule-item-process">完成情况</div>
            </div>
            <div v-if="scheduleList">
                <schedule
                    v-for="(item,index) in scheduleList"
                    :key="item.subId"
                    v-model="scheduleList[index]"
                    @editScheduleNum="editScheduleNum"
                    @deleteSchedule="deleteSchedule"
                ></schedule>
            </div>
            <div class="add-icon" @click="addSchedule">+</div>
        </div>
        <div class="result" v-if="totalValue">
            总分{{ totalValue }},得分{{ score }},成绩{{
            Math.ceil((score / totalValue) * 100)
            }}
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
        let scheduleList = this.scheduleList.filter(schedule => {
            return schedule.content && schedule.content.length > 0;
        });
        this.updateSchedule(scheduleList);
        this._saveTask(scheduleList);
    },
    methods: {
        ...mapMutations("weekly", [
            "initTask",
            "insertSchedule",
            "updateSchedule",
            "deleteSchedule"
        ]),
        _initTask() {
            request
                .get(`/task/task?userId=${this.curUser.userId}`)
                .then(res => {
                    if (res.status === 200 && res.data) {
                        this.initTask(res.data[0]);
                    } else {
                        request
                            .get(`/task/createTask?userId=${userId}`)
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
                worth: 0,
                process: 0
            };
            this.insertSchedule(newSchedule);
        },
        editScheduleNum(item) {
            throttle(() => {
                item = this._checkNum(item);
                this.updateSchedule(item);
                this._saveTask(item);
            }, 1000)();
        },
        deleteSchedule(item) {},
        _saveTask(item) {
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
                item.worth < item.process ||
                item.worth < 0 ||
                item.process < 0
            ) {
                item.numberStatus = false;
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
    &-info {
        flex: 1;
        flex-shrink: 1;

        &-name {
            line-height: 34px;
            font-size: 18px;
            color: rgba(145, 136, 137, 1);
            font-weight: 600;
        }
        &-score {
            line-height: 24px;
            font-size: 14px;
            color: rgba(185, 186, 187, 1);
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
    &-item {
        display: flex;
        line-height: 32px;

        padding: 5px 5px;
        background-color: rgba(246, 245, 220, 1);
        border-bottom: 1px rgba(104, 162, 112, 1) solid;
        font-size: 16px;
        height: auto;
    }
    &-item-label {
        color: rgba(95, 142, 100, 1);
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