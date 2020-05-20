<template>
  <section class="content-wrapper">
    <header-tool @back="back" />
    <div class="grade">
        <div class="grade-progress">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 10">
                <line class="grade-progress-path " x1="5" y1="5" x2="100" y2="5" />
                <line class="grade-progress-path valid" v-if="process&&worth" x1="5" y1="5" x2="100" :stroke-dasharray="`${100*process/worth} 500`" y2="5" />
            </svg>
        </div>
        <div class="grade-worth">
            总分
                <input type="number" v-model="worth"/>
        </div>
        <div class="grade-process">
            ,现得分<span><input type="number" v-model="process"/></span>
        </div>
    </div>
    <textarea
      ref="content"
      class="content"
      v-model="content"
      @input="inputHandler"
      placeholder="add some content"
    ></textarea>
  </section>
</template>
<script>
import request from "request";
import { mapState, mapMutations } from "vuex";
import { throttle } from "lib/throttle.js";
export default {
  components: {
    headerTool: () => import("./headerTool.vue"),
  },
  data() {
    return {
      content: "",
      worth:0,
      process:0
    };
  },
  computed: {
    ...mapState("weekly", ["scheduleList", "taskId", "curSchedule", "subId"]),
  },
  mounted() {
    this._prevData();
    this.$refs.content.focus();
  },
  beforeDestroy() {
    this.back();
  },
  methods: {
    ...mapMutations("weekly", ["updateSchedule", "updateEditing"]),
    back() {
      this._saveSchedule();
      this.updateEditing(false);
    },

    _prevData() {
      this.content = this.curSchedule.content;
      this.worth=this.curSchedule.worth;
      this.process=this.curSchedule.process;
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
          content: this.content,
          worth:this.worth,
          process:this.process
        })
      );
      // 更新数据库
      let scheduleStr = encodeURIComponent(JSON.stringify(this.scheduleList));
      request
        .get(
          `/task/updateTask?taskId=${this.taskId}&scheduleStr=${scheduleStr}`
        )
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes valid_path {
    // from{
    //     stroke-dasharray: 0 0;
    // }
    to{
        stroke-dasharray:0 500;
    }
}
.content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  position:absolute;
}
textarea {
  appearance: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.grade{
    height:50px;
    display:flex;
    align-items: center;
    &-progress{
        flex:1;
        flex-shrink: 1;
        svg{
            width:100%;
            height:100%;
        }
        &-path{
            stroke-width:5;
            stroke-linecap:round;
            stroke:#999;
        }
        .valid{
            stroke:red;
            transition:all 3s ease;
            animation:valid_path 1s ease reverse;
        }
    }
    input[type="number"]{
        appearance: none;
        margin:0;
        padding:0;
        outline:0;
        line-height: 30px;
        font-size: 16px;
        width:36px;
        border:none;
        border-bottom:1px #999 solid;
        text-align: center;
    }
    &-worth{
        flex-shrink: 1;
        // width:70px;
    }
    &-process{
                flex-shrink: 1;

        // width:80px;

    }
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
  height:300px;

}
</style>
