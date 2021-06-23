<template>
  <footer class="footer">
    <div class="link_box">
      <div @click="gotoLink('https://medium.com/@SYP_Protocol')">
        <img src="../../assets/img/medium.png" alt="">
        <span>MEDIUM</span>
      </div>
      <div @click="gotoLink('https://twitter.com/SYP_Protocol')">
        <img src="../../assets/img/twitter.png" alt="">
        <span>TWITTER</span>
      </div>
      <div @click="gotoLink('https://t.me/sypool_protocol')">
        <img src="../../assets/img/telegram.png" alt="">
        <span>TELEGRAM</span>
      </div>
      <div @click="gotoLink('https://discord.gg/TeHJZG7xaj')">
        <img src="../../assets/img/logo4.png" alt="">
        <span>DISCORD</span>
      </div>
      <div @click="gotoLink('https://github.com/SypoolProtocol')">
        <img src="../../assets/img/github.png" alt="">
        <span>GITHUB</span>
      </div>
    </div>
    <div class="copyright">
      Copyright ©2021 SYPOOL
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    gotoLink (url) {
      window.open(url, '_self')
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  margin: 20px 400px;
}

.link_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>div {
    color: #fff;
    font-size: 18px;
    cursor: pointer;

    display: flex;
    align-items: center;
    &>img {
      width: 32px;
      margin-right: 5px;
    }
  }
}

.copyright {
  color: #666;
  padding-bottom: 10px;
  font-size: 16px;

  margin: 30px 0 10px;
}

@media (max-width: 980px) {
  .footer {
    margin: 20px 200px;
  }
  .link_box {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    &>div {
      color: #fff;
      font-size: 60px;
      cursor: pointer;

      display: flex;
      align-items: center;

      margin-bottom: 30px;
      &>img {
        width: 60px;
        margin-right: 5px;
      }
    }
  }
}

@media (min-width: 981px) {

}
</style>
