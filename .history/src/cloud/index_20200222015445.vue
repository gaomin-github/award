<template>
  <section class="cloud-wrapper">
    cloud award
  </section>
</template>
<script>
// import "../../common/lib/tagcanvas.js";
import "TagCanvas";
import members from "./member.js";
export default {
  data() {
    return {
      memberList: members
    };
  },
  mounted() {
    console.log(TagCanvas);
    console.log("memberlist");
    console.log(memberList);
  }
};
</script>
