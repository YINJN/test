module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            unitToConvert: "px", // 默认值`px`，需要转换的单位
            viewportWidth: 750,//视窗的宽度，对应的是我们设计稿的宽度 750*1334是iphone6的宽高
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 5,//指定`px`转换为视窗单位值的小数位数，默认是5(很多时候无法整除)
            viewportUnit: 'vw',//指定需要转换成的视窗单位，建议使用vw
            fontViewportUnit: 'vw', //指定字体需要转换成的视窗单位，默认vw;
            // selectorBlackList: ['.ignore', 'tab-bar', 'tab-bar-item', 'navbar', 'tabControl'],//指定不转换为视窗单位的类 
            minPixelValue: 1,// 小于或等于`1px`不转换为视窗单位
            mediaQuery: false,// 允许在媒体查询中转换`px`，默认false
            // exclude: [/node_modules/], //如果是regexp, 忽略全部匹配文件;如果是数组array, 忽略指定文件
            // exclude: [/TabControl/, /Tabbar/, /DetailBottomBar/], // 正则表达式，匹配的内容是不想被转换单位的文件名，添加了这种匹配后凡是文件名中带有这些字符的全部排除
        }
    }
}
