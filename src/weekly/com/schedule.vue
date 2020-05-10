<template>
  <section
    class="schedule-wrapper schedule-item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="schedule-item-content" @click="editScheduleContent">
      <p v-if="schedule.content">{{ schedule.content }}</p>
      <div class="schedule-item-placeholder" v-else>点击添加内容</div>
      <!-- {{ schedule.errStatus }} -->
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
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

// 时间超过500ms，滑动距离超过一半 ，
export default {
  data() {
    return {
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  props: {
    schedule: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  model: {
    prop: "schedule",
    event: "update",
  },
  computed: {
    ...mapState("weekly", ["editing"]),
  },
  mounted() {},
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
  display: flex;
  line-height: 32px;

  padding: 5px 5px;
  background-color: rgba(246, 245, 220, 1);
  border-bottom: 1px rgba(104, 162, 112, 1) solid;
  font-size: 16px;
  height: auto;
  &-placeholder {
    color: #999;
  }
  &-content {
    flex: 1;
    flex-shrink: 1;
    p {
      white-space: pre-wrap;
    }
  }
  &-worth,
  &-process {
    text-align: center;
    input {
      width: 100%;
      line-height: 32px;
      text-align: center;
      font-size: 16px;
    }
  }
  &-worth {
    width: 50px;
    margin-right: 1px;
  }
  &-process {
    width: 50px;
  }
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
.number-err {
  border-bottom: 2px red dashed;
}
</style>
