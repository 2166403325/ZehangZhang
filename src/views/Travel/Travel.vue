<template>
    <div>
        <div class="title">
            疫情期间出行防疫政策
        </div>
        <!-- 选择出发城市 -->
        <van-field
        v-model="goCity"
        is-link
        readonly
        label="出发城市"
        placeholder="请选择所在地区"
        @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
        <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
        />

        <!-- 到达城市 -->
        </van-popup>
                <van-field
        v-model="toCity"
        is-link
        readonly
        label="到达城市"
        placeholder="请选择所在地区"
        @click="show2 = true"
        />
        <van-popup v-model="show2" round position="bottom">
        <van-cascader
            v-model="cascaderValue2"
            title="请选择所在地区"
            :options="options"
            @close="show2 = false"
            @finish="toFinish"
        />
        </van-popup>

        <!-- 查询按钮 -->
        <div class="search">
            <van-button type="primary" size="large" @click="searchResult">
                查询疫情防疫
            </van-button>
        </div>

        <!-- 政策查询结果 -->
        <div class="content">
            <div>出发城市:</div>

            <div>到达城市</div>
        </div>
    </div>
</template>

<script>
import covApi from '../../api/index';
export default {
  data() {
    return {
      show: false, // 弹窗状态 false为隐藏
      show2: false,
      goCity: '',
      toCity: '',
      from: '',
      to: '',
      cascaderValue: '',
      cascaderValue2: '',
      from_info: '',
      to_info: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions, tabIndex }) {
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join('/');
      console.log("tabIndex1=", tabIndex);
    },
    toFinish({ value, selectedOptions, tabIndex }) {
      this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join('/');
      console.log("tabIndex2=", tabIndex)
    },
    // 获取疫情查询政策数据
    searchResult() {
      console.log("查询结果前填写的地址，从", this.from, " 到", this.to);
      covApi.getTravelQuery({
        from: this.from,
        to: this.to
      })
      .then(res=> {
        console.log("-查询城市疫情-", res.data);
        this.from_info = res.data.result.from_info;
        this.to_info = res.data.result.to_info;
      })
    }
  },
  created() {
    covApi.getTravel().then((res) => {
      console.log("--出行城市--", res.data.result);
      let result = res.data.result;
      let arr = [];
      result.forEach((item) => {
        let obj = {};
        obj.text = item.province; // 省份名称
        obj.value = item.province_id; // 省份标识
        obj.children = [];
        item.citys.forEach((ele) => {
          let child = {};
          child.text = ele.city;
          child.value = ele.city_id;
          obj.children.push(child);
        });
        arr.push(obj);
      });
      console.log("--处理后的城市数据--", arr);
      this.options = arr;
    })
  },
};

</script>

<style scoped>
.title {
  padding: 0.2rem;
}
.search {
  margin: 0.2rem;
}
</style>

