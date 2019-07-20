<template>
  <div class="page page-gray">
    <scroller class="exchange">
      <div class="exchange-result">
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
        </div>
        <div class="is-finish flex-item">
          <p>换房操作已完成</p>
          <span class="icon iconfont iconduigou finished"></span>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from "./scroller"
export default {
  name: 'exchangeResult',
  data () {
    return {
      
    }
  },
  methods: {},
  components: {
    scroller
  }
}
</script>
