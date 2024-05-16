// 创建一个全局的点击事件处理函数
const handleClickOutside = (event, el, binding) => {
    // 检查点击的元素是否在绑定的元素内部
    let include = []
    if (binding.value && binding.value.include) {
        include = binding.value.include().filter(_ => _)
    }
    let isInclude = false
    if (include.length) {
        const arr = include.map(_ => _.contains(event.target))
        isInclude = arr.indexOf(true) > -1
    }
    if (!(el === event.target || el.contains(event.target) || isInclude)) {
        // 如果点击的元素不在绑定的元素内部，则触发绑定的回调函数
        if (binding.value && binding.value.handler) {
            if (binding.value.handler) {
                binding.value.handler()
            }
        } else {
            binding.value()
        }
    }
}
/**
 * @description: 外部点击

方式一：
  <div v-click-outside="handleClickOutside"></div>

方式二：指定元素之外生效
  <div
    v-click-outside="{
      handler: handleClickOutside,
      include: include
    }"
  >
  </div>

include() {
    return [document.querySelector('.current_info')]
},
handleClickOutside() {
    this.$store.commit('updateOrgListVisible', false)
},

 */
// Vue.directive('clickOutside', )
const obj = {
    name: 'clickOutside',
    // 指令的绑定函数，在元素插入到 DOM 中时调用
    bind: function (el, binding) {
        // 创建一个点击事件处理函数，并将它保存在元素的属性中
        const handleClick = (event) => handleClickOutside(event, el, binding)
        el.__vueClickOutside__ = handleClick

        // 在 document 上监听点击事件
        document.addEventListener('click', handleClick)
    },
    // 指令的解绑函数，在元素从 DOM 中移除时调用
    unbind(el) {
        // 移除之前保存在元素属性中的点击事件处理函数
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
    }
}

obj.install = function (Vue) {
    Vue.directive(obj.name, obj)
}

export default obj