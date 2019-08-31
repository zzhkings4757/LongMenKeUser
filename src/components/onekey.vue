<template>
    <div class="page page-top110 page-bottom page-gray">
        <div class="top-bar height110">
            <searchbox ref="mySearch" @onSearchSubmit="searchSubmit"></searchbox>
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
import searchbox from "./searchbox"
import publicList from "./publicList"
import navbar from "./navbar"
export default {
    data() {
        return {
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
        searchbox,
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
</style>

