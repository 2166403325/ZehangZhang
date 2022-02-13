<template>
    <div class="num">
        <div class="content">
            <div class="title">截至{{epidemicData.modifyTime | nowTime}}全国数据统计</div>
            <ul class="wrap">
                <li>
                    <span>较昨日 </span>
                    <span class="yesNumber">{{epidemicData.currentConfirmedIncr | yesNumer}}</span>
                    <div class="bold">{{epidemicData.currentConfirmedCount}}</div>
                    <strong>现存确诊</strong>
                </li>
                <li>
                    <span>较昨日 </span>
                    <span class="yesNumber">{{epidemicData.suspectedCount | yesNumer}}</span>
                    <div class="bold">{{epidemicData.suspectedCount}}</div>
                    <strong>境外输入</strong>
                </li>
                <li>
                    <span>较昨日 </span>
                    <span class="yesNumber">{{epidemicData.confirmedIncr | yesNumer}}</span>
                    <div class="bold">{{epidemicData.seriousCount}}</div>
                    <strong>现存无症状</strong>
                </li>
                <li>
                    <span>较昨日 </span>
                    <span class="yesNumber">{{epidemicData.confirmedIncr | yesNumer}}</span>
                    <div class="bold">{{epidemicData.confirmedCount}}</div>
                    <strong>累计确诊</strong>
                </li>
                <li>
                    <span>较昨日 </span>
                    <span class="yesNumber">{{epidemicData.deadIncr | yesNumer}}</span>
                    <div class="bold">{{epidemicData.deadCount}}</div>
                    <strong>累计死亡</strong>
                </li>                <li>
                    <span>较昨日 </span>
                    <span class="yesNumber">{{epidemicData.curedIncr | yesNumer}}</span>
                    <div class="bold">{{epidemicData.curedCount}}</div>
                    <strong>累计治愈</strong>
                </li>                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        epidemicData: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    // 定义过滤器
    filters: {
        // 对疫情数据统计上升/下降数量的
        yesNumer: function(val) {
            val= val > 0 ? '+' + val : val; 
            return val
        },
        nowTime: function(time) {
            time = new Date().toLocaleString("chinese",{ hour12: false });
            return time;
        }
    }
}
</script>

<style scoped lang="less">
.num {
    background: #f5f5f5;
    padding-top: 0.2rem;
    .content {
        // background: rgb(125, 209, 202);
        height: 3.2rem;
        min-width: 2rem;
        border-radius: 0.2rem 0.2rem 0 0;
        padding: 0.2rem;
        .title {
            color: #666;
            margin-bottom: 0.2rem;
        }
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
        border-radius: 0.2rem;
        box-shadow: 0 0 2px 2px rgba(175, 172, 172, 20%);
        li {
            width: 33.333333%;
            text-align: center;
            margin-bottom: 0.2rem;
        }
        .bold {
            font-size: 18px;
            font-weight: bold;
        }
        li:nth-child(1) .bold,li:nth-child(1) .yesNumber {
            color: rgb(202, 30, 30);
        }
        li:nth-child(2) .bold, li:nth-child(2) .yesNumber {
            color: rgb(41, 41, 224);
        }
        li:nth-child(3) .bold, li:nth-child(3) .yesNumber {
            color: rgb(26, 108, 201);
        }
        li:nth-child(4) .bold, li:nth-child(4) .yesNumber {
            color: rgb(172, 172, 43);
        }
        li:nth-child(5) .bold, li:nth-child(5) .yesNumber {
            color: rgb(212, 39, 126);
        }
        li:nth-child(6) .bold, li:nth-child(6) .yesNumber {
            color: rgb(22, 204, 119);
        }
    }
}
</style>