import Vue from 'vue'

import Vuex from 'vuex'


Vue.use(Vuex)
const store =new Vuex.Store({


    state:{
        num:0
    },
    mutations:{
        add(state){
            state.num++
        }
    }
    ,
    update(state,n){
        state.num=n
    }
})
export default store;