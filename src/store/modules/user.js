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
    return Vue.http.patch('/api/passports', userInfo)
  },
  clearUserInfo () {
    Vue.cookie.delete('token')
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
