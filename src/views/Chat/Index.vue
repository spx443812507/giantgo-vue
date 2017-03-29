<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <go-cell v-for="message in messages" :title="message.text"></go-cell>
    <footer-nav slot="footer"></footer-nav>
  </go-layout>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  img {
    width: 100%;
    height: 100%;
  }

  .vue-waterfall {
    position: initial !important;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header-tool {
    width: 100%;
    @include rem(height, 112px);
  }

  .header-tool-left {
    float: left;
    @include rem(margin, 30px 0 30px 30px);
  }

  .header-tool-right {
    float: right;
    @include rem(margin, 30px 30px 30px 0);
  }

  .image-list {
    position: absolute;
    @include rem(top, 10px);
    @include rem(right, 10px);
    @include rem(bottom, 10px);
    @include rem(left, 10px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    @include font-dpr(14px);
    @include rem(box-shadow, 0 5px 6px rgba(0, 0, 0, .25));
  }

  .desc {
    width: 100%;
    @include rem(height, 100px);
    @include rem(padding, 10px 20px);
    vertical-align: middle;
    img {
      @include rem(width, 52px);
      @include rem(height, 52px);
      @include rem(margin, 20px);
      float: left;
      border-radius: 50%;
    }
    & > .text {
      height: 100%;
      line-height: 2.5;
      float: left;
      @include rem(margin-left, 20px);
    }
  }
</style>
<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav'

  export default{
    data () {
      return {
        imagePrefix: 'http://sino2016.top/images/',
        messages: []
      }
    },
    components: {
      FooterNav
    },
    mounted () {
      this.$http.get('/api/messages').then(response => {
        this.messages = response.body.data
      })
    }
  }
</script>
