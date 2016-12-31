const Home = resolve => {
  require.ensure(['./views/Home/Index.vue'], () => {
    resolve(require('./views/Home/Index.vue'))
  })
}

const routers = [{
  path: '/home',
  name: 'home',
  component: Home
}, {
  path: '/passport/signin',
  name: 'signin',
  component (resolve) {
    require.ensure(['./views/Passport/SignIn.vue'], () => {
      resolve(require('./views/Passport/SignIn.vue'))
    })
  }
}, {
  path: '/passport/signup',
  name: 'signup',
  component (resolve) {
    require.ensure(['./views/Passport/SignUp.vue'], () => {
      resolve(require('./views/Passport/SignUp.vue'))
    })
  }
}, {
  path: '/setting/index',
  name: 'setting',
  component (resolve) {
    require.ensure(['./views/Setting/Index.vue'], () => {
      resolve(require('./views/Setting/Index.vue'))
    })
  },
  meta: {requiresAuth: true}
}, {
  path: '*',
  component: Home
}]

export default routers
