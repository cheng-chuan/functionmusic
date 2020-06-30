<template>
  <div class="hot-song">
    <ul>
      <li v-for="item of hotlist" :key="item.id">
        <img :src="item.img" width="60" height="60">
        <div class="right">
          <span>{{item.name}}</span>
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HotSong',
  props:{
    hotlist:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped lang = 'stylus'>
  ul
    padding 0 10px
    padding-top 20px
    font-family Arial,Microsoft YaHei,sans-serif
    li
      display flex
      justify-content start
      align-content center
      margin-bottom 10px
      .right
        display flex
        flex-direction column
        justify-content center
        font-size 14px
        margin-left 10px
        span:nth-of-type(2)
          color grey
          padding-top 3px

</style>