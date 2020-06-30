import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Main = () => import('../views/main/main.vue')
const Recommend = () => import('../views/main/children/recommend')
const Singer = () => import('../views/main/children/singer')
const Rank = () => import('../views/main/children/rank')
const Search = () => import('../views/main/children/search')

const routes = [
  {
    path:'/',
    redirect: '/recommend'
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/recommend',
        name:'Recommend',
        component:Recommend
      },
      {
        path:'/singer',
        name:'Singer',
        component:Singer
      },
      {
        path:'/rank',
        name:'Rank',
        component:Rank
      },
      {
        path:'/search',
        name:'Search',
        component:Search
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
