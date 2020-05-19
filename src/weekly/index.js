import { mapState, mapMutations } from "vuex";

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
    ...mapState("weekly", ["curUser", "taskHistory", "editing","pathArr",'pageMove']),
  },
  mounted() {
    // this._initUsers();
  },
  watch:{
    pathArr:function(newValue,oldValue){
        if(oldValue.length>newValue.length){
            // 回退
            this.setPageMove('prev');
            
        }else{
            // 前进
            this.setPageMove('next')
        }
    }
  },
  methods: {
      ...mapMutations('weekly',['setPageMove'])
  },
};
