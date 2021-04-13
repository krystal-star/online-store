<template>
  <div id="app">
      <el-header style="height: 95px">
        <NavMenu />
      </el-header>

      <el-main style="overflow: inherit;padding-top: 3px;">
          <Feedback/>
        <router-view></router-view>
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
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true);
        // 监听（绑定）滚轮 滚动事件
    },
    methods:{
      handleScroll(){
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
