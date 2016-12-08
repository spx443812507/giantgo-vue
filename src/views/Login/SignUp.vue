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
      <cell icon="profile" value="aaa"></cell>
      <mt-cell
        title="标题文字"
        to="//github.com"
        is-link
        value="带链接">
      </mt-cell>
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
      cell
    }
  }

</script>
