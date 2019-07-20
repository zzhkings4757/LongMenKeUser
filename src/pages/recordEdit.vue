<template>
  <div class="page page-gray">
    <div class="record-edit">
      <scroller class="section">
        <ul class="link-list">
          <li v-for="(item,index) in links" :key="index">
            <a @click="linkEvent(index)">
              <p>{{item.text}}</p>
              <span class="icon iconfont iconRight"></span>
            </a>
          </li>
        </ul>
      </scroller>
    </div>
    <div class="remarks-popup" v-if="showLabersPopup" :class="{'popup-show':isAddClass}">
      <div class="remarks-wrap">
        <div class="remarks-box">
          <div class="remarks-inner">
            <div class="tit">看房标签</div>
            <ul>
              <li v-for="(item,index) in labels" :key="index" :class="{'on':item.selected}" @click="selectItem(index)"><span>{{item.text}}</span></li>
            </ul>
          </div>
          <div class="sure-btn" @click="labersSure">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scroller from "./scroller";
export default {
  name: "recordEdit",
  data() {
    return {
      links: [
        {text: '选择用户', eventName: 'selectUser'},
        {text: '选择房源', eventName: 'selectHouse'},
        {text: '标签备注', eventName: 'editRemarks'}
      ],
      showLabersPopup: false,
      isAddClass: false,
      labels: [
        {text: '有意向', selected: false},
        {text: '有点贵', selected: false},
        {text: '较满意', selected: false},
        {text: '位置偏', selected: false},
        {text: '朝向不好', selected: false},
        {text: '没有超市', selected: false},
        {text: '较满意', selected: false},
        {text: '位置偏', selected: false},
        {text: '朝向不好', selected: false},
        {text: '较满意', selected: false},
        {text: '位置偏', selected: false},
      ]
    };
  },
  methods: {
    linkEvent(i){
      switch(i){
        case 0:
          console.log('选择用户')
          break
        case 1:
          console.log('选择房源')
          break
        case 2:
          this.showLabersPopup = true
          setTimeout(()=>{
            this.isAddClass = true
          },100)
          break
      }
    },
    selectItem(i){
      this.labels[i].selected = !this.labels[i].selected
    },
    labersSure(){
      this.isAddClass = false
      setTimeout(()=>{
        this.showLabersPopup = false
      },300)
    }
  },
  components: { scroller }
};
</script>
