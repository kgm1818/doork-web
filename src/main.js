// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import router from '@/router'
import '@/common/rem.js'
import FastClick from 'fastclick'
Vue.config.productionTip = false
Vue.use(iview)

// 处理300毫秒延迟问题及双击问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
