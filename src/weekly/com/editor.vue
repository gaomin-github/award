<template>
  <div class="editor-wrapper">
    <header-tool @back="back" />
    <div class="container">
      <div class="grade">
        <div class="grade-progress">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 10">
            <line class="grade-progress-path" x1="5" y1="5" x2="100" y2="5" />
            <line
              class="grade-progress-path valid"
              v-if="process && worth"
              x1="5"
              y1="5"
              x2="100"
              :stroke-dasharray="
                `${process < worth ? (100 * process) / worth : 100} 500`
              "
              y2="5"
            />
          </svg>
        </div>
        <div class="grade-worth">
          总分
          <input type="number" v-model="worth" />
        </div>
        <div class="grade-process">
          ,现得分
          <span>
            <input type="number" v-model="process" />
          </span>
        </div>
      </div>
      <textarea
        ref="content"
        class="content"
        v-model="content"
        @input="inputHandler"
        placeholder="add some content"
      ></textarea>
      <div class="schedule">
        <div v-if="curPicPath && curPicPath.length > 0" class="schedule-cur">
          <img-uploader
            v-for="pic in curPicPath"
            :key="pic"
            class="schedule-cur-item"
            @chooseImg="chooseImg"
            @dropImg="deleteImg"
            :imgUrl="pic"
          ></img-uploader>
          <img-uploader
            class="schedule-cur-item"
            @chooseImg="chooseImg"
            @changeLoading="changeImgLoading"
            :imgLoading="imgLoading"
          ></img-uploader>
        </div>
        <img-uploader
          class="schedule-cur-item"
          @chooseImg="chooseImg"
          @changeLoading="changeImgLoading"
          :imgLoading="imgLoading"
          v-else
        ></img-uploader>
      </div>
      <div class="schedule history" v-if="pics && pics.length > 0">
        <div class="history-item" v-for="(pic, picKey) in pics" :key="picKey">
          <div class="history-item-time">{{ pic.createTime }}</div>
          <div class="history-item-pics" v-if="pic.urls && pic.urls.length > 0">
            <img-uploader
              v-for="url in pic.urls"
              :key="url"
              class="history-item-pics-item"
              :imgUrl="url"
            ></img-uploader>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "request";
import { mapState, mapMutations } from "vuex";
import { throttle } from "lib/throttle.js";
import { ossBatchUploader } from "lib/throttle.js";

import imgUploader from "components/img-uploader.vue";
export default {
  components: {
    headerTool: () => import("./headerTool.vue"),
    imgUploader: () => import("components/img-uploader"),
  },
  data() {
    return {
      content: "",
      worth: 0,
      process: 0,
      pics: [],
      curPics: [],
      curPicPath: [],
      imgLoading: false,
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
      // 保存新上传的图片
      console.log(this.curPicPath, 111);
      if (this.curPicPath && this.curPicPath.length > 0) {
        let nowDate = new Date();
        let createTime = `${nowDate.getFullYear()}-${nowDate.getMonth() +
          1}-${nowDate.getDay()}`;
        createTime = createTime.replace(/\b(?=\d(\s|\:|\-|\b))/g, 0);

        this.pics.push({
          createTime,
          urls: this.curPicPath,
        });
      }
      this.curPicPath = [];

      this._saveSchedule();
      this.updateEditing(false);
    },
    _prevData() {
      this.content = this.curSchedule.content;
      this.worth = this.curSchedule.worth;
      this.process = this.curSchedule.process;
      this.pics = this.curSchedule.pics || [];
      console.log(this.pics, 128);
    },
    inputHandler() {
      throttle(() => {
        // 更新到vuex
        this._saveSchedule();
      }, 500)();
    },
    // 返回
    // handleBack() {
    //     this._saveSchedule();
    //     this.updateEditing(false);
    // },
    _saveSchedule() {
      // 更新store
      this.updateSchedule(
        Object.assign(this.curSchedule, {
          content: this.content,
          worth: this.worth,
          process: this.process,
          pics: this.pics,
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
    changeImgLoading(param) {
      console.log(param, 174);
      this.imgLoading = param;
    },
    async chooseImg(param) {
      this.curPics.push(...param);
      let formObj = new FormData();
      param.map((o) => {
        formObj.append("file", o.fileObj);
      });

      formObj.append("path", "pictures/weekly");
      request({
        url: "/common/file",
        method: "post",
        data: formObj,
        headers: {
          "content-type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.status === 200) {
          this.curPicPath.push(...res.data);
          this.imgLoading = false;
        }
      });
    },
    deleteImg(param) {
      request({
        url: "/common/dropfile",
        method: "post",
        data: {
          filePath: param,
        },
      }).then((res) => {
        if (res.status === 200 && res.data) {
          let index = this.curPicPath.findIndex((o) => {
            return o === param;
          });
          this.curPicPath.splice(index, 1);
          this.imgLoading = false;
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
  to {
    stroke-dasharray: 0 500;
  }
}
.editor-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  background: rgba(242, 245, 249, 1);
}
textarea {
  appearance: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.container {
  flex: 1;
  flex-shrink: 1;
  overflow-y: scroll;
}
.grade {
  height: 50px;
  display: flex;
  align-items: center;
  &-progress {
    flex: 1;
    flex-shrink: 1;
    svg {
      width: 100%;
      height: 100%;
    }
    &-path {
      stroke-width: 5;
      stroke-linecap: round;
      stroke: #999;
    }
    .valid {
      stroke: red;
      transition: all 3s ease;
      animation: valid_path 1s ease reverse;
    }
  }
  input[type="number"] {
    appearance: none;
    margin: 0;
    padding: 0;
    outline: 0;
    line-height: 30px;
    font-size: 16px;
    width: 36px;
    border: none;
    border-bottom: 1px #999 solid;
    text-align: center;
    background: none;
  }
  &-worth {
    flex-shrink: 1;
  }
  &-process {
    flex-shrink: 1;
  }
}
.content {
  height: 180px;
  overflow-y: scroll;
  padding: 0px 5px;
  margin-top: 10px;
  border: 1px rgba(180, 175, 175, 1) solid;
  line-height: 28px;
  font-size: 14px;
  border-radius: 5px;
}
.schedule {
  background: rgba(255, 255, 255, 1);
  &-item {
    width: 100px;
    height: 100px;
  }
}
.schedule-cur {
  display: flex;
  flex-wrap: wrap;

  &-item {
    margin: 10px 5px;
    width: 100px;
    height: 100px;
  }
}
.history {
  &-item {
    &-time {
      line-height: 30px;
      font-size: 24px;
    }
    &-pics {
      display: flex;
      &-item {
        width: 100px;
        height: 100px;
        margin: 10px 8px;
      }
    }
  }
}
</style>
