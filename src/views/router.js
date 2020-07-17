import VueRouter from 'vue-router';

let routes = new VueRouter({
  mode: 'history',
  mode: 'history',
  routes: [{
    path: 'rbac',
    component: () => import('./rbac/index.vue')
  }]
})
export default routes;