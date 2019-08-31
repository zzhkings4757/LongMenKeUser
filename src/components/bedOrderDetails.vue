<template>
    <div class="temp">
        <scroller>
            <div class="bed_order_details">
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
                            <li>
                                <span>订单编号：</span>
                                <span class="bed_info_show">15621548993664</span>
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
                    <div class="staff_title">
                        租房人员信息
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
                </div>
                <!--租房人员信息end-->
                <!--关于合同start-->
                <div class="about_contract">
                    <ul>
                        <li class="contract_list">
                            查看租房合同
                            <img class="img_next" src="../../static/images/xiayibu.png" alt="">
                        </li>
                        <li class="contract_list">
                            申请终止租房合同
                            <img class="img_next" src="../../static/images/xiayibu.png" alt="">
                        </li>
                    </ul>
                </div>
                <!--关于合同end-->
            </div>
        </scroller>
    </div>
</template>

<script>
    import scroller from "./scroller"
    export default {
        components: {
            scroller
        },
        methods: {
            
        }
    }
</script>

<style scoped>
.show{
    display: block;
}
.hide{
    display: none;
}
.temp {
    padding-bottom: 0;
}
.bed_order_details {
    width: 100%;
}
/*床位信息展示*/
.bed_order_details .bed_show {
    width: 100%;
    padding: 40px 40px 10px;
    background-color: #fff;
}
.bed_order_details .bed_top {
    width: 100%;
    height: 180px;
    position: relative;
}
.bed_order_details .bed_top .img{
    width: 280px;
    height: 180px;
}
.bed_order_details .bed_top .img img {
    width: 100%;
    height: 100%;
}
.bed_order_details .bed_top .dsc {
    position: absolute;
    top: 0;
    left: 300px;
    display: inline-block;
    font-size: 40px;
    color: #000000;
    font-weight:600;
}
.bed_order_details .bed_bot {
    margin-top: 40px;
    color: #999999;
    font-size: 28px; 
    border-bottom: 1px solid #EEEEEE;
}
.bed_order_details .bed_bot li {
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
    padding: 40px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
}
.renting_staff .staff_title {
    width: 100%;
    /*padding-top: 20px;*/
    font-size: 28px;
    color: #222222;
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
/*关于合同*/
.about_contract {
    width: 100%;
    margin-top: 10px;
    padding-left: 30px;
    background-color: #fff;
}
.about_contract .contract_list {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 28px;
    color: #222222;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
}
.about_contract .contract_list .img_next {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 17px;
    height: 30px;
}

</style>


