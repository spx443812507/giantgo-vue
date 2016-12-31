import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import store from './store'
import App from './App'
import go from './package'
import wildvue from 'wildvue'
import wilddog from 'wilddog'

wilddog.initializeApp({
  authDomain: 'giantgo.wilddog.com',
  syncURL: 'https://giantgo.wilddogio.com'
})

Vue.use(wildvue)
Vue.use(go)
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (wilddog.auth().currentUser == null) {
      next({
        path: '/passport/signin',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

wilddog.auth().onAuthStateChanged((user) => {
  console.log(wilddog.auth().currentUser)
})

new Vue(
  Vue.util.extend({
    router,
    store
  }, App)).$mount('#app')
