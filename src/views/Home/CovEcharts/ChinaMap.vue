<template>
    <div>
        <div class="title">国内疫情地图</div>
        <!-- 地图容器 -->
        <van-tabs v-model="active" animated @change='change'>
            <van-tab title="现存确诊">
                <div id="nowMain" style="width: 7.5rem; height: 7rem"></div>
            </van-tab>
            <van-tab title="累计确诊">
                <div id="main" style="width: 7.5rem; height: 7rem"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
// 基础使用，组件内部导入，仅供本组件使用
// import echarts from 'echarts'
import CovApi from "../../../api/index";
export default {
    data() {
        return {
            active: 0,
            arr: [],
            cumData: null,
            nowData: null
        }
    },
    // echarts实例创建地图
    mounted() {
            // 先获取疫情数据
            CovApi.getChinaData().then((res) => {
                console.log("ChinaMap Data =", res.data);
                // 获取省份数据
                let citys = res.data.retdata;
                let arr = []; // 累计
                let nowArr = []; // 现存
                for(let i = 0; i < citys.length; i++) {
                    let obj = {};
                    obj.name = citys[i].xArea;
                    obj.value = citys[i].confirm;
                    let now = {};
                    now.name = citys[i].xArea;
                    now.value = citys[i].curConfirm;
                    arr.push(obj);
                    nowArr.push(now);
                }
                this.arr = arr;
                console.log("城市数据", arr);
                // 延迟加载
                this.$nextTick(() => {
                    // 显示现存确诊地图
                    this.$myChart.chinaMap("nowMain", nowArr);
                    localStorage.setItem("nowData", nowArr);
                })
            })

    },
    methods: {
        change(title) { // title为 van-tabs 的index 0：现存确诊 1：累计确诊
            console.log("test ---", title)
            if (title == 1) {
                this.$nextTick(() => {
                    // 显示累计确诊地图
                    this.$myChart.chinaMap("main", this.arr)
                });
            }
        }
    },
}
</script>

<style lang='less' scoped>
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
    border-top: 1px solid #eee;
}
.title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
#main,#nowMain{
  background: #f5f5f5;
}
</style>