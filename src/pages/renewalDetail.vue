<template>
  <div class="page">
    <scroller>
      <div class="renewal-detail">
        <div class="top-info flex-item">
          <div class="photo">
            <img src="../../static/images/photo.jpg" />
          </div>
          <div class="text">
            <h4>逝水流年</h4>
            <p>房源<span>BM3343</span>公寓<strong>9</strong>天后到期</p>
          </div>
          <div class="already">已续租</div>
        </div>
        <div class="good-info">
          <ul class="public-list">
            <li>
              <div class="item-box flex-item">
                <div class="img bdrs">
                  <img src="../../static/images/img2.jpg"/>
                </div>
                <div class="text">
                  <h4>床位-龙门客赞公寓-地铁旁...</h4>
                  <div class="adv">
                    <span>近地铁</span>
                    <span>可停车</span>
                    <span>随时停车</span>
                  </div>
                  <div class="spec">
                    <span>94㎡/户</span>
                    <span>2室1厅</span>
                    <span>床位4个</span>
                  </div>
                  <div class="address">
                    <span class="icon iconfont icondizhi1"></span>
                    <p>龙岗-龙岗中心城-龙门客赞公寓</p>
                  </div>
                  <div class="price"><span>2800</span>元/月</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="renewal-contract bdt">
          <ul>
            <li v-for="(item,index) in contract" :key="index">
              <div class="img bd">
                <img :src="item">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroller>
    <div class="selected-send">到期提醒</div>
  </div>
</template>

<script>
import scroller from "./scroller"
export default {
  name: "renewalDetail",
  data() {
    return {
      contract: [
        '../../static/images/contract.jpg',
        '../../static/images/contract.jpg',
        '../../static/images/contract.jpg'
      ]
    };
  },
  components: { scroller }
};
</script>
