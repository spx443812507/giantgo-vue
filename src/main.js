import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import store from './store'
import App from './App'
import go from './package'
import wildvue from 'wildvue'
import wilddog from 'wilddog'

let authenticated = false
let app = null

wilddog.initializeApp({
  authDomain: 'giantgo.wilddog.com',
  syncURL: 'https://giantgo.wilddogio.com'
})

Vue.use(wildvue)
Vue.use(go)
Vue.use(VueRouter)

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

wilddog.auth().onAuthStateChanged((user) => {
  authenticated = !!user
  if (authenticated) {
    store.dispatch('autoLogin', user)
  }
  console.log('登录状态：' + (authenticated ? '已登录' : '未登录'))
  if (app === null) {
    app = new Vue(
      Vue.util.extend({
        router,
        store
      }, App)).$mount('#app')
  }
})
