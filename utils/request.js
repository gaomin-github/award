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
  if (response.status === 401) {
    // 登录失效
    // 清理token
    // 路由重定向
    location.reload();
    return;
  }
  return response;
})

export default request;
