// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import flexible from 'lib-flexible'
import VueBetterScroll from 'vue2-better-scroll'
import VuejsDialog from "vuejs-dialog"

import './assets/css/style.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.use(flexible)
Vue.use(VueBetterScroll)
Vue.use(VuejsDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
