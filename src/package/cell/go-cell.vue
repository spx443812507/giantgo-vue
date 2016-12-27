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
            <span class="go-cell-label" v-if="label" v-text="label"></span>
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
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .go-cell {
    @include font-dpr(16px);
    @include rem(min-height, 120px);
    display: flex;
    color: inherit;
    text-decoration: none;
    &:first-child {
      .go-cell-wrapper {
        background-image: none;
      }
    }
    .cell-border {
      border-bottom: solid 1px $border-color;
    }
  }

  .go-cell-value {
    display: flex;
    align-items: center;
  }

  .go-cell-wrapper {
    background-image: linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
    @include rem(background-size, 120% 5px);
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    @include font-dpr(16px);
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    @include rem(padding, 0 16px);
    width: 100%;
  }

  .go-cell-title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .go-cell-info {
    @include rem(margin-left, 5px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .go-cell-text {
    vertical-align: middle;
  }

  .go-cell-label {
    display: block;
    @include font-dpr(12px);
    @include rem(margin-top, 6px);
  }

  .go-cell-value {
    color: #888;
    display: flex;
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
