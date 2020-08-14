import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'  //路由拦截

import ElementUI from 'element-ui';   //elementui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/styles/index.scss'   //全局样式


import NProgress from 'nprogress'  //路由进度条样式
import 'nprogress/nprogress.css'

import {HttpService} from './api/http';
Vue.prototype.$httpService = new HttpService();  // 挂载服务


import Antd from 'ant-design-vue';   //ant-design-vue
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
