<template>
  <div class="singer-catagory">
    <div v-for="(arr,key) of singerCategory" :key="key">
      <ul>
        <li v-for="(item,index) of arr" :key="item.id" 
        :class="{'sing-active':currentIndex[key]===index}"
        @click="liClick(key,index)">{{item.name}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name:"SingerCategory",
  props:{
    singerCategory:{
      type:Object,
      required:true
    },
  },
  data(){
    return{
      currentIndex:{
        sex:0,
        area:0,
        genre:0
      }
    }
  },
  methods:{
    liClick(key,index){
      this.currentIndex[key] = index
    this.$emit('currentCategory',this.currentIndex,key)
    }
  },
}
</script>

<style scoped lang="stylus">
  .singer-catagory
    box-shadow 0 2px 0.001px 	#E6E6FA
    ul
      display flex
      justify-content start
      align-content center
      flex-wrap wrap
      color grey
      font-size 12px
      padding 0 5px 
      li
        margin  5px
        padding 5px
        border-radius 8px
      .sing-active
        background DeepSkyBlue
        color white
</style>