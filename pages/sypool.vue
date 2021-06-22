<template>
  <div>
    <section class="mlr400">
      <div class="mb50 mt50">
        <strong class="base_title">Index</strong>
      </div>
      <div class="mb50">
        <img src="../assets/img/line.png" class="line_img mb50" alt="">
      </div>
      <div class="text_center">
        <img src="../assets/img/test2.png" style="width:885px" alt="">
      </div>

      <div class="text_center">
        <span class="btn2" @click="openDialog">Mint SAP</span>
      </div>
    </section>
    <div style="height:100px" />
    <section class="mlr400">
      <div class="mb50 mt50">
        <strong class="base_title">Portfolio</strong>
      </div>
      <div class="mb50">
        <img src="../assets/img/line.png" class="line_img mb50" alt="">
      </div>
      <div class="mb50">
        Show the ingredients of every pool.
      </div>
      <div class="text_center">
        <img src="../assets/img/port-1.png" style="width:885px" alt="">
      </div>
    </section>
    <div style="height:100px" />
    <section class="mlr400">
      <div class="mb50 mt50">
        <strong class="base_title">Ranking</strong>
      </div>
      <div class="mb50">
        <img src="../assets/img/line.png" class="line_img mb50" alt="">
      </div>
      <div class="mb50">
        Record every transaction on chain.
      </div>
      <div class="text_center">
        <img src="../assets/img/activity2-1 (1).png" style="width:840px" alt="">
      </div>
    </section>
    <div style="height:200px" />

    <TabDialog ref="tabDialog" />
  </div>
</template>

<script>
import TabDialog from '@/components/Dialog/dialog.vue'
export default {
  components: { TabDialog },
  methods: {
    openDialog () {
      this.$refs.tabDialog.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.base_title {
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 2px;
}

.line_img {
  width: 109px;
  height: 5px;
}

.btn2 {
  padding: 10px 20px;
  margin-top: 50px;
  display: inline-block;
  cursor: pointer;
}
</style>
