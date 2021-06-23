<template>
  <div class="header">
    <img src="../../assets/img/logo2-1.png" class="logo" alt="">
    <div class="right_menu">
      <NuxtLink to="/">
        HOME
      </NuxtLink>
      <a style="cursor: pointer" @click="gotoBottom">
        COMMUNITY
      </a>
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
    <el-dropdown class="right_menu_small" @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-menu" />
      </span>
      <el-dropdown-menu slot="dropdown" class="my_dropdown">
        <el-dropdown-item>
          <a @click="goToLink('/')">
            HOME
          </a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a style="cursor: pointer" @click="gotoBottom">
            COMMUNITY
          </a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a style="cursor:pointer;" @click="openWindow">
            LITE PAPER
          </a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a @click="goToLink('/exploremain')">
            BETA
          </a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a @click="goToLink('/investment')">
            MY INVESTMENT
          </a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a style="cursor:pointer;" @click="dialogVisible=true">
            WALLET
          </a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
    },
    gotoBottom () {
      document.getElementById('footer').scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    goToLink (url) {
      this.$router.push(url)
    },
    handleCommand (key) {
      console.log(123123, key)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  padding:15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background-color: #000;

  height: 60px;

  box-sizing: border-box;
}

.logo {
  height: 50px;
}

.right_menu {
  align-items: center;
  a {
    color: #afafaf;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
    margin-left: 20px;
  }
}

@media (max-width: 980px) {
  .header {
    height: 120px;
    box-sizing: border-box;
  }
  .logo {
    height: 90px;
  }
  .right_menu {
    display: none;
  }
  .right_menu_small {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-icon-menu {
      font-size: 80px;
      color: #4285c4;
    }
  }
}

@media (min-width: 981px) {
  .header {
    height: 60px;
      box-sizing: border-box;
  }
  .right_menu {
    display: flex;
  }
  .right_menu_small {
    display: none;
  }
}
</style>

<style lang="less">
.my_dropdown {
  width: 95%;
  background: rgb(36, 36, 36);
  border: none;
  padding: 20px;
  left: 50% !important;
  box-sizing: border-box;
  transform: translate(-50%, 0);

  .el-dropdown-menu__item {
    box-sizing: border-box;

    &>a {
      font-size: 20px;
      color: #afafaf;
      text-decoration: none;
      // width: 100%;
      display: block;
      padding: 10px;
    }

    &:hover {
      background-color:rgb(75, 75, 75);
      color: #afafaf;
    }
  }

  .popper__arrow {
    display: none;
  }
}
</style>
