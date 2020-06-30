<template>
  <div class="singer">
    <singer-category :singerCategory = "singercategory" @currentCategory = "getCurrentCategory" />
    <scroll :list = 'singerlist' top = "215">
      <singer-list :singerList = 'singerlist'/>
    </scroll>
  </div>
</template>

<script>
import {
  getSingerCategory,
  getSingerList
} from './../../../assets/api/index'
import SingerCategory from '@/components/singerCategory'
import SingerList from '@/components/singerlist'
import Scroll from '@/components/common/scroll'

export default {
  name:"Singer",
  data(){
    return{
      singercategory:{},
      singerlist:[],
      // 改变的参数
      itemKey:'',
      itemVal:null,
      // 监听改变
      count:0,
      // 请求参数
      params:{
        sex:-100,
        area:-100,
        genre:-100
      },
    }
  },
  components:{
    SingerCategory,
    SingerList,
    Scroll
  },
  methods:{
    getCurrentCategory(category,key){
      // 获得具题请求参数的key和value值
      this.itemKey = key;
      this.itemVal = this.singercategory[key][category[key]].id
    }
  },
  watch:{
    itemKey(){
      this.count++
    },
    itemVal(){
      this.count++
    },
    // 当有数据改变，就请求数据
    count(){
      // 改变参数
      if(this.itemKey==="area"){
        this.params.area=this.itemVal
      }else if(this.itemKey==="genre"){
        this.params.genre=this.itemVal
      }else{
        this.params.sex=this.itemVal
      }
      // 获得参数，发出请求，重新赋值
      getSingerList(this.params).then((res)=>{
        const data3 = res.data.data.list;
        this.singerlist = data3.map(item=>{
          return {
            id:item.singer_id,
            singer_name:item.singer_name,
            img:item.singer_pic
          }
        })
      })
    }
  },
  created(){
    getSingerCategory().then((res)=>{
      const data = res.data.data;
      this.singercategory = {
        sex: data.sex,
        area: data.area,
        genre: data.genre,
      }
    });
    getSingerList().then((res)=>{
      const data2 = res.data.data.list;
      this.singerlist = data2.map(item=>{
        return {
          id:item.singer_id,
          singer_name:item.singer_name,
          img:item.singer_pic
        }
      })
    })
  },
}
</script>

<style scoped lang="stylus">

</style>