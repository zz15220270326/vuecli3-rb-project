<template>
  <div class="content">
    <Table
      border
      ref="currentRowTable"
      :columns="titleList"
      :data="renderItems"
    />
    <!-- :row-class-name="renderRow" -->
    <!-- highlight-row -->
    <!-- size="small" -->
  </div>
</template>

<script>
export default {
  name: 'TableContent',
  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    renderItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    renderRow(row, index) {
      if (index === 0) {
        return 'render-row'
      }
      return ''
    },
    rowClick() {
      /* @click.native="rowClick" */
      console.log(this.$refs.currentRowTable.data)
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.content {
  margin-top: 2rem;
}
</style>
