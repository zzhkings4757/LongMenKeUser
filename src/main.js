// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import flexible from 'lib-flexible'
import VueBetterScroll from 'vue2-better-scroll'
import VuejsDialog from "vuejs-dialog"
import MintUI from 'mint-ui'
import VueAxios from 'vue-axios'
import 'mint-ui/lib/style.css'
import './assets/css/style.css'

const dpr =  parseInt(document.getElementsByTagName('html')[0].getAttribute("data-dpr"));

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.use(flexible)
Vue.use(VueBetterScroll)
Vue.use(VuejsDialog)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

