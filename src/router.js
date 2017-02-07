import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    // { path: '/' },
    { path: '/index',component:require('./views/index')},
    // { path: '/songs/:word', component: require('./views/Songs') },
    // { path: '/song/:id', component:require('./views/Song') },   
    { path: '*', redirect: '/index' }
  ]
})

export default router
