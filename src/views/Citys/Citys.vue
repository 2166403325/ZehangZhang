<template>
    <div>
        <h2>{{cityname}}--城市界面</h2>
        <div id="main" style="width: 7.5rem; height: 9rem"></div>
    </div>
</template>

<script>
import covApi from '../../api/index'
export default {
    props: ['cityname'],
    mounted() {
        // 获取城市疫情接口数据
        covApi.getCity(this.cityname)
        .then(res => {
            console.log("--城市数据=", res.data);
            let arr = res.data.retdata.subList;
            let newArr = [];
            arr.forEach(ele => {
                let obj = {}
                if (ele.city.endsWith('区')|| ele.city.endsWith('州') || ele.city.endsWith('盟') || ele.city.endsWith('旗')){
                    obj.name = ele.city;
                } else {
                    obj.name = ele.city + '市';
                }
                obj.value = ele.confirm; // 累计确诊
                newArr.push(obj)
            });
            console.log("重构后的城市数据：", newArr)
            this.$myChart.cityMap('main', this.cityname, newArr)            
        });
    },
}
</script>