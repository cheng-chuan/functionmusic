<template>
  <div class="main-top">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name:'MainTop',
  props:{
    title:String
  }
}
</script>

<style scoped lang = "stylus">
  .title
    height 40px
    color DeepSkyBlue
    text-align center
    line-height 40px
    font-weight 900 
    font-size 24px
    /* border-bottom 1px solid #d3d7d4
    box-shadow 0 1px 1px #d3d7d4  */
    
</style>>
