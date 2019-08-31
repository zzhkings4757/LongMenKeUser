<!--底部导航-->
<template>
  <div class="navbar flex-item">
    <div class="navitem flex-center" :class="{'active':index==pageIndex}" v-for="(item,index) in navbars" :key="index" @click="jumpPage(index)">
      <span class="icon iconfont" :class="item.icon"></span>
      <p>{{item.txt}}</p>
      <div class="subnav" v-if="item.subnav" v-show="showSubNav==index">
        <div class="subitem" v-for="(subItem,subIndex) in item.subnav" :key="subIndex" @click="jumpWithParams(index,subIndex)">{{subItem.subtxt}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    pageIndex: Number,
  },
  data() {
    return {
      showSubNav: null,
      navbars: [
        {
          txt: "首页",
          path: "/",
          name: 'home',
          icon: "iconzhuye"
        },
        {
          txt: "分类",
          path: "/classify",
          icon: "iconfenlei",
          name: 'classify',
          subnav: [
            {subtxt: '租公寓', params: { typeId: 'apartment'} },
            {subtxt: '租床位', params: { typeId: 'bed'} }
          ]
        },
        {
          txt: "一键租房",
          path: "/onekey",
          name: 'onekey',
          icon: "icononekey"
        },
        {
          txt: "我的",
          path: "/user",
          name: 'user',
          icon: "iconuser"
        }
      ]
    };
  },
  methods: {
    jumpPage(index) {
      let myPath = this.navbars[index].path;
      if(this.navbars[index].subnav&&this.navbars[index].subnav.length>0){
        this.showSubNav = index
      }else{
        this.showSubNav = null
        this.$router.push(myPath);
      } 
    },

    jumpWithParams(i1,i2){
      let myName = this.navbars[i1].name
      if(myName==this.$route.name){
        this.$emit('activePageJump')
      }else{
        this.$router.push({
          name: this.navbars[i1].name,
          params: this.navbars[i1].subnav[i2].params
        });
      }
    }
  }
};
</script>
