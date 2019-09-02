<template>
    <div class="page page-top190 page-gray">
        <div class="my_redeem_data">
            <div class="redeem_data_number clearfix">
                <div class="number fl">我的积分：34</div>
                <div class="history_red fr" @click="toHistory">兑换历史</div>
            </div>
            <div class="user_address">
                <div class="address-text">
                    <span class="name">小不点</span>
                    <span class="phone_number">13399889987</span>
                    <span class="user_details_address"> 深圳市福田区福华路海鹰大厦25C</span> 
                </div>
                <span class="edit_user_info" @click="toEdit">编辑</span>
            </div>
        </div>
        <scroller>
            <div class="redeem_data">
                <div class="redeem_data_goods">
                    <ul class="clearfix">
                        <li class="goods_list fl" v-for='(item,index) in goodsList' :key='index' @click="toDetail">
                            <img class="img" :src="item.imgSrc" alt="">
                            <div class="goods_desc">{{item.goods_name}}</div>
                            <div class="need_number">{{item.goods_redeem_data}}积分</div>
                        </li>
                    </ul>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    import scroller from "./scroller"
    export default {
        data(){
            return {
                goodsList: [
                    {
                        imgSrc: '../../static/images/paper_1.jpg',
                        goods_name: '洁柔抽纸10提',
                        goods_redeem_data:　200
                    },
                    {
                        imgSrc: '../../static/images/paper_2.jpg',
                        goods_name: '洁柔抽纸10提',
                        goods_redeem_data:　200
                    },
                    {
                        imgSrc: '../../static/images/paper_2.jpg',
                        goods_name: '洁柔抽纸10提',
                        goods_redeem_data:　200
                    },
                    {
                        imgSrc: '../../static/images/paper_1.jpg',
                        goods_name: '洁柔抽纸10提',
                        goods_redeem_data:　200
                    },
                ]
            }
        },
        components: {
            scroller
        },
        methods: {
            toDetail(){
                this.$router.push('/redeemGoods')
            },
            toHistory(){
                this.$router.push('/redeemList')
            },
            toEdit(){
                this.$router.push('/addAdress')
            }
        }
    }
</script>

<style scoped>
.redeem_data {
    width: 100%;
}
/*我的积分*/
.my_redeem_data {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    position: absolute;
    height: 190px;
    top: 0;
    left: 0;
    z-index: 99;
}
.my_redeem_data .redeem_data_number {
    height: 110px;
    line-height: 110px;
    font-size: 28px;
    color: #222222;
    border-bottom: 1px solid #D9D9D9;
}
.my_redeem_data .user_address {
    width: 100%;
    padding-right: 80px;
    font-size: 24px;
    color: #666666;
    position: relative;
    line-height: 80px;
}
.my_redeem_data .user_address .address-text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.my_redeem_data .user_address .phone_number {
    padding-left: 5px;
    padding-right: 5px;
}
.edit_user_info {
    color: #F15A22;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -40px;
}
/*积分物品*/
.redeem_data_goods {
    width: 100%;
    padding: 30px;
}
.redeem_data_goods .goods_list {
    width: 48%;
    font-size: 28px;
    border-radius:10px;
    background-color: #fff;
    margin-right: 4%;
    margin-bottom: 20px;
}
.redeem_data_goods .goods_list:nth-of-type(even) {
    margin-right: 0;
}
.redeem_data_goods .goods_list .img {
    width: 100%;
    height: 300px;
    padding-top: 10px;
}
.redeem_data_goods .goods_list .goods_desc {
    width: 100%;
    color: #222222;
    padding: 24px 20px 5px;
}
.need_number {
    width: 100%;
    color: #F15A22;
    padding: 0 20px 25px;
}


</style>


