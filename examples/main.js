import Vue from 'vue'
import App from './App.vue'

// * 完整引入
import LkDesignVue from '../packages/index'
Vue.use(LkDesignVue)

// * 按需引入，减少打包体积
// import Button from '../packages/button/index'
// import Copy from '../packages/copy/index'
// Vue.use(Button)
// Vue.use(Copy)

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
