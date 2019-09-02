<template>
  <div class="temp">
      <scroller>
            <div class="improve_infor">
                <ul>
                    <li class="improve_list" @click="openModle1">
                        <span class="improve_name">性别</span>
                        <input class="improve_value" disabled type="text" v-model="sex" placeholder="请选择性别">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list" @click="openPicker">
                        <span class="improve_name">生日</span>
                        <input class="improve_value" disabled type="text" v-model="birthday" placeholder="请选择生日">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list" @click="openModle3">
                        <span class="improve_name">合租</span>
                        <input class="improve_value" disabled type="text" v-model="rent" placeholder="请选择是否合租">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list">
                        <span class="improve_name">工作单位</span>
                        <input class="improve_value" type="text" v-model="employer" placeholder="填写你的工作单位">
                    </li>
                    <li class="improve_list" @click="openModle4">
                        <span class="improve_name">租金</span>
                        <input class="improve_value" disabled type="text" v-model="rentMoney" placeholder="选择你的租金范围">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list" @click="openModle5">
                        <span class="improve_name">付款方式</span>
                        <input class="improve_value" disabled type="text" v-model="payWay">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list" @click="openModle6">
                        <span class="improve_name">地铁</span>
                        <input class="improve_value" type="text" disabled v-model="subway" placeholder="是否靠近地铁">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list" @click="openModle7">
                        <span class="improve_name">做饭</span>
                        <input class="improve_value" disabled type="text" v-model="cook" placeholder="是否选择做饭">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                    <li class="improve_list" @click="openModle8">
                        <span class="improve_name">楼层</span>
                        <input class="improve_value" disabled type="text" v-model="floor" placeholder="选择你想要的楼层">
                        <img class="img_direc" src="../../static/images/xiayibu.png" alt="">
                    </li>
                </ul>
            </div>
      </scroller>
      <div class="improve_save">
          <div class="save_btn" @click="infoFormSubmit">保存</div>
      </div>
      <div id="j_mask1" class="mask1"></div>
      <div id="form-add1" class="form-add1">
          <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel1">取消</div>
              <div class="queren fr" @click="closeModel1">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in sexList" :key="index" :class="{'active':index==sexIndex}" @click="sexChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
      <!--<div id="j_mask2" class="mask2"></div>-->
      <!--<div id="form-add2" class="form-add2">-->
          <mt-datetime-picker
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
             >
        </mt-datetime-picker>
      <!--</div>-->
      <div id="j_mask3" class="mask3"></div>
      <div id="form-add3" class="form-add3">
          <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel3">取消</div>
              <div class="queren fr" @click="closeModel3">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in rentList" :key="index" :class="{'active':index==rentIndex}" @click="rentChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
      <div id="j_mask4" class="mask4"></div>
      <div id="form-add4" class="form-add4">
          <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel4">取消</div>
              <div class="queren fr" @click="closeModel4">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in rentMoneyList" :key="index" :class="{'active':index==rentMoneyIndex}" @click="rentMoneyChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
      <div id="j_mask5" class="mask5"></div>
      <div id="form-add5" class="form-add5">
           <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel5">取消</div>
              <div class="queren fr" @click="closeModel5">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in payWayList" :key="index" :class="{'active':index==payIndex}" @click="payWayChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
      <div id="j_mask6" class="mask6"></div>
      <div id="form-add6" class="form-add6">
          <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel6">取消</div>
              <div class="queren fr" @click="closeModel6">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in subwayList" :key="index" :class="{'active':index==subwayIndex}" @click="subwayChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
      <div id="j_mask7" class="mask7"></div>
      <div id="form-add7" class="form-add7">
          <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel7">取消</div>
              <div class="queren fr" @click="closeModel7">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in cookList" :key="index" :class="{'active':index==cookIndex}" @click="cookChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
      <div id="j_mask8" class="mask8"></div>
      <div id="form-add8" class="form-add8">
           <div class="choose clearfix">
              <div class="cancel fl" @click="cancelModel8">取消</div>
              <div class="queren fr" @click="closeModel8">确认</div>
          </div>
          <div>
            <ul>
                <li class="type_list" v-for="(item,index) in floorList" :key="index" :class="{'active':index==floorIndex}" @click="floorChoose(index)">{{item}}</li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
 import scroller from "./scroller"
 import { DatetimePicker,Toast,Popup,Picker  } from 'mint-ui';
    export default {
        data(){
            return {
                sex: '',
                // birthday: '2019-08-01',
                rent: '',
                employer: '',
                rentMoney: '',
                payWay: '',
                subway: '',
                cook: '',
                floor: '',
                birthday:"",  //出生日期
                startDate: new Date('1968-01-01'),
                sexIndex: 0,
                rentIndex: 0,
                rentMoneyIndex: 0,
                payIndex: 0,
                subwayIndex: 0,
                cookIndex: 0,
                floorIndex: 0,
                sexList: ['男','女'],
                rentList: ['介意','不介意'],
                rentMoneyList: ['1月付','半年付','一年付'],
                payWayList: ['微信','支付宝'],
                subwayList: ['是','否'],
                cookList: ['是','否'],
                floorList: ['3楼','4楼','5楼','6楼','7楼','8楼','9楼','12楼','14楼']
            }
        },
        filters: {
            getDate: function(value) {
                var date = new Date(value);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = date.getDate() + ' ';
                //s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
                return Y + M + D;
            }
        },
        components: {
            scroller
        },
        methods: {
            getDate:function(value){
                var date = new Date(value);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = date.getDate() + ' ';
                //s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
                return Y + M + D;
            },
            openPicker () {  
                // this.openModle2();
                this.$refs.picker.open();
            },
            handleConfirm (data) {
                console.log(data);
                this.birthday = this.getDate(data);   //获取的时间为时间戳，getdata是自己写的一个转换时间的方法
                console.log(this.birthday);
            },
            openModle2: function () {
                document.getElementById("j_mask2").style.display = "block";
                document.getElementById("form-add2").style.display = "block";
            },
            // closeModel1: function () {
            //     document.getElementById("j_mask1").style.display = "none";
            //     document.getElementById("form-add1").style.display = "none";
            // },
            // cancelModel1:function(){
            //     this.sex = "";
            //     this.closeModel1();
            //     this.sexIndex = 0;
            // },
            openModle1: function () {
                document.getElementById("j_mask1").style.display = "block";
                document.getElementById("form-add1").style.display = "block";
                this.sex = this.sexList[0];
            },
            closeModel1: function () {
                document.getElementById("j_mask1").style.display = "none";
                document.getElementById("form-add1").style.display = "none";
            },
            cancelModel1:function(){
                this.sex = "";
                this.closeModel1();
                this.sexIndex = 0;
            },
            sexChoose:function(index){
                this.sexIndex = index;
                this.sex = this.sexList[index];
            },
            openModle3: function () {
                document.getElementById("j_mask3").style.display = "block";
                document.getElementById("form-add3").style.display = "block";
                this.rent = this.rentList[0];
            },
            closeModel3: function () {
                document.getElementById("j_mask3").style.display = "none";
                document.getElementById("form-add3").style.display = "none";
            },
            cancelModel3:function(){
                this.rent = "";
                this.closeModel3();
                this.rentIndex = 0;
            },
            rentChoose:function(index){
                this.rentIndex = index;
                this.rent = this.rentList[index];
            },
            openModle4: function () {
                document.getElementById("j_mask4").style.display = "block";
                document.getElementById("form-add4").style.display = "block";
                this.rentMoney = this.rentMoneyList[0];
            },
            closeModel4: function () {
                document.getElementById("j_mask4").style.display = "none";
                document.getElementById("form-add4").style.display = "none";
            },
            cancelModel4:function(){
                this.rentMoney = "";
                this.closeModel4();
                this.rentMoneyIndex = 0;
            },
            rentMoneyChoose:function(index){
                this.rentMoneyIndex = index;
                this.rentMoney = this.rentMoneyList[index];
            },
            openModle5: function () {
                document.getElementById("j_mask5").style.display = "block";
                document.getElementById("form-add5").style.display = "block";
                this.payWay = this.payWayList[0];
            },
            closeModel5: function () {
                document.getElementById("j_mask5").style.display = "none";
                document.getElementById("form-add5").style.display = "none";
            },
            cancelModel5:function(){
                this.payWay = "";
                this.closeModel5();
                this.payIndex = 0;
            },
            payWayChoose:function(index){
                this.payIndex = index;
                this.payWay = this.payWayList[index];
            },
            openModle6: function () {
                document.getElementById("j_mask6").style.display = "block";
                document.getElementById("form-add6").style.display = "block";
                this.payWay = this.subwayList[0];
            },
            closeModel6: function () {
                document.getElementById("j_mask6").style.display = "none";
                document.getElementById("form-add6").style.display = "none";
            },
            cancelModel6:function(){
                this.subway = "";
                this.closeModel6();
                this.subwayIndex = 0;
            },
            subwayChoose:function(index){
                this.subwayIndex = index;
                this.subway = this.subwayList[index];
            },
            openModle7: function () {
                document.getElementById("j_mask7").style.display = "block";
                document.getElementById("form-add7").style.display = "block";
                this.cook = this.cookList[0];
            },
            closeModel7: function () {
                document.getElementById("j_mask7").style.display = "none";
                document.getElementById("form-add7").style.display = "none";
            },
            cancelModel7:function(){
                this.cook = "";
                this.closeModel7();
                this.cookIndex = 0;
            },
            cookChoose:function(index){
                this.cookIndex = index;
                this.cook = this.cookList[index];
            },
            openModle8: function () {
                document.getElementById("j_mask8").style.display = "block";
                document.getElementById("form-add8").style.display = "block";
                this.floor = this.floorList[0];
            },
            closeModel8: function () {
                document.getElementById("j_mask8").style.display = "none";
                document.getElementById("form-add8").style.display = "none";
            },
            cancelModel8:function(){
                this.floor = "";
                this.closeModel8();
                this.floorIndex = 0;
            },
            floorChoose:function(index){
                this.floorIndex = index;
                this.floor = this.floorList[index];
            },

            infoFormSubmit(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

.improve_infor {
    width: 100%;
}
.improve_list {
    width: 100%;
    height: 90px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
}
.improve_list .improve_name {
    position: absolute;
    color: #888888;
    font-size: 28px;
    top: 25px;
    left: 30px;
}
.improve_list .improve_value {
    width: 100%;
    height: 90px;
    line-height: 90px;
    padding-left: 150px;
    font-size: 28px;
    color: #222;
}
.improve_list .img_direc {
    width: 18px;
    height: 30px;
    position: absolute;
    right: 30px;
    top: 30px;
}
.improve_save {
    position: fixed;
    left: 7%;
    bottom: 60px;
    width: 86%;
    height: 80px;
    background: url('../../static/images/bot_bgc.png') no-repeat;
    background-size: 100% 100%;
    font-size: 32px;
    color: #fff;
    text-align: center;
    line-height: 80px;
}
/* 遮罩层 */
  .mask1,.mask2,.mask3,.mask4,.mask5,.mask6,.mask7,.mask8 {
    position: fixed;
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
  /*.mask8 {
    display: block;
  }*/
  .form-add1,.form-add2,.form-add3,.form-add4,.form-add5,.form-add6,.form-add7,.form-add8 {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
    /*height: 400px;*/
     /*display: block; */
    display: none;
    z-index: 10;
    overflow-y: auto;
    padding-top: 30px;
    /*padding-bottom: 50px;*/
    /*transition: width 0.4s ease-out, opacity 0.2s ease-in, visibility 0.2s ease-in;*/
  }
  /*.form-add8 {
      display: block;
  }*/
  .form-add2 {
      height: 400px;
  }
  .type_list {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 30px;
    color: #444;
    border-bottom: 1px solid #f0f0f0;
}
.type_list:first-child {
    border-top: 1px solid #f0f0f0;
}
.type_list:last-child {
    border-bottom: 0;
}

.choose {
    width: 100%;
    height: 80px;
    color: #26a2ff;
    font-size: 28px;
}
.choose .cancel {
    width: 50%;
    height: 100%;
    line-height: 80px;
    padding-left: 30px;
}
.choose .queren {
    width: 50%;
    height: 100%;
    line-height: 80px;
    padding-right: 30px;
    text-align: right;
}
.active {
    color: #F15A22;
}
</style>

