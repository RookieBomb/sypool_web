<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :width="width"
      class="tab_dialog"
    >
      <i class="el-icon-close" @click="dialogVisible = false" />
      <el-tabs v-model="activeName" class="my_tabs" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item" />
      </el-tabs>
      <div class="content">
        <div class="header">
          <div class="left_box">
            <img :src="curIcon" alt="">
            <span>{{ activeName }}</span>
          </div>
          <p class="right_box">
            {{ text1 }}
          </p>
        </div>
        <div class="syp_block">
          {{ text4 }}
        </div>
        <div class="input_box">
          <p>{{ text2 }}:</p>
          <div class="input_wrap">
            <div class="flag">
              {{ flagText }}
            </div>
            <input type="text" class="input">
            <span class="max_btn">MAX</span>
          </div>
          <p v-if="text3" class="result_box">
            <span class="left">Staking: 53.95 SYP</span>
            <span class="right">0</span>
          </p>
        </div>

        <div class="btn_box">
          <div class="btn_dialog">
            {{ btnText }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import mintIcon from '@/assets/img/MINT.png'
import burnIcon from '@/assets/img/BURN.png'
import tradeIcon from '@/assets/img/TRADE.png'
import farmingIcon from '@/assets/img/FARMING.png'
export default {
  data () {
    return {
      dialogVisible: false,
      tabs: ['MINT', 'BURN', 'TRADE', 'FARM'],
      activeName: 'MINT',
      curIcon: mintIcon,
      text1: 'Select your Pool and Mint its SAP, for hodling, trading, providing liquidity, staking LP tokens…',
      text2: 'Enter an amount to mint',
      btnText: 'MINT NOW',
      flagText: 'SAP',
      text3: true,
      text4: 'Sypool Quant',
      width: '30%'
    }
  },
  mounted () {
    if (process.browser) {
      const autoRootFontSize = () => {
        if (document.documentElement.getBoundingClientRect().width <= 980) {
          this.width = '90%'
        } else {
          this.width = '30%'
        }
      }
      window.addEventListener('resize', autoRootFontSize)
      autoRootFontSize()
    }
  },
  methods: {
    handleClick (tab) {
      this.activeName = tab.label
      if (this.activeName === 'MINT') {
        this.curIcon = mintIcon

        this.text1 = 'Select your Pool and Mint its SAP, for hodling, trading, providing liquidity, staking LP tokens…'
        this.text2 = 'Enter an amount to mint'
        this.btnText = 'MINT NOW'
        this.flagText = 'SAP'
        this.text3 = true
        this.text4 = 'Sypool Quant'
      }
      if (this.activeName === 'BURN') {
        this.curIcon = burnIcon

        this.text1 = 'Burn your SAP when it’s unlocked, and Redeem your tokens back.'
        this.text2 = 'Enter an amount to burn'
        this.btnText = 'BURN NOW'
        this.flagText = 'SAP'
        this.text3 = true
        this.text4 = 'Sypool Quant'
      }
      if (this.activeName === 'TRADE') {
        this.curIcon = tradeIcon

        this.text1 = 'Go to DEX (Serum/ Raydium), trade your SAP or provide liquidity there. '
        this.text2 = 'Enter an amount to trade'
        this.btnText = 'TRADE NOW'
        this.flagText = 'SAP'
        this.text3 = false
        this.text4 = '251 SAP Available'
      }
      if (this.activeName === 'FARM') {
        this.curIcon = farmingIcon

        this.text1 = 'Stake your SYP and LP tokens to earn SYP. Early stakers are rewarded more.'
        this.text2 = 'Enter an amount to farm'
        this.btnText = 'FARM NOW'
        this.flagText = 'SAP'
        this.text3 = false
        this.text4 = '251 SYP Available'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 60%;
  margin: 0 auto;
  color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .left_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin-right: 20px;
      &>img {
        width: 80px;
        height: 80px;

        margin-bottom: 5px;
      }

      &>span {
        font-size: 18px;
        font-weight: 500;
      }
    }

    .right_box {
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
      word-break: normal;
    }
  }

  .syp_block {
    border: 1px solid #0C71C3;
    border-radius: 50px;
    font-size: 14px;
    padding: 3px 0;
    color: #0C71C3;

    margin: 20px 0;

    text-align: center;
  }

  .input_box {
    text-align: left;
    &>p {
      font-size: 14px;
    }

    .result_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .input_wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 40px;
      border: 1px solid #0C71C3;
      border-radius: 10px;

      position: relative;

      margin: 15px  0;

      .flag {
        width: 70px;
        height: 40px;
        line-height: 40px;
        border-right: 1px solid #0C71C3;
        text-align: center;
      }

      .input {
        flex: 1;
        height: 40px;
        line-height: 40px;
        background: transparent;
        padding: 10px;
        border: none;
        color: #fff;

        &:focus-visible {
          outline: none;
        }
      }

      .max_btn {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translate(0%, -50%);
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #0C71C3;
        color: #fff;
        font-size: 14px;
        line-height: 1;
      }
    }
  }

  .btn_box {
    text-align: center;
    margin: 30px 0;
    .btn_dialog {
      font-size: 14px;
      background-color: #0C71C3;
      letter-spacing: 2px;
      text-align: center;
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      color: #fff;

      margin: 0 auto;

      cursor: pointer;
    }
  }

}

.content {
  padding: 50px 0;
}

@media (max-width: 980px) {
  .content {
    width: 60%;
    margin: 0 auto;
    color: #fff;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .left_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-right: 40px;
        width: 25%;
        &>img {
          width: 160px;
          height: 160px;

          margin-bottom: 10px;
        }

        &>span {
          font-size: 36px;
          font-weight: 500;
        }
      }

      .right_box {
        flex: 1;

        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
        word-break: normal;
      }
    }

    .syp_block {
      border: 2px solid #0C71C3;
      border-radius: 100px;
      font-size: 28px;
      padding: 3px 0;
      color: #0C71C3;

      margin: 40px 0;

      text-align: center;
    }

    .input_box {
      text-align: left;
      &>p {
        font-size: 28px;
      }

      .result_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .input_wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 160px;
        border: 1px solid #0C71C3;
        border-radius: 20px;

        position: relative;

        margin: 30px  0;

        .flag {
          width: 140px;
          height: 160px;
          line-height: 160px;
          border-right: 1px solid #0C71C3;
          text-align: center;
        }

        .input {
          flex: 1;
          height: 80px;
          line-height: 80px;
          background: transparent;
          padding: 10px;
          border: none;
          color: #fff;

          &:focus-visible {
            outline: none;
          }
        }

        .max_btn {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translate(0%, -50%);
          padding: 5px 10px;
          border-radius: 5px;
          background-color: #0C71C3;
          color: #fff;
          font-size: 14px;
          line-height: 1;
        }
      }
    }

    .btn_box {
      text-align: center;
      margin: 60px 0;
      .btn_dialog {
        font-size: 28px;
        background-color: #0C71C3;
        letter-spacing: 2px;
        text-align: center;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        color: #fff;

        margin: 0 auto;

        cursor: pointer;
      }
    }

  }
}
</style>
