<template>
  <section class="content-wrapper">
    <header class="back" @click="handleBack">《---</header>
    <textarea
      ref="content"
      class="content"
      v-model="content"
      @input="inputHandler"
    >
    </textarea>
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { throttle } from "lib/throttle.js";
export default {
  data() {
    return {
      content: "",
      subId: "",
      worth: 0,
      process: 0,
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
    ...mapState(["weekly"]),
  },
  mounted() {
    this._prevData();
    this.$refs.content.focus();
  },
  beforeDestroy() {
    this._saveSchedule();
  },
  methods: {
    ...mapMutations("weekly", ["update"]),
    _prevData() {
      let data = this.$route.query;
      //   console.log(data, 27);
      this.content = data.content;
      this.subId = data.subId;
      this.worth = data.worth;
      this.process = data.process;
      //   console.log(this.content,37)
    },
    inputHandler() {
      //   console.log(throttle, 43);
      throttle(() => {
        console.log("input", new Date().getTime());
        // 更新到vuex
        this.update({
          content: this.content,
          subId: this.subId,
          worth: this.worth,
          process: this.process,
        });
      }, 2000)();
    },
    handleBack() {
      this._saveSchedule();
      this.$router.go(-1);
    },
    _saveSchedule() {
      this.update({
        content: this.content,
        subId: this.subId,
        worth: this.worth,
        process: this.process,
      });
    },
  },
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
