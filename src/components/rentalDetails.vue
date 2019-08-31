<template>
    <div class="temp">
        <scroller>
            <div class="rental_details">
                <!--床位信息展示start-->
                <div class="bed_show">
                    <div class="bed_top">
                        <div class="img">
                            <img src="../../static/images/exchange.jpg" alt="">
                        </div>
                        <div class="dsc"> 暖心少女床位出租，家具齐全、水电全免</div>
                    </div>
                    <div class="bed_bot">
                        <ul>
                            <li>
                                <span>床位：</span>
                                <span class="bed_info_show">2号床位</span>
                            </li>
                            <li>
                                <span>租期：</span>
                                <span class="bed_info_show">4个月</span>
                            </li>
                            <li>
                                <span>起租时间：</span>
                                <span class="bed_info_show">2019-08-01</span>
                            </li>
                            <li>
                                <span>费用合计：</span>
                                <span class="bed_info_show">4200元</span>
                            </li>
                            <li class="bed_info_details">
                                <span>明细：</span>
                                <span>1000(押金)+(800)月租金*4(租期)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--床位信息展示end-->
                <!--租房人员信息start-->
                <div class="renting_staff">
                    <div class="staff_title clearfix">
                        <div class="staff_left fl">租房人员信息</div>
                        <div class="staff_rig fr" @click="staffList">(2/3)添加租户</div>
                    </div>
                    <div class="staff_info">
                        <ul>
                            <li class="staff_list">
                                <span class="staff_name">李雷</span>
                                <span>615213********1025</span>
                            </li>
                            <li class="staff_list">
                                <span class="staff_name">韩梅梅</span>
                                <span>615213********1025</span>
                            </li>
                            <li class="staff_list">
                                <span class="staff_name">韩梅梅</span>
                                <span>615213********1025</span>
                            </li>
                        </ul>
                    </div>
                    <div class="renting_treaty clearfix">
                        <img class="fl choose_treaty" id="choose_treaty" src="../../static/images/choose_treaty.png" alt="" @click="noChoose">
                        <img class="fl no_treaty" id="no_treaty" src="../../static/images/no_treaty.png" alt="" @click="choose">
                        <div class="treaty_wz fl">
                            我已阅读并同意
                        </div>
                        <div class="rental_terms fl" @click="rentalTerms">《租房条款》</div>
                    </div>
                </div>
                <!--租房人员信息end-->
                <!--缴纳方式start-->
                <div class="pay_way">
                    <div class="pay_type">
                        <ul class="clearfix">
                            <li class="pay_list fl" v-for="(item,index) in payList" :key="index" :class="[payIndex == index?'select':'no_select']" @click="choosePayWay(index)">{{item}}</li>
                            <!---->
                            <!--<li class="pay_list no_select fr"></li>-->
                        </ul>
                    </div>
                    <div class="description">明细：1000(押金)+800(本月押金)，剩余费用按月缴清</div>
                </div>
                <!--缴纳方式end-->
            </div>
        </scroller>
        <footer class="statistics clearfix">
            <div class="sta_desc fl">
                <span>合计：</span>
                <span class="sta_price">1800</span>
            </div>
            <div class="sta_btn fl">
                <span class="tijiao">提交</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import scroller from "./scroller"
    export default {
        data(){
            return {
                payIndex: 0,
                payList: ["按月缴纳：1800元","全额缴清: 4200元"]
            }
        },
        components: {
            scroller
        },
        methods: {
            choosePayWay:function(index){
                this.payIndex = index;
            },
            choose: function () {
                document.getElementById('no_treaty').classList.remove('show');
                document.getElementById('no_treaty').classList.add('hide');
                document.getElementById('choose_treaty').classList.add('show');
            },
            noChoose: function () {
                document.getElementById('choose_treaty').classList.remove('show');
                document.getElementById('choose_treaty').classList.add('hide');
                document.getElementById('no_treaty').classList.add('show');
            },
            staffList:function(){
                let _this = this;
                this.$router.push({
                name: 'staffList',
                })
            },
            rentalTerms:function(){
                let _this = this;
                this.$router.push({
                    name: 'rentalTerms',
                })
            }
        }
    }
</script>

<style scoped>
.temp {
    background-color: #fff;
}
.show{
    display: block;
}
.hide{
    display: none;
}
.page {
     background-color: #fff;
}
.rental_details {
    width: 100%;
    padding: 40px;
}
/*床位信息展示*/
.rental_details .bed_show {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #EEEEEE;
}
.rental_details .bed_top {
    width: 100%;
    height: 180px;
    position: relative;
}
.rental_details .bed_top .img{
    width: 280px;
    height: 180px;
}
.rental_details .bed_top .img img {
    width: 100%;
    height: 100%;
}
.rental_details .bed_top .dsc {
    position: absolute;
    top: 0;
    left: 300px;
    display: inline-block;
    font-size: 40px;
    color: #000000;
    font-weight:600;
}
.rental_details .bed_bot {
    margin-top: 40px;
    color: #999999;
    font-size: 28px;
}
.rental_details .bed_bot li {
    padding-bottom: 30px;
}
.bed_info_show {
    color: #222222;
}
.bed_info_details {
    font-size: 22px;
}
/*租房人员信息*/
.renting_staff {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #F0F0F0;
}
.renting_staff .staff_title {
    width: 100%;
    font-size: 28px;
}
.renting_staff .staff_title .staff_left {
    color: #222222;
}
.renting_staff .staff_title .staff_rig {
    color: #F15A22;
}
.renting_staff .staff_info {
    width: 100%;
}
.renting_staff .staff_info .staff_list {
    font-size:24px;
    color: #999;
    padding-bottom: 14px;
}
.renting_staff .staff_info .staff_list:first-child {
    padding-top: 14px;
}
.renting_staff .staff_info .staff_list:last-child {
    padding-bottom: 0;
}
.renting_staff .staff_info .staff_list .staff_name {
    width: 100px;
    display: inline-block;
}
.renting_staff .renting_treaty {
    width: 100%;
    margin-top: 20px;
    font-size: 24px;
}
.renting_staff .renting_treaty img {
    width: 24px;
    height: 24px;
    vertical-align: sub;
}
.renting_staff .renting_treaty .no_treaty {
    display: none;
}
.renting_staff .treaty_wz{
    color: #666666;
    margin-left: 15px;
}
.renting_staff .rental_terms {
    color: #F15A22;
}
/*缴纳方式*/
.pay_way {
    width: 100%;
}
.pay_way .pay_type {
    width: 100%;
    margin-top: 40px;
}
.pay_way .pay_type {
    font-size: 24px;
}
.pay_way .pay_type .pay_list {
    width: 48%;
    height: 90px;
    text-align: center;
    line-height: 90px;
    background-size: 100% 100%;
}
.pay_way .pay_type .pay_list:first-child {
    margin-right: 4%;
}
.select {
    background: url('../../static/images/pay.png') no-repeat;
    color: #F15A22;
}
.no_select {
    background: url('../../static/images/no_pay.png') no-repeat;
    color: #333333;
}
.pay_way .description {
    margin-top: 20px;
    font-size: 22px;
    color: #999999;
}
/*底部*/
.statistics {
    width: 100%;
    height: 120px;
    border-top: 1px solid #eee;
}
.statistics .sta_desc {
    width: 65%;
    height: 100%;
    line-height: 110px;
    font-size: 28px;
    color: #222;
    padding-left: 40px;
}
.statistics .sta_desc .sta_price {
    color: #F15A22;
    font-size: 40px;
}
.statistics .sta_btn {
    width: 35%;
}
.statistics .sta_btn .tijiao {
    width: 87.6%;
    height: 70px;
    text-align: center;
    line-height: 70px;
    display: inline-block;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 32px;
    margin-top: 15px;
}
</style>


