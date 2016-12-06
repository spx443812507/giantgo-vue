<template>
  <div class="form-group">
    <i class="icon control-icon" :class="icon"></i>
    <input type="text" class="form-control" v-bind="{ 'placeholder': placeholder }"/>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data () {
      return {

      }
    },
    props: ['icon', 'placeholder'],
    components: {}
  }
</script>
