<template>
    <div class="temp">
        <scroller>
           <div class="cancel_term_applice">
                <textarea name="" id="" class="cancel_term_con" cols="30" rows="10" v-model="termData" disabled></textarea>
                <div class="review_desc">
                    <h4 class="audit_title">审核结束</h4>
                    <div class="audit_con">
                        您的情况我们已经了解，我们的工作人员将尽快与您取得联系，解决您的问题。
                    </div>
                </div>
           </div>
        </scroller>
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
    padding-bottom: 0;
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
}
.review_desc .audit_title {
    width: 100%;
    color: #F15A22;
}
.audit_con {
    color: #444;
    margin-top: 15px;
}

</style>


