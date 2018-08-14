import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import fastClick from 'fastclick'
import 'common/stylus/index.styl'
Vue.config.productionTip = false
// eslint-disable-next-line
fastClick.attach(document.body) // 可以去掉点击延迟3秒的问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
