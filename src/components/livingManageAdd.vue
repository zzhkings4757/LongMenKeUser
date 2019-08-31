<template>
  <div class="temp">
      <scroller>
            <div class="living_manage">
                <div class="living_manage_info">
                    <ul>
                        <li v-for="(item,index) in staffList" :key="index">
                            <img class="edit" src="../../static/images/edit.png" alt="">
                            <div class="info_box clearfix">
                                <div class="left fl">
                                    <div class="name">{{item.name}}</div>
                                    <div class="id_card">{{item.card}}</div>
                                </div>
                                <div class="right fl" :style="{color:item.isOk == 0?'#999999':'#F15A22'}">{{item.state}}</div>
                            </div>
                            <div class="icon_choose icon iconfont" :class="[staffIndex == index? 'iconxuanze-yixuan':'iconxuanze']" :style="{color:staffIndex == index?'#62D277':'#7b7b7b'}" @click="chooseRedeem(index)"></div>
                        </li>
                    </ul>
                </div>
                <div class="living_tishi">
                    检测到您的同住人有变动，信息已发送至管理人员审核后生效.
                </div>
            </div>
            
      </scroller>
    <footer class="living_bot_btn">
        <div class="queren">确认</div>
    </footer>
  </div>
</template>

<script>
 import scroller from "./scroller"
    export default {
        data () {
            return {
                staffIndex: 0,
                staffList: [
                    {
                        name: '李磊',
                        card: '身份证 615***********1025',
                        state: '信息审核中信息审核中',
                        isOk: '1'
                    },
                    {
                        name: '韩梅梅',
                        card: '身份证 615***********1025',
                        state: '取消主要租户',
                        isOk: '0'
                    },
                    {
                        name: '张晓明',
                        card: '身份证 615***********1025',
                        state: '设为主要租户',
                        isOk: '1'
                    },
                ]
            }
        },
        components: {
            scroller
        },
         methods: {
             chooseRedeem:function(index){
                this.staffIndex = index;
            },
        }
    }
</script>

<style scoped>
.temp {
    padding-bottom: 0;
}
.living_manage {
    width: 100%;
}
.living_manage_info {
    width: 100%;
}
.living_manage_info li {
    width: 100%;
    padding-left: 90px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
    padding-bottom: 40px;
}
.living_manage_info img {
    width: 40px;
    height: 40px;
    position: absolute;
}
.living_manage_info .edit {
    top: 55px;
    left: 30px;
}
.living_manage_info .use_img,.living_manage_info .no_use_img {
    top: 56px;
    right: 40px;
}
.living_manage_info .use_img {
    display: none;
}
.info_box {
    width: 100%;
}
.info_box .left {
    width: 50%;
}
.living_manage_info .info_box .left .name {
    color: #222;
    font-size: 32px;
    padding-top: 40px;
    padding-bottom: 20px;
}
.living_manage_info .info_box .left .id_card {
    font-size: 24px;
    color: #999;
}
.living_manage_info .info_box .right {
    width: 50%;
    text-align: left;
    padding-top: 64px;
    padding-right: 90px;
    font-size: 24px;
    padding-left: 25px;
}
.living_manage_info .icon_choose {
    position: absolute;
    font-size: 40px;
    top: 56px;
    right: 40px;
}
.living_bot_btn {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.living_bot_btn .queren {
    width: 86%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-size: 32px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    margin-left: 7%;
    margin-bottom: 60px;
}
.living_tishi {
    width: 100%;
    font-size: 24px;
    color: #444444;
    padding: 30px;
}
</style>

