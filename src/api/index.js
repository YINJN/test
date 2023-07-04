//当前这个模块：API进行统一管理
import requests from "./request";

export const test = () => {
    return requests({ url: '/xlz/api/harmonious/arena/client?sort=0&pageSize=4', method: 'get' })
}