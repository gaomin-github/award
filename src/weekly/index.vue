<template>
  <section class="schedule_wrapper">
    <header>
      <div class="prev">查看上周</div>
      <div class="cur">本周任务</div>
    </header>
    <div class="schedule">
      <div class="schedule-item">
        <div class="schedule-item-content">任务内容</div>
        <div class="schedule-item-worth">分值</div>
        <div class="schedule-item-process">完成情况</div>
      </div>
      <div v-if="scheduleList">
        <div class="schedule-item" v-for="item in scheduleList">
          <!-- <div class="schedule-item-content"> -->
          <div class="schedule-item-content" @click="editScheduleContent(item)">
            <p v-if="item.content">{{ item.content }}</p>
            <div class="schedule-item-placeholder" v-else>点击添加内容</div>
          </div>
          <div class="schedule-item-worth">
            <input
              type="number"
              placeholder="0"
              @input="editScheduleNum(item, 'worth')"
              v-model="item.worth"
            />
          </div>
          <div
            class="schedule-item-process"
            @click="editScheduleNum(item, 'process')"
          >
            <input
              type="number"
              placeholder="0"
              @input="editScheduleNum(item, 'worth')"
              v-model="item.process"
            />
          </div>
        </div>
      </div>
      <div class="add-icon" @click="addSchedule">+</div>
    </div>
    <div class="result" v-if="totalValue">
      0"> 总分{{ totalValue }},得分{{ score }},成绩{{
        Math.ceil((score / totalValue) * 100)
      }}
    </div>
  </section>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
.schedule_wrapper {
  display: block;
  height: 100%;
  padding: 20px 5px;
}
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
header {
  display: flex;
  position: relative;
  line-height: 42px;
  border-radius: 5px 5px 0 0;
  background-color: rgba(66, 144, 55, 1);
  .prev {
    font-size: 14px;
    position: absolute;
    left: 10px;
  }
  .cur {
    font-size: 16px;
    text-align: center;
    width: 100%;
  }
}
.schedule {
  position: relative;
  &-item {
    display: flex;
    line-height: 32px;

    padding: 0px 5px;
    background-color: rgba(246, 245, 220, 1);
    border-bottom: 1px rgba(104, 162, 112, 1) solid;
    font-size: 14px;
    height: auto;
    &-content {
      flex: 1;
      flex-shrink: 1;
      p {
        white-space: pre-wrap;
      }
    }
    &-worth {
      min-width: 40px;
      input {
        width: 40px;
        line-height: 32px;
      }
    }
    &-process {
      min-width: 50px;
      input {
        width: 40px;
        line-height: 32px;
      }
    }
  }
  .add-icon {
    width: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: top;
    border-radius: 50%;
    font-size: 18px;
    background: rgba(66, 144, 55, 1);
    color: rgba(255, 255, 255, 1);
  }
}
</style>
