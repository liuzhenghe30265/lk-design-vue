<template>
  <div id="app">
    <lk-button v-click-outside="{handler: handleClickOutside, include}">
      LkButton
    </lk-button>
    <lk-copy value="复制内容...">
      点击复制
    </lk-copy>
    <div
      v-watch-resize="handleResize"
      style="width: 100%;border: 1px solid;"
    >
      watchResize
    </div>
    <div
      v-drag
      style="width: 200px;height: 200px;position: absolute;left: 100px;top: 100px;border: 1px solid;"
    >
      drag
      <div v-stop>stop</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    handleResize(value) {
      console.log('handleResize', value)
    },
    include() {
      return [document.querySelector('.current_info')]
    },
    handleClickOutside() {
      console.log('ClickOutside')
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
