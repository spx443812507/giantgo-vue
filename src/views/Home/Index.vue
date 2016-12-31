<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <waterfall :line-gap="400" :min-line-gap="20" :watch="images">
      <waterfall-slot
        v-for="(item, index) in images"
        :width="item.file.width"
        :height="Number(item.file.height)"
        :order="index">
        <div class="image-list">
          <img :alt="item.desc" :src="imagePrefix + item.file.key + '.jpg'"/>
          <!--<div class="desc">-->
            <!--<img :alt="item.user.username" :src="imagePrefix + item.user.avatar.key"/>-->
            <!--<div class="text">{{item.user.username}}</div>-->
          <!--</div>-->
        </div>
      </waterfall-slot>
    </waterfall>
    <div slot="footer">
      <footer-nav></footer-nav>
    </div>
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

  .vue-waterfall-slot {
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
    width: 95%;
    display: flex;
    justify-content: center;
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
  import wilddog from 'wilddog'
  import FooterNav from '../../components/FooterNav'
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  const imagesRef = wilddog.sync().ref('web/images')

  export default{
    data () {
      return {
        imagePrefix: 'http://sino2016.top/images/'
      }
    },
    wilddog: {
      images: imagesRef
    },
    components: {
      FooterNav,
      Waterfall,
      WaterfallSlot
    },
    mounted () {
    }
  }
</script>
