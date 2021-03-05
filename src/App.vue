<template>
  <div id="app">
      <el-header style="height: 100px">
        <NavMenu />
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        footer
      </el-footer>
  </div>
</template>

<script>
  import NavMenu from './views/NavMenu'

export default {
  name: 'app',
  components:{
    NavMenu
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

</style>
