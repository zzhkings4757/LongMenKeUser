<!--底部导航-->
<template>
  <ul class="public-list">
    <li v-for="(item,index) in dataList" :key="index">
      <router-link :to="item.linkPath">
        <div class="img" :style="{'background-image': 'url('+item.imgUrl+')'}"></div>
        <div class="text">
          <h4>{{item.title}}</h4>
          <div class="adv">
            <span v-for="(subItem,subIndex) in item.advantages" :key="subIndex">{{subItem}}</span>
          </div>
          <div class="spec">
            <span v-for="(subItem,subIndex) in item.specifications" :key="subIndex">{{subItem}}</span>
          </div>
          <div class="address">
            <span class="icon iconfont icondizhi1"></span>
            <p>{{item.address}}</p>
          </div>
          <div class="price"><span>{{item.price}}</span>元/{{item.unit}}</div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pupup",
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
