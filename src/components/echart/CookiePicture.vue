<template>
  <div id="cookie" ref="cookie" :style="chartStyle"></div>
</template>

<script>
export default {
  name: 'CookiePicture',

  components: {},

  data: () => ({
    // ? 饼状图的配置
    option: {},
    chartStyle: {
      width: '40rem',
      height: '20rem'
    }
  }),

  props: {
    propOption: {
      type: Object,
      default: () => {}
    }
  },

  computed: {},

  methods: {
    drawLine() {
      setTimeout(() => {
        let cookie = this.$echarts.init(this.$refs.cookie)
        cookie.setOption(this.propOption)
      }, 600)
    }
  },

  /**
   * ! life-hooks
   */
  created() {
    this.drawLine()
  },
  mounted() {}
}
</script>

<style lang="less" scoped></style>
