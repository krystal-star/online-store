<template>
  <div id="app">
      <el-header style="height: 95px" class="initial" v-if="!checkout">
        <NavMenu />
      </el-header>

      <el-main style="overflow: inherit;padding-top: 3px;">
          <Feedback/>
        <router-view :key="url"></router-view>
      </el-main>

      <el-footer>
        <Footer/>
      </el-footer>
  </div>
</template>

<script>
  import NavMenu from './views/NavMenu';
  import Footer from "./views/Footer";
  import Feedback from "./views/Feedback";

export default {
  name: 'app',
  components:{
      Feedback,
    NavMenu,
      Footer
  },
    data(){
      return{
          checkout:false
      }
    },
    mounted () {
          // 监听（绑定）滚轮 滚动事件
          window.addEventListener('scroll', this.handleScroll, true);
    },
    methods:{
      handleScroll(){
          if(this.checkout === false){
              var distanceToTop = window.pageYOffset;
              var scroll = distanceToTop - this.i;
              this.i = distanceToTop;
              let nav = document.getElementsByClassName("nav-menu")[0];
              if (scroll > 0 && distanceToTop >= 90){
                  nav.style = "visibility: hidden;"
              }else{
                  nav.style = "visibility: visible;"
              }
          }
      }
    },
    computed:{
      url(){
          this.checkout = this.$route.path === '/checkout';
          return this.$route.path;
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    body{
        margin-top: 0;
        margin-bottom: 0;
    }

    .el-header{
        position: sticky;
        top: 0;
        z-index: 999;
    }
    .el-footer{
        position: relative;
    }
</style>
