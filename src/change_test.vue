<template>
  <div class="change-wrapper">
    change test---obj:{{obj.info.age}},{{obj.name}},txt:{{txt}}
    <div>{{getFullInfo()}}</div>
    <div>{{JSON.stringify(obj)}}</div>
    <div>getArrLen:{{getArrLen()}}</div>

    <!-- <div v-for="(item,index) in arr" :key="index">{{item}}</div> -->
    <div>{{keyObj}}</div>
    <div>oddNum:{{getObjNum(1)}},eddNum:{{getObjNum(0)}}</div>
    <div>
      <button @click="changeObj">changeObj</button>
      <button @click="changeTxt">changeTxt</button>
      <button @click="changeArr">changeArr</button>
      <button @click="pushArr">pushArr</button>
      <button @click="addKeyObj">addKeyObj</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
      keyObj: {},
      obj: {
        name: "anna",
        info: {
          age: 32
        }
      },
      txt: "txt content"
    };
  },
  mounted() {},
  methods: {
    changeObj() {
      this.obj.info.age++;
      // this.obj.name += "a_";
      this.obj[Math.random()] = "addNew";
    },
    changeTxt() {
      this.txt += "1-";
    },
    changeArr() {
      this.arr[1] = this.arr[1] + "a";
    },
    pushArr() {
      this.arr.push(Math.random());
    },
    addKeyObj() {
      let curTime = new Date().getTime();
      // this.keyObj[curTime] = {
      //   type: curTime % 2,
      //   value: curTime
      // };
      // this.$forceUpdate();
      this.$set(this.keyObj, `${curTime}`, {
        type: curTime % 2,
        value: curTime
      });
      console.log(this.keyObj, 61);
    },
    getFullInfo() {
      return `name:${this.obj.name},age:${this.obj.info.age},txt:${this.txt}`;
    },
    getArrLen() {
      return this.arr.length;
    },
    getObjNum(param) {
      console.log("getObjNum", 68);
      let cur_arr = Object.keys(this.keyObj).filter(o => {
        return this.keyObj[o].type === param;
      });
      return cur_arr.length;
    }
  }
};
</script>