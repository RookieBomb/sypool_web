<template>
  <footer class="footer">
    <div class="link_box">
      <div>
        <img src="../../assets/img/medium.png" alt="">
        <span>MEDIUM</span>
      </div>
      <div>
        <img src="../../assets/img/twitter.png" alt="">
        <span>TWITTER</span>
      </div>
      <div>
        <img src="../../assets/img/telegram.png" alt="">
        <span>TELEGRAM</span>
      </div>
      <div>
        <img src="../../assets/img/logo4.png" alt="">
        <span>DISCORD</span>
      </div>
      <div>
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
  font-size: 14px;

  margin: 30px 0 10px;
}
</style>
