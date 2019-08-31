<template>
  <div class="temp">
      <scroller>
        <div class="rental_terms">
            <h4 class="terms_title">租房条款</h4>
            <div class="terms_desc">
                <div class="terms_degulation">
                    Global Easy is a multinational company speci
                    alizing in providing international logistics, ov
                    erseas warehousing and operation services 
                    for domestic and foreign e-commerce sellers. 
                    Founded in 2006, the company is headquarte
                    red in Hong Kong and has nine wholly-owned
                    branches worldwide, including the United Sta
                    tes (New Jersey on the east coast and Washin
                    gton on the West coast), the United Kingdom, 
                    China, Australia, New Zealand, Japan and Sou
                    th Korea. It provides four major services for m
                    ajor e-commerce businesses: international de
                    dicated lines, overseas warehousing, internati
                    onal small packages and Amazon FBA headq
                    uarters.
                </div>
                <div class="terms_degulation">
                    overseas warehousing and operation services 
                    for domestic and foreign e-commerce sellers. 
                    Founded in 2006, the company is headquarte
                    red in Hong Kong and has nine wholly-owned
                    branches worldwide, including the United Sta
                    tes (New Jersey on the east coast and Washin
                    gton on the West coast), the United Kingdom, 
                    China, Australia, New Zealand, Japan and Sou
                    th Korea. It provides four major services for m
                    ajor e-commerce businesses: international de
                    dicated lines, overseas warehousing, internati
                    onal small packages and Amazon FBA headq
                    uarters. 
                </div>
            </div>
           
        </div>

      </scroller>
      
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
    padding-bottom: 0;
}
.rental_terms {
    width: 100%;
}
.rental_terms .terms_title {
    width: 100%;
    height: 100px;
    text-align: center;
    padding-top: 50px;
    color: #222222;
    font-size: 32px;
}
.terms_desc {
    width: 100%;
    line-height: 40px;
    padding-left: 68px;
    padding-right: 68px;
    color: #222222;
    font-size: 28px;
}
</style>

