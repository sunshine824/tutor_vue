import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import SignContractInput from '@/components/sign_contract_input'
import SignContractEWM from '@/components/sign_contract_ewm'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '视频备考手册',
      component: Index
    },
    {
      path:'/sign_contract',
      name:'导师签约',
      component:SignContractInput
    },
    {
      path:'/sign_contract_end',
      name:'最后一步',
      component:SignContractEWM
    }
  ]
})
