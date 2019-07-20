<template>
  <div class="page page-bottom page-gray">
    <div class="content hidden">
      <div class="home-menu">
        <div class="menu-item" v-for="(item,index) in homeMenu" :key="index" @click="jumpPage(index)">
          <span class="icon iconfont" :class="item.iconName" :style="{color: item.iconColor}"></span>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <navbar :pageIndex=1></navbar>
  </div>
</template>

<script>
import navbar from './Navbar'
export default {
  name: 'home',
  data () {
    return {
      homeMenu: [
        {
          iconName: 'iconzufang',
          iconColor: '#f2093d',
          text: '续租',
          path: '/renewal'
        },
        {
          iconName: 'iconhetongguizeguankong',
          iconColor: '#61d8ab',
          text: '合同',
          path: '/contract'
        },
        {
          iconName: 'iconziyuanku',
          iconColor: '#61b1fc',
          text: '我的房源',
          path: '/resources'
        },
        {
          iconName: 'iconkehuziliao',
          iconColor: '#fd8f5c',
          text: '我的客户',
          path: '/customer'
        },
        {
          iconName: 'iconxiaoxi1',
          iconColor: '#4dcbfa',
          text: '服务消息',
          path: '/service'
        },
        {
          iconName: 'icontongzhi',
          iconColor: '#fc4b4c',
          text: '部门通知',
          path: '/notice'
        },
        {
          iconName: 'iconjiangbei',
          iconColor: '#fc4f8e',
          text: '评价管理',
          path: '/evaluate'
        },
        {
          iconName: 'iconjilu',
          iconColor: '#9570c9',
          text: '沟通记录',
          path: '/home'
        },
        {
          iconName: 'iconzuji',
          iconColor: '#5f92ec',
          text: '带看记录',
          path: '/record'
        },
        {
          iconName: 'iconxiugaimima',
          iconColor: '#fc982d',
          text: '修改同住人',
          path: '/home'
        }
      ]
    }
  },
  methods: {
    jumpPage(index) {
      let myPath;
      myPath = this.homeMenu[index].path;
      this.$router.push(myPath);
    }
  },
  components: { navbar }
}
</script>
