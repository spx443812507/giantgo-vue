<template>
  <div class='go-container'>
    <div class="bar bar-header mask" v-if="header">
      <div class="bar-header-tools">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="content" :class="{'has-header': header, 'has-footer': footer}">
      <slot></slot>
    </div>
    <div class="bar bar-footer mask" v-if="footer">
      <div class="bar-footer-tools">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .go-container {
    width: 100%;
    height: 100%;
    @include rem(max-width, $page-max-width);
    box-sizing: border-box;
    background: url($background-image) no-repeat;
    margin: 0 auto;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .go-header {
    position: absolute;
    right: 0;
    left: 0;
    @include rem(max-width, $page-max-width);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: auto;
    height: auto;
    @include rem(padding, 30px);
    display: flex;
    display: -webkit-flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    @include font-dpr(16px);
  }

  .form-group {
    @include rem(margin-bottom, 20px);
    border-bottom: solid 1px #645d5a;
  }

  .form-control {
    width: 90%;
    @include rem(height, 100px);
    @include rem(line-height, 100px);
    float: right;
    @include font-dpr(16px);
    border-radius: 0;
    color: inherit;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-appearance: none;
    outline: none;
    &:focus {
      box-shadow: none;
    }
  }

  .control-icon {
    @include rem(margin-top, 20px);
  }

  .bar-header {
    top: 0;
    border-top-width: 0;
    border-bottom-width: 1px;
  }

  .bar-footer {
    bottom: 0;
    border-top-width: 1px;
    border-bottom-width: 0;
    & > span {
      @include rem(padding, 25px 0);
    }
  }

  .bar-header-tools {
    width: 100%;
    @include rem(min-height, 120px);
    @include rem(padding, 34px);
    display: flex;
    flex-flow: row nowrap;
    vertical-align: middle;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }

  .bar-footer-tools {
    width: 100%;
    @include rem(height, 120px);
    @include rem(margin, 0 25px);
    @include rem(padding, 0 15px);
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    & > span {
      @include rem(height, 100px);
      @include rem(width, 100px);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    .router-link-active {
      background-color: #8c88ff;
      border-radius: 50%;
    }
  }

  .has-header {
    @include rem(top, 120px);
  }

  .has-footer {
    @include rem(bottom, 150px);
  }

  .mask {
    background: $background-mask;
  }
</style>
<script>
  export default{
    name: 'go-layout',
    data () {
      return {}
    },
    props: {
      header: Boolean,
      footer: Boolean
    },
    components: {}
  }
</script>
