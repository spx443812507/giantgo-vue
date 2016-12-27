<template>
  <button
    :type="nativeType"
    class="go-button"
    :class="['go-button-' + type, 'go-button-' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    @click="handleClick"
    :disabled="disabled">
    <span class="go-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="goui" :class="'goui-' + icon"></i>
      </slot>
    </span>
    <label class="go-button-text">
      <slot></slot>
    </label>
  </button>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .go-button {
    appearance: none;
    border-radius: 4px;
    border: 0;
    color: inherit;
    display: block;
    @include font-dpr(18px);
    @include rem(height, 100px);
    @include rem(line-height, 100px);
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    &::after {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      content: " ";
      opacity: 0;
      position: absolute;
    }
    &:not(.is-disabled):active::after {
      opacity: .4;
    }
  }

  .go-button-default {
    color: $button-default-color;
    background-color: $button-default-background-color;
    box-shadow: $button-default-box-shadow
  }

  .go-button-default.is-plain {
    border: 1px solid $button-default-plain-color;
    background-color: transparent;
    box-shadow: none;
    color: $button-default-plain-color
  }

  .go-button-primary {
    color: $button-primary-color;
    background-color: $button-primary-background-color
  }

  .go-button-primary.is-plain {
    border: 1px solid $button-primary-background-color;
    background-color: transparent;
    color: $button-primary-background-color
  }

  .go-button-danger {
    color: $button-danger-color;
    background-color: $button-danger-background-color
  }

  .go-button-danger.is-plain {
    border: 1px solid $button-danger-background-color;
    background-color: transparent;
    color: $button-danger-background-color
  }

  .go-button-large {
    display: block;
    width: 100%
  }

  .go-button-normal {
    display: inline-block;
    @include rem(padding, 0 12px);
  }

  .go-button-small {
    display: inline-block;
    @include font-dpr(14px);
    @include rem(padding, 0 12px);
    @include rem(height, 100px);
  }

  .go-button.is-disabled {
    opacity: .6;
  }
</style>
<script>
  export default {
    name: 'go-button',

    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    },

    props: {
      icon: String,
      disabled: Boolean,
      nativeType: String,
      plain: Boolean,
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return ['default', 'danger', 'primary'].indexOf(value) > -1
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['small', 'normal', 'large'].indexOf(value) > -1
        }
      }
    }
  }
</script>
