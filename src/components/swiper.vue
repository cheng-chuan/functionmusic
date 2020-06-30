<template>
  <div class="swiper">
    <Swiper v-if="this.bannerImg.length>0">
       <Slide v-for="item of this.bannerImg" :key="item.id"><img :src="item.picUrl" width="100%" @load="imgLoad"></Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';

export default {
  name:'MySwiper',
  props:{
    bannerImg:{
      type:Array,
      required:true
    }
  },
  methods:{
    // 当轮播图片取到后，让父组件重新加载滚动条组件
    imgLoad(){
      this.$emit("img-load");
    }
  },
  components:{
    Swiper,
    Slide
  },
}
</script>

<style scoped lang="stylus">

</style>
