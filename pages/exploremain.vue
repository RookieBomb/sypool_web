<template>
  <div>
    <section class="first_section">
      <video
        id="video"
        loop="loop"
        autoplay=""
        playsinline=""
        muted=""
        preload="none"
        src="https://sypool.io/wp-content/uploads/2021/06/1036290746-sd.mov"
      >
        <source type="video/mp4" src="https://sypool.io/wp-content/uploads/2021/06/1036290746-sd.mov">
      </video>
      <div class="title_box wow animate__fadeInUp">
        <span class="page_title">Explore Sypool</span>
        <div class="brief">
          Sypool is the dApp for SYP holders. If you want to know more, follow us on Medium, Twitter, or Telegram.
        </div>
      </div>
    </section>
    <section class="mlr400">
      <div class="mb50 mt50">
        <strong class="base_title">Index</strong>
      </div>
      <div class="mb50">
        <img src="../assets/img/line.png" class="line_img mb50" alt="">
      </div>
      <div class="text_center">
        <img src="../assets/img/chart4-2-1280x856.png" class=" wow animate__fadeIn" style="width:885px" alt="">
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
      <div class="text_center">
        <img src="../assets/img/activity2-1.png" style="width:840px;cursor:pointer;" class=" wow animate__fadeIn" alt="" @click="gotoSypool">
      </div>
    </section>
    <div style="height:200px" />
  </div>
</template>

<script>
if (process.browser) { // 在这里根据环境引入wow.js
  // eslint-disable-next-line no-var
  var { WOW } = require('wowjs')
}
export default {
  mounted () {
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: 'animate__animated' }).init()
      }
    })
  },
  methods: {
    gotoSypool () {
      this.$router.push('/sypool')
    }
  }
}
</script>

<style lang="less" scoped>
.first_section {
  width: 100%;
  height: 510px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  #video {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .title_box {
    margin-top: 150px;
    text-align: center;

    z-index: 100;
    position: relative;

    .page_title {
      font-size: 66px;
    }

    .brief {
      font-size: 18px;
      margin: 25px 15px;
    }
  }
}

.base_title {
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 2px;
}

.line_img {
  width: 109px;
  height: 5px;
}
</style>
