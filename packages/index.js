// * 指令
import {
  clickOutside,
  watchResize,
  drag,
  stop,
  scrollBottom
} from './directive'

// * 组件
import Button from './button/index'
import Copy from './copy/index'

const components = [
  Button,
  Copy
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.use(clickOutside)
  Vue.use(watchResize)
  Vue.use(drag)
  Vue.use(stop)
  Vue.use(scrollBottom)
}

// 如果是直接引用，就不调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  clickOutside,
  watchResize,
  drag,
  stop,
  scrollBottom,
  Button,
  Copy
}