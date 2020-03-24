import axios from "axios";
let api = "http://vue.thexxdd.cn"
    // 轮播的请求
export const banner = () => {
        return axios.get(api + "/tourism")
    }
    // 攻略的请求
export const homes = (page) => {
        return axios.get(api + "/homes/?page=" + page)
    }
    // 攻略的详情页
export const goods = (goodsId) => {
        return axios.get(api + "/goods/" + goodsId)
    }
    // 语音合成
export const speeched = (params) => {
        return axios.post((api + "/speech/"), params)
    }
    // 搜索
export const searchData = (params) => {
    return axios.get(api + "/goods/?search=" + params)
}