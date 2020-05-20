<template>
  <div class="assess-wrapper">
    <div class="editor" v-if="isEditing">
      <div class="editor-control">
        <i class="editor-btn editor-cancel fa fa-eraser"></i>
        <div class="editor-btn editor-send" @click="saveAssess">发表</div>
      </div>
      <textarea v-model="content" placeholder="给点评价吧..."></textarea>
      <div>
        <div class="editor-img" v-if="imgs && imgs.length > 0">
          <div
            v-for="imgItem in imgs"
            :key="imgItem.id"
            class="editor-img-item"
          >
            <assess-img
              :data="imgItem.data"
              @chooseImg="chooseImg"
            ></assess-img>
          </div>
          <div class="editor-img-item">
            <assess-img @chooseImg="chooseImg"></assess-img>
          </div>
        </div>
        <div class="editor-img-item" v-else>
          <assess-img @chooseImg="chooseImg"></assess-img>
        </div>
        <input
          type="file"
          accept="image/*"
          style="visibility: hidden;height:0px;"
          ref="imgPicker"
          multiple="multiple"
          @change="changeImg"
        />
      </div>
    </div>
    <div class="assess-con" v-else>
      <div class="assess-list"></div>
      <div class="assess-in">
        <input
          placeholder="添加评价"
          type="text"
          @click="handleEditing(true)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import request from "request";
import { mapState } from "vuex";
export default {
  components: {
    assessImg: () => import("./assess-img.vue"),
  },
  props: {
    assessList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      isEditing: false,
      content: "",
      imgs: [],
      curImgUrl: "",
    };
  },
  computed: {
    ...mapState("estate", ["curArea"]),
  },
  mounted() {
    // console.log(this.curArea, 58);
  },
  methods: {
    handleEditing(param) {
      this.isEditing = param;
    },
    saveAssess() {
      let formObj = new FormData();
      if (this.imgs && this.imgs.length > 0) {
        this.imgs.map((img, index) => {
          formObj.append(`file`, img.fileObj);
        });
      }
      formObj.append("content", this.content);
      formObj.append("type", "insert");
      formObj.append("areaId", this.curArea.areaId);
      request({
        url: "/xian/assess",
        method: "post",
        data: formObj,
        headers: { "content-type": "multipart/form-data" },
      }).then((res) => {
        if (res.status === 200) {
          if (res.data) {
            this.isEditing = false;
            this.content = "";
            this.imgs = [];
          }
        }
      });
    },
    cancel() {
      this.isEditing = false;
      this.content = "";
      this.imgs = [];
    },
    delAssess(item) {
      let formObj = new FormData();
      formObj.append("type", "delete");
      formObj.append("areaId", this.curArea.areaId),
        formObj.append("assessId", item.id);
      request({
        url: "/xian/assess",
        method: "post",
        data: formObj,
        headers: {
          "content-type": "multipart/form-data",
        },
      }).then((res) => {});
      //   request.post(`/task/assess?type=delete&areaId=${areaId}`).then((res) => {
      //     if (res.status === 200) {
      //       return res.data;
      //       this.$emit("updateArea");
      //     }
      //   });
    },
    chooseImg() {
      this.$refs.imgPicker.click();
    },
    changeImg(e) {
      let imgObjs = this.$refs.imgPicker.files;
      if (imgObjs && imgObjs.length > 0) {
        for (let index in imgObjs) {
          if (index < imgObjs.length) {
            (() => {
              let reader = new FileReader();
              let imgObj = imgObjs[index];
              reader.readAsDataURL(imgObj);
              reader.onload = () => {
                let imgObject = {
                  id: Math.random(),
                  data: reader.result,
                  fileObj: imgObj,
                };
                this.imgs.push(imgObject);
              };
            })();
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");

section,
div {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.assess-wrapper {
  width: 100%;
  height: 100%;
  padding: 0px 10px 10px;
}
.assess-con {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.assess-list {
  height: 30px;
  flex: 1;
  flex-shrink: 1;
  overflow-y: scroll;
  border: 1px black solid;
}
.assess-in {
  flex-shrink: 1;
  line-height: 36px;
  width: 100%;
  box-sizing: border-box;
  border: 1px black solid;
  /* input[type="text"] {
    width: 100%;
    padding: 0px 10px;
    line-height: 36px;
    font-size: 16px;
  } */
  ::-webkit-input-placeholder {
    margin-top: 50px;
    color: #999;
  }
}
.editor {
  height: 100%;
  position: relative;
  // height: 260px;
  border-radius: 10px;
  background-color: rgba(250, 253, 245, 1);
  overflow-y: scroll;

  &-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  }
  &-btn {
    top: 5px;
    right: 5px;
    width: 60px;
    line-height: 32px;
  }
  &-cancel {
    line-height: 22px;
    width: 22px;
    height: 22px;
    margin: 0px;
    padding: 0px;
    display: block;
    font-size: 22px;
    color: #999;
    font-weight: 400;
  }
  &-send {
    background-color: rgba(226, 248, 221, 1);
    border-radius: 5px;
    color: rgba(224, 105, 30, 1);
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }
  textarea {
    appearance: none;
    box-sizing: border-box;
    overflow-y: scroll;
    width: 100%;
    height: 180px;
    padding: 5px;
    border: none;
    font-size: 16px;
    line-height: 30px;
    outline: none;
    /* border: 1px rgba(115, 163, 9, 1) solid; */
    background: rgba(0, 0, 0, 0);
  }
  &-img {
    display: flex;
    flex-wrap: wrap;
  }
  &-img-item {
    width: 100px;
    height: 100px;
    margin: 10px 5px;
  }
}
.editor-img-item {
  width: 100px;
  height: 100px;
}
</style>
