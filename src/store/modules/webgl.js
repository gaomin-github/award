const state = () => ({
  id: '123',
})

const mutations = {
  updateId(state, param) {
    state.id = param
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

