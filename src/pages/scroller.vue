<!--滚动容器-->
<template>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <div class="scroll-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: "scroller",
  props: {
    
  },
  data() {
    return {};
  },
  mounted() {
    let that = this
    let scroll = new BScroll('.scroll-wrapper', {
      click: true,
      probeType: 0,
      scrollY: true,
    })
  },
  methods: {}
};
</script>

