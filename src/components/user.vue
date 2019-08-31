<template>
    <div class="page page-bottom page-gray">
        <scroller>
             <!--头部 strat-->
            <header class="header">
                <img src="../../static/images/user.png" class="user_img" alt="">
                <div class="user_name">李大有</div>
            </header>
            <!--头部 end-->
            <!--服务类型 start-->
            <div class="service_type">
                <ul class="clearfix">
                    <li class="list fl">
                        <div class="img">
                            <img src="../../static/images/house.png" alt="" class="service_img">
                        </div>
                        <div class="service_name">我的房子</div>
                    </li>
                    <li class="list fl">
                        <div class="img">
                            <img src="../../static/images/order.png" alt="" class="service_img">
                        </div>
                        <div class="service_name">我的订单</div>
                    </li>
                    <li class="list fl">
                        <div class="img">
                            <img src="../../static/images/manage.png" alt="" class="service_img">
                        </div>
                        <div class="service_name">同住人管理</div>
                    </li>
                    <li class="list fl">
                        <div class="img">
                            <img src="../../static/images/integral.png" alt="" class="service_img">
                        </div>
                        <div class="service_name">积分兑换</div>
                    </li>
                </ul>
            </div>
            <!--服务类型 end-->
            <!--个人中心start-->
            <div class="user_center">
                <ul>
                    <li class="user_list clearfix">
                        <span class="user_left fl">我的邀请</span>
                        <img src="../../static/images/xiayibu.png" alt="" class="fr">
                    </li>
                    <li class="user_list clearfix">
                        <span class="user_left fl">问题反馈</span>
                        <img src="../../static/images/xiayibu.png" alt="" class="fr">
                    </li>
                    <li class="user_list clearfix">
                        <span class="user_left fl">客服电话</span>
                        <span class="fr phone_number">0931-22313411</span>
                    </li>
                    <li class="user_list clearfix">
                        <span class="user_left fl">关于我们</span>
                        <img src="../../static/images/xiayibu.png" alt="" class="fr">
                    </li>
                </ul>
            </div>
            <!--个人中心end-->
        </scroller>
       
        <navbar :pageIndex="3"></navbar>
    </div>
</template>

<script>
import navbar from "./navbar"
import scroller from "./scroller"
export default {
    components: {
        navbar,
        scroller
    }
}
</script>

<style scoped>
.page {
    background-color: #fff;
}
/*头部*/
.header {
    width: 100%;
    height: 170px;
    background: url('../../static/images/header.png') no-repeat;
    background-size: 100% 100%;
}
.header .user_img {
    width: 100px;
    height: 100px;
    margin-top: 40px;
    margin-left: 28px;
    border: 1px solid #fff;
    border-radius: 50%;
}
.header .user_name {
    display: inline-block;
    margin-left: 10px;
    margin-top: 74px;
    font-size: 32px;
    color:rgba(255,255,255,1);
}
/*服务*/
.service_type {
    width: 100%;
}
.service_type ul {
    width: 92%;
    height: 165px;
    margin: 0 auto;
    margin-top: 40px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.service_type .list {
    width: 25%;
    text-align: center;
    padding-top: 33px;
    padding-bottom: 40px;
}
.service_type .list .img {
    width: 62px;
    height: 62px;
    margin: 0 auto;
}
.service_type .list .img img {
    width: 100%;
    height: 100%;
}
.service_type .list .service_name {
    font-size: 24px;
    color: #444;
    margin-top: 6px;
}
/*个人中心*/
.user_center {
    width: 100%;
    margin-top: 40px;
}
.user_center .user_list {
    width: 96%;
    height: 100px;
    margin-left: 4%;
    position: relative;
    border-bottom: 1px solid #f0f0f0;
}
.user_center .user_list .user_left {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 100px;
    font-size: 32px;
    font-weight:400;
    color:rgba(34,34,34,1);
}
.user_center .user_list  img {
    width: 18px;
    height: 30px;
    position: absolute;
    top: 35px;
    right: 30px;
}
.phone_number {
    position: absolute;
    top: 35px;
    right: 30px;
    font-size:28px;
    font-weight:400;
    color:rgba(153,153,153,1);
}
</style>
