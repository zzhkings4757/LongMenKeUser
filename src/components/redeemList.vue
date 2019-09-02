<template>
  <div class="temp">
      <scroller>
        <div class="redeem_list">
            <div class="redeem_goods">
                <ul>
                    <li class="clearfix goods_list" v-for="(item,index) in lists" :key="index" @click="toDetail">
                        <div class="goodds_left  fl">
                            <img :src="item.imgSrc" alt="">
                        </div>
                        <div class="goods_right fl">
                            <div class="redeem_goods_name">{{item.desc}}</div>
                            <div class="redeem_user_name">{{item.name}}</div>
                            <div class="redeem_goods_phone">{{item.phone}}</div>
                            <div class="redeem_user_address">
                                {{item.address}}
                            </div>
                            <div class="redeem_time">{{item.time}}兑换</div>
                        </div>
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
                lists: [
                    {
                        imgSrc: '../../static/images/paper_2.png',
                        desc: '洁柔抽纸10提',
                        name: '李晓明',
                        phone: '13399889987',
                        address: '深圳市福田区福华路海鹰大厦25C',
                        time: '2019-06-20'
                    },
                    {
                        imgSrc: '../../static/images/paper_2.png',
                        desc: '洁柔抽纸10提',
                        name: '李晓明',
                        phone: '13399889987',
                        address: '深圳市福田区福华路海鹰大厦25C',
                        time: '2019-06-20'
                    }
                ]
            }
        },
        methods: {
            toDetail(){
                this.$router.push('/redeemGoods')
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
.redeem_list {
    width: 100%;
}
.redeem_list .redeem_goods {
    width: 100%;
    padding-left: 30px;
    background-color: #fff;
}
.goods_list {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
}
.goods_list .goodds_left {
    width: 280px;
    height: 220px;
    position: absolute;
    left: 0;
    top: 30px;
}
.goods_list .goodds_left  img {
    width: 100%;
    height: 100%;
}
.goods_list .goods_right {
    width: 100%;
    height: 220px;
    padding-left: 310px;
    padding-right: 30px;
    position: relative;
}
.goods_right .redeem_goods_name {
    width: 100%;
    color: #222222;
    font-size: 32px;
    padding-bottom: 25px;
}
.goods_right .redeem_user_name,.goods_right .redeem_goods_phone,.goods_right .redeem_user_address {
    color: #444444;
    font-size: 24px;
}
.goods_right .redeem_goods_phone {
    padding-top: 4px;
    padding-bottom: 4px;
}
.goods_right .redeem_time {
    font-size: 24px;
    color: #999999;
    position: absolute;
    left: 310px;
    bottom: 0px;
}


</style>



