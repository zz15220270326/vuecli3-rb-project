<template>
  <div id="columnPicture" ref="columnPicture" :style="chartStyle"></div>
</template>
<script>
export default {
  name: 'ColumnPicture',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      option: {}
    }
  },
  props: {
    chartStyle: {
      type: Object,
      default: () => {}
    },
    render: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    // ? async function
    // ? 绘制图标要等数据, 是异步方法
    drawLine() {
      setTimeout(() => {
        let columnPicture = this.$echarts.init(this.$refs.columnPicture)
        columnPicture.setOption(this.render)
      }, 520)
    }
  },
  // ? life-hooks
  created() {},
  mounted() {
    this.drawLine()
  }
}
</script>
<style lang="less" scoped></style>
