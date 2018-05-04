import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import App from './App'

Vue.use(ElementUI);

Vue.config.productionTip = false

axios.defaults.withCredentials=true;
axios.defaults.headers.post['Content-Type'] = 'appliction/json';
axios.defaults.baseURL = 'http://localhost:1234/api/';
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  echarts,
  components: { App },
  template: '<App/>'
})
