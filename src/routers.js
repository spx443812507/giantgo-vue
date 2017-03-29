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
  meta: {authorization: true}
}, {
  path: '/setting/profile',
  name: 'profile',
  component (resolve) {
    require.ensure(['./views/Setting/Profile.vue'], () => {
      resolve(require('./views/Setting/Profile.vue'))
    })
  },
  meta: {authorization: true}
}, {
  path: '/questionnaire/index',
  name: 'questionnaire',
  component (resolve) {
    require.ensure(['./views/Questionnaire/Index.vue'], () => {
      resolve(require('./views/Questionnaire/Index.vue'))
    })
  },
  meta: {authorization: true}
}, {
  path: '/chat/index',
  name: 'chat_index',
  component (resolve) {
    require.ensure(['./views/Chat/Index.vue'], () => {
      resolve(require('./views/Chat/Index.vue'))
    })
  },
  meta: {authorization: true}
}, {
  path: '/chat/create',
  name: 'create_chat',
  component (resolve) {
    require.ensure(['./views/Chat/Create.vue'], () => {
      resolve(require('./views/Chat/Create.vue'))
    })
  },
  meta: {authorization: true}
}, {
  path: '*',
  component: Home
}]

export default routers
