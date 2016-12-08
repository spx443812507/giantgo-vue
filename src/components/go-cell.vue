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
          <span class="go-cell-text" v-text="title"></span>
          <span v-if="label" class="go-cell-label" v-text="label"></span>
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
    @include px2rem(margin-bottom, 20px);
    border-bottom: solid 1px $border-color;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    color: inherit;
    @include font-dpr(16px);
  }
</style>
<script>
  export default{
    name: 'go-cell',
    props: {
      icon: String,
      value: String
    },
    data () {
      return {
      }
    },
    components: {}
  }
</script>
