<template>
    <div class="page page-top190 page-bottom page-gray">
        <div class="search-top">
            <div class="improve-box">
                <div class="box-inner">
                    <div class="text" :style="{width: infoPerfection+'%'}">
                        <p>信息完整度{{infoPerfection}}%，</p>
                        <p>已为您智能匹配{{resourcesLen}}套房源。</p>
                    </div>
                    <router-link class="to-improve" to="/improveInfor">完善信息</router-link>
                </div>
            </div>
            <screenbox></screenbox>
        </div>
        <vue-better-scroll class="wrapper"
            ref="scroll"
            :scrollbar="scrollbarObj"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            :startY="parseInt(startY)"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
          >
            <div class="onekey">
                <public-list :dataList="apartNew"></public-list>
            </div>
        </vue-better-scroll>
        <navbar :pageIndex="2"></navbar>
    </div>
</template>

<script>
import scroller from "./scroller"
import screenbox from "./screenbox"
import publicList from "./publicList"
import navbar from "./navbar"
export default {
    data() {
        return {
            infoPerfection: 50,
            resourcesLen: 124,
            apartNew: [
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                },
                {
                    title: '床位-龙门客赞公寓-地铁旁床位-龙门客赞公寓-地铁旁',
                    imgUrl: '../../static/images/img2.jpg',
                    advantages: ['近地铁', '可停车', '随时停车'],
                    specifications: ['94㎡/户', '2室1厅', '床位4个'],
                    address: '龙岗-龙岗中心城-龙门客赞公寓',
                    price: '2800',
                    unit: '月',
                    linkPath: '/listingDetails'
                }
            ],
            scrollbarObj: {
                fade: true
            },
            pullDownRefreshObj: {
                threshold: 80*dpr,
                stop: 40*dpr
            },
            pullUpLoadObj: {
                threshold: 0,
                txt: {
                more: '加载更多',
                noMore: '没有更多数据了'
                }
            },
            startY: 0,
        }
    },
    components: {
        scroller,
        screenbox,
        publicList,
        navbar
    },
    methods: {
        searchSubmit(){},
        onPullingDown(){
            console.log('公寓下拉刷新')
            setTimeout(()=>{
                this.$refs.scroll.forceUpdate(true)
            },1000)
        },
        onPullingUp(){
            console.log('公寓上拉加载')
            setTimeout(()=>{
                this.$refs.scroll.forceUpdate(false)
            },1000)
        },
    }
}
</script>

<style scoped>
.page {
     background-color: #fff;
}
.onekey {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
}
.improve-box{
    height: 110px;
    padding: 20px 30px;
}
.improve-box .box-inner{
    position: relative;
    background: #fcded3;
    border-radius: 35px;
}
.improve-box .to-improve{
    position: absolute;
    line-height: 34px;
    border-bottom: 2px solid #f15a22;
    font-size: 24px;
    color: #f15a22;
    right: 35px;
    top: 50%;
    margin-top: -18px;
}
.improve-box .text{
    height: 100%;
    background: #f2642e;
    border-radius: 35px;
    padding: 5px 35px;
}
.improve-box .text p{
    line-height: 30px;
    color: #fff;
    font-size: 20px;
}
</style>

