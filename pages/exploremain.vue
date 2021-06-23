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
        <div class="brief" style="width: 80%;margin: 0 auto;">
          Sypool is the dApp for SYP holders. If you want to know more, follow us on Medium, Twitter, or Telegram.
        </div>
      </div>
    </section>
    <section class="mlr400 pt100">
      <div class="mb30">
        <strong class="fs36 bold mb50">Index</strong>
      </div>
      <img src="../assets/img/line.png" class="line_img mb30" alt="">
      <div class="text_center">
        <img src="../assets/img/chart4-2-1280x856.png" class="wow animate__fadeIn" style="width:88%" alt="">
      </div>
    </section>
    <div class="empty_height" />
    <section class="mlr400 pt100">
      <div class="mb30">
        <strong class="fs36 bold mb50">Ranking</strong>
      </div>
      <img src="../assets/img/line.png" class="line_img mb30" alt="">
      <div class="text_center">
        <img src="../assets/img/activity2-1.png" style="width:84%;cursor:pointer;" class=" wow animate__fadeIn" alt="" @click="gotoSypool">
      </div>
    </section>
    <div class="empty_height" />
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
    padding: 200px 0;
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
   @media (max-width: 980px) {
    .title_box {

      .page_title {
        font-size: 132px;
      }
    }
  }
}

.line_img {
  width: 20%;
  height: 5px;
}

</style>
