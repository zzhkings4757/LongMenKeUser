<template>
  <div class="page page-gray page-bottom">
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
        <div class="record-user">
          <div class="record-box flex-item">
            <div class="photo">
              <img src="../../static/images/photo1.jpg">
            </div>
            <div class="text">
              <h4>龙门客租房合同</h4>
            </div>
            <div class="btns">
              <router-link to="/notice" class="icon iconfont icontongzhi flex-center"><span class="flex-center">4</span></router-link>
            </div>
          </div> 
          <ul class="record-user-list">
            <li v-for="(item,index) in recordUserList" :key="index">
              <div class="timestamp">{{item.timeStamp}}</div>
              <div class="public-list">
                <div class="infos" v-for="(secItem,secIndex) in item.recordHouse" :key="secIndex">
                  <div class="item-box flex-item">
                    <div class="img bdrs"><img :src="secItem.imgUrl"></div>
                    <div class="text">
                      <h4>{{secItem.title}}</h4>
                      <div class="adv">
                        <span v-for="(subItem,subIndex) in secItem.advantages" :key="subIndex">{{subItem}}</span>
                      </div>
                      <div class="spec">
                        <span v-for="(subItem,subIndex) in secItem.specifications" :key="subIndex">{{subItem}}</span>
                      </div>
                      <div class="address">
                        <span class="icon iconfont icondizhi1"></span>
                        <p>{{secItem.address}}</p>
                      </div>
                      <div class="price"><span>{{secItem.price}}</span>元/{{secItem.unit}}</div>
                    </div>
                  </div>
                  <div class="btn-bar flex-item">
                    <div class="remarks">
                      <span :style="{color: subItem.color}" v-for="(subItem,subIndex) in secItem.remarks" :key="subIndex">#{{subItem.text}}</span>
                    </div>
                    <div class="edit-btn flex-center">编辑</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </vue-better-scroll>
    </div>
    <div class="bottom-bar">
      <router-link class="record-add-btn flex-center" to="/recordEdit">添加带看</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'record',
  data () {
    return {
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 80,
        stop: 60
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
        }
      },
      startY: 0,
      recordUserList: [
        {
          timeStamp: '2019-06-20',
          recordHouse: [
            {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁','可停车','随时停车'],
              specifications: ['94㎡/户','2室1厅','床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              remarks: [
                {text: '有意向', color: '#f15a22'},
                {text: '有点贵', color: '#0c2b68'}
              ]
            },
            {
              title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
              imgUrl: '../../static/images/img2.jpg',
              advantages: ['近地铁','可停车','随时停车'],
              specifications: ['94㎡/户','2室1厅','床位4个'],
              address: '龙岗-龙岗中心城-龙门客赞公寓',
              price: '2800',
              unit: '月',
              remarks: [
                {text: '有意向', color: '#f15a22'},
                {text: '有点贵', color: '#0c2b68'}
              ]
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
