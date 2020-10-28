<template>
  <div class="safe-wrapper">
    安全测试
    <input type="text" :value="getInputVal()" />
    {{getInputVal()}}
    <div class="alert" ref="info1">alert_info</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      inputValue:''
    }
  },
  mounted() {
    let domEl = this.$refs["info1"];
    // console.log(domEl, 20);
    // console.log(txt, 15);

    let txt = location.href;
    txt = txt.substring(5, txt.length);
  },
  methods: {
    getInputVal() {
      // let searchParams = new URLSearchParams(window.location.href);
      // console.log(searchParams, 13);
      // let txt = searchParams.get("txt");
      let txt = location.search;
      txt =decodeURIComponent(txt.substring(1, txt.length));
      // eval(txt)
      console.log(txt, 15);
      // this.$ref.alert_info.innerHTML = txt;
      // document.body.
      // document.body.appendChild(txt);
      return txt;
      // return 123;
    }
  }
};
</script>