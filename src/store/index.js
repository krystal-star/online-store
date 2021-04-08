import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups:'', //'men,women'
    categories:'', //'shoes, clothing'
    brands: '', //'adidas, nike'
    styles:'',
    colors:'',
    discount: false,
    url:'',
    id: '',   //进入商品页
    star:0,   //收藏数
    username:null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
