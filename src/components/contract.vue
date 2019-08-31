<template>
  <div class="temp">
      <scroller>
            <div class="contract">
                <div class="img">
                    <img src="../../static/images/contract.png" alt="">
                </div>
                <div class="img">
                    <img src="../../static/images/contract.png" alt="">
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
.contract {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
}
.contract .img {
    width: 100%;
    height: 511px;
    margin-top: 30px;
}
.contract .img img {
    width: 100%;
    height: 100%;
}
</style>



