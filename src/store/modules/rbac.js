const state = () => ({
  userInfo: {
    userId: '',
    token: ''
  },
  // sideBarSpread: true
})

const getters = {
  getUserInfo: (state) => {
    if (state.userInfo && state.userInfo.token) {
      return state.userInfo;
    }
    // 被强制刷新，从storage中取
    let userInfo_str = localStorage.getItem('userInfo')
    if (userInfo_str) {
      state.userInfo = JSON.parse(userInfo_str)
      return JSON.parse(userInfo_str)
    }
    return null;
  }
}

const mutations = {
  updateUserInfo(state, params) {
    console.log(params, 'params', 25)
    state.userInfo = params
  },
  // updateSideBarStatusr(state, param) {
  //   state.sideBarStatus = param;
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}