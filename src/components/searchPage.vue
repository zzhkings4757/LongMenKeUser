<template>
  <div class="page page-top190">
    <div class="search-top">
      <searchbox ref="mySearch" @onSearchSubmit="searchSubmit"></searchbox>
      <screenbox></screenbox>
    </div>
    <vue-better-scroll class="wrapper"
      ref="scroll"
      :scrollbar="scrollbarObj"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
      :startY="parseInt(startY)"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
      <div class="list-wrapper">
          <public-list :dataList="apartNew"></public-list>
      </div>
    </vue-better-scroll>
  </div>
</template>

<script>
import searchbox from "./searchbox"
import screenbox from "./screenbox"
import publicList from "./publicList"
import BScroll from '@better-scroll/core'
export default {
  name: "searchPage",
  data() {
    return {
      apartNew: [
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          },
          {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁', '可停车', '随时停车'],
              specifications: ['94㎡/户', '2室1厅', '床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              linkPath: '/listingDetails'
          }
      ],
      scrollbarObj: {
          fade: true
      },
      pullDownRefreshObj: {
          threshold: 80*dpr,
          stop: 40*dpr
      },
      pullUpLoadObj: {
          threshold: 0,
          txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
          }
      },
      startY: 0,
    }
  },
  mounted(){
    this.searchInit();   
  },
  methods: {
   //初始页面数据
    searchInit(){
      //获取搜索关键字
      let val = this.$route.params.searchValue
      this.$refs.mySearch.searchValue = val
    },

    searchSubmit(){
      
    },

    onPullingDown(){
        console.log('公寓下拉刷新')
        setTimeout(()=>{
            this.$refs.scroll.forceUpdate(true)
        },1000)
    },
    onPullingUp(){
        console.log('公寓上拉加载')
        setTimeout(()=>{
            this.$refs.scroll.forceUpdate(false)
        },1000)
    },
  },
  components: {
    searchbox,
    screenbox,
    publicList
  }
};
</script>
