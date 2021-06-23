<template>
  <div>
    <div class="empty_height" />
    <section class="mlr400 pt100">
      <div class="align_center">
        <img src="../assets/img/myinvestment-1.png" style="width:60%" alt="">
      </div>
      <div class="align_center">
        <span class="btn2" @click="openDialog">
          Manage My Investment
        </span>
      </div>
    </section>
    <div class="empty_height" />

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
