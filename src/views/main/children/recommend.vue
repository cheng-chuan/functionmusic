<template>
  <div class="recommend">
    <scroll top ="75" :list = "hotsong" ref="scroll">
      <div class="scroll-wrapper">
        <swiper :bannerImg = 'bannerList' @img-load = 'scrollRefresh'/>
        <hot-song :hotlist = 'hotsong'/>
      </div>
    </scroll>
  </div>
</template>

<script>
import {
  getBannerImg,
  getHotSong
} from './../../../assets/api/index'

import ajax from './../../../assets/api/ajax'
import Swiper from '@/components/swiper'
import HotSong from '@/components/recommendhotsong'
import Scroll from '@/components/common/scroll'

export default {
  name:"Recommend",
  data(){
    return{
      bannerList:[],
      hotsong:[],
    }
  },
  components:{
    Swiper,
    HotSong,
    Scroll
  },
  methods:{
    scrollRefresh(){
      this.$refs.scroll.refresh();
    }
  },
  mounted(){
    // 获取banner数据
    getBannerImg().then((res)=>{this.bannerList = res.data.data});
    // 获取hot-song数据
    getHotSong().then((res)=>{
      const arr = res.data.data.list
      this.hotsong = arr.map((item)=>{return {id:item.content_id,img:item.cover,name:item.username,title:item.title}})
      })

  }
}
</script>

<style scoped lang="stylus">

</style>