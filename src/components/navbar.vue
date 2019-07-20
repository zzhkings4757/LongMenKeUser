<!--底部导航-->
<template>
  <div class="navbar flex-item">
    <div class="navitem flex-center" :class="{'active':index==pageIndex}" v-for="(item,index) in navbars" :key="index" @click="jumpPage(index)">
      <span class="icon iconfont" :class="item.icon"></span>
      <p>{{item.txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "pupup",
  props: {
    pageIndex: Number
  },
  data() {
    return {
      navbars: [
        {
          txt: "首页",
          path: "/",
          icon: "iconzhuye"
        },
        {
          txt: "分类",
          path: "/classify",
          icon: "iconfenlei"
        },
        {
          txt: "一键租房",
          path: "/onekey",
          icon: "icononekey"
        },
        {
          txt: "我的",
          path: "/user",
          icon: "iconuser"
        }
      ]
    };
  },
  methods: {
    jumpPage(index) {
      let myPath;
      myPath = this.navbars[index].path;
      this.$router.push(myPath);
    }
  }
};
</script>
