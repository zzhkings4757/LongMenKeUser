<template>
  <div class="page page-bottom page-gray">
    <div class="content hidden">
      <div class="message message-detail">
        <div class="top-info flex-item flex-js">
          <div class="photo">
            <img src="../../static/images/photo1.jpg">
          </div>
          <div class="user-info flex-center bdrs">
            <h4>李伟明</h4>
          </div>
          <div class="view-history flex-center dbd" @click="toHistory">浏览历史</div>
        </div>
        <div class="mess-wrap" ref="scrollView">
          <ul class="chat-list">
            <li v-for="(item,index) in chatList" :key="index" :class="item.type">
              <span v-if="item.type=='timeStamp'">{{item.timeText}}</span>
              <div class="chatbox" v-else>
                <div class="photo">
                  <img :src="item.photo">
                </div>
                <div class="chat-cont">
                  <div class="text" v-if="item.chatType=='text'">{{item.text}}</div>
                  <div class="img" v-else><img :src="item.imgUrl"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-bar message-bar">
      <input type="text" class="bd" v-model="sendText">
      <div class="bar-btn flex-center">
        <span class="send-link icon iconfont icontianjia" v-if="sendText==''" @click="selectLink"></span>
        <span class="send-text bdrs" v-else @click="sendMessage">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

function addZero(num){
  return num<10?'0'+num:num.toString()
}

export default {
  name: 'messageDetail',
  data () {
    return {
      sendText: '',
      chatList: [
        {
          type: 'timeStamp',
          timeText: '昨天  17:58',
          timeStamp: '2019/07/08 17:58:00'
        },
        {
          type: 'own',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          chatType: 'text',
          text: '您好，您要租床位吗？',
          timeStamp: '2019/07/08 17:58:00'
        },
        {
          type: 'other',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562593237593&di=f02d2a55030a401808e42522753751e0&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129010249_dh32E.thumb.700_0.jpeg',
          chatType: 'text',
          text: '是的',
          timeStamp: '2019/07/09 10:20:00'
        },
        {
          type: 'timeStamp',
          timeText: '10:24',
          timeStamp: '2019/07/09 10:24:00'
        },
        {
          type: 'own',
          photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg',
          chatType: 'img',
          imgUrl: '../../static/images/img1.jpg',
          timeStamp: '2019/07/09 10:24:00'
        },
      ]
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.scrollView,{
      click: true
    })
    if(this.$route.params.data){
      var myData = this.$route.params.data
      for(var i=0;i<myData.length;i++){
        this.addChatData('img',myData[i].imgUrl)
      }
    }
  },
  methods: {

    //添加聊天信息，第一个参数dataType为发送的信息种类(text或img),第二个参数data为发送的文字活图片地址
    addChatData(dataType,data){
      //获取发送当时间距离最后一次发送的时间差(dis)，大于一分钟则添加时间戳
      var lastTime = null;
      for(var i=0;i<this.chatList.length;i++){
        if(this.chatList[i].type=='timeStamp'){
          lastTime = this.chatList[i].timeStamp
        }
      }
      var lastDate = new Date(lastTime);
      var now = new Date();
      var dis = parseInt((now-lastDate)/1000);
      var y = now.getFullYear()
      var m = addZero(now.getMonth()+1)
      var d = addZero(now.getDate())
      var h = addZero(now.getHours())
      var min = addZero(now.getMinutes())
      var s = addZero(now.getSeconds())
      var newTimeStamp = y+'/'+m+'/'+d+' '+h+':'+min+':'+s
      
      if(dis>60){
        var j = {}
        j.type = 'timeStamp'
        j.timeText = h+':'+min
        j.timeStamp = newTimeStamp
        this.chatList.push(j)
      }

      var cjson = {}
      cjson.type = 'own'
      cjson.photo = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562404339865&di=fcce3c36a6cdc25d701325c224cdc95a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F03%2F20150503160108_Am2fT.jpeg'
      cjson.chatType = dataType
      if(dataType=='text'){
        cjson.text = data
      }else{
        cjson.imgUrl = data
      }
      cjson.timeStamp = newTimeStamp
      this.chatList.push(cjson)
     
      setTimeout(()=>{
        var h = -(this.scroll.scrollerHeight - this.scroll.wrapperHeight)
        this.scroll.scrollTo(0,h,0)
      },100)
      
    },

    //发送文字信息
    sendMessage(){
      var text = this.sendText
      if(text==''){
        return false
      }else{
        this.addChatData('text',text)
        this.sendText = ''
      }
    },

    //跳转浏览历史
    toHistory(){
      this.$router.push('/browseHistory')
    },

    //跳转到选择页
    selectLink(){
      this.$router.push('/messageSelect')
    }
  }
}
</script>
