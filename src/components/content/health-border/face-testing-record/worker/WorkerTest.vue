<template>
  <div class="worker-test">
    <worker-test-menu @searchWorkerRecord="searchWorkerRecord" />
    <div class="content">
      <h-b-table
        :titleList="titleList"
        :dataList="dataList"
        :tableIsLoading="tableIsLoading"
      />
    </div>
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components
const WorkerTestMenu = () => import('./child-components/WorkerTestMenu')
const HBTable = () => import('@HealthBorder/HBTable')
const DividePage = () => import('@common/divide-page/DividePage')

// ? import mixins
import tchTestTableMixin from '@mixins/health-border/tchTestTableMixin'

export default {
  name: 'WorkerTest',

  components: {
    WorkerTestMenu,
    HBTable,
    DividePage
  },

  mixins: [tchTestTableMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {
    searchWorkerRecord() {
      this.tableIsLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.tableIsLoading = false
      }, 800)
    }
  }
}
</script>

<style lang="less" scoped></style>
