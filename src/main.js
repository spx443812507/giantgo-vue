import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App'
import go from './package'

Vue.use(go)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookie)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'hash',
  routes,
  linkActiveClass: 'active'
})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(record => record.meta.authorization)) {
    if (Vue.cookie.get('token')) {
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

Vue.http.interceptors.push((request, next) => {
  if (Vue.cookie.get('token')) {
    request.headers.append('authorization', 'Bearer ' + Vue.cookie.get('token'))
  }

  // continue to next interceptor
  next()
})

new Vue(
  Vue.util.extend({
    router,
    store
  }, App)).$mount('#app')
