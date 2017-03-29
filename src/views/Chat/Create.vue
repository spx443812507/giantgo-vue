<template>
  <go-layout :header="true" :footer="true">
    <div slot="header">
      <div class="header-tool">
        <i class="icon icon-menu header-tool-left"></i>
        <i class="icon icon-search header-tool-right"></i>
      </div>
    </div>
    <div class="fields">
      <go-input placeholder="请输入留言内容" v-model="message.text"></go-input>
    </div>
    <go-button size="large" type="primary" @click="createMessage">提交</go-button>
    <footer-nav slot="footer"></footer-nav>
  </go-layout>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/sass/var";
  @import "../../assets/sass/util";

  .fields {
    @include rem(padding, 0 0 0 10px);
  }

  .field-submit {
    @include rem(padding, 0 40px);
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      @include rem(padding, 25px 0);
      @include font-dpr(12px);
    }
  }
</style>
<script type="text/ecmascript-6">
  import FooterNav from '../../components/FooterNav'

  export default{
    data () {
      return {
        message: {
          text: ''
        }
      }
    },
    components: {
      FooterNav
    },
    mounted () {
      this.$http.get('/api/messages').then(response => {
        this.messages = response.body.data
      })
    },
    methods: {
      createMessage () {
        this.$http.post('/api/messages', this.message).then(response => {
          this.messages = response.body.data
        })
      }
    }
  }
</script>
