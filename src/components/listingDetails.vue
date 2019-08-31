<template>
    <div class="page page-bottom page-gray">
        <scroller>
            <!--轮播start -->
            <swiper class="listing_banner" :options="swiperOption" ref="homeBanner">
                <swiper-slide v-for="(item,index) in homeBanner" :key="index">
                    <div class="img flex-center" :style="{'background-image': 'url('+item.imgUrl+')'}">
                        <div class="listing_location">{{item.text}}</div>
                        <div class="listing_number">{{index+1}}&nbsp;/&nbsp;{{bannerLength}}</div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination banner-pagination" slot="pagination"></div>
            </swiper>
            <!--轮播end -->
            <!--房源信息start -->
            <div class="listing_info">
                <div class="listing_top">
                    <div class="title">{{listingInfo.title}}</div>
                    <div class="price">
                        <span class="price_number">{{listingInfo.price}}</span>
                        <span class="price_unit">元/{{listingInfo.unit}}</span>
                    </div>
                    <div class="condition">
                        <ul class="clearfix">
                            <li class="fl condition_list" v-for="(item,index) in listingInfo.condition" :key="index">{{item}}</li>
                        </ul>
                    </div>
                </div>
                <div class="listing_bot">
                    <ul class="clearfix">
                        <li class="fl listing_type">
                            <span class="listing_name">房型</span>
                            <span class="listing_detail">{{listingInfo.roomType}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">面积</span>
                            <span class="listing_detail">{{listingInfo.area}}/户</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">类型</span>
                            <span class="listing_detail">{{listingInfo.type}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">楼层</span>
                            <span class="listing_detail">{{listingInfo.floor}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">装修</span>
                            <span class="listing_detail">{{listingInfo.decoration}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">朝向</span>
                            <span class="listing_detail">{{listingInfo.oriented}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">要求</span>
                            <span class="listing_detail">{{listingInfo.claim}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">发布</span>
                            <span class="listing_detail">{{listingInfo.release}}</span>
                        </li>
                        <li class="fl listing_type">
                            <span class="listing_name">小区</span>
                            <span class="listing_detail community_info">{{listingInfo.community}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!--房源信息end -->
            <!--房源特色start-->
            <div class="listing_features">
                <h4 class="listing_title">房源特色</h4>
                <div class="listing_features_info">
                    <ul class="clearfix">
                        <li class="info_list fl" v-for="(item,index) in listingIcon" :key="index" :style="{color:item.isHave == 0?'#CCCCCC':'#222222'}">
                            <span class="icon iconfont" :class="item.icon"></span>
                            <div class="features_name">{{item.txt}}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--房源特色end-->
            <!--费用详情start-->
            <div class="price_detail">
                <h4 class="price_title">费用详情</h4>
                <div class="price_con">
                    <ul class="clearfix">
                        <li class="price_list fl">
                            <div class="price_name">租金</div>
                            <div class="price_unit">(元/月)</div>
                            <div class="price_number">2400</div>
                        </li>
                        <li class="price_list fl">
                            <div class="price_name">管理费</div>
                            <div class="price_unit">(元/月)</div>
                            <div>200</div>
                        </li>
                        <li class="price_list fl">
                            <div class="price_name">押金</div>
                            <div class="price_unit">(元/月)</div>
                            <div>2400</div>
                        </li>
                        <li class="price_list fl">
                            <div class="price_name">水电费</div>
                            <div class="price_unit">(元/月)</div>
                            <div>60</div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--费用详情end-->
            <!--为您推荐start-->
            <div class="recommend">
                <h4 class="recommend_title">为您推荐</h4>
                <div class="reco_inf">
                    <public-list :dataList="apartNew"></public-list>
                </div>
            </div>
            <!--为您推荐end-->
        </scroller>
        <!--底部start-->
        <footer class="footer clearfix">
            <div class="landlord_info fl">
                <img src="../../static/images/user.png" alt="">
                <span class="landlord_name">李大有</span>
            </div>
            <div class="make_appoin fl"><span class="make_btn">预约看房</span></div>
            <div class="renting_house fl" @click="openModel"><span class="tenting_btn">租房</span></div>
        </footer>
        <!--底部end-->
        <!--遮罩层-->
        <div id="j_mask" class="mask"></div>
        <!--添加区域-->
        <div id="form-add" class="form-add">
            <div class="model">
                <img class="close_img" src="../../static/images/close.png" alt="" @click="closeModel">
                <!--床位选择start-->
                <div class="bed">
                    <h4 class="bed_title">床位选择</h4>
                    <div class="bed_no">
                        <ul class="clearfix">
                            <li class="fl bed_list" v-for="(item,index) in bedList" :key="index" :style="{color:item.is_out == 0?'#CCCCCC':'#333333'}" :class="{'bed_choose':index==bedIndex&&item.is_out==1}" @click="bedChoose(index)">{{item.bed_no}}号</li>
                        </ul>
                    </div>
                </div>
                <!--床位选择end-->
                <!--租期选择start-->
                <div class="lease_option">
                    <h4 class="lease_title">租期选择</h4>
                    <div class="lease_option_choose">
                        <ul class="clearfix">   
                            <li class="fl lease_list" v-for="(item,index) in leaseList" :key="index" :class="{'bed_choose':index==leaseIndex}" @click="leaseChoose(index)">{{item}}</li>
                        </ul>
                    </div>
                </div>
                <!--租期选择end-->
                <!--起租时间start-->
                <div class="renting_time">
                    <h4 class="renting_title">起租时间</h4>
                    <div class="renting_choose">
                        <ul class="">
                            <li class="renting_list" v-for="(item,index) in rentingList" :class="[index == rentIndex?'choose_renting':'no_choose_renting']" :key="index" @click="rentChoose(index)">
                                <div class="rent_day">{{item.rent_day}}</div>
                                <div class="rent_day_time">{{item.rent_time}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--起租时间end-->
                <div class="footer_btn">
                    <span @click="goRentalDetails">确定</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import scroller from "./scroller"
    import publicList from "./publicList"
    export default {
        data() {
            return {
                bedIndex: 0,
                leaseIndex: 0,
                rentIndex: 0,
                // 轮播设置
                swiperOption: {
                    //自动播放
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    //循环
                    loop: true
                },
                bannerLength: 0,
                homeBanner: [
                    {
                        imgUrl: '../../static/images/home-banner1.jpg',
                        text: '阳台'
                    },
                    {
                        imgUrl: '../../static/images/home-banner1.jpg',
                        text: '卧室'
                    },
                    {
                        imgUrl: '../../static/images/home-banner1.jpg',
                        text: '客厅'
                    }
                ],
                listingInfo: {
                    title: '公寓-龙门客公寓-地铁旁精装修',
                    price: 2400,
                    unit: '月',
                    condition: ['近地铁', '可停车', '精装'],
                    roomType: '3室1厅',
                    area: 18,
                    type: '普通住宅',
                    floor: '高层（28/32）',
                    decoration: '精装',
                    oriented: '北',
                    claim: '不限',
                    release: '2019年06月13日',
                    community: '龙门客公寓'

                },
                listingIcon: [
                    {
                        txt: "床",
                        icon: "iconchuang",
                        isHave: 1
                    },
                    {
                        txt: "衣柜",
                        icon: "iconyigui",
                        isHave: 1
                    },
                    {
                        txt: "空调",
                        icon: "iconkongtiao",
                        isHave: 0
                    },
                    {
                        txt: "热水",
                        icon: "iconreshui",
                        isHave: 1
                    },
                    {
                        txt: "洗衣机",
                        icon: "iconxiyiji",
                        isHave: 1
                    },
                    {
                        txt: "桌椅",
                        icon: "iconzhuozi",
                        isHave: 0
                    },
                    {
                        txt: "公共厨房",
                        icon: "iconchufang1",
                        isHave: 1
                    },
                    {
                        txt: "独立厨房",
                        icon: "iconchufang",
                        isHave: 0
                    },
                    {
                        txt: "快递站",
                        icon: "iconkuaidi",
                        isHave: 1
                    },
                    {
                        txt: "餐饮",
                        icon: "iconcanju",
                        isHave: 0
                    },
                    {
                        txt: "便利店",
                        icon: "iconbianlidian",
                        isHave: 1
                    },
                    {
                        txt: "地铁",
                        icon: "iconditie",
                        isHave: 1
                    },
                    {
                        txt: "wifi",
                        icon: "iconwifi",
                        isHave: 1
                    }
                ],
                apartNew: [
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
                bedList: [
                    {
                        bed_no: 1,
                        is_out: 0
                    },
                    {
                        bed_no: 2,
                        is_out: 1
                    },
                    {
                        bed_no: 3,
                        is_out: 1
                    },
                    {
                        bed_no: 4,
                        is_out: 0
                    },
                    {
                        bed_no: 5,
                        is_out: 1
                    },
                    {
                        bed_no: 6,
                        is_out: 1
                    },
                    {
                        bed_no: 7,
                        is_out: 0
                    },
                    {
                        bed_no: 9,
                        is_out: 1
                    },
                    {
                        bed_no: 10,
                        is_out: 0
                    },
                    {
                        bed_no: 11,
                        is_out: 1
                    },
                    {
                        bed_no: 12,
                        is_out: 1
                    },
                    {
                        bed_no: 13,
                        is_out: 0
                    }
                ],
                leaseList: ['3个月','6个月','12个月'],
                rentingList: [
                    {
                        rent_day: '今天',
                        rent_time: '2019-08-01'
                    },
                    {
                        rent_day: '明天',
                        rent_time: '2019-08-02'
                    },
                     {
                        rent_day: '后天',
                        rent_time: '2019-08-03'
                    },
                     {
                        rent_day: '周一',
                        rent_time: '2019-08-04'
                    },
                     {
                        rent_day: '周二',
                        rent_time: '2019-08-05'
                    },
                     {
                        rent_day: '周三',
                        rent_time: '2019-08-06'
                    }
                ]
            }
        },
        components: {
            swiper,
            swiperSlide,
            scroller,
            publicList
        },
        created() {
            this.getBannerData();
        },
        methods: {
            getBannerData: function() {
                var _that = this;
                _that.bannerLength = _that.homeBanner.length;
            },
            closeModel: function () {
                document.getElementById('j_mask').classList.remove('show');
                document.getElementById('form-add').classList.remove('show');
                document.getElementById('j_mask').classList.add('hide');
                document.getElementById('form-add').classList.add('hide');
                // document.getElementById('j_mask').style.transition='height 50000ms';
                // document.getElementById('form-add').style.transition='height 50000ms';
            },
            openModel: function () {
                document.getElementById('j_mask').classList.remove('hide');
                document.getElementById('form-add').classList.remove('hide');
                document.getElementById('j_mask').classList.add('show');
                document.getElementById('form-add').classList.add('show');
            },
            goRentalDetails:function(){
                let _this = this;
                _this.closeModel();
                this.$router.push({
                name: 'rentalDetails',
                    // query: {
                    //     searchName: _this.searchText
                    // }
                })
            },
            bedChoose:function(index){
                this.bedIndex = index;
                if(this.bedList[index].is_out == 0){
                    alert("很抱歉，不能选择");
                    return;
                }
            },
            leaseChoose:function(index){
                this.leaseIndex = index;
            },
            rentChoose:function(index){
                this.rentIndex = index;
            }
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

    .page {
        background-color: #fff;
    }
    /* banner */
    .listing_banner {
        width: 100%;
        height: 400px;
    }
    .listing_banner .img {
        height: 100%;
        background-size: 100% 100%;
        position: relative;
    }
    .listing_banner .img .listing_location,
    .listing_banner .img .listing_number {
        width: 100px;
        height: 40px;
        line-height: 40px;
        background: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        opacity: 0.6;
        border-radius: 20px;
        font-size: 28px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        position: absolute;
        bottom: 20px;
    }
    .listing_banner .img .listing_location {
        left: 4%;
    }
    .listing_banner .img .listing_number {
        right: 4%;
    }
    /* 房源信息 */
    .listing_info {
        width: 100%;
        padding: 18px 20px;
    }
    .listing_top {
        width: 100%;
        padding-bottom: 40px;
        border-bottom: 2px solid rgba(255, 255, 255, 1);
    }
    .listing_info .title {
        font-size: 44px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
    }
    .listing_info .price {
        color: #F15A22;
        padding: 10px 0 8px 0;
    }
    .listing_info .price .price_number {
        font-size: 40px;
        font-weight: 600;
    }
    .listing_info .price .price_unit {
        font-size: 28px;
    }
    .listing_info .condition {
        width: 100%;
    }
    .listing_info .condition .condition_list {
        padding: 8px 15px;
        color: #4870C0;
        font-size: 24px;
        background: #F0F3FA;
        border-radius: 5px;
        margin-right: 12px;
    }
    .listing_info .listing_bot {
        width: 100%;
    }
    .listing_info .listing_bot .listing_type {
        width: 50%;
        height: 70px;
        line-height: 70px;
        font-size: 28px;
    }
    .listing_info .listing_bot .listing_type .listing_name {
        color: #999999;
    }
    .listing_info .listing_bot .listing_type .listing_detail {
        padding-left: 20px;
        color: #222222;
    }
    .listing_info .listing_bot .listing_type .community_info {
        color: #F15A22;
    }
    /* 房源特色 */
    .listing_features,.price_detail,.recommend {
        width: 100%;
        padding: 18px 20px;
    }
    .listing_features .listing_title,.price_detail .price_title,.recommend .recommend_title {
        width: 100%;
        color: #333333;
        font-size: 40px;
        font-weight: 500;
    }
    .listing_features .listing_features_info {
        width: 100%;
    }
    .listing_features .info_list {
        width: 20%;
        text-align: center;
        padding-top: 25px;
    }
    .listing_features .info_list .icon {
        font-size: 56px;
    }
    .listing_features .info_list .features_name {
        font-size: 24px;
        padding-top: 6px;
    }
    /* 费用详情 */
    .price_detail .price_con {
        width: 100%;
        background-color: #F3F3F3;
        border-radius: 10px;
        margin-top: 20px;
    }
    .price_detail .price_con .price_list {
        width: 25%;
        text-align: center;
        font-size: 28px;
        color: #222;
        padding-top: 21px;
        padding-bottom: 21px;
    }
    .price_detail .price_con .price_list .price_name {
        font-weight:500;
        padding-bottom: 5px;
    }
    .price_detail .price_con .price_list .price_unit {
        font-size: 20px;
        color: #A1A1A1;
        padding-bottom: 20px;
    }
    .price_detail .price_con .price_list .price_number {
        color: #F15A22;
    }
    /* 为您推荐 */
    .recommend .reco_inf {
        width: 100%;
    }
    /* 底部 */
    .footer {
        position: fixed;
        width: 100%;
        height: 120px;
        border-top: 2px solid #EEEEEE;
        padding: 15px 15px 0 15px;
    }
    .footer .landlord_info {
        width: 32%;
        height: 100%;
    }
    .footer .landlord_info img {
        width: 70px;
        height: 70px;
        margin-left: 10px;
    }
    .footer .landlord_info .landlord_name {
        display: inline-block;
        margin-top: 18px;
        padding-left: 6px;
        color: #222222;
        font-size: 28px;
    }
    .make_appoin,.renting_house {
        width: 34%;
    }
    .make_appoin .make_btn,.renting_house .tenting_btn {
        display: inline-block;
        width: 90%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #fff;
        font-size: 32px;
        border-radius: 10px;
    }
    .make_appoin .make_btn {
        background-color: #00AE66;
    }
    .renting_house .tenting_btn {
        background-color: #F15A22;
    }
    /* 模态框 */
    .mask {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.6);
        display: none;
        /*display: block; */
        z-index: 5;
    }
    .form-add {
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        width: 100%;
        /*height: 600px;*/
        display: none;
        /*display: block; */
        z-index: 5;
        overflow: auto;
    }
    .model {
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        position: relative;
    }
    .model .close_img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 30px;
        right: 30px;
    }
    .model .bed {
        width: 100%;
        border-bottom: 1px solid #F0F0F0;
    }
    .model .bed .bed_title,.model .lease_option .lease_title,.model .renting_time .renting_title {
        width: 100%;
        padding-top: 60px;
        font-size: 28px;
        color: #333333;
    }
    .model .lease_option .lease_title,.model .renting_time .renting_title {
        padding-top: 30px;
    }
    .model .bed .bed_no,.model .lease_option .lease_option_choose,.model .renting_time .renting_choose {
        width: 100%;
        margin-top: 30px;
    }
    .model .bed .bed_no {
        font-size: 24px;
    }
    .model .lease_option .lease_option_choose {
        font-size: 28px;
        color: #333;
    }
    .model .bed .bed_no .bed_list,.model .lease_option .lease_option_choose .lease_list {
        width: 80px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: url('../../static/images/bed_bgc.png') no-repeat;
        background-size: 100% 100%;
        margin-right: 25px;
        margin-bottom: 25px;
    }
    .model .renting_time .renting_choose ul {
        width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        white-space: nowrap;
    }
    .model .renting_time .renting_choose .renting_list {
        width: 21.7%;
        height: 90px;
        display: inline-table;
        vertical-align: top;
        text-align: center;
        font-size: 20px;
        margin-right: 25px;
        margin-bottom: 25px;
    }
    .model .renting_time .renting_choose .choose_renting {
        background: url('../../static/images/choose_lease_bgc.png') no-repeat;
        background-size: 100% 100%;
        color: #F15A22;
    }
    .model .renting_time .renting_choose .no_choose_renting {
        background: url('../../static/images/lease_bgc.png') no-repeat;
        background-size: 100% 100%;
        color: #333;
    }
    .model .lease_option .lease_option_choose .lease_list {
        width: 120px;
    }
    .model .lease_option,.model .renting_time {
        width: 100%;
    }
    .model .renting_time .renting_choose .rent_day {
        width: 100%;
        padding-top: 14px;
        padding-bottom: 8px;
    }




    .footer_btn {
        width: 100%;
        margin-top: 30px;
        margin-left: 20px;
        padding-bottom: 40px;
    }
    .footer_btn span {
        display: inline-block;
        width: 94%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        color: #fff;
        font-size: 32px;
        background: url('../../static/images/bot_bgc.png') no-repeat;
        background-size: 100% 100%;
    }
    .bed_choose {
        color: #F15A22 !important;
    }
    .bed_no_choose {
        color: #333;
    }
</style>

