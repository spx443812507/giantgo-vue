<template>
  <div class="go-cell">
    <div class="go-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="go-cell-wrapper">
      <div class="go-cell-title">
        <slot name="icon">
          <i v-if="icon" class="icon" :class="'icon-' + icon"></i>
        </slot>
        <slot name="title">
          <div class="go-cell-info">
            <span class="go-cell-text" v-text="title"></span>
            <span v-if="label" class="go-cell-label" v-text="label"></span>
          </div>
        </slot>
      </div>
      <div class="go-cell-value">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="go-cell-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../assets/sass/var";
  @import "../assets/sass/util";

  .go-cell {
    padding: pxToRem(16px) 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    color: inherit;
    @include font-dpr(16px);
    .cell-border {
      border-bottom: solid 1px $border-color;
    }
  }

  .go-cell-value {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .go-cell-wrapper {
    background-image: linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    @include font-dpr(16px);
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 pxToRem(16px);
    width: 100%;
  }

  .go-cell-title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .go-cell-info {
    @include px2rem(margin-left, 5px);
  }

  .go-cell-text {
    vertical-align: middle;
  }

  .go-cell-label {
    display: block;
    @include font-dpr(12px);
    @include px2rem(margin-top, 6px);
  }

  .go-cell-value {
    color: #888;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>
<script>
  export default{
    name: 'go-cell',
    props: {
      icon: String,
      title: String,
      label: String,
      value: {}
    },
    data () {
      return {}
    },
    components: {}
  }
</script>
