import Vue from 'vue'

const state = {
  userInfo: {},
  token: ''
}

const getters = {
  userInfo: state => state.userInfo,
  token: state => state.token
}

const actions = {
  signUp ({commit, state}, userInfo) {
    return Vue.http.post('/api/passports', userInfo)
  },
  signIn ({commit, state}, userInfo) {
    return Vue.http.get('/api/passports', userInfo).then(response => {
      Vue.cookie.set('token', response['body']['token'])
      Vue.cookie.set('email', response['body']['data']['email'])
      Vue.cookie.set('avatar', response['body']['data']['avatar'])
      Vue.cookie.set('name', response['body']['data']['name'])

      return response.body
    })
  },
  clearUserInfo () {
    Vue.cookie.delete('token')
    Vue.cookie.delete('email')
    Vue.cookie.delete('avatar')
    Vue.cookie.delete('name')
  },
  autoLogin ({commit, state}, userInfo) {

  }
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo['data']
    state.token = userInfo['token']
  },
  clearUserInfo () {
    state.userInfo = null
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
