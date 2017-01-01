import wilddog from 'wilddog'

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
    return new Promise((resolve, reject) => {
      const userRef = wilddog.sync().ref('web/users')
      wilddog.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((user) => {
        userRef.child(user.uid).set({
          uid: user.uid,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          birthday: this.user.birthday,
          emailVerified: user.emailVerified,
          phoneVerified: user.phoneVerified,
          lastLoginDate: new Date().getTime()
        }).then(() => {
          commit('setUserInfo', user)
          resolve()
        }, (error) => {
          reject(error)
        })
      }).catch((error) => {
        reject(error)
      })
    })
  },
  signIn ({commit, state}, userInfo) {
    return new Promise((resolve, reject) => {
      wilddog.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password).then((user) => {
        commit('setUserInfo', user)
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },
  autoLogin ({commit, state}, userInfo) {
    const userRef = wilddog.sync().ref('web/users').child(userInfo.uid)
    userRef.once('value').then((snapshot) => {
      const userData = snapshot.val()
      commit('setUserInfo', {
        uid: userInfo.uid,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        birthday: userData.birthday,
        emailVerified: userInfo.emailVerified,
        phoneVerified: userInfo.phoneVerified,
        lastLoginDate: new Date().getTime()
      })
    }, (error) => {
      console.log(error)
    })
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
