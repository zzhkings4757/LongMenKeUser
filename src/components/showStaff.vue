<template>
   <div class="temp">
       <scroller>
           <div class="personal_staff">
               <!--个人信息start-->
               <div class="staff_info">
                    <ul>
                        <li class="clearfix">
                            <span class="fl staff_name">真实姓名</span>
                            <span class="fr staff_number">李大海</span>
                        </li>
                        <li class="clearfix">
                            <span class="fl staff_name">身份证号</span>
                            <span class="fr staff_number">620***********6411</span>
                        </li>
                    </ul>
               </div>
               <!--个人信息end-->
               <!--idCard展示 start-->
               <div class="id_card">
                   <h4 class="card_title">手持身份证照片</h4>
                   <div class="id_show">
                       <ul class="clearfix">
                           <li class="id_list fl"><img src="../../static/images/people_zheng.png" alt=""></li>
                           <li class="id_list fr"><img src="../../static/images/people_fan.png" alt=""></li>
                       </ul>
                   </div>
               </div>
               <!--idCard展示 end-->
           </div>
       </scroller>
       <footer class="delect_btn">
            <div class="save">删除</div>
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
.personal_staff {
    width: 100%;
}
/*个人信息*/
.personal_staff .staff_info {
    width: 100%;
}
.personal_staff .staff_info li {
    width: 100%;
    height: 100px;
    padding-left: 30px;
    padding-right: 30px;
    line-height: 100px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
}
.personal_staff .staff_info .staff_name {
    font-size: 32px;
    color: #222222;
}
.personal_staff .staff_info .staff_number {
    font-size: 28px;
    color: #444;
}
/*idCard展示*/
.personal_staff .id_card {
    width: 100%;
    margin-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    padding-bottom: 40px;
}
.personal_staff .id_card .card_title {
    width: 100%;
    padding-top: 35px;
    padding-bottom: 30px;
    font-size: 32px;
    color: #222222;

}
.personal_staff .id_card .id_show {
    width: 100%;
}
.personal_staff .id_card .id_show .id_list {
    width: 48%;
    height: 220px;
}
.personal_staff .id_card .id_show .id_list img {
    width: 100%;
    height: 100%;
}

.delect_btn {
    width: 100px;
}
.delect_btn .save {
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
