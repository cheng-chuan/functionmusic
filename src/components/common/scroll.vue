<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name:"Scroll",
  props:{
    top:{
      type:String,
      default:"74"
    },
    list:{
      type:Array,
      required:true
    },
    // list2:{
    //   type:Array,
    //   required:true
    // }
  },
  methods:{
    initScroll(){
      this.$refs.wrapper.style.top = this.top + "px";
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    refresh(){
      this.scroll&&this.scroll.refresh();
    },
  },
  mounted(){
    this.$nextTick(()=>{
      this.initScroll();
    })
    
  },
  watch:{
    list(){
      this.$nextTick(()=>{
        this.refresh()
      })
    },
    // list2(){
    //   this.$nextTick(()=>{
    //     this.refresh()
    //   })
    // }
  }
}
</script>

<style lang = "stylus">
  .wrapper
    position absolute
    overflow hidden
    right 0
    left 0
    top 0
    bottom 0
</style>