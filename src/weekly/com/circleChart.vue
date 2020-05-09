<template>
    <div class="circle-chart-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg">
            <circle class="circle_path_bg" />
            <circle class="circle_path" :stroke-dasharray="`${score} 500`" />
        </svg>
    </div>
</template>
<script>
export default {
    props: {
        score: {
            type: Number,
            default: 0
        }
    }
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
    stroke: red;
    animation: path 2s ease reverse;
}
</style>