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
    <div class="screen-popup" :class="popupShowClass" v-show="popupShow">
      <div class="screen-filter"></div>
      <div class="screen-inner">
        <div class="screen-box">
          <div class="left-menu" v-show="Index==0">
            <div class="menu-item" v-for="(item,index) in areaMenu" :key="index" :class="{'dc': areaIndex==index}" @click="selectArea(index)">{{item}}</div>
          </div>
          <div class="left-menu" v-show="Index==2">
            <div class="menu-item" v-for="(item,index) in typeMenu" :key="index" :class="{'dc': typeIndex==index}" @click="selectType(index)">{{item}}</div>
          </div>
          <div class="right-cont">
            <div class="cont-wrapper" v-show="Index==0">
              <div class="area-cont" v-show="areaIndex==0">
                <div class="area-wrap">
                  <div class="area-top">全城</div>
                  <div ref="cityScroll" class="scroll-wrapper">
                    <ul class="city-list">
                      <li v-for="(item,index) in cityList" :key="index" :class="{'dc':cityIndex==index}" @click="selectCity(index)">{{item}}</li>
                    </ul>
                  </div>
                </div>
                <div class="area-wrap" v-show="streetList.length>0">
                  <div class="area-top">全部</div>
                  <div ref="streetScroll" class="scroll-wrapper">
                    <ul class="street-list">
                      <li v-for="(item,index) in streetList" :key="index" :class="{'dc':streetIndex==index}" @click="selectStreet(index)">{{item}}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="area-cont" v-show="areaIndex==1">
                <div class="area-wrap">
                  <div class="area-top">全城</div>
                  <div ref="metroScroll" class="scroll-wrapper">
                    <ul class="metro-list">
                      <li v-for="(item,index) in metroList" :key="index" :class="{'dc':metroIndex==index}" @click="selectMetro(index)">{{item}}</li>
                    </ul>
                  </div>
                </div>
                <div class="area-wrap" v-show="siteList.length>0">
                  <div class="area-top">全线</div>
                  <div ref="siteScroll" class="scroll-wrapper">
                    <ul class="site-list">
                      <li v-for="(item,index) in siteList" :key="index" :class="{'dc':siteIndex==index}" @click="selectSite(index)">{{item}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="cont-wrapper" v-show="Index==1">
              <div ref="rentScroll" class="scroll-wrapper">
                <ul class="rent-list">
                  <li v-for="(item,index) in rentList" :key="index" :class="{'dc':rentIndex==index}" @click="selectRent(index)">
                    {{item.text}}
                    <span class="icon iconfont iconduigou flex-center" v-if="rentIndex==index"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cont-wrapper" v-show="Index==2">
              <div ref="bedScroll" class="scroll-wrapper" v-show="typeIndex==0">
                <div class="type-cont">
                  <div class="type-sec">
                    <h5>房屋特色</h5>
                    <ul>
                      <li v-for="(item,index) in features" :key="index" :class="{'on':featuresIndex==index}" @click="selectFeatures(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>户型</h5>
                    <ul>
                      <li v-for="(item,index) in layout" :key="index" :class="{'on':layoutIndex==index}" @click="selectLayout(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>床位</h5>
                    <ul>
                      <li v-for="(item,index) in berth" :key="index" :class="{'on':berthIndex==index}" @click="selectBerth(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>性别</h5>
                    <ul>
                      <li v-for="(item,index) in gender" :key="index" :class="{'on':genderIndex==index}" @click="selectGender(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>入住时间</h5>
                    <ul>
                      <li v-for="(item,index) in intime" :key="index" :class="{'on':intimeIndex==index}" @click="selectIntime(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div ref="apartScroll" class="scroll-wrapper" v-show="typeIndex==1">
                 <div class="type-cont">
                   <div class="type-sec">
                    <h5>租房方式</h5>
                    <ul>
                      <li v-for="(item,index) in mode" :key="index" :class="{'on':modeIndex==index}" @click="selectMode(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>房屋特色</h5>
                    <ul>
                      <li v-for="(item,index) in features" :key="index" :class="{'on':featuresIndex==index}" @click="selectFeatures(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>户型</h5>
                    <ul>
                      <li v-for="(item,index) in layout" :key="index" :class="{'on':layoutIndex==index}" @click="selectLayout(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>面积</h5>
                    <ul>
                      <li v-for="(item,index) in measure" :key="index" :class="{'on':measureIndex==index}" @click="selectMeasure(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>性别</h5>
                    <ul>
                      <li v-for="(item,index) in gender" :key="index" :class="{'on':genderIndex==index}" @click="selectGender(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>入住时间</h5>
                    <ul>
                      <li v-for="(item,index) in intime" :key="index" :class="{'on':intimeIndex==index}" @click="selectIntime(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>楼层</h5>
                    <ul>
                      <li v-for="(item,index) in floor" :key="index" :class="{'on':floorIndex==index}" @click="selectFloor(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                  <div class="type-sec">
                    <h5>装修</h5>
                    <ul>
                      <li v-for="(item,index) in decorate" :key="index" :class="{'on':decorateIndex==index}" @click="selectDecorate(index)"><span>{{item}}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="cont-wrapper" v-show="Index==3">
              
            </div>
          </div>
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
import areaData from "../assets/json/area.json"
import scroller from "./scroller"
import searchbox from "./searchbox"
import publicList from "./publicList"
import BScroll from '@better-scroll/core'
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
      areaIndex: 0,
      cityData: {},
      cityList: [],
      cityIndex: null,
      streetList: [],
      streetIndex: null,
      metroList: ['11号线'],
      metroIndex: null,
      siteList: ['碧头','碧头','后亭','沙井','马安山','塘尾','桥头','福永'],
      siteIndex: null,
      rentList:[
        {value: 0, text: '不限'},
        {value: 1, text: '< 500元'},
        {value: 2, text: '500-1500元'},
        {value: 3, text: '1500-2000元'},
        {value: 4, text: '2000-3000元'},
        {value: 5, text: '3000-5000元'},
        {value: 6, text: '5000-8000元'},
        {value: 7, text: '>8000元'}
      ],
      rentIndex: null,
      typeMenu: ['租床位','租公寓'],
      typeIndex: 0,
      features: ['独立阳台','随时看房','靠近地铁','精装修','拎包入住','独立卫浴'],
      featuresIndex: null,
      layout: ['不限','一居室','一居室','三居室','四居室以上'],
      layoutIndex: null,
      berth: ['不限','两床房','四床房','六床房','八床房',],
      berthIndex: null,
      gender: ['不限','仅男士','仅女士'],
      genderIndex: null,
      intime: ['今日入住','三日内入住','一周内入住'],
      intimeIndex: null,
      mode: ['整租','合租'],
      modeIndex: null,
      measure: ['<40m²','40-60m²','60-80m²','80-120m²','>120m²'],
      measureIndex: null,
      floor: ['不限','底层','中层','高层'],
      floorIndex: null,
      decorate: ['不限','普通','精装'],
      decorateIndex: null,
    }
  },
  mounted(){
    this.searchInit()    
  },
  methods: {

    //初始页面数据
    searchInit(){
      //获取搜索关键字
      let val = this.$route.params.searchValue
      this.$refs.mySearch.searchValue = val

      //根据省市设置县区数据
      let cityInfo = ['广东省','深圳市']
      let proviceData = areaData[cityInfo[0]]
      let cityArr = proviceData[cityInfo[1]]
      this.cityData = cityArr

      //初始区数据
      let cityListArr = []
      for(var i in cityArr){
        cityListArr.push(i)
      }
      this.cityList = cityListArr
    },

    //刷新滚动容器尺寸
    setScoll(str){
      var that = this
      setTimeout(()=>{
        if(that[str]){
          that[str].refresh()
        }else{
          that[str] = new BScroll(that.$refs[str], {
            click: true,
            probeType: 0,
            scrollY: true,
          })
        }
      },400)
    },

    //打开筛选框
    screenPopupShow(){
      this.popupShow = true
      setTimeout(()=>{
        this.popupShowClass = 'screen-popup-show'
      },10)
    },

    //关闭筛选框
    screenPopupClose(){
      this.popupShowClass = ''
      setTimeout(()=>{
        this.popupShow = false
      },400)
    },

    //筛选切换
    screenSelect(index){
      if(this.screenIndex==index){
        this.screenIndex = null
        this.screenPopupClose()
      }else{
        this.screenIndex = index
        this.screenPopupShow()
        this.Index = index
        switch(index){
          case 0:
            this.setScoll(this.areaIndex==0?'cityScroll':'metroScroll')
            break
          case 1:
            this.setScoll('rentScroll')
            break
          case 2:
            this.setScoll(this.typeIndex==0?'bedScroll':'apartScroll')
            break
          case 3:
            break
        }
      }
    },

    //切换区域/地铁
    selectArea(index){
      this.areaIndex = index
      this.setScoll(this.areaIndex==0?'cityScroll':'metroScroll')
    },

    //选择区
    selectCity(index){
      let streetListArr = this.cityData[this.cityList[index]]
      this.cityIndex = index
      this.streetList = streetListArr
      this.streetIndex = null
      this.setScoll('streetScroll')
    },

    //选择街道
    selectStreet(index){
      this.streetIndex = index
    },

    //选择地铁线路
    selectMetro(index){
      this.metroIndex = index
    },

    //选择地铁站点
    selectSite(index){
      this.siteIndex = index
    },

    //选择租金范围
    selectRent(index){
      this.rentIndex = index
    },

    //选择租床位/公寓
    selectType(index){
      this.typeIndex = index
      this.setScoll(this.typeIndex==0?'bedScroll':'apartScroll')
    },

    //选择房屋特色
    selectFeatures(index){
      this.featuresIndex = index
    },

    //选择户型
    selectLayout(index){
      this.layoutIndex = index
    },

    //选择床位
    selectBerth(index){
      this.berthIndex = index
    },

    //选择性别
    selectGender(index){
      this.genderIndex = index
    },

    //选择入住时间
    selectIntime(index){
      this.intimeIndex = index
    },

    //选择租房方式
    selectMode(index){
      this.modeIndex = index
    },

    //选择面积
    selectMeasure(index){
      this.measureIndex = index
    },

    //选择楼层
    selectFloor(index){
      this.floorIndex = index
    },

    //选择楼层
    selectDecorate(index){
      this.decorateIndex = index
    },

    searchSubmit(){
      var val = this.$refs.topSearch.searchValue
      console.log(val)
    },
    
  },
  components: {
    scroller,
    searchbox,
    publicList
  }
};
</script>
