<!--滚动容器-->
<template>
  <div class="scroll-wrapper">
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
    const vm = this
    return {};
  },
  mounted() {
    this.scroll = new BScroll('.scroll-wrapper', {
      click: true,
      probeType: 0,
      scrollY: true,
    });
    setTimeout(()=>{
      vm.scroll.scrollUpdate()
    },1000)
  },
  methods: {
    scrollUpdate(){
      this.scroll.refresh()
    }
  }
};
</script>

