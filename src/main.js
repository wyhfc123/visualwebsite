// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import axios from "axios";
// 允许ajax发送请求时附带cookie
axios.defaults.withCredentials = false;
Vue.prototype.$axios = axios;


import settings from "./settings";
Vue.prototype.$settings=settings;


import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
exportingInit(Highcharts)
Vue.use(HighchartsVue)


// ElementUI 导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 调用插件
Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})
