<template>
  <div class="page page-gray">
    <scroller>
      <div class="service-detail">
        <div class="service-list">
          <div class="item-box">
            <div class="photo">
              <img src="../../static/images/photo1.jpg">
            </div>
            <div class="text">
              <div class="infos flex-item">
                <h4>租客987</h4>
                <h5>2019-06-11 16:47:13</h5>
              </div>
              <p>房间里的电灯泡闪了，麻烦看一下。房间里的电灯泡闪了，麻烦看一下。</p>
              <div class="type">#水电问题</div>
            </div>
            <div class="progress">
              <div class="progress-bar" :style="{width: progressStep/(progress.length-1)*100+'%'}"></div>
              <div class="progress-item" :class="{'finish': progressStep>=index}" :style="{left: index/(progress.length-1)*100+'%'}" v-for="(item,index) in progress" :key="index" @click="finishStep(index)">
                <div class="icon iconfont iconduigou flex-center"></div>
                <p>{{item}}</p>
              </div>
            </div>
          </div>
          <div class="service-cost flex-item">
            <input type="Number" v-model="serviceCost" v-if="underSet" placeholder="请输入金额(单位:元)">
            <p v-else>费用：{{serviceCost}}元/次</p>
            <div class="cost-btn" @click="costSet">
              <span v-if="underSet">完成设置</span>
              <span v-else>设置费用</span>
            </div>
          </div>
          <router-link class="to-exchange flex-item" to="/exchange">
            <p>换房</p>
            <span class="icon iconfont iconRight"></span>
          </router-link>
        </div>
      </div>
      <div class="service-state">
        <div class="flex-item">
          <h4>租客已确认</h4>
          <h5>2019-06-11 16:47:13</h5>
        </div>
        <p>管理员很快解决了</p>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from "./scroller";
export default {
  name: "serviceDetail",
  data() {
    return {
      progress:['已付款','解决中','已解决'],
      progressStep: 0,
      underSet: false,
      serviceCost: 30,
    };
  },
  methods: {
    costSet(){
      this.underSet = !this.underSet
    },
    finishStep(i){
      
      if(i==1&&this.progressStep<1){
        let that = this
        that.$dialog.confirm('是否确认解决中',{
          okText: '确认',
          cancelText: '取消',
        }).then(function (dialog) {
          that.progressStep = 1
        })
      }
    }
  },
  components: { scroller }
};
</script>
