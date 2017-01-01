<template>
  <router-view></router-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "assets/sass/util";
  @import "assets/css/sprite.css";

  html {
    font-family: "Microsoft YaHei", serif;
    color: #ffffff;
    line-height: 1.2;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  button, input, select, textarea {
    margin: 0;
    background-color: transparent;
    border-style: none;
    color: inherit;
    @include font-dpr(14px);
  }

  label {
    @include font-dpr(16px);
  }

  section {
    padding: .6rem 10%;
    background: hsl(0, 0%, 98%);
  }

  section:nth-child(even) {
    background: hsl(0, 0%, 94%);
  }

  h1, h2 {
    line-height: 1.3;
  }

  h1 {
    @include font-dpr(16px);
    @include rem(margin, 0 0 12px);
  }

  h2 {
    @include font-dpr(15px);
    @include rem(margin, 7.5px 15px);
  }

  p {
    @include font-dpr(16px);
    @include rem(margin, 2px 0);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .mask {
    background: $background-mask;
  }
</style>
