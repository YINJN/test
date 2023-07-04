//对于axios进行二次封装
import axios from 'axios';
const requests = axios.create({
    //配置对象
    //基础路径，发出请求的时候，路径当中会出现api
    baseURL: 'https://www.qirenit.com',
    //代表请求超过的时间5s
    timeout: 5000,
});
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
requests.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
//对外暴露
export default requests;