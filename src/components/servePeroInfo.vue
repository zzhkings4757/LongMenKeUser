<template>
  <div class="temp">
      <scroller>
            <div class="serve_pero_info">
                <!--租主信息start-->
                <div class="info_top clearfix">
                    <div class="user_info">
                        <div class="info_left fl">
                            <img src="../../static/images/user.png" alt="">
                            <div class="pero_info">
                                <div class="name">李大有</div>
                                <div>编号 3342</div>
                            </div>
                        </div>
                        <div class="info_right fr">
                                <div class="features fr">
                                    <div class="img">
                                        <img src="../../static/images/phone.png" alt="">
                                    </div>
                                    <div class="features_desc">练习TA</div>
                                </div>
                                <div class="features fr">
                                <div class="img">
                                        <img src="../../static/images/weixin.png" alt="">
                                    </div>
                                    <div class="features_desc">在线沟通</div>
                                </div>
                        </div>
                    </div>
                </div>
                <!--租主信息end-->
                <div class="rental_info">
                    <div class="order_title">
                        <ul class="clearfix">
                            <li class="fl order_list"  @click="index=0">
                                <span class="order_name" :class="{active:index===0}">公寓</span>
                            </li>
                            <li class="fl order_list"  @click="index=1">
                                <span class="order_name" :class="{active:index===1}">床位</span>
                            </li>
                            <li class="fl order_list"  @click="index=2">
                                <span class="order_name" :class="{active:index===2}">评价</span>
                            </li>
                        </ul>
                    </div>
                    <div class="order_con" v-show="index===0">
                        <publicList :dataList="bedNew"></publicList>
                    </div>
                    <div class="order_con" v-show="index===1">
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
                    <div class="order_con" v-show="index===2">
                        <div class="comment">
                            <div class="star_list">
                                <ul class="clearfix">
                                    <li class="star_state fl"><img src="../../static/images/liang_star.png" alt=""></li>
                                    <li class="star_state fl"><img src="../../static/images/liang_star.png" alt=""></li>
                                    <li class="star_state fl"><img src="../../static/images/liang_star.png" alt=""></li>
                                    <li class="star_state fl"><img src="../../static/images/liang_star.png" alt=""></li>
                                    <li class="star_state fl"><img src="../../static/images/an_star.png" alt=""></li>
                                </ul>
                                <div class="state_number">4.5分</div>
                            </div>
                            <div class="manage_evalu">
                                <ul>
                                    <li class="manage_list" v-for="(item,index) in manageList" :key="index">
                                        <div class="img">
                                            <img :src="item.imgSrc" alt="">
                                        </div>
                                        <div class="manage">
                                            <div class="tenant">{{item.tenant}}</div>
                                            <div class="pj_con">{{item.pj_con}}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
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
                    index:0,
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
                    ],
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
                        },
                        {
                            imgSrc: '../../static/images/exchange.jpg',
                            bed_name: '暖心少女床位出租，家具齐全、水电全免',
                            bed_order: '15621548993664',
                            bed_time: '2019-06-20'
                        },
                    ],
                    manageList: [
                        {
                            imgSrc: '../../static/images/user.png',
                            tenant: '租客987',
                            pj_con: '管理员很细心，遇到的都解决了'
                        },
                        {
                            imgSrc: '../../static/images/user.png',
                            tenant: '租客42',
                            pj_con: '管理员非常棒'
                        },
                        {
                            imgSrc: '../../static/images/user.png',
                            tenant: '租客17',
                            pj_con: '管理员太热心了'
                        },
                        {
                            imgSrc: '../../static/images/user.png',
                            tenant: '租客5436',
                            pj_con: '事情完美解决，点赞！'
                        }
                    ]
            }
        },
        components: {
            scroller,
            publicList
        },
        methods: {
            
        }
    }
</script>

<style scoped>
.temp {
    padding-bottom: 0;
}
.serve_pero_info {
    width: 100%;
}
/*租主信息*/
.serve_pero_info .info_top {
    width: 100%;
    height: 170px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
}
.serve_pero_info .info_top .user_info {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #F0F0F0;
}
.serve_pero_info .info_top .info_left {
    width: 60%;
    height: 100%;
}
.serve_pero_info .info_top .info_left img {
    width: 100px;
    height: 100px;
    margin-top: 40px;
}
.serve_pero_info .info_top .info_left .pero_info {
    padding-top: 55px;
    padding-left: 22px;
    color: #999999;
    font-size: 24px;
    display: inline-block;
}
.serve_pero_info .info_top .info_left .pero_info .name {
    color: #222222;
    font-size: 28px;
    padding-bottom: 15px;
}
.serve_pero_info .info_top .info_right {
    width: 40%;
    height: 100%;
    text-align: right;
}
.serve_pero_info .info_top .info_right .features {
    color: #444444;
    font-size: 24px;
    width: 116px;
    margin-top: 33px;
    text-align: center;
}
.serve_pero_info .info_top .info_right .features .img {
    width: 66px;
    height: 66px;
    margin: 0 auto;
    margin-bottom: 10px;
}
.serve_pero_info .info_top .info_right .features .img img {
    width: 100%;
    height: 100%;
}
.serve_pero_info .info_top .info_right .features .features_desc {
    color: #444444;
    font-size: 24px;
}
/*tab栏*/
.rental_info {
    width: 100%;
}
.rental_info .order_title {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
}
.order_list {
    width: 33.33%;
    height: 80px;
    line-height: 80px;
    text-align: center;
}
.order_name {
    padding: 29px 0 15px;
    color: #999999;
    font-size: 32px;
    border-bottom: 4px solid #fff;
}
.order_con {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    /*padding-top: 20px;*/
    background-color: #fff;
}
.active {
    color: #222222;
    border-bottom: 4px solid #F15A22;
    border-radius: 2px;
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
/*评价*/
.comment {
    width: 100%;
    padding-top: 20px;
}
.star_list {
    width: 100%;
    background-color: #F5F5F5;
    height: 100px;
    padding-left: 30px;
    position: relative;
}
.star_list .star_state {
    width: 40px;
    height: 40px;
    margin-right: 18px;
    margin-top: 30px;
}
.star_list .star_state img {
    width: 100%;
    height: 100%;
}
.state_number {
    position: absolute;
    right: 56px;
    top: 30px;
    font-size: 24px;
    color: #444444;
}
.manage_evalu {
    width: 100%;
    margin-top: 10px;
}
.manage_evalu .manage_list {
    width: 100%;
    height: 120px;
    position: relative;
}
.manage_evalu .manage_list .img {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 20px;
    left: 0px;
}
.manage_evalu .manage_list .img img {
    width: 100%;
    height: 100%;
}
.manage_evalu .manage_list .manage {
    width: 84%;
    height: 100%;
    margin-left: 16%;
    border-bottom: 1px solid #f0f0f0;
}
.manage_evalu .manage_list .manage .tenant {
    width: 100%;
    color:#444444;
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 10px;
}
.manage_evalu .manage_list .manage .pj_con {
    width: 100%;
    color: #999999;
    font-size: 26px;
}

</style>



