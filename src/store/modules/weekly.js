const state = () => ({
  scheduleList: [],
});

const getters = {
  totalValue: (state) => {
    if (!state.scheduleList || state.scheduleList.length == 0) {
      return 0;
    }
    if (state.scheduleList.length === 1) return state.scheduleList[0].worth;
    return state.scheduleList.reduce((a, b, index) => {
      console.log(index, 9);

      if (index === 1) return a.worth + b.worth;
      return a + b.worth;
    });
    // console.log(totalValue, 14);
  },
  score: (state) => {
    if (!state.scheduleList || state.scheduleList.length == 0) {
      return 0;
    }
    if (state.scheduleList.length === 1) return state.scheduleList[0].process;
    return state.scheduleList.reduce((a, b, index) => {
      if (index === 1) return a.process + b.process;
      return a + b.process;
    });
  },
};

const mutations = {
  insert(state, item) {
    // console.log(item, 6);
    state.scheduleList.push(item);
  },
  update(state, item) {
    let index = state.scheduleList.findIndex((schedule) => {
      if (item.subid === schedule.subid) {
        return true;
      }
    });
    if (index >= 0) {
      state.scheduleList.splice(index, 1, item);
    }
    console.log(state.scheduleList, 18);
  },
  delete(state, { item }) {
    let index = state.scheduleList.findIndex((schedule) => {
      if (item.subid === schedule.subid) {
        return true;
      }
    });
    state.scheduleList.splice(index, 1);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
