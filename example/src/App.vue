<template>
  <div id="app">
    <grid-demo></grid-demo>
  </div>
</template>

<script type="es6">
  import GridDemo from './GridDemo.vue';
  export default {
    components: {
      GridDemo
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './styles/less/style.less';
  #app {
    width: 1000px;
    margin: 60px auto;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
