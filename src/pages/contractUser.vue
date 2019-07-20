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
        <ul class="contract-user">
          <li v-for="(item,index) in contractUser" :key="index">
            <router-link class="item-box bdrs" to="/contractDetail">
              <div class="item-top bdb">
                <div class="photo">
                  <img :src="item.photo">
                </div>
                <h4>{{item.username}}</h4>
              </div>
              <div class="address"><span class="icon iconfont icondizhi"></span>{{item.address}}</div>
              <div class="imgs">
                <div class="img" v-for="(subItem,subIndex) in item.imgs" :key="subIndex">
                  <span class="bdrs bd"><img :src="subItem.imgUrl"></span>
                  <p>{{subItem.timeStamp}}</p>
                </div>
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
  name: 'contractUser',
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
      contractUser: [
        {
          photo: '../../static/images/photo1.jpg',
          username: '张三',
          address: '床位-紫薇花园-两室一厅-地铁旁',
          imgs: [
            {
              imgUrl: '../../static/images/contract.jpg',
              timeStamp: '2019-06-20'
            },
            {
              imgUrl: '../../static/images/contract.jpg',
              timeStamp: '2019-06-20'
            },
            {
              imgUrl: '../../static/images/contract.jpg',
              timeStamp: '2019-06-20'
            }
          ]
        },
        {
          photo: '../../static/images/photo1.jpg',
          username: '张三',
          address: '床位-紫薇花园-两室一厅-地铁旁',
          imgs: [
            {
              imgUrl: '../../static/images/contract.jpg',
              timeStamp: '2019-06-20'
            },
            {
              imgUrl: '../../static/images/contract.jpg',
              timeStamp: '2019-06-20'
            },
            {
              imgUrl: '../../static/images/contract.jpg',
              timeStamp: '2019-06-20'
            }
          ]
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
