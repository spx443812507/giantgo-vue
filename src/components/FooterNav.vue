<template>
  <div class="footer-tools">
    <router-link to="/home"><i class="icon icon-overview"></i>首页</router-link>
    <router-link to="/message"><i class="icon icon-email"></i>消息</router-link>
    <router-link to="/questionnaire/index"><i class="icon icon-overview"></i>调研</router-link>
    <router-link to="/search"><i class="icon icon-search"></i>发现</router-link>
    <router-link to="/setting/profile"><i class="icon icon-profile"></i>我</router-link>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../assets/sass/var";
  @import "../assets/sass/util";

  .footer-tools {
    width: 100%;
    @include rem(height, 120px);
    @include rem(padding, 0 15px);
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    & > a {
      @include rem(height, 100px);
      @include rem(width, 100px);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    .active {
      background-color: #8c88ff;
      border-radius: 50%;
    }
  }
</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
