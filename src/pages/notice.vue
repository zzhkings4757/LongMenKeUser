<template>
  <div class="page">
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
        <ul class="notice-list">
          <li v-for="(item,index) in noticeList" :key="index">
            <router-link :to="item.linkPath">
              <span class="icon iconfont iconxiaoxi flex-center"></span>
              <h4>{{item.title}}</h4>
              <h5>{{item.timeStamp}}</h5>
            </router-link>
          </li>
        </ul>
      </vue-better-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
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
      noticeList: [
        {
          linkPath: '/detail',
          title: '系统信息更新通知',
          timeStamp: '2019-06-10'
        },
        {
          linkPath: '/detail',
          title: '系统信息更新通知',
          timeStamp: '2019-06-10'
        },
        {
          linkPath: '/detail',
          title: '系统信息更新通知',
          timeStamp: '2019-06-10'
        },
        {
          linkPath: '/detail',
          title: '系统信息更新通知系统信息更新通知系统信息更新通知',
          timeStamp: '2019-06-10'
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
