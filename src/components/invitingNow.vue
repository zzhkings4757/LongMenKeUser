<template>
  <div class="temp">
      <scroller>
            <div class="inviting_now">
                <ul>
                    <li class="inviting_list clearfix" v-for="(item,index) in invtingList" :key="index">
                        <div class="img fl">
                            <img class="user_img" :src="item.img" alt="">
                        </div>
                        <div class="inviting_info clearfix fl">
                            <div class="inviting_user_info fl">
                                <div class="name">{{item.name}}</div>
                                <div class="data_time">{{item.dataTime}}</div>
                            </div>
                            <div class="user_integral fr">{{item.integral}}积分</div>
                        </div>
                    </li>
                </ul>
            </div>
      </scroller>
      <footer class="inviting_footer">
            <div class="inviting_btn">立即邀请</div>
      </footer>
  </div>
</template>

<script>
 import scroller from "./scroller"
    export default {
        data() {
            return {
                invtingList: [
                    {
                        img:'../../static/images/user.png',
                        name: '可惜我是水瓶座',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '成功人士',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '随风',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '可惜我是水瓶座',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '可惜我是水瓶座',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '成功人士',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '随风',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '可惜我是水瓶座',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '可惜我是水瓶座',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '成功人士',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '随风',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    },
                    {
                        img:'../../static/images/user.png',
                        name: '可惜我是水瓶座',
                        dataTime: '2019-06-10邀请成功',
                        integral: '+3'
                    }
                ]
            }
        },
        components: {
            scroller
        },
    }
</script>

<style scoped>
.inviting_now {
    width: 100%;
    padding-left: 30px;
    background-color: #fff;
}
.inviting_now .inviting_list {
    width: 100%;
    height: 145px;
}
.inviting_now .inviting_list .img {
    width: 20%;
    height: 100%;
    position: relative;
}
.inviting_now .inviting_list .user_img {
    position: absolute;
    width: 94px;
    height: 94px;
    top: 25px;
    left: 0px;
}
.inviting_now .inviting_list .inviting_info {
    width: 80%;
    height: 100%;
    border-bottom: 1px solid #F0F0F0;
}
.inviting_now .inviting_list .inviting_info .inviting_user_info {
    width: 75%;
    height: 100%;
}
.inviting_now .inviting_list .inviting_user_info .name {
    color: #444444;
    font-size: 34px;
    padding-bottom: 15px;
    padding-top: 30px;
}
.inviting_now .inviting_list .inviting_user_info .data_time {
    color: #999999;
    font-size: 26px;
}
.inviting_now .inviting_list .user_integral {
    width: 25%;
    height: 100%;
    line-height: 145px;
    color: #F15A22;
    font-size: 24px;
    text-align: right;
    padding-right: 30px;
}
.inviting_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.inviting_footer .inviting_btn{
    width: 86%;
    height: 80px;
    margin-left: 7%;
    margin-bottom: 60px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    font-size: 32px;
    color: #FFFFFF;
    text-align: center;
    line-height: 80px;
}
</style>



