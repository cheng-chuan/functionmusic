<template>
  <div class="sing-list">
    <ul>
      <li v-for="item of singerList" :key="item.id">
        <img :src="item.img" width="60px" height="60px">
        <div>{{item.singer_name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name:"SingerList",
  props:{
    singerList:{
      type:Array,
      required:true
    }
  },
}
</script>

<style scoped lang="stylus">
  ul
    padding 10px 5px
    li
      display flex
      align-content center
      padding 10px
      color grey
      img 
        border-radius 50%
      div
        line-height 60px
        padding-left 20px

</style>