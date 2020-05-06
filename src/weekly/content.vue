<template>
    <section class="content-wrapper">
        <header class="back" @click="handleBack">《---</header>
        <textarea ref="content" class="content" v-model="content" @input="inputHandler"></textarea>
    </section>
</template>
<script>
import request from "request";
import { mapState, mapMutations } from "vuex";
import { throttle } from "lib/throttle.js";
export default {
    data() {
        return {
            content: "",
            subId: "",
            worth: 0,
            process: 0
        };
    },
    //   props: {
    //     data: {
    //       subId: "",
    //       content: "",
    //       worth: 0,
    //       process: 0,
    //     },
    //   },
    computed: {
        ...mapState("weekly", ["scheduleList", "taskId"])
    },
    mounted() {
        this._prevData();
        this.$refs.content.focus();
    },
    beforeDestroy() {
        this._saveSchedule();
    },
    methods: {
        ...mapMutations("weekly", ["updateSchedule"]),
        _prevData() {
            let data = this.$route.query;
            this.content = data.content;
            this.subId = data.subId;
            this.worth = data.worth;
            this.process = data.process;
        },
        inputHandler() {
            //   console.log(throttle, 43);
            throttle(() => {
                // 更新到vuex
                this.updateSchedule({
                    subId: this.subId,
                    content: this.content,
                    worth: this.worth,
                    process: this.process
                });
                this._saveSchedule();
            }, 500)();
        },
        handleBack() {
            this.updateSchedule({
                subId: this.subId,
                content: this.content,
                worth: this.worth,
                process: this.process
            });
            this._saveSchedule();
            this.$router.go(-1);
        },
        _saveSchedule() {
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
        }
    }
};
</script>
<style lang="scss" scoped>
.content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
textarea {
    appearance: none;
    border: none;
    outline: none;
}
div,
section {
    display: block;
    overflow: hidden;
}
header {
    line-height: 30px;
}
.content {
    flex: 1;
    padding: 0px 5px;
    border: 1px rgba(180, 175, 175, 1) solid;
    line-height: 28px;
    font-size: 14px;
    border-radius: 5px;
    overflow-y: scroll;
}
</style>
