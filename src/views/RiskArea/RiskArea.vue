<template>
    <div>
        <h2>风险地区</h2>
        <div class="content">
            <div v-if="this.highArea.length > 0">
                <van-notice-bar
                    scrollable
                    :left-icon='highTitle'
                    text="高风险地区"
                />
                <div class="title">
                    <ul>
                        <li class="highList" v-for="(item, index) in highArea" :key="index">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </div>
            <br>
            <div v-if="this.midArea.length > 0">
                <van-notice-bar
                    scrollable
                    :left-icon='midTitle'
                    text="中风险风险地区"
                />
                <div class="title">
                    <ul>
                        <li class="midList" v-for="(item, index) in midArea" :key="index">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CovApi from '../../api/index.js';
import highTitle from '../../assets/images/highTitle.png';
import midTitle from '../../assets/images/midTitle.png';

export default {
    data() {
        return {
            highArea: [], // 高风险地区数据
            midArea: [], // 中风险地区数据
            highTitle,
            midTitle
        }
    },
    created() {
        // 请求病毒数据接口
        CovApi.getCovInfo()
        .then(res => {
            let riskarea = res.data.newslist[0].riskarea;
            console.log("riskarea =", riskarea);
            this.highArea = riskarea.high;
            this.midArea = riskarea.mid;
        })
    },
}
</script>

<style scoped>

</style>