import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("weekly", ["scheduleList"]),
    ...mapGetters("weekly", ["totalValue", "score"]),
  },
  created() {
    console.log("weekly index created");
  },
  mounted() {
    console.log("weekly index mounted");
    this._initHistory();
  },
  methods: {
    ...mapMutations("weekly", ["insert", "update", "delete"]),
    _initHistory() {
      //   console.log(this.scheduleList, 19);
      if (!this.scheduleList || this.scheduleList.length == 0) {
        this.addSchedule();
        return;
      }
      // 从store中取
      // 数据库查询，如果没有，初始化第一条
    },
    addSchedule() {
      let newSchedule = {
        subId: Math.random(),
        content: "",
        worth: 0,
        process: 0,
      };
      this.insert(newSchedule);
    },
    editScheduleContent(item) {
      this.$router.push({
        name: "weeklyContent",
        query: {
          content: item.content,
          subId: item.subId,
          worth: item.worth,
          process: item.process,
        },
      });
    },
    editScheduleNum(item, type) {
      this.update(item);
    },
    editScheduleProcess() {
      //   添加时间限制
    },
  },
};
