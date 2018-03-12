import Vue from 'vue'
import Router from 'vue-router'

import zhongj from '@/page/zhongj'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zhongj',
      component: zhongj
    }
  ]
})
