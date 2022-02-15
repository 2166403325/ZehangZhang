/***
 * 请求的接口的方法
 */
//请求的axios
import axios from 'axios'
//数据来源：接口地址
import base from './base'

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
    }
    
}

export default api