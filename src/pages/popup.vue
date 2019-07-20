<!--弹窗-->
<template>
  <div class="popup" :class="PopupShowClass" v-if="isPopupShow">
    <div class="popop-page" :class="animation">
      <div class="popup-box">
        <div class="popup-close icon iconfont iconclose flex-center" @click="closePopup"></div>
        <div class="popup-title">{{title}}</div>
        <div class="popup-content">
          <slot></slot>
        </div>
        <div class="sure-btn" v-if="showBtn" @click="closePopup">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: '提示'
    },
    showBtn: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: 'zoomIn'
    }
  },
  data() {
    return {
      isPopupShow: false,
      PopupShowClass: ''
    };
  },
  methods: {
    showPupup () {
      let that = this
      that.isPopupShow = true
      setTimeout(()=>{
        that.PopupShowClass = 'popup-show'
      },50)
    },
    closePopup () {
      let that = this
      setTimeout(()=>{
        that.PopupShowClass = ''
      },50)
      setTimeout(()=>{
        that.isPopupShow = false
      },400)
    }
  }
};
</script>

<style scoped>
  .popup{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11111;
    background: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: .3s;
  }
  .popup.popup-show{
    background: rgba(0, 0, 0, .6);
    transition: .3s;
  }
  .popup .popop-page{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .popup .popup-box{
    width: 92%;
    background: #fff;
    border-radius: 10px;
    padding: 0 30px 40px;
    position: relative;
  }
  .popup .popup-title{
    text-align: center;
    font-size: 32px;
    line-height: 50px;
    padding: 20px 0;
  }
  .popup .popup-close{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 36px;
  }
  .popup .popup-content{
    padding: 30px 0;
    max-height: 800px;
    min-height: 160px;
    overflow: auto;
  }
  .popup .sure-btn{
    line-height: 80px;
    border-radius: 10px;
    background: #f47a41;
    font-size: 32px;
    color: #fff;
    text-align: center;
  }
  .popup .upIn{
    transform: translateY(100%);
    transition: .3s;
  }
  .popup.popup-show .upIn{
    transform: translateY(0);
    transition: .3s;
  }
  .popup .zoomIn{
    transform: scale(.3);
    opacity: 0;
    transition: .3s;
  }
  .popup.popup-show .zoomIn{
    transform: scale(1);
    opacity: 1;
    transition: .3s;
  }
</style>

