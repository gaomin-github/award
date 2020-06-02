const state = () => ({
  curArea: null,
});

const getters = {
    getCurArea:(state)=>{
        return state.curArea;
    }
};

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
