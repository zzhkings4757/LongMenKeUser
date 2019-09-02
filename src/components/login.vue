<template>
  <div class="page">
    <scroller>
      <div class="login">
        <h2>您想要找的房间是？</h2>
        <div class="login-sec">
          <h4>我要：</h4>
          <ul>
            <li v-for="(item,index) in typeList" :key="index" :class="{'on':typeIndex==index}" @click="selectType(index)"><span>{{item}}</span></li>
          </ul>
        </div>
        <div class="login-sec">
          <h4>租金范围：</h4>
          <ul>
            <li v-for="(item,index) in rentList" :key="index" :class="{'on':rentIndex==index}" @click="selectRent(index)"><span>{{item}}</span></li>
          </ul>
        </div>
        <div class="login-sec">
          <h4>户型选择：</h4>
          <ul>
            <li v-for="(item,index) in layoutList" :key="index" :class="{'on':layoutIndex==index}" @click="selectLayout(index)"><span>{{item}}</span></li>
          </ul>
        </div>
        <router-link to="/" class="start-btn flex-center btn-style bg-0c2b68">去租房</router-link>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from "./scroller"
export default {
  name: "login",
  data() {
    return {
      typeList: ['租床位','租公寓'],
      typeIndex: 0,
      rentList: ['700以下','500-1000','1000-2000','2000-3000','3000以上'],
      rentIndex: 0,
      layoutList: ['一居室','两居室','三居室','三室以上'],
      layoutIndex: 0,
    };
  },
  methods: {
    selectType(index){
      this.typeIndex = index
    },
    selectRent(index){
      this.rentIndex = index
    },
    selectLayout(index){
      this.layoutIndex = index
    }
  },
  components: { scroller }
};
</script>
