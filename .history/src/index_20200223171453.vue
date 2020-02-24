<template>
  <section>
    inde.vue
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
