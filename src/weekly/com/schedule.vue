<template>
  <div
    :class="['schedule-wrapper schedule-item',order%2===0?'odd':'even']"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="editScheduleContent"
  >
  <i :class="['icon' ,'fa',`fa-${iconInfos[order%4].icon}`]" :style="{background:iconInfos[order%4].bg}"></i>
  <div :class="['content',`${schedule.content?'':'content_blank'}`]">
      {{schedule.content||'add some schedules ~'}}
  </div>
  <div class="grade">

  </div>
    <!-- <div class="schedule-item-content" @click="editScheduleContent">
      <p v-if="schedule.content">{{ schedule.content }}</p>
      <div class="schedule-item-placeholder" v-else>点击添加内容</div>
    </div>
    <div
      class="schedule-item-worth"
      :class="schedule.errStatus ? 'number-err' : ''"
    >
      <input
        type="number"
        placeholder="0"
        @input="editScheduleNum(schedule, 'worth')"
        v-model="schedule.worth"
      />
    </div>
    <div
      class="schedule-item-process"
      :class="schedule.errStatus ? 'number-err' : ''"
    >
      <input
        type="number"
        placeholder="0"
        @input="editScheduleNum"
        v-model="schedule.process"
      />
    </div> -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

// 时间超过500ms，滑动距离超过一半 ，
export default {
  data() {
    return {
      touchStartX: 0,
      touchEndX: 0,
      iconInfos:[{
          bg:'rgba(248,169,97,1)',
          icon:'book'
      },
      {
          bg:'rgba(172,97,248,1)',
          icon:'language'
      },{
          bg:'rgba(247,35,111,1)',
          icon:'cutlery'
      },{
          bg:'rgba(0,178,255,1)',
          icon:'bell'
      }]
    };
  },
  props: {
    schedule: {
      type: Object,
      default: () => {
        return {};
      },
    },
    order:{
        type:Number,
        default:0
    }
  },
  model: {
    prop: "schedule",
    event: "update",
  },
  computed: {
    ...mapState("weekly", ["editing"]),
  },
  mounted() {
      console.log(this.order,73)
  },
  methods: {
    ...mapMutations("weekly", [
      "updateCurSchedule",
      "updateEditing",
      "initTask",
      "insertSchedule",
      "updateSchedule",
      "deleteSchedule",
    ]),
    editScheduleContent() {
      this.updateCurSchedule(this.schedule);
      this.updateEditing(true);
    },
    editScheduleNum() {
      this.$emit("editScheduleNum", this.schedule);
    },
    handleTouchStart(e) {
      this.touchStartX = e.targetTouches[0].pageX;
      console.log(e.targetTouches[0].pageX, "-----start----");
      // e.preventDefault();
    },
    handleTouchMove(e) {
      this.touchEndX = e.targetTouches[0].pageX;
      console.log(e.targetTouches[0].pageX, "-----move----");
    },
    handleTouchEnd(e) {
      console.log("handleTouchEnd");
      console.log(
        `touchStartX:${this.touchStartX},toucheEndX:${this.touchEndX}`
      );
      // console.log(e.targetTouches[0].clientX, "-----end----");
    },
  },
};
</script>
<style lang="scss" scoped>
section,
div,
header,
p {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
input,
textarea {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  height: 100%;
  font-size: 14px;
}
::-webkit-input-placeholder {
  color: #999;
}

.schedule-item {
    height:70px;
    border-radius: 5px;
    display:flex;

    align-items: center;
    padding-left:5px;
//   line-height: 32px;

//   padding: 5px 5px;
//   background-color: rgba(246, 245, 220, 1);
//   border-bottom: 1px rgba(104, 162, 112, 1) solid;
//   font-size: 16px;
//   height: auto;
//   &-placeholder {
//     color: #999;
//   }
//   &-content {
//     flex: 1;
//     flex-shrink: 1;
//     p {
//       white-space: pre-wrap;
//     }
//   }
//   &-worth,
//   &-process {
//     text-align: center;
//     input {
//       width: 100%;
//       line-height: 32px;
//       text-align: center;
//       font-size: 16px;
//     }
//   }
//   &-worth {
//     width: 50px;
//     margin-right: 1px;
//   }
//   &-process {
//     width: 50px;
//   }
  /* &-process-poor {
        input {
            color: rgba(213, 30, 30, 1);
        }
    }
    &-process-aver {
        input {
            color: rgba(113, 100, 100, 1);
        }
    }
    &-process-exe {
        input {
            color: rgba(66, 144, 55, 1);
        }
    } */
}
.icon{
    display: block;
    flex-shrink: 1;
    box-sizing: border-box;
    width: 38px;
    height: 38px;
    margin:0px 5px;
    line-height: 38px;
    color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
}
.content{
    flex:1;
    color:rgba(67,72,86,1);
    font-size:16px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.content_blank{
    color:rgba(179,185,203,1);
        font-size:16px;

}
.grade{
    width:100px;
    border:1px red solid;
}
.even{
    background:rgba(248,248,248,1)
}
.odd{
    background:rgba(255,255,255,1)

}
.number-err {
  border-bottom: 2px red dashed;
}
</style>
