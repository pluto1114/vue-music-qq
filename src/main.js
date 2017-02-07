// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import FastClick from 'fastclick'
import router from './router'
Vue.use(MuseUI)


FastClick.attach(document.body)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
