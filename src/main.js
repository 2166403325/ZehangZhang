import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入css初始化
import './assets/css/base.css'
// 引入js适配移动端
import './assets/js/phone'
// 引入vant组件库
import './plugins/vant'
//引入echarts，并挂载原型上
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

// 使用开发分插件
import echarts from './plugins/echarts'
Vue.use(echarts);

// 引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: {
    Hub: new Vue()
  }
}).$mount('#app')
