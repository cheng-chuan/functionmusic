import ajax from './ajax.js'

// 基础路径
const baseURL = '/api'
// http://api.qq.jsososo.com
// 请求方法
// 请求banner轮播图数据
export const getBannerImg = async ()=> await ajax("/api/recommend/banner")
// 请求hot song热门歌曲的数据
export const getHotSong = async ()=> await ajax('/api/recommend/playlist/u')
// 请求singer-category歌手分类的数据
export const getSingerCategory = async ()=> await ajax('/api/singer/category')
// 请求singerlist歌手列表的数据
export const getSingerList = async (params)=> await ajax('/api/singer/list',params)
// 请求rank排行歌单列表数据
export const getRankList = async (params)=>await ajax("/api/top/category",params)

// 请求推荐页shoplist数据
export const getRecommendShopList = (params)=>ajax(baseURL + '/recommend/shoplist',params)


