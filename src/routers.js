// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point

const Index = resolve => {
  require.ensure(['./views/Home/Index.vue'], () => {
    resolve(require('./views/Home/Index.vue'))
  })
}

const routers = [{
  path: '/passport/signin',
  name: 'signin',
  component (resolve) {
    require.ensure(['./views/Login/SignIn.vue'], () => {
      resolve(require('./views/Login/SignIn.vue'))
    })
  }
}, {
  path: '/passport/signup',
  name: 'signup',
  component (resolve) {
    require.ensure(['./views/Login/SignUp.vue'], () => {
      resolve(require('./views/Login/SignUp.vue'))
    })
  }
}, {
  path: '/',
  name: 'index',
  component (resolve) {
    require.ensure(['./views/Home/Index.vue'], () => {
      resolve(require('./views/Home/Index.vue'))
    })
  }
}, {
  path: '*',
  component: Index
}]

export default routers
