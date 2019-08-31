<template>
  <div class="temp">
      <scroller>
            <div class="bed_order">
                <div class="order_title">
                    <ul class="clearfix">
                        <li class="fl order_list"  @click="index=0">
                            <span class="order_name" :class="{active:index===0}">公寓</span>
                        </li>
                        <li class="fl order_list"  @click="index=1">
                            <span class="order_name" :class="{active:index===1}">床位</span>
                        </li>
                        <li class="fl order_list"  @click="index=2">
                            <span class="order_name" :class="{active:index===2}">其他</span>
                        </li>
                    </ul>
                </div>
                <div class="order_con" v-show="index===0">
                    <publicList :dataList="bedNew"></publicList>
                </div>
                <div class="order_con" v-show="index===1">
                    <div class="order_con_box">
                        <ul>
                            <li class="bed_list" v-for="(item,index) in bedList" :key="index">
                                <div class="img">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                                <div class="bed_desc">
                                    <div class="bed_name">
                                        {{item.bed_name}}
                                    </div>
                                    <div class="bed_order">订单编号：{{item.bed_order}}</div>
                                    <div class="bed_time">{{item.bed_time}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="order_con" v-show="index===2">
                    <div class="order_con_box">
                        <ul>
                            <li class="other_order_list" v-for="(item,index) in otherList" :key="index">
                                <div class="other_order_info clearfix">
                                    <div class="other_order fl">订单号: {{item.other_order}}</div>
                                    <div class="other_time fr">{{item.other_time}}</div>
                                </div>
                                <div class="other_order_title">
                                    <span class="other_question_title">{{item.other_question_title}}</span>
                                    <span class="question_state">{{item.question_state}}</span>
                                </div>
                                <div class="other_order_desc">
                                    {{item.other_order_desc}}
                                </div>
                                <div class="order_state">{{item.order_state}}</div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
      </scroller>
     
  </div>
</template>

<script>
 import scroller from "./scroller"
 import publicList from "./publicList"
    export default {
        data(){
            return {
                index: 2,
                bedList: [
                    {
                        imgSrc: '../../static/images/exchange.jpg',
                        bed_name: '暖心少女床位出租，家具齐全、水电全免',
                        bed_order: '15621548993664',
                        bed_time: '2019-06-20'
                    },
                    {
                        imgSrc: '../../static/images/exchange.jpg',
                        bed_name: '暖心少女床位出租，家具齐全、水电全免',
                        bed_order: '15621548993664',
                        bed_time: '2019-06-20'
                    }
                ],
                otherList: [
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '水电问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    },
                    {
                        other_order: '23548654846',
                        other_time: '2019-06-20  17:15:20', 
                        other_question_title: '燃气问题',   
                        question_state: '已解决', 
                        other_order_desc: '房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了',   
                        order_state: '已支付'           
                    }
                ],
                bedNew: [
                    {
                        title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                        imgUrl: '../../static/images/img2.jpg',
                        advantages: ['近地铁','可停车','随时停车'],
                        specifications: ['94㎡/户','2室1厅','床位4个'],
                        address: '龙岗-龙岗中心城-龙门客赞公寓',
                        price: '2800',
                        unit: '月',
                        linkPath: '/'
                    },
                    {
                        title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                        imgUrl: '../../static/images/img2.jpg',
                        advantages: ['近地铁','可停车','随时停车'],
                        specifications: ['94㎡/户','2室1厅','床位4个'],
                        address: '龙岗-龙岗中心城-龙门客赞公寓',
                        price: '2800',
                        unit: '月',
                        linkPath: '/'
                    },
                    {
                        title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                        imgUrl: '../../static/images/img2.jpg',
                        advantages: ['近地铁','可停车','随时停车'],
                        specifications: ['94㎡/户','2室1厅','床位4个'],
                        address: '龙岗-龙岗中心城-龙门客赞公寓',
                        price: '2800',
                        unit: '月',
                        linkPath: '/'
                    },
                    {
                        title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                        imgUrl: '../../static/images/img2.jpg',
                        advantages: ['近地铁','可停车','随时停车'],
                        specifications: ['94㎡/户','2室1厅','床位4个'],
                        address: '龙岗-龙岗中心城-龙门客赞公寓',
                        price: '2800',
                        unit: '月',
                        linkPath: '/'
                    },
                    {
                        title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                        imgUrl: '../../static/images/img2.jpg',
                        advantages: ['近地铁','可停车','随时停车'],
                        specifications: ['94㎡/户','2室1厅','床位4个'],
                        address: '龙岗-龙岗中心城-龙门客赞公寓',
                        price: '2800',
                        unit: '月',
                        linkPath: '/'
                    },
                    {
                        title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                        imgUrl: '../../static/images/img2.jpg',
                        advantages: ['近地铁','可停车','随时停车'],
                        specifications: ['94㎡/户','2室1厅','床位4个'],
                        address: '龙岗-龙岗中心城-龙门客赞公寓',
                        price: '2800',
                        unit: '月',
                        linkPath: '/'
                    }
                ],
            }
        },
        components: {
            scroller,
            publicList
        },
    }
</script>

<style scoped>
.temp {
    padding-bottom: 0px;
}
.bed_order {
    width: 100%;
}
.bed_order .order_title {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
}
.order_list {
    width: 33.33%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
}
.order_name {
    display: inline-block;
    height: 100%;
    line-height: 80px;
    color: #999999;
    font-size: 32px;
}
.active {
    color: #222222;
    border-bottom: 4px solid #F15A22;
    border-radius: 2px;
}
.order_con {
    width: 100%;
    height: 100%;
    padding: 80px 0 0 30px;
    background-color: #fff;
}
.order_con_box {
    width: 100%;
    padding-top: 10px;
}
/*床位*/
.bed_list,.other_order_list {
    width: 100%;
    height: 220px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
}
.other_order_list {
    height: 242px;
}
.bed_list .img {
    width: 280px;
    height: 180px;
    position: absolute;
    top: 20px;
    left: 0;
}
.bed_list .img  img {
    width: 100%;
    height: 100%;
}
.bed_list .bed_desc {
    width: 100%;
    height: 100%;
    padding-right: 30px;
    padding-left: 310px;
    padding-top: 20px;
    position: relative;
}
.bed_list .bed_desc .bed_name {
    font-size: 32px;
    color: #000000;
    font-weight:600;
}
.bed_list .bed_desc .bed_order,.bed_list .bed_desc .bed_time {
    position: absolute;
    color: #999;
    font-size: 24px;
}
.bed_list .bed_desc .bed_order {
    bottom: 84px;
    left: 310px;
}
.bed_list .bed_desc .bed_time {
    bottom: 43px;
    left: 310px;
}
/*其他*/
.other_order_list .other_order_info {
    width: 100%;
    color: #aaa;
    font-size: 24px;
    padding-top: 32px;
    padding-right: 30px;
}
.other_order_list .other_order_title {
    width: 100%;
    padding-top: 25px;
    font-size: 32px;
    color: #222222;
}
.other_order_list .other_order_title .question_state {
    color: #F15A22;
    font-size: 24px;
    margin-left: 22px;
}
.other_order_list .other_order_desc {
    width: 100%;
    padding-top: 25px;
    padding-right: 180px;
    font-size: 24px;
    color: #999999;
}
.other_order_list .order_state {
    position: absolute;
    font-size: 28px;
    color: #5ACA5C;
    right: 30px;
    bottom: 60px;
}


</style>



