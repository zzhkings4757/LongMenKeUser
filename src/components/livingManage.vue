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
                        <div class="dsc"> 
                            <div class="des_con">
                                暖心少女床位出租，家具齐全、水电全免
                            </div>
                            <div class="user_number">入住3人</div>
                        </div>
                    </div>
                </div>
                <!--床位信息展示end-->
                <!--租房人员信息start-->
                <div class="living_manage">
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
                </div>
                <!--租房人员信息end-->
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
            staffList:function(){
                let _this = this;
                this.$router.push({
                name: 'staffList',
                })
            },
        }
    }
</script>

<style scoped>
.temp {
     background-color: #fff;
     padding-bottom: 0;
}
.rental_details {
    width: 100%;
    padding: 40px;
}
/*床位信息展示*/
.rental_details .bed_show {
    width: 100%;
    padding-bottom: 20px;
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
    height: 100%;
}
.rental_details .bed_top .dsc .user_number {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #F15A22;
    font-size: 24px;
    font-weight: 400;
}
/*租房人员信息*/
.living_manage {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #F0F0F0;
}
.living_manage .staff_title {
    width: 100%;
    font-size: 28px;
}
.living_manage .staff_title .staff_left {
    color: #222222;
}
.living_manage .staff_title .staff_rig {
    color: #F15A22;
}
.living_manage .staff_info {
    width: 100%;
}
.living_manage .staff_info .staff_list {
    font-size:24px;
    color: #999;
    padding-bottom: 20px;
}
.living_manage .staff_info .staff_list:first-child {
    padding-top: 20px;
}
.living_manage .staff_info .staff_list:last-child {
    padding-bottom: 0;
}
.living_manage .staff_info .staff_list .staff_name {
    width: 100px;
    display: inline-block;
}

</style>


