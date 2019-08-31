<template>
    <div class="temp">
        <scroller>
           <div class="cancel_term_applice">
                <textarea name="" id="" class="cancel_term_con" cols="30" rows="10" v-model="termData" disabled></textarea>
                <div class="review_desc">您的申请正在审核中，请耐心等候</div>
           </div>
        </scroller>
        <footer class="term_footer">
            <div class="term_btn">取消申请</div>
        </footer>
    </div>
</template>

<script>
    import scroller from "./scroller"
    export default {
        data(){
            return {
                termData: '工作调动。不准备租了'
            }
        },
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
.cancel_term_applice {
    width: 100%;
}
.cancel_term_applice .cancel_term_con {
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
.review_desc {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 30px;
    font-size: 28px;
    color: #EE2727;
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
    background: url('../../static/images/no_btn_bgc.png') no-repeat;
    background-size: 100% 100%;
}
</style>


