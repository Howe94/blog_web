import Router from "vue-router";
import RouterGuide from '@/utils/routerGuide.js';

const routes = [
  /*博客首页*/
  {
    path: '/',
    name: 'index',
    component: resolve => {
      require.ensure(['@/pages/homePage/index.vue'], () => {
        resolve(require('@/pages/homePage/index.vue'));
      }, 'chunk/homePage');
    },
    meta: {
      title: '主页',
      requireAuth: false
    }
  },
]
const router = new Router({
  base: process.env.BASE_URL,
  routes
});
console.log("路由的配置process.env.BASE_URL=====>",process.env.BASE_URL)
let routerGuide = new RouterGuide(router);
routerGuide.initRouterGuide();

export default routerGuide.getRouter();