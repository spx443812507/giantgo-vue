import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import store from './store'
import App from './App'
import go from './package'

Vue.use(go)
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue(
  Vue.util.extend({
    router,
    store
  }, App)).$mount('#app')
