<template>
    <div id="home">
        <!-- 疫情首页图 -->
        <div class="logo">
            <img src="../../assets/images/1.jpg" width="100%"/>

            <!-- 点击进入城市选择 -->
            <router-link class="select" to="/selectCity">{{ city }}</router-link>
        </div>
        <!-- 病毒信息 -->
        <div class="bgColor">
            <CovInfo
                :covDesc="covDesc"
                :covNews="covNews"
            />
        </div>
        <!-- 3.疫情导航 -->
        <div class="list bgColor">
            <div>
                <router-link to="/riskArea">
                    <img src="../../assets/images/1.png" alt="">
                    <div>风险地区</div>
                </router-link>
            </div>
            <div>
                <router-link to="/account">
                    <img src="../../assets/images/2.png" alt="">
                    <div>核算检测</div>                
                </router-link>
            </div>
            <div>
                <router-link to="/prevention">
                    <img src="../../assets/images/3.png" alt="">
                    <div>防疫物资</div>
                </router-link>

            </div>
            <div>
                <router-link to="/travel">
                    <img src="../../assets/images/4.png" alt="">
                    <div>出行政策</div>
                </router-link>
            </div>
        </div>
        <!-- 4.数据统计 -->
        <div class="bgColor">
            <CovStatistical
                :epidemicData="epidemicData"
            />
        </div>

        <!-- 5.中国疫情形势 -->
        <div class="bgColor">
            <ChinaMap/>
        </div>

        <!-- 6.世界疫情形势 -->
        <div class="bgColor">
            <WorldMap/>
        </div>

        <!-- 7.轮播图 -->
        <VueSwiper />
    </div>
</template>

<script>
import CovInfo from './CovInfo/CovINfo.vue'
import CovStatistical from './CovInfo/CovStatistical.vue'
import CovApi from '../../api/index'
import ChinaMap from './CovEcharts/ChinaMap.vue'
import WorldMap from './CovEcharts/WorldMap.vue';
import VueSwiper from './VueSwiper/VueSwiper.vue'
export default {
    name: 'Home',
    components: {
        CovInfo,
        CovStatistical,
        ChinaMap,
        WorldMap,
        VueSwiper
    },
    data() {
        return {
            covDesc: {},
            covNews: [],
            epidemicData: {},
            city: '请选择所在地'
        }
    },
    beforeDestroy() {
        this.$bus.$off('city');
    },
    created() {
        this.$bus.$on('city', val => {
            console.log("--val--", val);
            this.city = val;
        })
        // 请求病毒数据接口
        CovApi.getCovInfo()
        .then(res => {
            const covInfo = res.data.newslist[0];
            console.log("covInfo =", covInfo);
            // 处理病毒介绍信息
            this.dealCovIntroductionInfo(covInfo);
            // 获取疫情热点信息
            this.getCovHotNews(covInfo);
            // 全国疫情数据统计信息
            this.dealNationalEpidemicData(covInfo.desc);
        })
    },
    methods: {
        dealCovIntroductionInfo(data) {
            let CovIntroInfo = data.desc;
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
            this.covNews = data.news;
        },
        dealNationalEpidemicData(data) {
            this.epidemicData = {
                currentConfirmedCount: data.currentConfirmedCount,
                confirmedCount: data.confirmedCount,
                suspectedCount: data.suspectedCount,
                curedCount: data.curedCount,
                deadCount: data.deadCount,
                seriousCount: data.seriousCount,
                suspectedIncr: data.suspectedIncr,
                currentConfirmedIncr: data.currentConfirmedIncr,
                confirmedIncr: data.confirmedIncr,
                curedIncr: data.curedIncr,
                deadIncr: data.deadIncr,
                seriousIncr: data.seriousIncr,
                modifyTime: data.modifyTime,
            };
            console.log('epidemicData =', this.epidemicData)
        },

    },
}
</script>

<style scoped lang="less">
#home {
    background: #f7f7f7;
}
.logo {
  position: relative;
  .select {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
  }
}
.list {
    display: flex;
    padding-bottom: 0.2rem;
    > div {
        flex: 1;
        text-align: center;
        color: #666;
        img {
            width: 0.8rem;
            height: 0.8rem;
        }
    }
}
</style>
