<template>
  <div class="assess-wrapper">
    <div class="editor" v-if="isEditing">
      <textarea> </textarea>
      <div class="editor-btn">发送</div>
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
export default {
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    handleEditing(param) {
      this.isEditing = param;
    },
  },
};
</script>
<style lang="scss" scoped>
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
  input[type="text"] {
    width: 100%;
    padding: 0px 10px;
    line-height: 36px;
    font-size: 16px;
  }
  ::-webkit-input-placeholder {
    color: #999;
  }
}
.editor {
  height: 100%;
  position: relative;
  height: 300px;
  border: 1px rgba(115, 163, 9, 1) solid;
  border-radius: 10px;
  background-color: rgba(250, 253, 245, 1);
  textarea {
    appearance: none;
    box-sizing: border-box;
    width: 100%;
    height: 260px;
    padding: 5px;
    border: none;
    font-size: 16px;
    line-height: 30px;
    outline: none;
    background: rgba(0, 0, 0, 0);
  }
  &-btn {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 60px;
    line-height: 32px;
    background-color: rgba(115, 163, 9, 1);
    border-radius: 5px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
}
</style>
