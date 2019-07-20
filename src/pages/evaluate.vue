<template>
  <div class="page page-gray">
    <scroller>
      <div class="evaluate">
        <div class="evaluate-info flex-item bdb">
          <div class="photo">
            <img src="../../static/images/photo1.jpg">
          </div>
          <div class="text">
            <h4>李大有</h4>
            <p>编号 3342</p>
          </div>
          <div class="score flex-item">
            <div class="stars">
              <span class="icon iconfont iconstar" :class="{'icon-on': score>index}" v-for="(item,index) in 5" :key="index" @click="scoring(index)"></span>
            </div>
            <div class="score-text">{{score}}分</div>
          </div>
        </div>
        <ul class="evaluate-list">
          <li>
            <div class="photo">
              <img src="../../static/images/photo.jpg">
            </div>
            <div class="text">
              <h5>租客987</h5>
              <p>管理员很细心，遇到的都解决了</p>
              <div class="reply">回复：感谢您的支持。</div>
            </div>
          </li>
          <li>
            <div class="photo">
              <img src="../../static/images/photo.jpg">
            </div>
            <div class="text">
              <h5>租客987</h5>
              <p>管理员很细心，遇到的都解决了</p>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from "./scroller"
export default {
  name: 'evaluate',
  data () {
    return {
      score: 0
    }
  },
  methods: {
    scoring(index){
      this.score = index+1
    }
  },
  components: { scroller }
}
</script>
