<template>
    <div>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in banner" :key="item.title">
                <img :src="item.image" alt="" width="100%">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <ul class="list">
            <li
                v-for="(item, index) in banner"
                :key='item.title'
                @click="changeSwiper(index)"
                :class="{active: index == num}"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import covApi from '../../../api/index'
export default {
    data() {
        let that = this;
        return {
            num: 0,
            arr: [1, 2, 3, 4, 5],
            banner: [],// 轮播展示的数据
            // swiper配置内容
            swiperOptions:{
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop: true,
                on: {
                    // 回调：swiper从一个slide过渡到另一个slide时执行
                    slideChange: function() {
                        // 轮播切换获取当前下标，修改num同步切换
                        if (this.activeIndex == that.arr.length + 1) {
                            that.num = 0;
                        } else {
                            that.num = this.activeIndex - 1;
                        }
                    },
                } ,
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        covApi.getSwiperBanner()
        .then(res => {
            console.log("--轮播图--",res.data);
            this.banner = res.data.result;
        })
    },
    methods: {
        changeSwiper(index) {
            this.num = index;
            this.swiper.slideTo(index + 1, 1000, false);
        }
    },
}
</script>

<style scoped lang="less">
.list {
    display: flex;
    li {
        flex: 1;
        padding: 0.1rem;
        font-size: 0.24rem;
        line-height: 0.32rem;
        margin: 0.1rem;
        background: #eee;
        color: #666;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .active {
        background: rgb(80, 116, 173);
        color: #fff
    }
}
</style>