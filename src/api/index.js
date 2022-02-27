/***
 * 请求的接口的方法
 */
//请求的axios
import axios from 'axios'
//数据来源：接口地址
import base from './base'
// 引入md5
import md5 from 'md5-js'

//api数据获取方法
const api ={
    /**
     * 病毒信息获取
     */
    getCovInfo(){
        return axios.get(base.host+base.covInfo)
    },
    /**
     * 获取国内疫情
     */
    getChinaData(){
        return axios.get(base.baseUrl+base.chinaData);
    },
    /**
     * 世界疫情
     */
    getWorldData(){
        return axios.get(base.baseUrl+base.worldData)
    },
    /**
     * 城市接口
     * 参数：format=json&appid=6938&city_name=城市名称&sign=md5加密字符串
     */
    getCity(city_name) {
        // return axios.get(base.baseUrl + base.city + '?')
        // 使用md5
        let rules = md5('appid14175city_name'+city_name+'formatjsona9d0644e970005490307a86764bd25e1');
        let canshu = 'format=json&appid=14175&city_name='+city_name+'&sign='+rules;

        console.log("rules =",rules);
        return axios.get(base.baseUrl+base.city+'?'+canshu)
    },
    /**
     * 全球数据获取
     */
    getAllData() {
        return axios.get(base.baseUrl + base.allData)
    },
    /**
     * 轮播数据接口
     */
    getSwiperBanner() {
        return axios.get(base.swiperBanner)
    },
    /**
     * 出行城市
     */
    getTravel() {
        return axios.get(base.travel)
    },
    /**
     * 城市出行政策
     */
    getTravelQuery(params) {
        console.log("params =", params)
        return axios.get(base.travelQuery,{
            params
        })
    },
    chooseCity() {
        return axios.get(base.chooseCity)
    }
}

export default api