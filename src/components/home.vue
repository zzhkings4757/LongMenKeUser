<template>
  <div class="page page-bottom page-gray">
    <scroller>
      <div class="home">
        <div class="home-sec">
          <searchbox ref="topSearch" :showCity="true" @onSearchSubmit="searchSubmit"></searchbox>
          <swiper class="home-banner" :options="swiperOption" ref="homeBanner">
            <swiper-slide v-for="(item,index) in homeBanner" :key="index">
              <div class="img flex-center" :style="{'background-image': 'url('+item.imgUrl+')'}">
                <div class="filter"></div>
                <h4>{{item.text}}</h4>
              </div>
            </swiper-slide>
            <div class="swiper-pagination banner-pagination"  slot="pagination"></div>
          </swiper>
          <div class="house-type">
            <router-link :to="{name: 'classify', params: { typeId: 'apartment' }}">
              <span class="icon iconfont iconchuang1 flex-center"></span>
              <p>租床位</p>
            </router-link>
            <router-link :to="{name: 'classify', params: { typeId: 'bed' }}">
              <span class="icon iconfont icongongyu flex-center"></span>
              <p>租公寓</p>
            </router-link>
          </div>
        </div>
        <!-- 一键完善 Start!-->
        <div class="home-sec bottom30">
          <div class="sec-tit"><h4>一键租房</h4></div>
          <div class="home-onekey flex-item">
            <div class="text">
              <p>完善基本信息，系统自动帮您筛选优质房源、床位</p>
              <router-link to="/improveInfor" class="dc">马上去完善 &gt;</router-link>
            </div>
            <div class="perfect">
              <h3>完善率</h3>
              <h4>50%</h4>
            </div>
          </div>
        </div>
        <!-- 一键完善 End!-->
        <!-- 床位推荐 Start!-->
        <div class="home-sec bottom30">
          <div class="sec-tit">
            <h4>床位推荐</h4>
            <router-link to="/">查看更多</router-link>
          </div>
          <div class="sec-cont">
            <ul class="list-style">
              <li v-for="(item,index) in apartRecommend" :key="index">
                <router-link to="/">
                  <div class="img" :style="{'background-image': 'url('+item.imgUrl+')'}"></div>
                  <div class="text">
                    <p>{{item.title}}</p>
                    <p class="dc">{{item.price}}元/月</p>
                  </div>
                </router-link>
              </li>
            </ul>
            <div class="home-ad">
              <img src="../../static/images/home-ad.jpg">
              <div class="text flex-center"><h4>有龙门，让租房更方便</h4></div>
            </div>
          </div>
        </div>
        <!-- 床位推荐 End!-->
        <!-- 公寓推荐 Start!-->
        <div class="home-sec">
          <div class="sec-tit">
            <h4>公寓推荐</h4>
            <router-link to="/">查看更多</router-link>
          </div>
          <div class="sec-cont">
            <ul class="list-style">
              <li v-for="(item,index) in bedRecommend" :key="index">
                <router-link to="/">
                  <div class="img" :style="{'background-image': 'url('+item.imgUrl+')'}"></div>
                  <div class="text">
                    <p>{{item.title}}</p>
                    <p class="dc">{{item.price}}元/月</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
         <!-- 公寓推荐 End!-->
         <!-- 新上床位 Start!-->
        <div class="home-sec bottom40">
          <div class="sec-tit">
            <h4>新上床位</h4>
          </div>
          <div class="sec-cont">
            <publicList :dataList="bedNew"></publicList>
            <div class="more-btn flex-center">查看更多</div>
          </div>
        </div>
        <!-- 新上床位 End!-->
        <!-- 推荐公寓 Start!-->
        <div class="home-sec bottom50">
          <div class="sec-tit">
            <h4>推荐公寓</h4>
          </div>
          <div class="sec-cont">
            <publicList :dataList="apartNew"></publicList>
            <div class="more-btn flex-center">查看更多</div>
          </div>
        </div>
        <!-- 推荐公寓 End!-->
      </div>
    </scroller>
    <navbar :pageIndex="0"></navbar>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import scroller from "./scroller"
import searchbox from "./searchbox"
import navbar from "./navbar"
import publicList from "./publicList"
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.banner-pagination',
        },
      },
      homeBanner: [
        {
          imgUrl: '../../static/images/home-banner1.jpg',
          text: '房子是租的，但生活不是'
        },
        {
          imgUrl: '../../static/images/home-banner1.jpg',
          text: '房子是租的，但生活不是'
        },
        {
          imgUrl: '../../static/images/home-banner1.jpg',
          text: '房子是租的，但生活不是'
        }
      ],
      apartRecommend: [
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        },
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        },
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        },
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        }
      ],
      bedRecommend: [
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        },
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        },
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        },
        {
          imgUrl: '../../static/images/recommend1.jpg',
          title: '龙岗-2室1厅',
          price: 900
        }
      ],
      apartNew: [
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          linkPath: '/'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          linkPath: '/'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          linkPath: '/'
        }
      ],
      bedNew: [
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          linkPath: '/'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          linkPath: '/'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          linkPath: '/'
        }
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.homeBanner.swiper
    }
  },
  methods: {
    searchSubmit(){
      var val = this.$refs.topSearch.searchValue //搜索框的value值
      this.$router.push({
        name: 'searchPage',
        params: {
          searchValue: val
        }
      })
    },
  },
  components: {
    swiper,
    swiperSlide,
    scroller,
    searchbox,
    navbar,
    publicList
  }
};
</script>
