<template>
  <div class="temp">
      <scroller>
            <div class="confirm_settle">
                <div class="confirm_order_info">
                    <div class="confirm_order">
                        <div class="question_title clearfix">
                            <div class="title fl">水电问题</div>
                            <div class="data_time fr">2019-06-20</div>
                        </div>
                        <div class="question_desc">
                            房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了,房间里的电灯泡闪了
                        </div>
                        <div class="order_state clearfix">
                            <div class="first_state fl">
                                <div class="img">
                                    <img src="../../static/images/state_choose.png" alt="">
                                </div>
                                <div class="state_desc">提交成功</div>
                            </div>
                            <div class="second_state fl">
                                <div class="img">
                                    <img src="../../static/images/state_choose.png" alt="">
                                </div>
                                <div class="state_desc">解决中</div>
                            </div>
                            <div class="third-state fl">
                                <div class="img">
                                    <img src="../../static/images/state_choose.png" alt="">
                                </div>
                                <div class="state_desc">已解决</div>
                            </div>
                            <div class="first_line line"></div>
                            <div class="second_line line"></div>
                        </div>
                    </div>
                </div>
                <div class="total_cost clearfix">
                        <div class="pay_cost fl">预估费用：30元/次</div>
                        <div class="pay_state fr">已支付</div>
                </div>
                <div class="evaluation">
                    <h4 class="cvaluation_title">服务评价</h4>
                    <textarea name="" id="" class="cvaluation_con" cols="30" rows="10" placeholder="您的好评是我最大的鼓励！"></textarea>
                </div>
            </div>
      </scroller>
      <footer class="footer_confirm_settle">
            <div class="issue_btn">确认解决</div>    
      </footer>
      
  </div>
</template>

<script>
 import scroller from "./scroller"
    export default {
        components: {
            scroller
        },
    }
</script>

<style scoped>
.total_cost {
    width: 100%;
    height: 85px;
    background-color: #fff;
}
.total_cost .pay_cost {
    width: 80%;
    height: 100%;
    line-height: 85px;
    color: #444444;
    font-size: 28px;
    padding-left: 30px;
}
.total_cost .pay_state{
    width: 20%;
    height: 100px;
    line-height: 85px;
    color: #5ACA5C;
    font-size: 28px;
    text-align: right;
    padding-right: 30px;
}

.confirm_settle {
    width: 100%;
}
.confirm_order_info {
    width: 100%;
}
.confirm_order {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
}
.confirm_order .question_title {
    width: 100%;
    height: 92px;
    line-height: 92px;
}
.confirm_order .question_title .title {
    color: #222222;
    font-size: 32px;
}
.confirm_order .question_title .data_time {
    color: #999999;
    font-size: 24px;
}
.confirm_order .question_desc {
    font-size: 24px;
    color: #999999;
    padding-bottom: 30px;
}
/*状态*/
.confirm_order .order_state {
    width: 100%;
    height: 114px;
    position: relative;
}
.first_state,.second_state,.third-state {
    width: 33.33%;
    height: 100%;
}
.order_state .img {
    width: 40px;
    height: 40px;
    margin: 0 auto;
}
.order_state .img img {
    width: 100%;
    height: 100%;
}
.order_state .state_desc {
    width: 100%;
    text-align: center;
    padding-top: 16px;
    font-size: 24px;
    color: #999999;
}
.order_state .line {
    width: 27.8%;
    height: 4px;
    background-color: #999999;
    position: absolute;
    top: 20px;
}
.order_state .first_line {
    left: 19.5%;
}
.order_state .second_line {
    right: 19.5%;
}

.confirm_settle .evaluation {
    width: 100%;
    margin-top: 20px;
    background-color: #fff;
    padding-bottom: 30px;
}
.confirm_settle .evaluation .cvaluation_title {
    width: 100%;
    height: 100px;
    line-height: 100px;
    padding-left: 30px;
    color: #222;
    font-size: 32px;
}
.confirm_settle .evaluation .cvaluation_con {
    width: 92%;
    height: 260px;
    padding: 20px;
    outline: none;
    margin-left: 4%;
    background-color: #F0F0F0;
    font-size: 24px;
}

.footer_confirm_settle {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.footer_confirm_settle .issue_btn {
    width: 86%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 32px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    margin-left: 7%;
    margin-bottom: 60px;
}
</style>



