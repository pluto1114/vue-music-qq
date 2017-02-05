// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import VueRouter from 'vue-router'

Vue.use(MuseUI)
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/index' },
    // { path: '/songs/:word', component: require('./views/Songs') },
    // { path: '/song/:id', component:require('./views/Song') },   
    { path: '*', redirect: '/index' }
  ]
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
