import Vue from 'vue';
import VueResource from 'resource';
import App from './App';
import router from './router';
import store from './store';  // 引入store 
Vue.config.productionTip = false;
import './lib/mui.min.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  store, // 注入store 
  template: '<App/>',
  components: { App }
})