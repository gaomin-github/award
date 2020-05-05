<template>
  <section class="schedule_wrapper">
    <header></header>
    <div class="user" v-if="users && users.length > 0">
      <div
        class="user-item"
        v-for="user in users"
        :key="user.userId"
        @click="gotoWeekly(user)"
      >
        {{ user.userName }}
      </div>
    </div>
  </section>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
.user {
  &-item {
    margin: 10px 0px;
    text-align: center;
    line-height: 36px;
    background-color: rgba(246, 245, 220, 1);
  }
}
</style>
