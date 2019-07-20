<template>
  <div class="page page-top">
    <div class="top-bar top-menu">
      <div class="menu-item" :class="{'on':swiperIndex==index}" v-for="(item,index) in pageMenu" :key="index" @click="swiperChange(index)"><span>{{item}}</span></div>
    </div>
    <div class="content hidden">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <vue-better-scroll class="wrapper"
            ref="scrollApart"
            :scrollbar="scrollbarObj"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            :startY="parseInt(startY)"
            @pullingDown="onApartPullingDown"
            @pullingUp="onApartPullingUp"
          >
            <ul class="public-list">
              <li v-for="(item,index) in apartmentHistory" :key="index">
                <div class="item-box flex-item">
                  <div class="img bdrs">
                    <div class="label" v-if="item.isNewsResources"><span>新</span></div>
                    <img :src="item.imgUrl">
                  </div>
                  <div class="text">
                    <h4>{{item.title}}</h4>
                    <div class="adv">
                      <span v-for="(subItem,subIndex) in item.advantages" :key="subIndex">{{subItem}}</span>
                    </div>
                    <div class="spec">
                      <span v-for="(subItem,subIndex) in item.specifications" :key="subIndex">{{subItem}}</span>
                    </div>
                    <div class="address">
                      <span class="icon iconfont icondizhi1"></span>
                      <p>{{item.address}}</p>
                    </div>
                    <div class="price"><span>{{item.price}}</span>元/{{item.unit}}</div>
                  </div>
                </div>
              </li>
            </ul>
          </vue-better-scroll>
        </swiper-slide>
        
        <swiper-slide>
          <vue-better-scroll class="wrapper"
            ref="scrollBed"
            :scrollbar="scrollbarObj"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            :startY="parseInt(startY)"
            @pullingDown="onBedPullingDown"
            @pullingUp="onBedPullingUp"
          >
            <ul class="public-list">
              <li v-for="(item,index) in bedHistory" :key="index">
                <div class="item-box flex-item">
                  <div class="img bdrs"><img :src="item.imgUrl"></div>
                  <div class="text">
                    <h4>{{item.title}}</h4>
                    <div class="adv">
                      <span v-for="(subItem,subIndex) in item.advantages" :key="subIndex">{{subItem}}</span>
                    </div>
                    <div class="spec">
                      <span v-for="(subItem,subIndex) in item.specifications" :key="subIndex">{{subItem}}</span>
                    </div>
                    <div class="address">
                      <span class="icon iconfont icondizhi1"></span>
                      <p>{{item.address}}</p>
                    </div>
                    <div class="price"><span>{{item.price}}</span>元/{{item.unit}}</div>
                  </div>
                </div>
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
  name: 'resources',
  data () {
    const vm = this
    return {
      pageMenu: ['公寓','床位'],
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
      apartmentHistory: [
        {
          isNewsResources: true,
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        }
      ],
      bedHistory: [
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月'
        }
      ]
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
    onApartPullingDown(){
      console.log('公寓下拉刷新')
      setTimeout(()=>{
        this.$refs.scrollApart.forceUpdate(true)
      },1000)
    },
    onApartPullingUp(){
      console.log('公寓上拉加载')
      setTimeout(()=>{
        this.$refs.scrollApart.forceUpdate(false)
      },1000)
    },
    onBedPullingDown(){
      console.log('床位下拉刷新')
      setTimeout(()=>{
        this.$refs.scrollBed.forceUpdate(true)
      },1000)
    },
    onBedPullingUp(){
      console.log('床位上拉加载')
      setTimeout(()=>{
        this.$refs.scrollBed.forceUpdate(false)
      },1000)
    }
  },
  components: {
    swiper,
    swiperSlide,
  }
}
</script>

<style scoped>
  .swiper-container{
    height: 100%;
  }
</style>
