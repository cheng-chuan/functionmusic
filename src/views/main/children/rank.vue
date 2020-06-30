<template>
  <div class="rank">
    <scroll :list = "rankList">
      <div class="wraper-scroll">
        <div class="item" v-for="item of rankList" :key="item.picUrl">
          <img :src="item.picUrl" title="item.label" width="80px" height="80px">
          <ul>
            <li v-for="(song,index) of item.song" :key="song.songId">{{++index}}.{{song.title}}</li>
          </ul>
        </div>         
      </div>
    </scroll>
  </div>
</template>

<script>
import {getRankList} from './../../../assets/api/index'
import Scroll from '@/components/common/scroll'

export default {
  name:"Rank",
  data(){
    return{
      rankList:[],
    }
  },
  components:{
    Scroll
  },
  created(){
    getRankList({showDetail:1}).then((res)=>{
      const data = res.data.data.reduce((total,item)=>{
        return total.concat(item.list)
      },[])
      this.rankList = data;
      console.log(this.rankList)
    })
  }
}
</script>

<style scoped lang="stylus">
  .item
    display flex
    align-content center
    padding 15px 10px
    box-shadow 3px 3px 0.01px	#DCDCDC
    ul
      font-size 14px
      color grey
      padding-left 10px 
      display flex
      flex-direction column
      justify-content space-around
</style>