<template>
  <cell :title="label" v-bind="{ icon: icon }" :class="label ? 'go-field-hasLabel' : 'go-field'">
    <input
      ref="input"
      class="go-field-core"
      :placeholder="placeholder"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
  </cell>
</template>
<style lang="sass" rel="stylesheet/scss">
  @import "../assets/sass/var";
  @import "../assets/sass/util";

  %go-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    color: inherit;
  }

  .go-field {
    @extend %go-field;
    .go-cell-value {
      flex: 1;
      color: inherit;
      display: flex;
    }
    .go-cell-title {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
    }
  }

  .go-field-hasLabel {
    @extend %go-field;
  }

  .go-cell-core {
    @include px2rem(height, 100px);
    @include px2rem(line-height, 100px);
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
</style>
<script>
  import cell from './go-cell.vue'

  export default{
    data () {
      return {}
    },
    props: {
      label: String,
      icon: String,
      placeholder: String,
      disabled: Boolean,
      value: {}
    },
    components: {
      cell
    },
    methods: {
      doCloseActive () {
        this.active = false
      },

      handleInput (evt) {
        this.currentValue = evt.target.value
      },

      handleClear () {
        if (this.disabled || this.readonly) return
        this.currentValue = ''
      }
    }
  }
</script>
