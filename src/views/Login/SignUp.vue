<template>
  <div>
    <div class="bar bar-header mask">
      <div class="bar-header-tools">
      </div>
      <div class="correct">
        <img class="correct-logo" src="static/images/correct.png"/>
      </div>
      <div class="tab">
        <a href="SignIn.html">登录</a>
        <a href="SignUp.html" class="active">注册</a>
      </div>
    </div>
    <div class="content has-logo has-submit">
      <div class="form-group">
        <i class="icon control-icon icon-profile">&nbsp;</i>
        <input type="text" class="form-control" placeholder="姓名"/>
      </div>
      <div class="form-group">
        <i class="icon control-icon icon-password">&nbsp;</i>
        <input type="password" class="form-control" placeholder="密码"/>
      </div>
    </div>
    <div class="bar bar-footer">
      <a href="List.html" class="btn-submit">提 交</a>
      <span><a>忘记密码？</a></span>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
