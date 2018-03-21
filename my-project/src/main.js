// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import Axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)
Vue.filter("qian",function(data){
  return"￥"+data;
})

import store from "@/store/car"
console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
