import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import go from './package'

let authenticated = false

Vue.use(go)
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'hash',
  routes,
  linkActiveClass: 'active'
})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (authenticated) {
      next()
    } else {
      next({
        path: '/passport/signin',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

new Vue(
  Vue.util.extend({
    router,
    store
  }, App)).$mount('#app')
