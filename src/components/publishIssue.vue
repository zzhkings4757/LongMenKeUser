<template>
  <div class="temp">
      <scroller>
            <div class="publish_issus">
                <ul>
                    <li class="publish_list">
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
                                    <img src="../../static/images/state_no_choose.png" alt="">
                                </div>
                                <div class="state_desc">已解决</div>
                            </div>
                            <div class="first_line line"></div>
                            <div class="second_line line"></div>
                        </div>
                    </li>
                    <li class="publish_list">
                        <div class="question_title clearfix">
                            <div class="title fl">水电问题</div>
                            <div class="data_time fr">2019-06-20</div>
                        </div>
                        <div class="question_desc">
                            门锁坏了
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
                    </li>
                </ul>
            </div>
      </scroller>
      <footer class="footer_issue">
            <div class="issue_btn">发布问题</div>    
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

.publish_issus {
    width: 100%;
}
.publish_issus ul {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
}
.publish_list {
    width: 100%;
    
    border-bottom: 1px solid #F0F0F0;
}
.publish_list .question_title {
    width: 100%;
    height: 92px;
    line-height: 92px;
}
.publish_list .question_title .title {
    color: #222222;
    font-size: 32px;
}
.publish_list .question_title .data_time {
    color: #999999;
    font-size: 24px;
}
.publish_list .question_desc {
    font-size: 24px;
    color: #999999;
    padding-bottom: 30px;
}
/*状态*/
.publish_list .order_state {
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

.footer_issue {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.footer_issue .issue_btn {
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



