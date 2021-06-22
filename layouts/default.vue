<template>
  <div>
    <Header />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/footers.vue'
export default {
  components: { Header, Footer }
}
</script>

<style scoped>
.main {
  margin-top: 80px;
}
</style>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif,
    Open Sans;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #000;
}

.mlr400 {
  margin-left: 400px;
  margin-right: 400px;
}

.plr400 {
  padding-left: 400px;
  padding-right: 400px;
}

.btn {
    color: #FFFFFF!important;
    border-color: #4285c4;
    border-radius: 0px;
    letter-spacing: 2px;
    font-size: 13px;
    font-weight: 700!important;
    text-transform: uppercase!important;
    background-color: #4285c4;

    padding: 15px 20px;
    display: inline-block;

    cursor: pointer;
    text-decoration: none;
}

.btn2 {
  color: #4285c4;
  border:1px solid #4285c4;
  border-radius: 0px;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #000000;
  text-decoration: none;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;

  text-decoration: none;
}
.mt150 {
  margin-top: 150px;
}
.mb50 {
  margin-bottom: 50px;
}

.mt50 {
  margin-top: 50px;
}

.text_center {
  text-align: center;
}

.mb20px {
  margin-bottom: 20px;
}
</style>
<style lang="less">
.tab_dialog {
  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 0;
    background: #000;
    box-shadow: 0px 0px 20px 2px #4693f3;
  }

  .el-icon-close{
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    font-weight: bold;
  }
}

.tab_dialog_2 {
  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 15px;
    background: #000;
  }

  .el-icon-close{
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    font-weight: bold;
  }
}

.my_tabs {
  .el-tabs__item{
    color: #fff;
    &:hover {
      color: #0C71C3;
    }

    &.is-active {
      color: #0C71C3;
    }
  }
}
</style>
