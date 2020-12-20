<template>
  <div id="line" ref="line" :style="chartStyle"></div>
</template>

<script>
export default {
  name: 'LineChart',

  components: {},

  data: () => ({}),

  props: {
    chartStyle: {
      type: Object,
      default: () => {}
    },
    option: {
      type: Object,
      default: () => {}
    }
  },

  computed: {},

  methods: {
    drawLine() {
      setTimeout(() => {
        let line = this.$echarts.init(this.$refs.line)
        line.setOption(this.option)
      }, 600)
    }
  },
  /**
   * ! life-hooks
   */
  created() {
    this.drawLine()
  }
}
</script>

<style lang="less" scoped></style>
