<template>
  <div class="page page-top190 page-gray">
    <div class="search-top">
      <searchbox ref="mySearch" @onSearchSubmit="searchSubmit"></searchbox>
      <div class="screen">
        <div class="screen-item" v-for="(item,index) in screenMenu" :key="index" :class="{'on':screenIndex==index}" @click="screenSelect(index)">
          <p>{{item}}</p>
          <span class="icon iconfont iconsj"></span>
        </div>
      </div>
    </div>
    <div class="screen-popup" :class="popupShowClass" v-if="popupShow">
      <div class="screen-filter"></div>
      <div class="screen-inner">
        <div class="screen-box">
          <div class="left-menu">
            <div class="menu-wrap" v-if="Index==0">
              <div class="menu-item" v-for="(item,index) in areaMenu" :key="index">{{item}}</div>
            </div>
            <div class="menu-wrap" v-if="Index==2">
              <div class="menu-item" v-for="(item,index) in typeMenu" :key="index">{{item}}</div>
            </div>
          </div>
          <div class="right-cont"></div>
        </div>
        <div class="screen-btn">
          <span>取消</span>
          <span>重置</span>
          <span class="dc">确定</span>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import scroller from "./scroller"
import searchbox from "./searchbox"
import publicList from "./publicList"
export default {
  name: "searchPage",
  data() {
    return {
      searchVal: '',
      screenIndex: null,
      screenMenu: ['区域','租金','更多','综合排序'],
      popupShow: false,
      popupShowClass: '',
      Index: 0,
      areaMenu: ['区域','地铁'],
      typeMenu: ['租床位','租公寓'],
    }
  },
  mounted(){
    this.searchInit()
  },
  methods: {
    searchInit(){
      let val = this.$route.params.searchValue
      this.$refs.mySearch.searchValue = val
    },
    searchSubmit(){
      var val = this.$refs.topSearch.searchValue
      console.log(val)
    },
    screenPopupShow(){
      this.popupShow = true
      setTimeout(()=>{
        this.popupShowClass = 'screen-popup-show'
      },10)
    },
    screenPopupClose(){
      this.popupShowClass = ''
      setTimeout(()=>{
        this.popupShow = false
      },400)
    },
    screenSelect(index){
      if(this.screenIndex==index){
        this.screenIndex = null
        this.screenPopupClose()
      }else{
        this.screenIndex = index
        this.screenPopupShow()
        
      }
    }
  },
  components: {
    scroller,
    searchbox,
    publicList
  }
};
</script>
