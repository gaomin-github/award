const state = () => ({
  taskId: "",
  scheduleList: null,
  curUser: null,
  curSchedule: null,
  subId: "",
  taskHistory: null,
  editing: false,
});

const getters = {
  totalValue: (state) => {
    if (!state.scheduleList || state.scheduleList.length == 0) {
      return 0;
    }
    if (state.scheduleList.length === 1)
      return Number(state.scheduleList[0].worth);
    let totalValue = state.scheduleList.reduce((a, b, index) => {
      if (index === 1) return Number(a.worth) + Number(b.worth);
      return Number(a) + Number(b.worth);
    });
    return Number(totalValue);
  },
  score: (state) => {
    if (!state.scheduleList || state.scheduleList.length == 0) {
      return 0;
    }
    if (state.scheduleList.length === 1)
      return Number(state.scheduleList[0].process);
    let score = state.scheduleList.reduce((a, b, index) => {
      if (index === 1) return Number(a.process) + Number(b.process);
      return Number(a) + Number(b.process);
    });
    return Number(score);
  },
};

const mutations = {
  initTask(state, task) {
    state.scheduleList = task.schedules;
    state.taskId = task.taskId;
  },
  insertSchedule(state, item) {
    state.scheduleList.push(item);
  },
  updateSchedule(state, item) {
    let index = state.scheduleList.findIndex((schedule) => {
      if (item.subId === schedule.subId) {
        return true;
      }
    });
    if (index >= 0) {
      state.scheduleList.splice(index, 1, item);
    }
  },
  deleteSchedule(state, item) {
    let index = state.scheduleList.findIndex((schedule) => {
      if (item.subid === schedule.subid) {
        return true;
      }
    });
    state.scheduleList.splice(index, 1);
  },
  updateCurUser(state, user) {
    state.curUser = user;
  },
  updateCurSchedule(state, curSchedule) {
    state.curSchedule = curSchedule;
  },
  updateSubId(state, subId) {
    state.subId = subId;
  },
  updateEditing(state, bool) {
    state.editing = bool;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
