<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <go-input icon="profile" label="姓名" placeholder="请输入姓名"></go-input>
    <div slot="footer">
      <footer-nav></footer-nav>
    </div>
  </go-layout>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";
</style>
<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav'

  export default{
    data () {
      return {
        imagePrefix: 'http://sino2016.top/images/'
      }
    },
    components: {
      FooterNav
    },
    mounted () {
    }
  }
</script>
