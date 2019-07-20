<template>
  <div class="page page-gray">
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
        <ul class="service-list">
          <li v-for="(item,index) in serviceList" :key="index">
            <div class="item-box" @click="toDetal">
              <div class="photo">
                <img :src="item.photo">
              </div>
              <div class="text">
                <div class="infos flex-item">
                  <h4>{{item.username}}</h4>
                  <h5>{{item.timeStamp}}</h5>
                </div>
                <p>{{item.describe}}</p>
                <div class="type">#{{item.problemsType}}</div>
              </div>
            </div>
          </li>
        </ul>
      </vue-better-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service',
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
      serviceList: [
        {
          photo: '../../static/images/photo1.jpg',
          username: '房客987',
          timeStamp: '2019-06-11 16:47:13',
          describe: '房间里的电灯泡闪了，麻烦看一下。房间里的电灯泡闪了，麻烦看一下。',
          problemsType: '水电问题'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '房客987',
          timeStamp: '2019-06-11 16:47:13',
          describe: '房间里的电灯泡闪了，麻烦看一下。房间里的电灯泡闪了，麻烦看一下。',
          problemsType: '水电问题'
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '房客987',
          timeStamp: '2019-06-11 16:47:13',
          describe: '房间里的电灯泡闪了，麻烦看一下。房间里的电灯泡闪了，麻烦看一下。',
          problemsType: '水电问题'
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
    },

    toDetal(){
      this.$router.push('/serviceDetail')
    }
  },
}
</script>
