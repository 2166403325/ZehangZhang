<template>
    <div>
        <div class="cov">
            <div class="title">病毒信息</div>
            <p>{{covDesc.note1}}</p>
            <p>{{covDesc.note2}}</p>
            <p>{{covDesc.note3}}</p>
            <p>{{covDesc.remark1}}</p>
            <p>{{covDesc.remark2}}</p>
            <p>{{covDesc.remark3}}</p>
        </div>
        <div class="hot">
            <div class="title">
                <img src="../../assets/images/hot.png" alt="" width="60px">
            </div>
            <ul>
                <li v-for="item in covNews" :key='item.id'>
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        covDesc: {
            type: Object,
            default: function() {
                return {}
            }
        },
        covNews: {
            type: Array,
            default: function() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.cov {
    padding: 0.1rem;
}
.title {
    border-left: 4px solid rgb(20, 49, 128);
    padding-left: 0.1rem;
}
p {
    line-height: 0.4rem;
}
.hot {
    padding: 0.1rem;
}
</style>