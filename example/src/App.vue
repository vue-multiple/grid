<template>
  <div id="app">
    <header class="header"><h1 class="title">栅格系统组件</h1></header>
    <div class="component">
      <div class="example-grid">
        <vm-row>
          <vm-col :span="6">Helloworld 1</vm-col>
          <vm-col :span="6">Helloworld 2</vm-col>
          <vm-col :span="6">Helloworld 3</vm-col>
          <vm-col :span="6">Helloworld 4</vm-col>
        </vm-row>
      </div>
      <div class="example-grid">
        <vm-row :gutter="16" class-name="gutter">
          <vm-col :span="6">
            <div>Helloworld 1</div>
          </vm-col>
          <vm-col :span="6">
            <div>Helloworld 2</div>
          </vm-col>
          <vm-col :span="6">
            <div>Helloworld 3</div>
          </vm-col>
          <vm-col :span="6">
            <div>Helloworld 4</div>
          </vm-col>
        </vm-row>
      </div>
    </div>
    <footer class="footer"><p class="desc">栅格系统组件，进行Vue组件编写学习。</p></footer>
  </div>
</template>

<script type="es6">
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../src/styles/less/index.less';

  #app {
    position: relative;
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    .header {
      text-align: center;
      h1 {
        margin: 0;
      }
    }
    .component {
      .example-grid {
        padding-bottom: 20px;
        .vm-col {
          height: 40px;
          line-height: 40px;
          color: #fff;
          text-align: center;
          background-color: rgba(0, 153, 229, .9);
          &:nth-child(odd) {
            background: rgba(0, 153, 229, .7);
            div {
              background: rgba(0, 153, 229, .7);
            }
          }
          div {
            height: 40px;
            line-height: 40px;
            color: #fff;
            text-align: center;
            background-color: rgba(0, 153, 229, .9);
          }
        }
        .gutter {
          .vm-col {
            background: transparent !important;
          }
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 1000px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      p {
        margin: 0;
      }
    }
  }
</style>
