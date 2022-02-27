<template>
  <div class="selectCity">
    <h2 class="title">城市选择</h2>
    <van-index-bar :index-list="indexList">
      <template v-for="(item, name) in citylist">
        <van-index-anchor :index="name" :key="name" />
        <van-cell v-for="ele in item" :title="ele.name" :key="ele.id" @click="choose"  />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import CovApi from '../../api/index';
export default {
  data() {
    return {
      citylist: {},
      indexList: [],
      city: ''
    };
  },
  methods: {
    choose(event) {
      console.log(event.target.innerText);
      this.city = event.target.innerText;
      this.$router.go(-1); // 返回
    }
  },
  created() {
    CovApi.chooseCity().then((res) => {
      console.log("--selectCity城市了表--", res.data.result.citylist);
      this.citylist = res.data.result.citylist;
      this.indexList = Object.keys(res.data.result.citylist)
      console.log(this.indexList);
    })
  },
  destroyed() {
    this.$bus.$emit('city',this.city)
  },
};
</script>
<style scoped lang="less">
.selectCity {
  background: #f5f5f5;
  .title {
    padding: 0.2rem;
  }
}
</style>