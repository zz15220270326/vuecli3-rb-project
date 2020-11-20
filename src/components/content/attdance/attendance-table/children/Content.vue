<template>
  <div class="content">
    <div v-if="attdanceList.length > 0">
      <Table
        v-if="attdanceList.length !== 0"
        border
        highlight-row
        ref="currentRowTable"
        :row-class-name="renderRow"
        :columns="dayList"
        :data="renderList"
        size="small"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    dayList: {
      type: Array,
      default: () => []
    },
    weekDayList: {
      type: Array,
      default: () => []
    },
    attdanceList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    renderList() {
      return [...this.weekDayList, ...this.attdanceList]
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
  background-color: #f6f6f6;
  height: 70vh;
  .ivu-table {
    .render-row {
      td {
        background-color: #2db7f5 !important;
        color: #fff !important;
      }
    }
  }
}
// .ivu-table .render-row td{
//   background-color: #2db7f5;
//   color: #fff;
// }
</style>
