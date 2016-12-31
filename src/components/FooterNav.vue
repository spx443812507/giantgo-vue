<template>
  <div class="footer-tools">
    <span class=""><i class="icon icon-calendar"></i>日历</span>
    <span class=""><i class="icon icon-overview"></i>总览</span>
    <span class="active"><i class="icon icon-add"></i>添加</span>
    <span class=""><i class="icon icon-lists"></i>分类</span>
    <span class=""><i class="icon icon-timeline"></i>分类</span>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../assets/sass/var";
  @import "../assets/sass/util";

  .footer-tools {
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
  }

  .router-link-active {
    background-color: #8c88ff;
    border-radius: 50%;
  }
</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
