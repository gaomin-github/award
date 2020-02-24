<template>
  <section>
    <section class="">
      抽奖系列
    </section>
    <section @click="goTo('cloud')">cloud</section>
  </section>
</template>
<script>
export default {
  methods: {
    goTo(item) {
      this.$router.push(item);
    }
  }
};
</script>
