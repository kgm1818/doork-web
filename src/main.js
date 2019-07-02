// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'

// 引入flexible
import 'lib-flexible'
import '@/common/rest.css'
import '@/common/basc.scss'
import FastClick from 'fastclick'
import { Button } from 'vant'

Vue.config.productionTip = false


Vue.use(Button)

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
