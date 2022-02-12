<template>
    <div>
        <div class="home">
            <img src="../assets/images/1.jpg" width="100%"/>
        </div>
        <CovInfo
            :covDesc="covDesc"
            :covNews="covNews"
        />
    </div>
</template>

<script>
import CovInfo from './CovInfo/CovINfo.vue'
import CovApi from '../api/index'
export default {
    name: 'Home',
    components: {
        CovInfo
    },
    data() {
        return {
            covDesc: {},
            covNews: []
        }
    },
    created() {
        // 请求病毒数据接口
        CovApi.getCovInfo()
        .then(res => {
            const covInfo = res.data;
            console.log("covInfo =", covInfo);
            // 处理病毒介绍信息
            this.dealCovIntroductionInfo(covInfo);
            // 获取疫情热点信息
            this.getCovHotNews(covInfo);
        })
    },
    methods: {
        dealCovIntroductionInfo(data) {
            let CovIntroInfo = data.newslist[0].desc;
            this.covDesc = {
                note1: CovIntroInfo.note1,
                note2: CovIntroInfo.note2,
                note3: CovIntroInfo.note3,
                remark1: CovIntroInfo.remark1,
                remark2: CovIntroInfo.remark2,
                remark3: CovIntroInfo.remark3,
            };
            console.log("covIntroDesc =", this.covDesc)
        },
        getCovHotNews(data) {
            this.covNews = data.newslist[0].news;
        }
    },
}
</script>

<style scoped>

</style>
