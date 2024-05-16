const obj = {
    name: 'stop',
    bind(el) {
        el.onmousedown = e => {
            e.stopPropagation()
        }
        el.ontouchstart = e => {
            e.stopPropagation()
        }
    }
}

obj.install = function (Vue) {
    Vue.directive(obj.name, obj)
}

export default obj