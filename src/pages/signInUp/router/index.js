import Vue from 'vue';
import Router from "vue-router";
import RouterGuide from '@/utils/routerGuide.js';
Vue.use(Router);
const routes = [
  /*登录*/
  {
    path: '/',
    name: 'signIn',
    component: resolve => {
      require.ensure(['../views/signIn.vue'], () => {
        resolve(require('../views/signIn.vue'));
      }, 'signIn');
    },
    meta: {
      title: '登录',
      requireAuth: false
    }
  },
  /*注册*/
  {
    path: '/signUp',
    name: 'signUp',
    component: resolve => {
      require.ensure(['../views/signUp.vue'], () => {
        resolve(require('../views/signUp.vue'));
      }, 'signUp');
    },
    meta: {
      title: '注册',
      requireAuth: false
    }
  },
]
const router = new Router({
  base: process.env.BASE_URL,
  routes
});

let routerGuide = new RouterGuide(router);
routerGuide.initRouterGuide();

export default routerGuide.getRouter();