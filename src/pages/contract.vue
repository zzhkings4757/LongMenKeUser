<template>
  <div class="page page-top page-gray">
    <div class="top-bar top-menu">
      <div class="menu-item" :class="{'on':swiperIndex==index}" v-for="(item,index) in pageMenu" :key="index" @click="swiperChange(index)"><span>{{item}}</span></div>
    </div>
    <div class="content hidden">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <vue-better-scroll class="wrapper"
            ref="scrollContract"
            :scrollbar="scrollbarObj"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            :startY="parseInt(startY)"
            @pullingDown="onContractPullingDown"
            @pullingUp="onContractPullingUp"
          >
            <ul class="contract-list">
              <li v-for="(item,index) in contractList" :key="index">
                <router-link class="item-box" to="/contractUser">
                  <div class="photo">
                    <img :src="item.photo">
                  </div>
                  <h3>{{item.username}}</h3>
                  <h4>{{item.contractType}}</h4>
                  <div class="img">
                    <img :src="item.imgUrl">
                  </div>
                  <h2>{{item.timeStamp}}</h2>
                </router-link>
              </li>
            </ul>
          </vue-better-scroll>
        </swiper-slide>
        <swiper-slide>
          <vue-better-scroll class="wrapper"
            ref="scrollExpire"
            :scrollbar="scrollbarObj"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            :startY="parseInt(startY)"
            @pullingDown="onExpirePullingDown"
            @pullingUp="onExpirePullingUp"
          >
            <ul class="contract-list">
              <li v-for="(item,index) in ExpireList" :key="index">
                <router-link class="item-box" to="/contractUser">
                  <div class="photo">
                    <img :src="item.photo">
                  </div>
                  <h3>{{item.username}}</h3>
                  <h4>{{item.contractType}}</h4>
                  <div class="img">
                    <img :src="item.imgUrl">
                  </div>
                  <h2>{{item.timeStamp}}</h2>
                </router-link>
              </li>
            </ul>
          </vue-better-scroll>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'contract',
  data () {
    const vm = this
    return {
      pageMenu: ['合同管理','到期合同'],
      swiperIndex: 0,
      swiperOption: {
        on: {
          transitionStart: function(){
            vm.swiperIndex = this.activeIndex
          },
        }
      },
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 80,
        stop: 40
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
        }
      },
      startY: 0,
      contractList: [
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        }
      ],
      ExpireList:  [
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '小张',
          contractType: '续租合同',
          imgUrl: '../../static/images/contract.jpg',
          timeStamp: '2019-06-20'
        }
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    swiperChange(index){
      this.swiper.slideTo(index,400,false)
    },
    onContractPullingDown(){
      console.log('合同管理下拉刷新')
      setTimeout(()=>{
        this.$refs.scrollContract.forceUpdate(true)
      },1000)
    },
    onContractPullingUp(){
      console.log('合同管理上拉加载')
      setTimeout(()=>{
        this.$refs.scrollContract.forceUpdate(false)
      },1000)
    },
    onExpirePullingDown(){
      console.log('到期合同下拉刷新')
      setTimeout(()=>{
        this.$refs.scrollExpire.forceUpdate(true)
      },1000)
    },
    onExpirePullingUp(){
      console.log('到期合同上拉加载')
      setTimeout(()=>{
        this.$refs.scrollExpire.forceUpdate(false)
      },1000)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
  .swiper-container{
    height: 100%;
  }
</style>
