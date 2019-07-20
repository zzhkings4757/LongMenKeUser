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
          txt: "消息",
          path: "/",
          icon: "iconxiaoxi"
        },
        {
          txt: "工具",
          path: "/home",
          icon: "icongongju"
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
