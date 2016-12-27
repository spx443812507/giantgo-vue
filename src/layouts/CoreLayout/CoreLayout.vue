<template>
  <div class='container'>
    <router-view></router-view>
  </div>
</template>
<script>
  require('../../assets/css/sprite.css')

  export default {
    name: 'App',
    components: {}
  }

</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .container {
    width: 100%;
    height: 100%;
    @include rem(max-width, 750px);
    box-sizing: border-box;
    background: url(../../assets/images/background.png) no-repeat;
    margin: 0 auto;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .bar {
    position: absolute;
    right: 0;
    left: 0;
    @include rem(max-width, 750px);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
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
    appearance: none;
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
      &.router-link-active {
        @include rem(border-bottom, solid 10px #8c88ff);
      }
    }
  }

  .image-list {
    width: 100%;
    height: 100%;
    @include rem(min-height, 300px);
    @include rem(margin-bottom, 20px);
    display: flex;
    flex: 1;
    img {
      width: 50%;
    }
    .description {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    & > * {
      flex: 1;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .btn-submit {
    width: 100%;
    background-color: #8c88ff;
    @include rem(height, 100px);
    @include rem(line-height, 100px);
    @include font-dpr(16px);
    outline: none;
    text-align: center;
  }

  .has-header {
    @include rem(top, 120px);
  }

  .has-logo {
    @include rem(top, 450px);
  }

  .has-footer {
    @include rem(bottom, 150px);
  }

  .has-submit {
    @include rem(bottom, 200px);
  }
</style>

