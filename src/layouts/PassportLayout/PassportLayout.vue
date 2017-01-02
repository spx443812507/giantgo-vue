<template>
  <div class='passport-container'>
    <div class="passport-header mask">
      <slot name="header"></slot>
    </div>
    <div class="passport-content has-header has-footer">
      <slot></slot>
    </div>
    <div class="passport-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .passport-container {
    width: 100%;
    height: 100%;
    @include rem(max-width, $page-max-width);
    background: url($background-image) no-repeat;
    margin: 0 auto;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .passport-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: auto;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    @include font-dpr(16px);
    &.has-header {
      @include rem(top, 450px);
    }
    &.has-footer {
      @include rem(bottom, 200px);
    }
  }

  %passport-bar {
    position: absolute;
    right: 0;
    left: 0;
    @include rem(max-width, $page-max-width);
    user-select: none;
    transform: translate3d(0, 0, 0);
  }

  .passport-header {
    @extend %passport-bar;
    top: 0;
    border-top-width: 0;
    border-bottom-width: 1px;
  }

  .passport-footer {
    @extend %passport-bar;
    bottom: 0;
    border-bottom-width: 0;
    border-top-width: 1px;
  }
</style>
<script>
  export default{
    name: 'passport-layout',
    data () {
      return {}
    },
    props: {},
    components: {}
  }
</script>
