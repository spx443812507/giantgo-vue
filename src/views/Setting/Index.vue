<template>
  <div>
    <div class="bar bar-header mask">
      <div class="bar-header-tools">
        <span><i class="icon icon-menu">&nbsp;</i></span>
        <i class="icon icon-search">&nbsp;</i>
      </div>
    </div>
    <div class="content has-header has-footer">
      <div class="content-center">
        <go-checklist v-model="value" :options="options" align="right" title="嘿嘿"></go-checklist>
        <go-checklist v-model="value" :options="options" title="嘿嘿"></go-checklist>
      </div>
    </div>
    <div class="bar bar-footer mask">
      <div class="bar-footer-tools">
        <span class=""><i class="icon icon-calendar"></i>日历</span>
        <span class=""><i class="icon icon-overview"></i>总览</span>
        <span class="active"><i class="icon icon-add"></i>添加</span>
        <span class=""><i class="icon icon-lists"></i>分类</span>
        <span class=""><i class="icon icon-timeline"></i>分类</span>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        value: ['valueF'],
        options: [
          {
            label: 'disabled option',
            value: 'valueF',
            disabled: true
          },
          {
            label: 'checked disabled',
            value: 'valueE',
            disabled: true
          },
          {
            label: 'optionA',
            value: 'valueA'
          },
          {
            label: 'optionB',
            value: 'valueB'
          }
        ]
      }
    },
    components: {}
  }
</script>
