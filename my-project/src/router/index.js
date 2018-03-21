import Vue from 'vue'
import Router from 'vue-router'

import zhongj from '@/page/zhongj'
import guc from '@/page/guc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zhongj',
      component: zhongj
    },
    {
      path: '/guc',
      name: 'guc',
      component: guc
    }
  ]
})
