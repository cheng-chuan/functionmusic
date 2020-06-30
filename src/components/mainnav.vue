<template>
  <div class="mian-nav">
    <ul>
      <li class="item" v-for="item of navlist" 
          @click="navClick(item.path)" :key="item.name" 
          :class="{'active':item.path===$route.path}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'MianNav',
  data(){
    return{
      navlist:[
        {
          path:'/recommend',
          name:'推荐'
        },
        {
          path:'/singer',
          name:'歌手'
        },
        {
          path:'/rank',
          name:'排行'
        },
        {
          path:'/search',
          name:'搜索'
        }
      ],
    }
  },
  methods:{
    navClick(path){
      this.$emit("itemClick",path)
    },
  },
}
</script>

<style scoped lang='stylus'>
  ul
    display flex
    align-content center
    justify-content space-around
    color grey
    font-family 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    .item
      padding 5px
    .active
      color DeepSkyBlue
      border-bottom 2px solid DeepSkyBlue
</style>