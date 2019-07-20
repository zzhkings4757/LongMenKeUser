<template>
  <div class="page page-bottom120">
    <scroller class="exchange">
      <div class="exchange-swiper">
        <swiper class="exchange-swiper" :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in exchangeBanner" :key="index">
            <div class="img" :style="{'background-image': 'url('+item+')'}"></div>
          </swiper-slide>
        </swiper>
        <div class="swiper-text swiper-name">1号床位</div>
        <div class="swiper-text swiper-num">{{swiperIndex+'/'+exchangeBanner.length}}</div>
      </div>
      <div class="exc-sec exc-sec1">
        <div class="house-title">暖心少女床位出租，家具齐全、水电全免</div>
        <div class="price dc"><span>1200</span>元/月</div>
        <div class="adv">
          <div class="item"><span>近地铁</span></div>
          <div class="item"><span>近商圈</span></div>
          <div class="item"><span>精装</span></div>
        </div>
        <div class="line"></div>
        <ul>
          <li v-for="(item,index) in houseInfo" :key="index">
            <span>{{item.name}}</span>
            <em :class="{'dc':item.emphasize}">{{item.value}}</em>
          </li>
        </ul>
      </div>
      <div class="exc-sec exc-sec2">
        <div class="sec-tit">房源特色</div>
        <ul>
          <li v-for="(item,index) in feature" :key="index">
            <span class="icon iconfont" :class="item.iconName"></span>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="exc-sec exc-sec3">
        <div class="sec-tit">费用详情</div>
        <ul>
          <li v-for="(item,index) in costDetail" :key="index">
            <h4>{{item.item}}</h4>
            <h5>({{item.unit}})</h5>
            <p>{{item.value}}</p>
          </li>
        </ul>
      </div>
    </scroller>
    <div class="bottom-bar exchange-bottom">
      <p>差价 +3/天</p>
      <div class="exchange-btn" @click="toDetail">换房</div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import scroller from "./scroller"
export default {
  name: 'exchange',
  data () {
    const vm = this
    return {
      swiperIndex: 1,
      swiperOption: {
        on: {
          transitionStart: function(){
            vm.swiperIndex = this.activeIndex + 1
          },
        }
      },
      exchangeBanner: [
        '../../static/images/exchange.jpg',
        '../../static/images/exchange.jpg',
        '../../static/images/exchange.jpg'
      ],
      houseInfo: [
        {name: '房型', value: '3室1厅', emphasize: false},
        {name: '面积', value: '4m²/户', emphasize: false},
        {name: '类型', value: '普通住宅', emphasize: false},
        {name: '楼层', value: '高层（18/26）', emphasize: false},
        {name: '装修', value: '精装', emphasize: false},
        {name: '朝向', value: '北', emphasize: false},
        {name: '要求', value: '限女生', emphasize: false},
        {name: '发布', value: '2019年05月29日', emphasize: false},
        {name: '小区', value: '龙门客赞公寓', emphasize: true}
      ],
      feature: [
        {text: '床', iconName: 'iconchuang'},
        {text: '衣柜', iconName: 'iconyigui'},
        {text: '空调', iconName: 'iconkongtiao'},
        {text: '热水', iconName: 'iconreshui'},
        {text: '洗衣机', iconName: 'iconxiyiji'},
        {text: '桌椅', iconName: 'iconzhuozi'},
        {text: '公共厨房', iconName: 'iconchufang1'},
        {text: '独立厨房', iconName: 'iconchufang'},
        {text: '快递站', iconName: 'iconkuaidi'},
        {text: '餐饮', iconName: 'iconcanju'},
        {text: '便利店', iconName: 'iconbianlidian'},
        {text: '地铁', iconName: 'iconditie'},
        {text: 'WIFI', iconName: 'iconwifi'},
      ],
      costDetail: [
        {item: '租金', unit: '元/月', value: '1200'},
        {item: '管理费', unit: '元/月', value: '200'},
        {item: '押金', unit: '元/月', value: '1200'},
        {item: '水电费', unit: '元/月', value: '60'}
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    toDetail(){
      this.$router.push('/exchangeDetail')
    }
  },
  components: {
    swiper,
    swiperSlide,
    scroller
  }
}
</script>

<style scoped>
  .swiper-container{
    height: 100%;
  }
</style>
