Vue.config.productionTip = false
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css';

Vue.use(ElementUI);
Vue.use(vueRouter)
Vue.use(Vuex)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
