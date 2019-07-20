<template>
  <div class="page page-bottom120">
    <scroller class="exchange">
      <div class="exchange-detail">
        <div class="exchange-contrast">
          <div class="item-box">
            <div class="img">
              <img src="../../static/images/exchange-detail.jpg">
            </div>
            <div class="text">
              <h2>暖心少女床位出租，家具齐全、水电全免</h2>
              <h5 class="dc">已入住：103天</h5>
            </div>
          </div>
          <div class="icon iconfont iconjiantou"></div>
          <div class="item-box">
            <div class="img">
              <img src="../../static/images/exchange-detail.jpg">
            </div>
            <div class="text">
              <h2>暖心少女床位出租，家具齐全、水电全免</h2>
            </div>
          </div>
        </div>
        <div class="exchange-infos">
          <h4>租房人员信息</h4>
          <h5>
            <span>李雷</span>
            <span>615213********1025</span>
          </h5>
          <div class="checkbox-group" :class="{'checked': isConsentClause}" @click="consentClause">
            <div class="icon iconfont iconduigou"></div>
            <p>我已阅读并同意<span class="dc">《租房条款》</span></p>
          </div>
        </div>
        <div class="diff-price">
          <div class="price-box">应补差价：1800元</div>
          <p>明细：4元/天 * 167天</p>
        </div>
      </div>
    </scroller>
    <div class="bottom-bar exchange-bottom">
      <p>差价 +3/天</p>
      <div class="exchange-btn" :class="{'btn-disabled': !isConsentClause}" @click="showTips">换房</div>
    </div>
    <popup ref="popupEiweima" class="popup-erweima"
      title="微信扫码"
    >
      <div class="erweima">
        <img src="../../static/images/erweima.jpg">
      </div>
    </popup>
    <popup ref="popupTips" class="popup-tips"
      :showBtn="true"
    >
      <p>应反差价688元，将于3哥工作日返还至绑定微信。</p>
    </popup>
  </div>
</template>

<script>
import scroller from "./scroller"
import popup from "./popup"
export default {
  name: 'exchangeDetail',
  data () {
    return {
      isConsentClause: true
    }
  },
  methods: {
    consentClause(){
      this.isConsentClause = !this.isConsentClause
    },
    showErweima(){
      this.$refs.popupEiweima.showPupup()
    },
    showTips(){
      this.$refs.popupTips.showPupup()
    },
    toSubmit(){
      if(this.isConsentClause){
        this.$router.push('/exchangeResult')
      }
    }
  },
  components: {
    scroller,
    popup
  }
}
</script>

