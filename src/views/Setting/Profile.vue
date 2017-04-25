<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <div class="fields">
      <go-cell icon="profile" title="姓名" :value="userInfo.name"></go-cell>
      <go-cell icon="email" title="邮箱" :value="userInfo.email"></go-cell>
      <go-cell icon="phone" title="手机" :value="userInfo.mobile"></go-cell>
      <go-cell :icon="userInfo.verified_email ? 'check' : 'close'" title="邮箱认证"
               :value="userInfo.verifiedEmail"></go-cell>
      <go-cell :icon="userInfo.verified_mobile ? 'check' : 'close'" title="手机认证"
               :value="userInfo.verifiedMobile"></go-cell>
      <go-cell icon="time" title="最后登录时间" :value="userInfo.lastLogin"></go-cell>
    </div>
    <div slot="footer">
      <footer-nav></footer-nav>
    </div>
  </go-layout>
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

  .fields {
    @include rem(padding, 0 0 0 10px);
  }

</style>
<script type="text/ecmascript-6">
  import moment from 'moment'
  import FooterNav from '../../components/FooterNav'

  export default{
    data () {
      return {
        userInfo: {}
      }
    },
    components: {
      FooterNav
    },
    mounted () {
      this.$store.dispatch('getMyInfo', this.user).then((data) => {
        let user = data['body']

        this.userInfo = user
        this.userInfo.lastLogin = moment(user['last_login']).format('YYYY-MM-DD HH:mm')
        this.userInfo.verifiedEmail = user['verified_email'] ? '已认证' : '未认证'
        this.userInfo.verifiedMobile = user['verified_mobile'] ? '已认证' : '未认证'
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>
