<template>
    <div class="progress-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 10">
            <line class="progress-path " x1="5" y1="5" x2="100" y2="5" />
            <line class="progress-path valid" v-if="value" x1="5" y1="5" x2="100" :stroke-dasharray="`${100*value} 500`" y2="5" />
        </svg>
    </div>
</template>
<script>
export default{
    props:{
        value:{
          type:Number,
          default:0
      }
  }  
}
</script>
<style lang="scss" scoped>
div{
    display:block;
    box-sizing:border-box;
    overflow:hidden;
}
@keyframes valid_path {
    to{
        stroke-dasharray:0 500;
    }
}
.progress-wrapper{
    width:100%;
    height:100%;
}
svg{
    width:100%;
    height:100%;
}
.progress-path{
    stroke-width:5;
    stroke-linecap:round;
    stroke:#999;
}
.valid{
    stroke:rgba(66, 144, 55, 1);
    // transition:all 3s ease;
    animation:valid_path 1s ease reverse;
}
</style>