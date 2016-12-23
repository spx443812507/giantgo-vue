<template>
  <div @change="$emit('change', currentValue)" class="go-checklist">
    <label class="go-checklist-title" v-text="title"></label>
    <cell v-for="option in options">
      <label class="go-checklist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="go-checkbox">
          <input
            class="go-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="go-checkbox-core"></span>
        </span>
        <span class="go-checkbox-label" v-text="option.label || option"></span>
      </label>
    </cell>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .go-checklist {
    padding: 0;
  }

  .go-checkbox.is-right {
    float: right;
  }

  .go-checklist-title {
    color: $checklist-title-color;
    display: block;
    @include font-dpr(16px);
    margin: pxToRem(10px) pxToRem(16px);
  }

  .go-checklist-label {
    width: 100%;
    display: block;
    padding: 0 pxToRem(10px);
  }

  .go-checkbox-input {
    display: none;
    &:checked {
      + .go-checkbox-core {
        background-color: $color-blue;
        border-color: $color-blue;

        &::after {
          border-color: $color-white;
          transform: rotate(45deg) scale(1);
        }
      }
    }

    &[disabled] + .go-checkbox-core {
      background-color: $color-grey;
      border-color: $color-grey;
    }
  }

  .go-checkbox-core {
    width: $checklist-size;
    height: $checklist-size;
    display: inline-block;
    background-color: $color-white;
    border-radius: 100%;
    border: pxToRem(1px) solid #ccc;
    position: relative;
    vertical-align: middle;
    &::after {
      width: $checklist-size/3;
      height: $checklist-size/2;
      top: $checklist-size/7;
      left: $checklist-size/3;
      border: pxToRem(4px) solid transparent;
      border-left: 0;
      border-top: 0;
      content: " ";
      position: absolute;
      transform: rotate(45deg) scale(0);
      transition: transform .2s;
    }
  }

  .go-checkbox-label {
    @include px2rem('margin-left', 10px);
  }
</style>
<script>
  import cell from '../cell/go-cell.vue'

  export default{
    name: 'go-checklist',
    props: {
      align: String,
      title: String,
      options: {
        type: Array,
        required: true
      },
      value: Array
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    components: {
      cell
    },
    watch: {
      value (val) {
        this.currentValue = val
      },

      currentValue (val) {
        if (this.limit) {
          val.pop()
        }
        this.$emit('input', val)
      }
    }
  }
</script>
