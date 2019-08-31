<template>
  <div class="temp">
      <scroller>
        <div class="all_question">
                <!--租主信息start-->
                <div class="info_top clearfix">
                    <div class="info_left fl">
                        <img src="../../static/images/user.png" alt="">
                        <div class="pero_info">
                            <div class="name">李大有</div>
                            <div>编号 3342</div>
                        </div>
                    </div>
                    <div class="info_right fr">
                            <div class="features fr">
                               <div class="img">
                                    <img src="../../static/images/serve.png" alt="">
                                </div>
                                <div class="features_desc">服务评价</div>
                            </div>
                    </div>
                </div>
                <!--租主信息end-->
                <!--问题列表start-->
                <div class="question">
                    <ul>
                        <li class="qusetion_list" v-for="(item,index) in questionList" :key="index">
                            <div class="question_desc">{{item}}</div>
                            <img src="../../static/images/xiayibu.png" alt="">
                        </li>
                    </ul>
                </div>
                <!--问题列表end-->
        </div>

      </scroller>
      <!--遮罩层-->
        <div id="j_mask" class="mask"></div>
        <!--添加区域-->
        <div id="form-add" class="form-add">
            <div class="opinion">
                <div class="serve_evalu">
                    <h4 class="evalu_title">服务评价</h4>
                    <img src="../../static/images/close.png" alt="">
                    <div class="evalu_con">
                        <div class="star clearfix">
                            <div class="star_choose fl">
                                <ul class="clearfix">
                                    <li class="star_list choose fl">☆</li>
                                    <li class="star_list choose fl">☆</li>
                                    <li class="star_list choose fl">☆</li>
                                    <li class="star_list choose fl">☆</li>
                                    <li class="star_list fl">☆</li>
                                </ul>
                            </div>
                            <div class="state_desc fl">非常好！</div>
                        </div>
                        <div class="evalu_desc">
                            <textarea name="" id="" class="desc_con" cols="30" rows="10" placeholder="请输入评价内容，您的评价将成为房客租房的重要参考，感谢您的参与！"></textarea>
                        </div>
                    </div>
                    <div class="submit">提交</div>
                </div>
                <div class="serve_evalu evalu_question">
                    <h4 class="evalu_title">水电问题</h4>
                    <img src="../../static/images/close.png" alt="">
                    <div class="evalu_con">
                        <div class="evalu_desc">
                            <textarea name="" id="" class="desc_con" cols="30" rows="10" placeholder="请输入评价内容，您的评价将成为房客租房的重要参考，感谢您的参与！"></textarea>
                        </div>
                    </div>
                    <div class="submit">提交</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
 import scroller from "./scroller"
    export default {
        data(){
            return {
                questionList: ['续租','水电问题','燃气问题','提前退房','保洁服务','遗忘门锁','意见反馈','换床、换房','其他服务']
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
.all_question {
    width: 100%;
}
/*租主信息*/
.all_question .info_top {
    width: 100%;
    height: 170px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
}
.all_question .info_top .info_left {
    width: 60%;
    height: 100%;
}
.all_question .info_top .info_left img {
    width: 100px;
    height: 100px;
    margin-top: 40px;
}
.all_question .info_top .info_left .pero_info {
    padding-top: 55px;
    padding-left: 22px;
    color: #999999;
    font-size: 24px;
    display: inline-block;
}
.all_question .info_top .info_left .pero_info .name {
    color: #222222;
    font-size: 28px;
    padding-bottom: 15px;
}
.all_question .info_top .info_right {
    width: 40%;
    height: 100%;
    text-align: right;
}
.all_question .info_top .info_right .features {
    color: #444444;
    font-size: 24px;
    width: 116px;
    margin-top: 33px;
    text-align: center;
}
.all_question .info_top .info_right .features .img {
    width: 66px;
    height: 66px;
    margin-left: 25px;
    margin-bottom: 10px;
}
.all_question .info_top .info_right .features .img img {
    width: 100%;
    height: 100%;
}
.all_question .info_top .info_right .features .features_desc {
    color: #444444;
    font-size: 24px;
}
/*问题列表*/
.all_question .question {
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
}
.all_question .qusetion_list {
    width: 100%;
    position: relative;
    height: 100px;
    border-bottom: 1px solid #F0F0F0;
}
.all_question .qusetion_list .question_desc {
    width: 100%;
    height: 100%;
    line-height: 100px;
    padding-left: 30px;
    font-size: 28px;
    color: #222222;
}
.all_question .qusetion_list img {
    position: absolute;
    top: 36px;
    right: 30px;
    width: 17px;
    height: 30px;
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
    /*background: rgba(0,0,0,0.6);*/
    width: 100%;
    height: 100%;
    display: none;
    /*display: block; */
    z-index: 5;
    overflow: auto;
}
.opinion {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.opinion .serve_evalu {
    width: 92%;
    height: 43.48%;
    margin-left: 4%;
    margin-top: 92px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
}
.opinion .serve_evalu .evalu_title {
    width: 100%;
    height: 92px;
    line-height: 92px;
    text-align: center;
    color: #444444;
    font-size: 32px;
}
.opinion .serve_evalu img {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 30px;
    right: 40px;
}
.evalu_con {
    width: 100%;
}
.evalu_con .star {
    width: 100%;
}
.evalu_con .star .star_list {
    font-size: 40px;
    margin-right: 10px;
}
.evalu_con .star .star_list:first-child {
    margin-left: 10px;
}
.choose {
    color: #FFD800;
}
.evalu_con .star .state_desc {
    margin-left: 40px;
    margin-top: 14px;
    font-size: 24px;
    color: #444444;
}
.evalu_con .evalu_desc {
    width: 94%;
    height: 260px;
    margin-left: 3%;
    margin-top: 30px;
    margin-bottom: 30px;
}
.evalu_con .evalu_desc .desc_con {
    width: 100%;
    height: 100%;
    font-size: 24px;
    color: #999;
    padding-top: 24px;
    padding-left: 20px;
    background-color: #F0F0F0;
}
.serve_evalu .submit {
    width: 94%;
    height: 80px;
    margin-left: 3%;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-size: 32px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
}
.opinion .evalu_question {
    margin-top: 40px;
}
.opinion .evalu_question .evalu_desc {
    margin-top: 18px;
}
</style>



