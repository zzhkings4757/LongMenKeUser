<template>
  <div class="temp">
      <scroller>
          <div class="submit_comment">
               <textarea name="" class="comment" id="" cols="30" rows="10" placeholder="请写下您的意见，我们将认真处理。"></textarea>
          </div>
      </scroller>
      <footer class="submit_footer">
            <div class="submit_btn">提交</div>
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
.temp {
    background-color: #fff;
}
.submit_comment {
    width: 100%;
}
.submit_comment .comment {
    width: 92%;
    height: 400px;
    margin-left: 4%;
    margin-top: 30px;
    padding: 30px;
    outline: none;
    border-radius:10px;
    background-color: #F0F0F0;
}
.submit_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.submit_footer .submit_btn{
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

