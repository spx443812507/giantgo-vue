<template>
  <div class='go-container'>
    <div class="go-header mask" v-if="header">
      <slot name="header"></slot>
    </div>
    <div class="go-content" :class="{'has-header': header, 'has-footer': footer}">
      <slot></slot>
    </div>
    <div class="go-footer mask" v-if="footer">
      <slot name="footer"></slot>
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
    background: url($background-image) no-repeat;
    margin: 0 auto;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .go-content {
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
      @include rem(top, 120px);
    }
    &.has-footer {
      @include rem(bottom, 150px);
    }
  }

  %go-bar {
    position: absolute;
    right: 0;
    left: 0;
    @include rem(max-width, $page-max-width);
    user-select: none;
    transform: translate3d(0, 0, 0);
  }

  .go-header {
    @extend %go-bar;
    top: 0;
    border-top-width: 0;
    border-bottom-width: 1px;
  }

  .go-footer {
    @extend %go-bar;
    bottom: 0;
    border-bottom-width: 0;
    border-top-width: 1px;
  }
</style>
<script>
  export default{
    name: 'go-layout',
    data () {
      return {}
    },
    props: {
      header: {
        type: Boolean,
        default: false
      },
      footer: {
        type: Boolean,
        default: false
      }
    },
    components: {}
  }
</script>
