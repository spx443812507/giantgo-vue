<template>
  <div class="content no-header">
    <div class="content-header">
      <div class="content-header-item">
      </div>
      <div class="correct">
        <img class="correct-logo" src="static/images/correct.png"/>
      </div>
      <div class="tab">
        <a href="SignIn.html" class="active">登录</a>
        <a href="SignUp.html">注册</a>
      </div>
      <div class="mask opacity"></div>
    </div>
    <div class="content-center">
      <div class="form-group">
        <i class="icon icon-profile"></i>
        <input type="text" class="form-control" placeholder="姓名"/>
      </div>
      <div class="form-group">
        <i class="icon icon-password"></i>
        <input type="password" class="form-control" placeholder="密码"/>
      </div>
    </div>
    <div class="content-footer">
      <input type="button" class="btn-submit" value="提 交"/>
      忘记密码？
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
