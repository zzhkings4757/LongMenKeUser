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
            <ul class="public-list with-radio">
              <li :class="{selected:item.selected}" v-for="(item,index) in apartmentHistory" :key="index">
                <div class="item-box flex-item">
                  <div class="radio-group" data-name="apartment" @click="selectItem('apartment',index)">
                    <span class="icon iconfont iconxuanze"></span>
                    <span class="icon iconfont iconxuanze-yixuan"></span>
                  </div>
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
            <ul class="public-list with-radio">
              <li :class="{selected:item.selected}" v-for="(item,index) in bedHistory" :key="index">
                <div class="item-box flex-item">
                  <div class="radio-group" @click="selectItem('bed',index)">
                    <span class="icon iconfont iconxuanze"></span>
                    <span class="icon iconfont iconxuanze-yixuan"></span>
                  </div>
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
    <div class="selected-send bdrs" v-if="selectedNum>0" @click="sendSelectInfo">已选{{selectedNum}}个，发送</div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import scroller from './scroller'
export default {
  name: 'messageSelect',
  data () {
    const vm = this
    return {
      pageMenu: ['公寓','床位'],
      swiperIndex: 0,
      selectedNum: 0,
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
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          selected: false
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          selected: false
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          selected: false
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          selected: false
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          selected: false
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
          unit: '月',
          selected: false
        },
        {
          title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
          imgUrl: '../../static/images/img2.jpg',
          advantages: ['近地铁','可停车','随时停车'],
          specifications: ['94㎡/户','2室1厅','床位4个'],
          address: '龙岗-龙岗中心城-龙门客赞公寓',
          price: '2800',
          unit: '月',
          selected: false
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
    //swiper
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
    },

    //选择公寓/床位
    selectItem(group,index){
      if(group=='apartment'){
        this.apartmentHistory[index].selected = !this.apartmentHistory[index].selected
      }else{
        this.bedHistory[index].selected = !this.bedHistory[index].selected
      }
      this.selectedNum = this.getSelectedNum()
    },

    //计算已选择公寓/床位的个数
    getSelectedNum(){
      let num = 0
      let a = this.apartmentHistory
      let b = this.bedHistory
      for(var i=0;i<a.length;i++){
        if(a[i].selected)num++
      }
      for(var i=0;i<b.length;i++){
        if(b[i].selected)num++
      }
      return num
    },

    //发送已选择的信息
    sendSelectInfo(){
      let a = this.apartmentHistory
      let b = this.bedHistory
      let dataList = []
      for(var i=0;i<a.length;i++){
        if(a[i].selected)dataList.push(a[i])
      }
      for(var i=0;i<b.length;i++){
        if(b[i].selected)dataList.push(b[i])
      }
      this.$router.push({ name: 'messageDetail', params: { data: dataList }});
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
