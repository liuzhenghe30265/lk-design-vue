const obj = {
    name: 'scrollBottom',
    bind(el, binding) {
        const handleScroll = () => {
            const scrollHeight = el.scrollHeight
            const scrollTop = el.scrollTop
            const clientHeight = el.clientHeight

            // 判断是否滚动到底部
            if (scrollTop + clientHeight >= scrollHeight) {
                // 执行触发函数
                binding.value()
            }
        }

        // 添加滚动事件监听
        el.addEventListener('scroll', handleScroll)

        // 在元素销毁时移除事件监听
        el._scrollBottomHandler = handleScroll
    },

    unbind(el) {
        // 移除事件监听
        el.removeEventListener('scroll', el._scrollBottomHandler)
        delete el._scrollBottomHandler
    },
}

obj.install = function (Vue) {
    Vue.directive(obj.name, obj)
}

export default obj