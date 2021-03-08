<template>
  <div id="app">
      <el-header style="height: 120px">
        <NavMenu />
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        <Footer/>
      </el-footer>
  </div>
</template>

<script>
  import NavMenu from './views/NavMenu'
  import Footer from "./views/Footer";

export default {
  name: 'app',
  components:{
    NavMenu,
      Footer
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

</style>
