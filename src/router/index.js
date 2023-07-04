// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Index from '@/views/index'
import DayMenu from '@/views/dayMenu'
import WeekMenu from '@/views/weekMenu'
import Accompany from '@/views/accompany'
import Evaluate from '@/views/evaluate'
import Zhineng from '@/views/zhineng'
import Shoudong1 from '@/views/shoudong1'
import Shoudong2 from '@/views/shoudong2'
import Stock from '@/views/stock'
import Warn from '@/views/warn'
import Rank from '@/views/rank'
import Info from '@/views/info'
import Outbound from '@/views/outbound'
import Record from '@/views/record'
import Note from '@/views/note'
// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/dayMenu',
            name: 'dayMenu',
            component: DayMenu
        },
        {
            path: '/weekMenu',
            name: 'weekMenu',
            component: WeekMenu
        },
        {
            path: '/accompany',
            name: 'accompany',
            component: Accompany,
        },
        {
            path: '/evaluate',
            name: 'evaluate',
            component: Evaluate
        },
        {
            path: '/zhineng',
            name: 'zhineng',
            component: Zhineng
        },
        {
            path: '/shoudong1',
            name: 'shoudong1',
            component: Shoudong1
        },
        {
            path: '/shoudong2',
            name: 'shoudong2',
            component: Shoudong2
        },
        {
            path: '/stock',
            name: 'stock',
            component: Stock
        },
        {
            path: '/warn',
            name: 'warn',
            component: Warn
        },
        {
            path: '/rank',
            name: 'rank',
            component: Rank
        },
        {
            path: '/info',
            name: 'info',
            component: Info
        },
        {
            path: '/outbound',
            name: 'outbound',
            component: Outbound
        },
        {
            path: '/record',
            name: 'record',
            component: Record
        },
        {
            path: '/note',
            name: 'note',
            component: Note
        },
    ]
})