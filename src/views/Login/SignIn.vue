<template>
  <div>
    <div class="bar bar-header mask">
      <div class="bar-header-tools">
      </div>
      <div class="correct">
        <img class="correct-logo" src="/static/images/correct.png"/>
      </div>
      <login-tab></login-tab>
    </div>
    <div class="content has-logo has-submit">
      <go-input icon="email" label="邮箱" placeholder="请输入邮箱"></go-input>
      <go-input icon="password" label="密码" placeholder="请输入密码"></go-input>
    </div>
    <div class="bar bar-footer">
      <router-link to="/home" class="btn-submit">登录</router-link>
      <span><a>忘记密码？</a></span>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import loginTab from '../../components/LoginTab'
  import goInput from '../../components/go-input.vue'

  export default{
    data () {
      return {
        msg: 'hello vue',
        test: 'asd'
      }
    },
    components: {
      loginTab,
      goInput
    }
  }

</script>
