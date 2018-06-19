import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

// 使用fastclick后body下元素点击没有300ms的延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

// 引入styl的样式
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
