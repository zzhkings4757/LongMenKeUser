<template>
    <div class="temp">
        <scroller>
            <div class="redeem_goods_details">
                <img class="img" src="../../static/images/paper_3.jpg" alt="">
            </div>
        </scroller>
        <footer class="redeem_goods_footer">
            <div class="goods_btn" @click="openModel">我要兑换</div>
        </footer>
        <!--遮罩层-->
        <div id="j_mask3" class="mask3" v-show="isShowModel"></div>
        <!--添加区域-->
        <div id="form-add3" class="form-add3" v-show="isShowModel">
            <div class="user_receipt">
                <h4 class="from_title">确认收货信息</h4>
                <img class="img_close" src="../../static/images/close.png" alt="" @click="closeModel">
                <div class="user_info">
                    <div class="user_name">小不点</div>
                    <div class="user_phone">13399889987</div>
                    <div class="user_address">
                        深圳市福田区福华路海鹰大厦25C
                    </div>
                </div>
                <div class="goods_detail clearfix">
                    <div class="goods_name fl">洁柔抽纸10提</div>
                    <div class="goods_number fr">
                        x&nbsp;1
                    </div>
                </div>
                <div class="goods_btn" @click="redeemSure">确定</div>
            </div>
            
        </div>
    </div>
</template>

<script>
import scroller from "./scroller"
export default {
    data(){
        return {
            isShowModel: false
        }
    },
    methods: {
        closeModel: function () {
            this.isShowModel = false
        },
        openModel: function () {
            this.isShowModel = true
        },
        redeemSure(){
            this.isShowModel = false
        }
    },
    components: {
        scroller
    },
}
</script>

<style scoped>
.temp {
    padding-bottom: 0;
}
.show{
    display: block;
}
.hide{
    display: none;
}

.redeem_goods_details {
    width: 100%;
}
.redeem_goods_details .img {
    width: 100%;
}
.redeem_goods_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.redeem_goods_footer .goods_btn {
    width: 86%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 32px;
    color: #fff;
    margin-left: 7%;
    margin-bottom: 60px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
}
/* 模态框 */
.mask3 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.6);
    z-index: 5;
}
.form-add3 {
    position: fixed;
    top: 334px;
    left: 4%;
    background: #fff;
    width: 92%;
    z-index: 5;
    overflow: auto;
    border-radius:10px;
}
.user_receipt {
    width: 100%;
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
}
.user_receipt .from_title {
    width: 100%;
    height: 92px;
    line-height: 92px;
    text-align: center;
    color: #444;
    font-size: 32px;
}
.user_receipt .img_close {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 30px;
    top: 30px;
}
.user_receipt .user_info {
    width: 100%;
    padding-top: 15px;
    color: #444444;
    font-size: 28px;
    padding-bottom: 30px;
    border-bottom: 1px solid #F0F0F0;
}
.user_receipt .user_info .user_phone {
    padding-top: 10px;
    padding-bottom: 10px;
}
.user_receipt .goods_detail {
    width: 100%;
    height: 88px;
    line-height: 88px;
    color: #444;
    font-size: 28px;
}
.user_receipt .goods_btn {
    width: 100%;
    height: 80px;
    margin-top: 10px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    font-size: 32px;
    color: #FFFFFF;
    text-align: center;
    line-height: 80px;
}



</style>


