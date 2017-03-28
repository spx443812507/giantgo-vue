import Vue from 'vue'

const state = {
  userInfo: {},
  authenticated: false
}

const getters = {
  userInfo: state => state.userInfo,
  authenticated: state => state.authenticated
}

const actions = {
  signUp ({commit, state}, userInfo) {
    return Vue.http.post('/api/users', userInfo)
  },
  signIn ({commit, state}, userInfo) {
    return Vue.http.get('/api/users', userInfo)
  },
  autoLogin ({commit, state}, userInfo) {

  }
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
    state.authenticated = true
  },
  clearUserInfo () {
    state.userInfo = null
    state.authenticated = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
