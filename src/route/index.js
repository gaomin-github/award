import VueRouter from 'vue-router';

let rbac_base_route = {
  name: 'rbac',
  path: '/rbac',
  component: () => import('../views/rbac/index.vue'),
  children: []
}

let base_routes = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: "",
    //   component: () => import("./index.vue")
    // },
    {
      path: "/cloud",
      component: () => import("../cloud/index.vue"),
    },
    {
      path: "/turnTable",
      component: () => import("../turn-table/index.vue"),
    },
    {
      path: "/lottieDemo",
      component: () => import("../lottieDemo/index.vue"),
    },
    {
      // 方块创建动画
      path: "/threeDemo",
      component: () => import("../threeDemo/demo1.vue"),
    },
    {
      // 模型转粒子
      path: "/granulesDemo",
      component: () => import("../granules/index.vue"),
    },
    {
      // 西安
      name: "gxEstate",
      path: "/gxEstate",
      component: () => import("../xian-estate/index.vue"),
      meta: {
        keepAlive: true,
      },
    },
    {
      // 西安area中的building
      name: "gxBuilding",
      path: "/gxBuilding",
      component: () => import("../xian-estate/area.vue"),
    },
    {
      name: "weekly",
      path: "/weekly",
      component: () => import("../weekly/index.vue"),
    },

    {
      name: "animTest",
      path: "/animTest",
      component: () => import("../animTest/index.vue"),
      meta: {
        keepAlive: true,
      },
    },
    {
      name: "scrollTest",
      path: "/scrollTest",
      component: () => import("../scrollTest/index.vue"),
    },
    rbac_base_route,
    {
      name: 'cardswitch',
      path: '/cardswitch',
      component: () => import('../views/cardswitch/index.vue'),
      children: []
    },
    {
      name: 'lazy',
      path: '/lazy',
      component: () => import('../views/lazyload/index.vue'),
      children: []
    }
    // () => import('./router/index.js')

    // {
    //     name: "weekly",
    //     path: "/weekly",
    //     component: () => import("./weekly/weekly.vue"),
    // },
    // {
    //     name: "weeklyContent",
    //     path: "/weeklyContent",
    //     component: () => import("./weekly/content.vue"),
    // },
  ],
})
let permission_routes = []
export default base_routes;