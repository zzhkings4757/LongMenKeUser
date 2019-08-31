<template>
  <div class="temp">
      <scroller>
        <div class="add_adress">
            <div class="adress_info">
                <ul>
                    <li class="info_list clearfix">
                        <div class="info_name fl">姓名</div>
                        <input type="text" class="info_cont fr" placeholder="请输入姓名" v-model="name">
                    </li>
                    <li class="info_list clearfix">
                        <div class="info_name fl">电话</div>
                        <input type="text" class="info_cont fr" placeholder="请输入电话" v-model="phone">
                    </li>
                    <li class="info_list clearfix" @click="openModle">
                        <div class="info_name fl">地址</div>
                        <input type="text" disabled class="info_cont fr" placeholder="请输入地址" v-model="areaAddress">
                    </li>
                </ul>
            </div>
            <div class="detail_adress">
                <textarea name="" class="adress_area" id="" cols="30" rows="10" placeholder="请输入详细地址" v-model="detail_adress"></textarea>
            </div>
            <div>
            </div>
        </div>
      </scroller>
      <footer class="adress_footer">
          <div class="adress_btn">保存</div>
      </footer>
       <!--遮罩层-->
    <div id="j_mask2" class="mask2"></div>
    <!--添加区域-->
    <div id="form-add2" class="form-add2">
      <div class="gongneng goodListColor goodListSize">
        <span class="cancel fl" @click="closeModel">取消</span>
        <span class="queding fr" @click="closeModelAddArea">确定</span>
      </div>
      <div class="area">
        <mt-picker :slots="myAddressSlots" @change="onMyAddressChange" style="display: block;"></mt-picker>
      </div>
    </div>
  </div>
</template>

<script>
 import scroller from "./scroller"
 import {Picker} from 'mint-ui';
 import myaddress from '../../static/pca.json';
  var addressArea = "";
    export default {
        data(){
            return {
                name: '',
                phone: '18164575966',
                adress: '深圳市-福田区-福华路',
                detail_adress: '海鹰大厦25C',
                myAddressSlots: [
                    {
                        flex: 1,
                        defaultIndex: 1,
                        values: Object.keys(myaddress),  //省份数组
                        className: 'slot1',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'center'
                    },
                    {
                        divider: true,
                        content: '-',
                        className: 'slot4'
                    },
                    {
                        flex: 1,
                        values: [],
                        className: 'slot5',
                        textAlign: 'center'
                    }
                ],
                myAddressProvince: '省',
                myAddressCity: '市',
                myAddresscounty: '区 /县',
                areaAddress: ""
            }
        },
        components: {
            scroller,
             'mt-picker': Picker
        },
        methods: {
             onMyAddressChange(picker, values) {
                if (myaddress[values[0]]) {  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
                picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
                picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
                this.province = values[0];
                this.city = values[1];
                this.district = values[2];
                addressArea = values[0] + values[1] + values[2];
                }
            },
            openModle: function () {
                document.getElementById("j_mask2").style.display = "block";
                document.getElementById("form-add2").style.display = "block";
            },
            closeModel: function () {
                document.getElementById("j_mask2").style.display = "none";
                document.getElementById("form-add2").style.display = "none";
            },
            closeModelAddArea: function () {
                document.getElementById("j_mask2").style.display = "none";
                document.getElementById("form-add2").style.display = "none";
                this.areaAddress = addressArea;
            }
            
        }
    }
</script>

<style scoped>
.add_adress {
    width: 100%;
    padding-bottom: 40px;
    background-color: #fff;
}
.add_adress .adress_info {
    width: 100%;
    padding-left: 30px;
}
.add_adress .adress_info .info_list {
    width: 100%;
    height: 100px;
    font-size: 32px;
    border-bottom: 1px solid #F0F0F0;
}
.add_adress .adress_info .info_list .info_name {
    width: 30%;
    height: 100%;
    line-height: 100px;
    color: #222222;
}
.add_adress .adress_info .info_list .info_cont {
    width: 70%;
    height: 100%;
    line-height: 100px;
    text-align: right;
    padding-right: 30px;
    color: #444444;
}
.detail_adress  {
    width: 92%;
    height: 200px;
    margin-left: 4%;
    margin-top: 30px;
}
.detail_adress .adress_area {
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    border-radius:10px;
    font-size: 28px;
    color: #444444;
    padding: 25px;
    outline: none;
}
.adress_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.adress_footer .adress_btn{
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
  /* 遮罩层 */
  .mask2 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    opacity: 0.6;
     /*display: block; */
    display: none;
    z-index: 10;
  }

  .form-add2 {
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 400px;
     /*display: block; */
    display: none;
    z-index: 10;
    overflow-y: auto;
    padding-bottom: 50px;
  }

  .form-add2 .gongneng {
    width: 100%;
    height: 88px;
    line-height: 88px;
  }

  .form-add2 .gongneng .cancel {
    margin-left: 35px;
    font-size: 32px;
    color: #222222;
  }

  .form-add2 .gongneng .queding {
    margin-right: 35px;
    font-size: 32px;
    color: #222222;
  }

  .picker-slot {
    font-size: 28px;
  }
  .area {
      margin-top: 20px;
  }
</style>



