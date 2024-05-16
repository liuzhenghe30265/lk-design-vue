<template>
  <div class="lk_button">
    <button>
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LkButton',

  components: {},

  props: {
    name: {
      type: String,
      default: ''
    },
    obj: {
      type: Object,
      default() {
        return {}
      }
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

  methods: {}
}
</script>

<style lang='scss' scoped>
.lk_button {
  display: inline-block;
}
</style>