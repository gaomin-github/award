<template>
    <section class="content-wrapper">
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
            content: ""
        };
    },
    computed: {
        ...mapState("weekly", [
            "scheduleList",
            "taskId",
            "curSchedule",
            "subId"
        ])
    },
    mounted() {
        this._prevData();
        this.$refs.content.focus();
    },
    beforeDestroy() {
        this._saveSchedule();
        this.updateEditing(false);
    },
    methods: {
        ...mapMutations("weekly", ["updateSchedule", "updateEditing"]),
        _prevData() {
            this.content = this.curSchedule.content;
        },
        inputHandler() {
            throttle(() => {
                // 更新到vuex
                this._saveSchedule();
            }, 500)();
        },
        // 返回
        handleBack() {
            this._saveSchedule();
            this.updateEditing(false);
        },
        _saveSchedule() {
            // 更新store
            this.updateSchedule(
                Object.assign(this.curSchedule, {
                    content: this.content
                })
            );
            // 更新数据库
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
}
textarea {
    appearance: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.content {
    flex: 1;
    padding: 0px 5px;
    margin-top: 10px;
    border: 1px rgba(180, 175, 175, 1) solid;
    line-height: 28px;
    font-size: 14px;
    border-radius: 5px;
    overflow-y: scroll;
    min-height: 300px;
}
</style>
