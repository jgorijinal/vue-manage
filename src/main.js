import Vue from 'vue'
import App from './App.vue'
import registerElement from './global/register-element';
import router from '@/router'
import '@/assets/css/index.css'

registerElement(Vue) // 注册element-ui
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
