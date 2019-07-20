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
        <ul class="renewal-list">
          <li class="bdb" v-for="(item,index) in renewalList" :key="index">
            <router-link to="/renewalDetail">
              <div class="photo">
                <img :src="item.imgUrl">
              </div>
              <div class="text">
                <h4>{{item.member}}</h4>
                <p>房源<span> {{item.resources}} </span>公寓<strong> {{item.term}}</strong> 天后到期</p>
              </div>
            </router-link>
          </li>
        </ul>
      </vue-better-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'renewal',
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
      renewalList: [
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
        },
        {
          imgUrl: '../../static/images/photo.jpg',
          member: '团队成员A',
          resources: 'BM3343',
          term: '9'
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
