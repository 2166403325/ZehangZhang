<template>
    <div>
        <div class="title">世界疫情地图</div>
        <!-- 世界疫情地图容器 -->
        <div id="main" style="width: 7.5rem; height: 7rem"></div>
    </div>
</template>

<script>
import CovApi from '../../../api/index'
export default {
    mounted() {
        CovApi.getWorldData().then((res) => {
            console.log("世界疫情数据：", res.data);
            let world = res.data.retdata;
            let arr = []; // 累计
            for (let i = 0; i < world.length; i++) {
                let obj = {};
                obj.name = world[i].xArea;
                obj.value = world[i].confirm; // 累计确诊人数
                arr.push(obj);
            }
            this.$myChart.worldMap("main", arr);
        });
    },
}
</script>