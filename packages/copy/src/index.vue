<template>
  <div
    class="lk_copy"
    @click="handleClick(value)"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LkCopy',

  components: {},

  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {}
  },

  computed: {},

  watch: {
    obj: {
      handler(val, oldVal) {},
      deep: false,
      immediate: false
    }
  },

  mounted() {},

  methods: {
    handleClick() {
      const input = document.createElement('textarea')
      input.value = this.value
      document.body.appendChild(input)
      input.select()
      input.setSelectionRange(0, 99999)
      document.execCommand('copy')
      document.body.removeChild(input)
      alert('复制成功！')
    }
  }
}
</script>

<style lang='scss' scoped>
.lk_copy {
  display: inline-block;
}
</style>