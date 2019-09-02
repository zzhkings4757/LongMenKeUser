<template>
   <div class="temp">
       <scroller>
           <div class="add_staff">
               <!--个人信息start-->
               <div class="staff_info">
                    <ul>
                        <li class="clearfix">
                            <span class="fl staff_name">真实姓名</span>
                            <span class="fr staff_number">照片识别后自动填写</span>
                        </li>
                        <li class="clearfix">
                            <span class="fl staff_name">身份证号</span>
                            <span class="fr staff_number">照片识别后自动填写</span>
                        </li>
                    </ul>
               </div>
               <!--个人信息end-->
               <!--id start-->
               <div class="id_card">
                   <h4 class="card_title">手持身份证照片</h4>
                   <div class="id_upload">
                       <ul class="clearfix">
                           <li class="id_list fl"><img src="../../static/images/id_zheng.png" alt=""></li>
                           <li class="id_list fr"><img src="../../static/images/id_fan.png" alt=""></li>
                       </ul>
                   </div>
                   <div class="id_desc">
                       <span class="legend">*</span>
                       <span>图片格式为jpg/png , 大小不得超过3M , 且文字清晰、四角齐全</span>
                   </div>
                   <div class="upload_desc first">
                       如以上显示的姓名或身份证号码与身份证图片上的不一致，请上传更清晰的身份证照片。
                   </div>
                   <div class="upload_desc second">
                       如上传的照片足够清晰，但姓名或身份证号码仍然与身份证图片上的不一致，请拨打<span>客服电话</span>。
                   </div>
                   <div class="upload_desc third">
                       当姓名与身份证号码与身份证图片上的一致时，即可提交实名认证。
                   </div>
               </div>
               <!--id end-->
           </div>
       </scroller>
       <footer class="save_btn">
            <div class="save" @click="sureSave">保存</div>
       </footer>
   </div>
</template>
<script>
    import scroller from "./scroller"
    export default {
        methods: {
            sureSave(){
                this.$router.go(-1)
            },
        },
        components: {
            scroller
        },
    }
</script>
<style scoped>
.add_staff {
    width: 100%;
}
/*个人信息*/
.add_staff .staff_info {
    width: 100%;
}
.add_staff .staff_info li {
    width: 100%;
    height: 100px;
    padding-left: 30px;
    padding-right: 30px;
    line-height: 100px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
}
.add_staff .staff_info .staff_name {
    font-size: 32px;
    color: #222222;
}
.add_staff .staff_info .staff_number {
    font-size: 28px;
    color: #ccc;
}
/*id上传*/
.add_staff .id_card {
    width: 100%;
    margin-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    padding-bottom: 40px;
}
.add_staff .id_card .card_title {
    width: 100%;
    padding-top: 35px;
    padding-bottom: 30px;
    font-size: 32px;
    color: #222222;

}
.add_staff .id_card .id_upload {
    width: 100%;
}
.add_staff .id_card .id_upload .id_list {
    width: 48%;
    height: 220px;
}
.add_staff .id_card .id_upload .id_list img {
    width: 100%;
    height: 100%;
}
.add_staff .id_card .id_desc {
    font-size: 24px;
    color: #666666;
    margin-top: 23px;
    padding-left: 12px;
    position: relative;
}
.add_staff .id_card .id_desc span {
    display: inline-block;
    width: 100%;
}
.add_staff .id_card .id_desc .legend {
    font-size: 28px;
    color: #FF0000;
    margin-top: 20px;
    position: absolute;
    top: -14px;
    left: 0;
}
.add_staff .id_card .upload_desc {
    width: 100%;
    font-size: 28px;
    color: #444444;
    padding-top: 43px;
}
.add_staff .id_card .first {
    padding-top: 33px;
}
.add_staff .id_card .second span {
    color: #FF0000;
}
.add_staff .id_card .third {
    color: #000000;
}
.save_btn {
    width: 100px;
}
.save_btn .save {
    width: 86.67%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 32px;
    position: fixed;
    bottom: 60px;
    left: 50px;
}
</style>
