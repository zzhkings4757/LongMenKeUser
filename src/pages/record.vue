<template>
  <div class="page page-bottom">
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
        <ul class="record-list">
          <li v-for="(item,index) in recordList" :key="index">
            <router-link to="/recordUser">
              <div class="photo">
                <img :src="item.photo">
              </div>
              <div class="text">
                <h4>{{item.username}}</h4>
              </div>
              <div class="infos">
                <h4>{{item.infoNum}}条看房信息</h4>
                <p>最近看房：{{item.lately}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </vue-better-scroll>
    </div>
    <div class="bottom-bar">
      <router-link class="record-add-btn flex-center" to="/recordEdit">添加带看</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'record',
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
      recordList: [
        {
           photo: '../../static/images/photo1.jpg',
           username: '张三',
           infoNum: '4',
           lately: '06-12'
        },
        {
           photo: '../../static/images/photo.jpg',
           username: '李四',
           infoNum: '4',
           lately: '06-12'
        },
        {
           photo: '../../static/images/photo1.jpg',
           username: '张三',
           infoNum: '4',
           lately: '06-12'
        },
        {
           photo: '../../static/images/photo.jpg',
           username: '李四',
           infoNum: '4',
           lately: '06-12'
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
