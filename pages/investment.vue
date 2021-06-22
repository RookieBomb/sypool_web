<template>
  <div>
    <div style="height:100px" />
    <section class="mlr400">
      <div class="text_center">
        <img src="../assets/img/myinvestment-1.png" style="width:600px" alt="">
      </div>
      <div class="text_center">
        <span class="btn2" @click="openDialog">
          Manage My Investment
        </span>
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
.btn2 {
  margin-top: 50px;
  padding: 15px;
}
</style>
