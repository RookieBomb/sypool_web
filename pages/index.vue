<template>
  <div class="container">
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
      <div class="title_box">
        <span class="page_title wow animate__bounce">SYPOOL</span>
        <div class="brief  wow animate__bounce">
          Synthetic Asset Pools Management
        </div>
        <NuxtLink to="/exploremain" class="btn wow animate__bounce">
          ENTER APP
        </NuxtLink>
      </div>
    </section>

    <section class="second_section mlr400">
      <strong class="fs36 align_center bold mt50 mb50 display_block">FEATURES</strong>
      <el-row :gutter="60">
        <el-col :lg="8" :span="24">
          <div class="block mb30  wow animate__pulse">
            <img src="../assets/img/Crypto_Icon_13.png" alt="">
            <p>INNOVATION</p>
            <span>Sypool is a synthetic asset management protocol, which enables you to build, manage and trade your portfolio tokens easily.</span>
          </div>
        </el-col>
        <el-col :lg="8" :span="24">
          <div class="block mb30  wow animate__pulse">
            <img src="../assets/img/Crypto_Icon_15.png" alt="">
            <p>INSPIRATION</p>
            <span>In this crypto world, two things always inspire us: the imagination and the perspective. Imagination is the will; perspective is the way.</span>
          </div>
        </el-col>
        <el-col :lg="8" :span="24">
          <div class="block mb30  wow animate__pulse">
            <img src="../assets/img/Crypto_Icon_14.png" alt="">
            <p>TOKENIZATION</p>
            <span>The idea is constantly the same: tokenization. And tokenized pool shares could represent ownership of certain amount of assets.</span>
          </div>
        </el-col>
      </el-row>

      <div class="align_center">
        <a class="btn2" @click="gotoLearnMore">
          Learn More
        </a>
      </div>
    </section>

    <section class="three_section mlr400 pt100">
      <strong id="learnMore" class="fs36 align_center bold mb50 display_block">“Bi- token” System</strong>
      <div class="fs16 align_center mb30">
        Governance Token (SYP) + Each Pool’s Share Token (SAP)
      </div>
      <el-row :gutter="20">
        <el-col :lg="8" :span="24">
          <div class="block mb30">
            <img src="../assets/img/line.png" class="line_img mb30" alt="">
            <p>
              SYP—As the governance token, SYP provides every participant with proper rewards.
            </p>
          </div>
        </el-col>
        <el-col :lg="8" :span="24">
          <div class="block mb30">
            <img src="../assets/img/sap1-1.png" class="wow animate__fadeInUp" style="width:85%" alt="">
          </div>
        </el-col>
        <el-col :lg="8" :span="24">
          <div class="block mb30">
            <img src="../assets/img/line.png" class="line_img mb30" alt="">
            <p>
              SAP—it represents certain shares of the pool. Minting, burning, trading, farming, or anything the rules permit.
            </p>
          </div>
        </el-col>
      </el-row>
    </section>

    <section class="four_section mlr400 pt100">
      <strong class="fs36 align_center bold mb50 display_block">Mint & Burn SAP</strong>
      <div class="align_center mb30">
        <img src="../assets/img/line.png" class="line_img" style="width:25%" alt="">
      </div>
      <div class="fs16 align_center mb30">
        Use your USDT, BTC, ETH, SOL, SYP…to mint SAP; or burn your SAP to redeem your tokens.
      </div>
      <el-row :gutter="120">
        <el-col :lg="12" :span="24">
          <div class="block">
            <img src="../assets/img/mint4-1.png" class="wow animate__fadeInUp" alt="">
          </div>
        </el-col>
        <el-col :lg="12" :span="24">
          <div class="block">
            <img src="../assets/img/burn4-1.png" class="wow animate__fadeInUp" alt="">
          </div>
        </el-col>
      </el-row>
    </section>

    <section class="five_section mlr400 pt100">
      <el-row :gutter="120">
        <el-col :lg="12" :span="24">
          <div class="align_right">
            <strong class="fs36 mb30 display_block">Secondary Market</strong>
            <img src="../assets/img/line.png" class="line_img mb20" alt="">
            <p class="fs16 lh15 mb20">
              After mainnet launch, a secondary trading market of SAPi will be established and trading pairs will be created in Dex.
            </p>
            <p class="fs16 lh15">
              Users holding LP tokens can get both reward from the exchange through providing liquidity and SYP through farming.
            </p>
          </div>
        </el-col>
        <el-col :lg="12" :span="24">
          <div class="block">
            <img src="../assets/img/Picture13.png" style="width:90%" class="wow animate__fadeInUp" alt="">
          </div>
        </el-col>
      </el-row>
    </section>

    <section class="six_section mlr400 mt150">
      <el-row :gutter="120">
        <el-col :lg="12" :span="24">
          <div class="block">
            <img src="../assets/img/Crypto_Illustration_03-1.png" class=" wow animate__fadeInUp" style="width:90%" alt="">
          </div>
        </el-col>
        <el-col :lg="12" :span="24">
          <div>
            <strong class="base_title mb50 display_block">TYPES OF SAP</strong>
            <div class="types_list  wow animate__fadeInDown">
              <i class="el-icon-check" />
              <div>
                <p>INDEX-TRACKING</p>
              </div>
            </div>
            <div class="types_list wow animate__fadeInDown">
              <i class="el-icon-check" />
              <div>
                <p>ASSESTS-BACKED</p>
                <p>QUANTATIVE</p>
                <p>TRADING</p>
              </div>
            </div>
            <div class="types_list wow animate__fadeInDown">
              <i class="el-icon-check" />
              <div>
                <p>TRADER-BASED</p>
              </div>
            </div>
            <div class="types_list wow animate__fadeInDown">
              <i class="el-icon-check" />
              <div>
                <p>STRUCTURED YIELD</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <section class="mlr400 mt150">
      <el-row :gutter="120">
        <el-col :lg="12" :span="24">
          <div>
            <strong class="base_title mb50 display_block">TYPES OF SAP</strong>
            <img src="../assets/img/line.png" class="line_img mb50" alt="">
            <p class="base_text">
              Besides traditional uses of governance token, like trading, staking, voting, and developing community, minting SAP is also a core usage of SYP.
            </p>
          </div>
        </el-col>
        <el-col :lg="12" :span="24">
          <div class="usage_list">
            <div class="wow animate__fadeInRight">
              <i class="el-icon-circle-check" />
              <span>TRADE</span>
            </div>
            <div class="wow animate__fadeInRight">
              <i class="el-icon-circle-check" />
              <span>STAKING</span>
            </div>
            <div class="wow animate__fadeInRight">
              <i class="el-icon-circle-check" />
              <span>MINT SAP</span>
            </div>
            <div class="wow animate__fadeInRight">
              <i class="el-icon-circle-check" />
              <span>VOTE</span>
            </div>
            <div class="wow animate__fadeInRight">
              <i class="el-icon-circle-check" />
              <span>COMMUNITY DEVELOPMENT</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <section class="mlr400 mt150">
      <strong class="section_title">Cross-Chain Interoperability</strong>
      <div class="text_center mb50">
        <img src="../assets/img/line.png" class="line_img" alt="">
      </div>
      <div class="compans_list">
        <img src="../assets/img/binance_smart_chain.png" class="grays wow animate__bounceIn" alt="">
        <img src="../assets/img/solana-1.png" class="wow animate__bounceIn" alt="">
        <img src="../assets/img/ethereum.png" class="grays wow animate__bounceIn" alt="">
      </div>
    </section>

    <section class="mlr400 mt150 text_center">
      <strong class="section_title">Preview</strong>
      <div class="text_center mb50">
        <img src="../assets/img/line.png" class="line_img" alt="">
      </div>
      <img src="../assets/img/mint5-1.png" class="preview_img mb50 wow animate__fadeInDown" alt="">
      <div class="mb50">
        <NuxtLink class="btn" to="/exploremain">
          DEMO
        </NuxtLink>
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
  data () {
    return {
      typeList: ['INDEX-TRACKING', '']
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: 'animate__animated' }).init()
      }
    })
  },
  methods: {
    gotoLearnMore () {
      document.getElementById('learnMore').scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="less">
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
}

.tl {
  text-align: left;
}

.display_block {
  display: block;
}

.base_text {
  font-size: 16px;
  line-height: 1.8;
}

.base_title {
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 2px;
}

.section_title {
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 2px;
    margin: 50px 0;
    display: block;
    text-align: center;
}

.sub_brief {
  text-align: center;
  font-size: 16px;
  line-height: 1.5;

  margin-bottom: 30px;
}

.line_img {
  width: 45%;
  height: 5px;
}

.second_section {
  .block {
    font-size: 16px;
    color: rgba(255,255,255,0.7);
    line-height: 32px;
    border:2px solid #4285c4;
    min-height: 417px;
    padding: 45px 16px;

    text-align: center;

    &>img{
      height: 30%;
    }

    &>p {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;

      margin: 10px 0;
      color: #fff;
    }
  }

  .btn_box {
    margin: 50px auto;
    text-align: center;
  }
}

.three_section {
  .block {
    &>p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
}

.four_section {
  div.block{
    &>img {
      width: 100%;
      margin-top: 20px;
    }
  }
}

.five_section {

}

.types_list {
  font-size: 16px;
  color: rgba(255,255,255,0.7);
  line-height: 1.8;
  border:2px solid #4285c4;
  padding: 20px 16px;
  margin-bottom: 30px;

  .el-icon-check {
    color: #4285c4;
    font-size: 30px;
    margin-right: 10px;
  }

  display: flex;
}

.usage_list {
  font-size: 20px;
  color: rgba(255,255,255,0.7);
  border:1px solid #4285c4;
  padding: 50px;
  color: #4285c4;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &>div {
    display: flex;
    width: 50%;
    margin: 20px 0;

    .el-icon-circle-check {
      font-size: 30px;
      margin-right: 10px;
    }
  }
}

.compans_list {
  display: flex;
  justify-content: space-around;
  align-content: center;

  &>img {
    height: 57px;
  }
}

.preview_img {
  width: 480px;
}

.grays {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
// 测试

</style>
