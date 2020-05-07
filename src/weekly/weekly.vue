<template>
    <section class="task_wrapper">
        <header>
            <div class="prev">查看上周</div>
            <div class="cur">本周任务</div>
        </header>
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
                    v-on:editScheduleNum="editScheduleNum(item)"
                ></schedule>
            </div>
            <div class="add-icon" @click="addSchedule">+</div>
        </div>
        <div class="result" v-if="totalValue">
            总分{{ totalValue }},得分{{ score }},成绩{{
            Math.ceil((score / totalValue) * 100)
            }}
        </div>
    </section>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { throttle } from "lib/throttle.js";
import request from "request";
import schedule from "./com/schedule.vue";
export default {
    components: {
        schedule
    },
    data() {
        return {};
    },
    computed: {
        ...mapState("weekly", ["scheduleList", "taskId", "curUser"]),
        ...mapGetters("weekly", ["totalValue", "score"])
    },
    created() {
        console.log("weekly index created");
    },
    mounted() {
        // console.log("weekly index mounted");
        this._initTask();
    },
    beforeDestroy() {
        this.updateSchedule(item);
        this._saveTask();
    },
    methods: {
        ...mapMutations("weekly", [
            "initTask",
            "insertSchedule",
            "updateSchedule",
            "deleteSchedule"
        ]),
        _initTask() {
            let userId = this.$route.query.userId;
            request.get(`/task/task?userId=${userId}`).then(res => {
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

        _saveTask() {
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
        editScheduleNum(item, type) {
            throttle(() => {
                item = this._checkNum(item);
                this.updateSchedule(item);
                this._saveTask();
            }, 1000)();
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
        // editScheduleProcess() {
        //   //   添加时间限制
        // },
    }
};
</script>
<style lang="scss" scoped>
.task_wrapper {
    display: block;
    height: 100%;
    padding: 20px 5px;
}
section,
div,
header,
p {
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
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
header {
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
        &-content {
            flex: 1;
            flex-shrink: 1;
            p {
                white-space: pre-wrap;
            }
        }
        &-worth,
        &-process {
            text-align: center;

            input {
                width: 100%;
                line-height: 32px;
                text-align: center;
                font-size: 16px;
            }
        }
        &-worth {
            width: 50px;
        }
        &-process {
            width: 70px;
        }
        &-process-poor {
            input {
                color: rgba(213, 30, 30, 1);
            }
        }
        &-process-aver {
            input {
                color: rgba(113, 100, 100, 1);
            }
        }
        &-process-exe {
            input {
                color: rgba(66, 144, 55, 1);
            }
        }
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
