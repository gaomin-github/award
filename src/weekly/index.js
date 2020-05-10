import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    user: () => import("./com/user.vue"),
    taskHistory: () => import("./com/taskHistory.vue"),
    taskAllHistory: () => import("./com/taskAllHistory.vue"),
    editor: () => import("./com/editor.vue"),
    task: () => import("./com/task.vue"),
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("weekly", ["curUser", "taskHistory", "editing"]),
  },
  mounted() {
    // this._initUsers();
  },
  methods: {},
};
