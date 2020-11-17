import router from './index.js';
import store from '../store';
router.beforeEach((to, from, next) => {
  let userInfo = store.getter['rbac/getUserInfo'];
  if (userInfo && userInfo.token) {
    // 用户已登录
    if (to.path === 'rbac-login') {
      // 跳转到首页
      next({ path: '/' })
    }
  } else {
    // 跳转登录
    next({ path: '/rbac-login' })
  }
})