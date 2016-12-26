<template>
  <passport-layout>
    <div slot="header" class="header">
      <div class="header-tool">
        <i class="icon icon-close header-tool-left"></i>
        <i class="icon icon-camera header-tool-right"></i>
      </div>
      <div class="correct">
        <img class="correct-logo" src="/static/images/correct.png"/>
      </div>
      <login-tab></login-tab>
    </div>
    <div class="fields">
      <go-input icon="profile" label="姓名" placeholder="请输入姓名"></go-input>
      <go-input icon="email" label="邮箱" placeholder="请输入邮箱"></go-input>
      <go-input icon="password" label="密码" placeholder="请输入密码"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
      <go-input icon="birthday" label="生日" placeholder="请选择生日"></go-input>
    </div>
    <div slot="footer" class="field-submit">
      <go-button size="large" type="primary">注册</go-button>
      <span><a>忘记密码？</a></span>
    </div>
  </passport-layout>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header-tool {
    width: 100%;
    @include rem(height, 112px);
  }

  .header-tool-left {
    float: left;
    @include rem(margin, 30px 0 30px 30px);
  }

  .header-tool-right {
    float: right;
    @include rem(margin, 30px 30px 30px 0);
  }

  .correct {
    display: flex;
    justify-content: center;
    align-items: center;
    @include rem(width, 200px);
    @include rem(height, 200px);
    border-radius: 50%;
    background-color: #ffffff;
    .correct-logo {
      @include rem(width, 145px);
      @include rem(height, 112px);
    }
  }

  .fields {
    @include rem(padding, 0 0 0 10px);
  }

  .field-submit {
    @include rem(padding, 0 40px);
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      @include rem(padding, 25px 0);
      @include font-dpr(12px);
    }
  }
</style>
<script type="text/ecmascript-6">
  import passportLayout from '../../layouts/PassportLayout'
  import loginTab from '../../components/LoginTab'

  export default{
    data () {
      return {
        msg: 'hello vue',
        test: 'asd'
      }
    },
    components: {
      loginTab,
      passportLayout
    },
    methods: {}
  }

</script>
