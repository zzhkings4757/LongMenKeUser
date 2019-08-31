<!--搜索框组件-->
<template>
  <div class="info_perfec">
    <div class="info_con clearfix">
        <div class="info_desc fl">
            <div class="perfection">信息完整度50%,</div>
            <div class="listing_number">已为您智能匹配124套房源。</div>
        </div>
        <div class="go_perfect fl">
            <span>完善信息</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style>
.info_perfec {
    width: 100%;
    height: 110px;
}
.info_con {
    width: 92%;
    height: 70px;
    margin-top: 20px;
    margin-left: 4%;
    background-color: #FCDED3;
    border-radius:35px;
}
.info_con .info_desc {
    width: 52%;
    height: 100%;
    color: #ffffff;
    font-size: 20px;
    padding-left: 40px;
    padding-top: 10px;
    background-color: #F15A22;
    border-radius:35px;
}
.info_con .go_perfect {
    width: 48%;
    height: 100%;
    text-align: right;
    padding-top: 20px;
    padding-right: 35px;
    
}
.info_con .go_perfect span {
    font-size: 24px;
    color: #F15A22;
    padding-bottom: 4px;
    border-bottom: 2px solid #F15A22;
}
</style>


