<template>
  <div class="main">
    <main-top title="Function Music"/>
    <main-nav @itemClick="navClick"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

// @ is an alias to /src
import MainTop from '@/components/maintop'
import MainNav from '@/components/mainnav'
export default {
  name: 'Main',
  components: {
    MainTop,
    MainNav,
  },
  methods:{
    navClick(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
