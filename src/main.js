import Vue from 'vue'
import App from './App.vue'
import registerElement from './global/register-element';
import router from '@/router'
import store from './store';
import '@/assets/css/index.css'
import '@/assets/less/index.less'

registerElement(Vue) // 注册element-ui
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
