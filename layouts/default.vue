<template>
  <div>
    <Header />
    <div class="main">
      <Nuxt />
    </div>
    <Footer id="footer" />
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

<style>
.fs14 {
  font-size: 14px;
}

.fs16 {
  font-size: 16px;
}

.fs18 {
  font-size: 18px;
}

.fs20 {
  font-size: 20px;
}

.fs22 {
  font-size: 22px;
}

.fs24 {
  font-size: 24px;
}

.fs26 {
  font-size: 26px;
}

.fs28 {
  font-size: 28px;
}

.fs30 {
  font-size: 30px;
}

.fs32 {
  font-size: 32px;
}

.fs34 {
  font-size: 34px;
}

.fs36 {
  font-size: 36px;
}

.fs38 {
  font-size: 38px;
}

.fs40 {
  font-size: 40px;
}
</style>

<style>

.mt5 {
  margin-top: 5px;
}

.mt10 {
  margin-top: 10px;
}

.mt15 {
  margin-top: 15px;
}

.mt20 {
  margin-top: 20px;
}

.mt25 {
  margin-top: 25px;
}

.mt30 {
  margin-top: 30px;
}

.mt35 {
  margin-top: 35px;
}

.mt40 {
  margin-top: 40px;
}

.mt45 {
  margin-top: 45px;
}

.mt50 {
  margin-top: 50px;
}

.mt60 {
  margin-top: 60px;
}

.mt70 {
  margin-top: 70px;
}

.mt80 {
  margin-top: 80px;
}

.mt90 {
  margin-top: 90px;
}

.mt100 {
  margin-top: 100px;
}

.mt150 {
  margin-top: 150px;
}

.mt200 {
  margin-top: 200px;
}

.ml5 {
  margin-left: 5px;
}

.ml10 {
  margin-left: 10px;
}

.ml15 {
  margin-left: 15px;
}

.ml20 {
  margin-left: 20px;
}

.ml25 {
  margin-left: 25px;
}

.ml30 {
  margin-left: 30px;
}

.ml35 {
  margin-left: 35px;
}

.ml40 {
  margin-left: 40px;
}

.ml45 {
  margin-left: 45px;
}

.ml50 {
  margin-left: 50px;
}

.ml60 {
  margin-left: 60px;
}

.ml70 {
  margin-left: 70px;
}

.ml80 {
  margin-left: 80px;
}

.ml90 {
  margin-left: 90px;
}

.ml100 {
  margin-left: 100px;
}

.ml150 {
  margin-left: 150px;
}

.ml200 {
  margin-left: 200px;
}

.mr5 {
  margin-right: 5px;
}

.mr10 {
  margin-right: 10px;
}

.mr15 {
  margin-right: 15px;
}

.mr20 {
  margin-right: 20px;
}

.mr25 {
  margin-right: 25px;
}

.mr30 {
  margin-right: 30px;
}

.mr35 {
  margin-right: 35px;
}

.mr40 {
  margin-right: 40px;
}

.mr45 {
  margin-right: 45px;
}

.mr50 {
  margin-right: 50px;
}

.mr60 {
  margin-right: 60px;
}

.mr70 {
  margin-right: 70px;
}

.mr80 {
  margin-right: 80px;
}

.mr90 {
  margin-right: 90px;
}

.mr100 {
  margin-right: 100px;
}

.mr150 {
  margin-right: 150px;
}

.mr200 {
  margin-right: 200px;
}

.mb5 {
  margin-bottom: 5px;
}

.mb10 {
  margin-bottom: 10px;
}

.mb15 {
  margin-bottom: 15px;
}

.mb20 {
  margin-bottom: 20px;
}

.mb25 {
  margin-bottom: 25px;
}

.mb30 {
  margin-bottom: 30px;
}

.mb35 {
  margin-bottom: 35px;
}

.mb40 {
  margin-bottom: 40px;
}

.mb45 {
  margin-bottom: 45px;
}

.mb50 {
  margin-bottom: 50px;
}

.mb60 {
  margin-bottom: 60px;
}

.mb70 {
  margin-bottom: 70px;
}

.mb80 {
  margin-bottom: 80px;
}

.mb90 {
  margin-bottom: 90px;
}

.mb100 {
  margin-bottom: 100px;
}

.mb150 {
  margin-bottom: 150px;
}

.mb200 {
  margin-bottom: 200px;
}

</style>

<style>
.pt5 {
  padding-top: 5px;
}

.pt10 {
  padding-top: 10px;
}

.pt15 {
  padding-top: 15px;
}

.pt20 {
  padding-top: 20px;
}

.pt25 {
  padding-top: 25px;
}

.pt30 {
  padding-top: 30px;
}

.pt35 {
  padding-top: 35px;
}

.pt40 {
  padding-top: 40px;
}

.pt45 {
  padding-top: 45px;
}

.pt50 {
  padding-top: 50px;
}

.pt60 {
  padding-top: 60px;
}

.pt70 {
  padding-top: 70px;
}

.pt80 {
  padding-top: 80px;
}

.pt90 {
  padding-top: 90px;
}

.pt100 {
  padding-top: 100px;
}

.pt150 {
  padding-top: 150px;
}

.pt200 {
  padding-top: 200px;
}

.pl5 {
  padding-left: 5px;
}

.pl10 {
  padding-left: 10px;
}

.pl15 {
  padding-left: 15px;
}

.pl20 {
  padding-left: 20px;
}

.pl25 {
  padding-left: 25px;
}

.pl30 {
  padding-left: 30px;
}

.pl35 {
  padding-left: 35px;
}

.pl40 {
  padding-left: 40px;
}

.pl45 {
  padding-left: 45px;
}

.pl50 {
  padding-left: 50px;
}

.pl60 {
  padding-left: 60px;
}

.pl70 {
  padding-left: 70px;
}

.pl80 {
  padding-left: 80px;
}

.pl90 {
  padding-left: 90px;
}

.pl100 {
  padding-left: 100px;
}

.pl150 {
  padding-left: 150px;
}

.pl200 {
  padding-left: 200px;
}

.pr5 {
  padding-right: 5px;
}

.pr10 {
  padding-right: 10px;
}

.pr15 {
  padding-right: 15px;
}

.pr20 {
  padding-right: 20px;
}

.pr25 {
  padding-right: 25px;
}

.pr30 {
  padding-right: 30px;
}

.pr35 {
  padding-right: 35px;
}

.pr40 {
  padding-right: 40px;
}

.pr45 {
  padding-right: 45px;
}

.pr50 {
  padding-right: 50px;
}

.pr60 {
  padding-right: 60px;
}

.pr70 {
  padding-right: 70px;
}

.pr80 {
  padding-right: 80px;
}

.pr90 {
  padding-right: 90px;
}

.pr100 {
  padding-right: 100px;
}

.pr150 {
  padding-right: 150px;
}

.pr200 {
  padding-right: 200px;
}

.pb5 {
  padding-bottom: 5px;
}

.pb10 {
  padding-bottom: 10px;
}

.pb15 {
  padding-bottom: 15px;
}

.pb20 {
  padding-bottom: 20px;
}

.pb25 {
  padding-bottom: 25px;
}

.pb30 {
  padding-bottom: 30px;
}

.pb35 {
  padding-bottom: 35px;
}

.pb40 {
  padding-bottom: 40px;
}

.pb45 {
  padding-bottom: 45px;
}

.pb50 {
  padding-bottom: 50px;
}

.pb60 {
  padding-bottom: 60px;
}

.pb70 {
  padding-bottom: 70px;
}

.pb80 {
  padding-bottom: 80px;
}

.pb90 {
  padding-bottom: 90px;
}

.pb100 {
  padding-bottom: 100px;
}

.pb150 {
  padding-bottom: 150px;
}

.pb200 {
  padding-bottom: 200px;
}
</style>

<style>
.lh1 {
  line-height: 1;
}

.lh11 {
  line-height: 1.1;
}
.lh12 {
  line-height: 1.2;
}
.lh13 {
  line-height: 1.3;
}
.lh14 {
  line-height: 1.4;
}
.lh15 {
  line-height: 1.5;
}
.lh16 {
  line-height: 1.6;
}
.lh17 {
  line-height: 1.7;
}
.lh18 {
  line-height: 1.8;
}
.lh19 {
  line-height: 1.9;
}
.lh2 {
  line-height: 2;
}
</style>

<style>
.bold{
  font-weight: bold;
}

.align_left{
  text-align: left;
}

.align_right {
  text-align: right;
}

.align_center {
  text-align: center;
}

.pointer {
  cursor: pointer;
}
</style>

<style>
.display_flex {
  display: flex;
}

.display_block {
  display: block;
}

.display_inline {
  display: inline;
}

.display_inline_block {
  display: inline-block;
}

.flex_direction {
  flex-direction: column;
}

.jc_around {
  justify-content: space-around;
}

.jc_between {
  justify-content: space-between;
}

.jc_evenly {
  justify-content: space-evenly;
}

.jc_end {
  justify-content: flex-start;
}

.jc_start {
  justify-content: flex-start;
}

.ai_center {
  align-items: center;
}

.ai_end {
  align-items: end;
}

.ai_start {
  align-items: start;
}
</style>
