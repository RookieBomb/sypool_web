<template>
  <div class="header">
    <img src="../../assets/img/logo2-1.png" class="logo" alt="">
    <div class="right_menu">
      <NuxtLink to="/">
        HOME
      </NuxtLink>
      <NuxtLink to="/">
        COMMUNITY
      </NuxtLink>
      <a style="cursor:pointer;" @click="openWindow">
        LITE PAPER
      </a>
      <NuxtLink to="/exploremain">
        BETA
      </NuxtLink>
      <NuxtLink to="/investment">
        MY INVESTMENT
      </NuxtLink>
      <a style="cursor:pointer;" @click="dialogVisible=true">
        WALLET
      </a>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      :modal="false"
      width="50%"
      class="tab_dialog_2"
    >
      <i class="el-icon-close" @click="dialogVisible = false" />
      <img src="../../assets/img/account.png" style="width:100%;margin-top:10px" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openWindow () {
      window.open('https://sypool.io/wp-content/uploads/2021/06/Sypool-white-paper-1.pdf')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  padding:15px 30px;
  display: flex;
  justify-content: space-between;
  align-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background-color: #000;

  height: 80px;
}

.logo {
  height: 100%;
}

.right_menu {
  display: flex;
  align-items: center;
  a {
    color: #afafaf;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
    margin: 0 20px;
  }
}
</style>
