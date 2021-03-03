import {getCookie} from './utils.js';
/**
 * @description 路由守卫文件
 * @author Abson Wong
 * @class
 * @classdesc 该类做为一个基类，提供一个变量vueRouter（router对象实例）和两个方法initRouterGuide、getRouter，可以通过继承或者覆盖来扩展或个性化
 * **/
class RouterGuide {
  /**
   * @constructor RouterGuide
   * @param {Object} vueRouter 路由对象
   * **/
  constructor (vueRouter) {
    this.vueRouter = vueRouter;
  }

  /**
   * @param {Function=} cb 回调函数
   * @callback 该回调函数作为beforeEach方法的扩充
   * @description 通用路由守卫函数，已写好公共的路由拦截方法
   * **/
  initRouterGuide (cb = new Function()) {
    this.vueRouter.beforeEach((to, from, next) => {
      let cookies = getCookie('access_token');
      if (!cookies) {
        sessionStorage.clear();
      }

      /* 路由发生变化修改页面title */
      if (to.meta.title) {
        document.title = to.meta.title;
      }

      cb(to, from);

      // 判断该路由是否需要登录权限，没写requireAuth则默认为true
      if (to.meta.requireAuth || !Object.prototype.hasOwnProperty.call(to.meta, 'requireAuth')) {
        if (cookies) {
          let pattern = /login.html/;
          if (pattern.test(top.location.href)) {
            top.location.href = `/blogWeb/`;
          }
          else {
            next();
          }
        } else {
          top.location.href = `/blogWeb/login.html#/`;
          next();
        }
      } else {
        next();
      }
    });
  }

  // 暴露router对象
  getRouter () {
    return this.vueRouter;
  }
}

export default RouterGuide;
