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
      <go-cell icon="profile" title="邮箱认证" :value="userInfo.emailVerified ? '已认证' : '未认证'"></go-cell>
      <go-cell icon="profile" title="手机认证" :value="userInfo.phoneVerified ? '已认证' : '未认证'"></go-cell>
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
  import {mapGetters} from 'vuex'
  import FooterNav from '../../components/FooterNav'

  export default{
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    components: {
      FooterNav
    },
    mounted () {
    }
  }
</script>
