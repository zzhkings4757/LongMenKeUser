<template>
  <div class="temp">
      <scroller>
            <div class="staff_list">
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
      </scroller>
    <footer class="staff_bot_btn">
        <div class="queren">确认</div>
        <div class="add_user" @click="addStaff">添加租户</div>
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
                        state: '信息审核中',
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
            addStaff:function(){
                let _this = this;
                this.$router.push({
                name: 'addStaff',
                    // query: {
                    //     searchName: _this.searchText
                    // }
                })
            }
        }
    }
</script>

<style scoped>
.temp {
    padding-bottom: 220px;
}
.staff_list {
    width: 100%;
}
.staff_list li {
    width: 100%;
    padding-left: 90px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
    padding-bottom: 40px;
}
.staff_list img {
    width: 40px;
    height: 40px;
    position: absolute;
}
.staff_list .edit {
    top: 55px;
    left: 30px;
}
.staff_list .use_img,.staff_list .no_use_img {
    top: 56px;
    right: 40px;
}
.staff_list .use_img {
    display: none;
}
.info_box {
    width: 100%;
}
.info_box .left {
    width: 50%;
}
.staff_list .info_box .left .name {
    color: #222;
    font-size: 32px;
    padding-top: 40px;
    padding-bottom: 20px;
}
.staff_list .info_box .left .id_card {
    font-size: 24px;
    color: #999;
}
.staff_list .info_box .right {
    width: 50%;
    text-align: left;
    padding-top: 64px;
    font-size: 24px;
    padding-left: 25px;
    padding-right: 90px;
}
.staff_list .icon_choose {
    position: absolute;
    font-size: 40px;
    top: 56px;
    right: 40px;
}
.staff_bot_btn {
    width: 100%;
    height: 210px;
    position: fixed;
    left: 0;
    bottom: 0;
}
.staff_bot_btn .queren {
    width: 86%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-size: 32px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    margin-left: 7%;
}
.staff_bot_btn .add_user {
    width: 100%;
    text-align: center;
    padding-top: 40px;
    font-size: 32px;
    color: #F15A22;
}
</style>

