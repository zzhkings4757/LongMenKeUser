<template>
  <div class="page page-gray">
    <scroller>
      <div class="contract-detail">
        <div class="section pad20">
          <div class="infos">
            <div class="img bd flex-center">
              <img src="../../static/images/contract.jpg">
            </div>
            <div class="text">
              <h4>龙门客租房合同</h4>
              <p>2019-06-20</p>
            </div>
          </div>
        </div>
        <div class="section">
          <ul class="link-list">
            <li v-for="(item,index) in links" :key="index">
              <router-link :to="item.linkPath">
                <p>{{item.text}}</p>
                <span class="icon iconfont iconRight"></span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from "./scroller";
export default {
  name: "contractDetail",
  data() {
    return {
      links: [
        {text: '查看合同', linkPath: '/contractDetail'},
        {text: '发票查看', linkPath: '/contractDetail'}
      ]
    };
  },
  components: { scroller }
};
</script>
