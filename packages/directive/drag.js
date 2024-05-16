const obj = {
    name: 'drag',
    bind: function (el, binding, vnode) {
        const odiv = el // 获取当前元素
        odiv.onmousedown = e => {
            // 算出鼠标相对元素的位置
            const disX = e.clientX - odiv.offsetLeft
            const disY = e.clientY - odiv.offsetTop

            document.onmousemove = e => {
                // * 防止拖动结束触发点击事件
                // vnode.context.$emit('dragging', true)
                el.classList.add('dragging')
                // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                const left = e.clientX - disX
                const top = e.clientY - disY

                // 绑定元素位置到positionX和positionY上面
                e.positionX = top
                e.positionY = left

                // 移动当前元素
                odiv.style.left = left + 'px'
                odiv.style.top = top + 'px'
                odiv.style.right = 'auto'
                odiv.style.bottom = 'auto'
                e.stopPropagation()
            }
            document.onmouseup = (e) => {
                setTimeout(() => {
                    el.classList.remove('dragging')
                }, 0)
                // vnode.context.$emit('dragging', false)
                if (binding.value && binding.value.viewer) {
                    // * 限制在窗口内
                    const left = e.clientX - disX
                    const top = e.clientY - disY
                    if (top < 0) {
                        odiv.style.top = odiv.offsetHeight / 2 + 'px'
                    }
                    if (left > window.innerWidth - odiv.offsetWidth / 2) {
                        odiv.style.left = window.innerWidth - odiv.offsetWidth / 2 + 'px'
                    }
                    if (top > window.innerHeight) {
                        odiv.style.top = window.innerHeight - odiv.offsetHeight / 2 + 'px'
                    }
                    if (left < odiv.offsetHeight / 2) {
                        odiv.style.left = odiv.offsetHeight / 2 + 'px'
                    }
                }
                document.onmousemove = null
                document.onmouseup = null
            }
        }
        odiv.ontouchstart = e => {
            const disX = e.touches[0].clientX - odiv.offsetLeft
            const disY = e.touches[0].clientY - odiv.offsetTop
            document.ontouchmove = e => {
                el.classList.add('dragging')
                // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                const left = e.touches[0].clientX - disX
                const top = e.touches[0].clientY - disY

                // 绑定元素位置到positionX和positionY上面
                e.touches[0].positionX = top
                e.touches[0].positionY = left

                // 移动当前元素
                odiv.style.left = left + 'px'
                odiv.style.top = top + 'px'
                odiv.style.right = 'auto'
                odiv.style.bottom = 'auto'
                if (binding.value && binding.value.viewer) {
                    // * 限制在窗口内
                    const left = e.touches[0].clientX - disX
                    const top = e.touches[0].clientY - disY
                    if (top < 0) {
                        odiv.style.top = odiv.offsetHeight / 2 + 'px'
                    }
                    if (left > window.innerWidth - odiv.offsetWidth / 2) {
                        odiv.style.left = window.innerWidth - odiv.offsetWidth / 2 + 'px'
                    }
                    if (top > window.innerHeight) {
                        odiv.style.top = window.innerHeight - odiv.offsetHeight / 2 + 'px'
                    }
                    if (left < odiv.offsetHeight / 2) {
                        odiv.style.left = odiv.offsetHeight / 2 + 'px'
                    }
                }
                e.stopPropagation()
            }
            document.ontouchend = () => {
                setTimeout(() => {
                    el.classList.remove('dragging')
                }, 0)
                document.ontouchend = null
                document.ontouchmove = null
            }
        }
    }
}

obj.install = function (Vue) {
    Vue.directive(obj.name, obj)
}

export default obj