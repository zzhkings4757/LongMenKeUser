<template>
  <div class="page page-bottom page-gray">
    <div class="content hidden">
      <div class="message">
        <div class="top-info flex-item flex-js">
          <div class="photo">
            <img src="../../static/images/photo1.jpg">
          </div>
          <div class="user-info flex-center bdrs">
            <h4>李伟明</h4>
            <span class="bd">工号：3345</span>
          </div>
        </div>
        <vue-better-scroll class="wrapper bg-white bdrs"
          ref="scroll"
          :scrollbar="scrollbarObj"
          :pullDownRefresh="pullDownRefreshObj"
          :pullUpLoad="pullUpLoadObj"
          :startY="parseInt(startY)"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp"
        >
          <ul class="mess-list">
            <li v-for="(item,index) in messageList" :key="index" @click="toDetail(index)">
              <div class="photo flex-center">
                <img :src="item.photo">
              </div>
              <div class="infos">
                <h4>{{item.member}}</h4>
                <p>查看了<span class="dc">{{item.housingResources}}</span>房源</p>
              </div>
              <div class="timestamp">{{item.timeStamp}}</div>
            </li>
          </ul>
        </vue-better-scroll>
      </div>
    </div>
    <navbar :pageIndex=0></navbar>
  </div>
</template>

<script>
import navbar from './Navbar'
export default {
  name: 'message',
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
      messageList: [
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        },
        {
          path: '/messageDetail',
          member: '团队成员A',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          housingResources: 'BN4456',
          timeStamp: '3分钟前'
        }
      ]
    }
  },
  methods: {
    toDetail(index) {
      let myPath = this.messageList[index].path;
      this.$router.push(myPath);
    },
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
  
  components: {
    navbar,
  }
}
</script>
