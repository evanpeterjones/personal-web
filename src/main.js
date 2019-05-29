import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state : { 
    haiku : "<h1>Hello,<br />I'm Evan.</h1><p>Developer, Creator,</p><p><i>~ this is a Haiku ~</i></p><br/></div>",
    mobile : true
  },
  mutations : {
    update (state, haiku) {
      state.haiku = haiku
    },
    mobile (state, update) {
      state.mobile = update
    }
  },
  getters : {
    haiku : state => state.haiku,
    mobile : state => state.mobile
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
