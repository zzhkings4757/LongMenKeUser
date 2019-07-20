<!--搜索框组件-->
<template>
  <div class="search-box flex-item">
    <div class="city flex-item" v-if="showCity">
      <span class="icon iconfont icondizhi dc"></span>
      <h4>{{city}}</h4>
    </div>
    <div class="search-form">
      <div class="search-btn icon iconfont iconsearch flex-center" @click="toSubmit"></div>
      <input type="text" :placeholder="placeholder" v-model="searchValue">
    </div>
  </div>
</template>

<script>
export default {
  name: "searchbox",
  props: {
    showCity: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '租床位、租公寓来龙门客赞就够了'
    },
  },
  data() {
    return {
      city: '深圳',
      searchValue: ''
    };
  },
  methods: {
    toSubmit(){
      this.$emit('onSearchSubmit');
    }
  }
};
</script>

