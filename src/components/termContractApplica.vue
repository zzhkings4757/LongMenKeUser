<template>
    <div class="temp">
        <scroller>
           <div class="term_cont_applice">
                <textarea name="" id="" class="applice_con" cols="30" rows="10" placeholder="请填写终止合同原因"></textarea>
           </div>
        </scroller>
        <footer class="term_footer">
            <div class="term_btn">提交</div>
        </footer>
    </div>
</template>

<script>
    import scroller from "./scroller"
    export default {
        components: {
            scroller
        },
        methods: {

        }
    }
</script>

<style scoped>
.temp {
    background-color: #fff;
}
.term_cont_applice {
    width: 100%;
}
.term_cont_applice .applice_con {
    width: 92%;
    height: 400px;
    background-color: #F0F0F0;
    font-size: 28px;
    margin-left: 4%;
    margin-top: 30px;
    padding: 30px;
    outline: none;
    border-radius:10px;
    color: #222;
}
.term_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.term_footer .term_btn {
    width: 86%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 32px;
    color: #fff;
    margin-left: 7%;
    margin-bottom: 60px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
}
</style>


