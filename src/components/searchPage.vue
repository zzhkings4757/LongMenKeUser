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
        <div class="screen-box"></div>
        <div class="screen-box"></div>
      </div>
    </div>
    <div style="height: 100%;position: relative;z-index: 3;background: red"></div>
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
      popupShowClass: ''
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
