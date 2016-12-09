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
      <go-input icon="profile" label="姓名" placeholder="请输入姓名"></go-input>
      <go-input icon="email" label="邮箱" placeholder="请输入邮箱"></go-input>
      <go-input icon="password" label="密码" placeholder="请输入密码"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
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
  import goInput from '../../components/go-input'
  import cell from '../../components/go-cell'

  export default{
    data () {
      return {
        name: 'sss',
        email: '',
        password: '',
        birthday: '',
        value: true
      }
    },
    mounted () {

    },
    methods: {
      handleClick () {
      }
    },
    components: {
      loginTab,
      goInput,
      cell
    }
  }

</script>
