const state = () => ({
  curArea: null,
});

const getters = {};

const mutations = {
  setCurArea(state, item) {
    state.curArea = item;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
