<template>
  <div class="page page-top120">
    <div class="top-search">
      <div class="search-from">
        <button class="icon iconfont iconsearch flex-center"></button>
        <input type="text" placeholder="搜索">
      </div>
    </div>
    <div class="content hidden">
      <vue-better-scroll class="wrapper"
        ref="scroll"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        :startY="parseInt(startY)"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
      >
        <ul class="customer-list">
          <li v-for="(item,index) in customerList" :key="index">
            <router-link to="/customer">
              <div class="photo">
                <img :src="item.photo">
              </div>
              <div class="text">
                <h4>{{item.username}}</h4>
                <p>{{item.describe}}</p>
              </div>
              <h5 v-if="item.state=='合同到期'">{{item.state}}</h5>
            </router-link>
          </li>
        </ul>
      </vue-better-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customer',
  data () {
    return {
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 80,
        stop: 60
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
        }
      },
      startY: 0,
      customerList: [
        {
          photo: '../../static/images/photo1.jpg',
          username: '张三',
          describe: '租床位一个、公寓两套',
          state: '合同到期'
        },
        {
          photo: '../../static/images/photo.jpg',
          username: '李四',
          describe: '租床位一个、公寓两套',
          state: '合同到期'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '王五',
          describe: '租床位一个、公寓两套',
        }
      ]
    }
  },
  methods: {
    onPullingDown(){
      console.log('下拉刷新')
      setTimeout(()=>{
        this.$refs.scroll.forceUpdate(true)
      },1000)
    },
    onPullingUp(){
      console.log('上拉加载')
      setTimeout(()=>{
        this.$refs.scroll.forceUpdate(false)
      },1000)
    }
  },
}
</script>
