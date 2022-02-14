<template>
    <div class="supplies">
        <img src="../../assets/images/wuzi.png" alt="" width="100%">
        <div class="wrapper">
            <van-tabs 
                v-model="active" 
                animated sticky 
            >
                <van-tab
                    v-for="item in arr"
                    :title="item.title"
                    :key="item.title"
                >
                    <img :src="item.img" alt="" width="100%">
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import alcoholImg from '../../assets/images/jiujing.png'
import facemaskImg from '../../assets/images/kouzhao.png'
import xishouye from '../../assets/images/xishouye.png'
import wenduji from '../../assets/images/wenduji.png'
export default {
    data() {
        return {
            active: 1,
            arr: [
                {
                    img: alcoholImg,
                    title: '消毒剂'
                },
                {
                    img: facemaskImg,
                    title: '口罩'
                },
                {
                    img: xishouye,
                    title: '洗手液'
                },
                {
                    img: wenduji,
                    title: '温度计'
                }
            ]
        }
    },
}
</script>