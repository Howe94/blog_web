import Router from "vue-router";
import RouterGuide from '@/utils/routerGuide.js';

const routes = [
  /*博客首页*/
  {
    path: '/index',
    name: 'index',
    component: resolve => {
      require.ensure(['@/views/homePage/index.vue'], () => {
        resolve(require('@/views/homePage/index.vue'));
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
  routes: routes
});

let routerGuide = new RouterGuide(router);
routerGuide.initRouterGuide();

export default routerGuide.getRouter();