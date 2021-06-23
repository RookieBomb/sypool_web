<template>
  <div>
    <section class="mlr400 pt100">
      <div class="mb30">
        <strong class="fs36 bold mb50">Index</strong>
      </div>
      <img src="../assets/img/line.png" class="line_img mb30" alt="">
      <div class="align_center">
        <img src="../assets/img/test2.png" class="wow animate__fadeIn" style="width:88%" alt="">
      </div>
      <div class="align_center">
        <span class="btn2" @click="openDialog">Mint SAP</span>
      </div>
    </section>
    <div class="empty_height" />
    <section class="mlr400 pt100">
      <div class="mb30">
        <strong class="fs36 bold mb50">Portfolio</strong>
      </div>
      <img src="../assets/img/line.png" class="line_img mb30" alt="">
      <div class="mb30 fs16">
        Show the ingredients of every pool.
      </div>
      <div class="align_center">
        <img src="../assets/img/port-1.png" style="width:88%" class="wow animate__fadeIn" alt="">
      </div>
    </section>
    <div class="empty_height" />
    <section class="mlr400 pt100">
      <div class="mb30">
        <strong class="fs36 bold mb50">Ranking</strong>
      </div>
      <img src="../assets/img/line.png" class="line_img mb30" alt="">
      <div class="mb30 fs16">
        Record every transaction on chain.
      </div>
      <div class="align_center">
        <img src="../assets/img/activity2-1 (1).png" style="width:84%" class=" wow animate__fadeIn" alt="">
      </div>
    </section>
    <div class="empty_height" />

    <TabDialog ref="tabDialog" />
  </div>
</template>

<script>
import TabDialog from '@/components/Dialog/dialog.vue'
if (process.browser) { // 在这里根据环境引入wow.js
  // eslint-disable-next-line no-var
  var { WOW } = require('wowjs')
}
export default {
  components: { TabDialog },
  mounted () {
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: 'animate__animated' }).init()
      }
    })
  },
  methods: {
    openDialog () {
      this.$refs.tabDialog.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.line_img {
  width: 20%;
  height: 5px;
}

.btn2 {
  padding: 10px 20px;
  margin-top: 50px;
  display: inline-block;
  cursor: pointer;
}
</style>
