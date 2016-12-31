<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <waterfall :line-gap="320" :min-line-gap="20" :watch="images">
      <waterfall-slot
        v-for="(item, index) in images"
        :width="item.file.width"
        :height="item.file.height"
        :order="index">
        <div class="image-list">
          <img :alt="item.desc" :src="imagePrefix + item.file.key"/>
          <div class="desc">
{{item.user.username}}
          </div>
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
    @include rem(box-shadow, 0 5px 6px rgba(0, 0, 0, .25));
  }

  .vue-waterfall-slot {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
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
        imagePrefix: '//hbimg.b0.upaiyun.com/'
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
