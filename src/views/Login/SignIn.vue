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
      <form-input icon="icon-email" placeholder="邮箱"></form-input>
      <form-input icon="icon-password" placeholder="密码"></form-input>
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
  import loginTab from '../../components/LoginTab'
  import formInput from '../../components/formInput'

  export default{
    data () {
      return {
        msg: 'hello vue',
        test: 'asd'
      }
    },
    components: {
      loginTab,
      formInput
    }
  }

</script>
