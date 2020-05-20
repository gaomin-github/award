<template>
  <div class="circle-chart-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg">
      <circle class="circle_path_bg" />
      <circle class="circle_path" :stroke-dasharray="`${score * 200} 500`" />
      <!-- <circle class="circle_path" stroke-dasharray="100 200" /> -->

      <path
        v-if="score === 1"
        class="circle_mark_full"
        d="M 25 23 L 30 38 L 48 20"
      ></path>
      <text x="23" y="35" class="circle_mark" v-else>
        {{ Math.ceil(score * 100) }}
      </text>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
svg {
  width: 65px;
  height: 65px;
}
@keyframes path {
  to {
    stroke-dasharray: 0 500;
  }
}
.circle_path,
.circle_path_bg {
  cx: 31;
  cy: 31;
  r: 30;
  fill: none;
  stroke-width: 3;
}
.circle_path_bg {
  stroke: #efefef;
}
.circle_path {
  stroke: rgba(66, 144, 55, 1);
  animation: path 2s ease reverse;
  stroke-linecap: round;
}
.circle_mark {
  fill: rgba(66, 144, 55, 1);
}
.circle_mark_full {
  fill: none;
  stroke: rgba(66, 144, 55, 1);
  stroke-width: 4;

  x: 30;
  y: 30;
}
</style>
