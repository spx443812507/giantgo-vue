import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import store from './store'
import App from './App'
import { Cell, Checklist, Button, Toast, Switch } from 'mint-ui'

Vue.component(Switch.name, Switch)
Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)

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
