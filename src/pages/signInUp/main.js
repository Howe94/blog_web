import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../store'
import VueRouter from 'vue-router'
/* ElementUI */
import ElementUI from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/element-variables.scss';
import '@/assets/scss/common.scss';
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')