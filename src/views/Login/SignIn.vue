<template>
  <go-layout :header="header" :footer="footer">
    <div class="correct">
      <img class="correct-logo" src="/static/images/correct.png"/>
    </div>
    <login-tab></login-tab>
    <go-input icon="email" label="邮箱" placeholder="请输入邮箱"></go-input>
    <go-input icon="password" label="密码" placeholder="请输入密码"></go-input>
    <router-link to="/home" class="btn-submit">登录</router-link>
    <span><a>忘记密码？</a></span>
  </go-layout>
</template>
<style>
</style>
<script type="text/ecmascript-6">
  import loginTab from '../../components/LoginTab'

  export default{
    data () {
      return {
        header: false,
        footer: false,
        msg: 'hello vue',
        test: 'asd'
      }
    },
    components: {
      loginTab
    },
    methods: {
      one () {
        setTimeout(() => {
        }, 100)
      }
    }
  }

</script>
