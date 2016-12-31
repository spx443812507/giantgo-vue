<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <div class="image-list" v-for="(item, index) in images">
      <div class="mask">
        {{item.desc}}{{index}}
      </div>
      <div>
        <img :alt="item.desc" :src="item.url"/>
      </div>
    </div>
    <div slot="footer">
      <footer-nav></footer-nav>
    </div>
  </go-layout>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

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
    width: 100%;
    @include rem(min-height, 300px);
    @include rem(margin-bottom, 20px);
    display: flex;
    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex: 1;
    }
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(odd) {
      flex-direction: row;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav'

  export default{
    data () {
      return {
        images: [
          {url: '//img.hb.aicdn.com/005953e097e39e0e6b71ddb797b514e9c5faa1412295f-SdeMna_fw236', desc: '图片'},
          {url: 'static/images/image-02.png', desc: '图片'},
          {url: 'static/images/image-02.png', desc: '图片'},
          {url: 'static/images/image-02.png', desc: '图片'},
          {url: 'static/images/image-02.png', desc: '图片'}
        ]
      }
    },
    components: {
      FooterNav
    },
    mounted () {
    }
  }
</script>
