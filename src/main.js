// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui'
import VueLazyload from 'vue-lazyload'


import 'common/stylus/index.styl'
import 'common/stylus/iconfont.css'
import 'swiper/dist/css/swiper.css' //VueAwesomeSwiper自带样式
import 'mint-ui/lib/style.css';

fastclick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(Mint);

Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading:'./common/image/default.png'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
