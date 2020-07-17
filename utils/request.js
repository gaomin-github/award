import axios from "axios";
import store from '../src/store/index.js';
let request = axios.create({
  timeout: 1000 * 30,
  headers: {},
});
request.interceptors.request.use(config => {
  let userInfo = store.getters['rbac/getUserInfo'];

  config.headers['Authorization'] = `${(userInfo && userInfo.token) || ''}`
  return config;
})

request.interceptors.response.use(response => {
  // console.log(response, 15)
  // if (response.status === 401) {
  // 登录失效
  // 清理token
  // 路由重定向
  // location.reload();
  // return;
  // }
  return response;
}, error => {
  if (error.response.status === 401 || error.response.statusText === 'Unauthorized') {
    // 清理登录信息
    localStorage.clear();
    store.commit('rbac/updateUserInfo', null)
    // location.reload();
  }
})

export default request;
