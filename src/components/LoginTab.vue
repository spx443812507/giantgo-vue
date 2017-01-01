<template>
  <div class="tab">
    <router-link to="/passport/signin">登录</router-link>
    <router-link to="/passport/signup">注册</router-link>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../assets/sass/var";
  @import "../assets/sass/util";

  .tab {
    display: flex;
    width: 100%;
    @include font-dpr(16px);
    @include rem(padding-top, 40px);
    a {
      color: #ffffff;
      text-decoration: none;
      width: 50%;
      text-align: center;
      box-sizing: content-box;
      @include rem(height, 80px);
      @include rem(line-height, 80px);
      outline: none;
      &.active {
        @include rem(border-bottom, solid 10px #8c88ff);
      }
    }
  }
</style>
<script>
  export default {
    data () {
      return {}
    }
  }

</script>
