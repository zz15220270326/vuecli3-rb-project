<template>
  <div class="children-temperature-testing">
    <children-test-menu @searchChildrenRecord="searchChildrenRecord" />
    <div class="table-content">
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
const ChildrenTestMenu = () => import('./child-components/ChildrenTestMenu')
const HBTable = () => import('@HealthBorder/HBTable')
const DividePage = () => import('@common/divide-page/DividePage')

// ? import mixins
import stuTestTableMixin from '@mixins/health-border/stuTestTableMixin'

export default {
  name: 'ChildrenTest',

  components: {
    ChildrenTestMenu,
    HBTable,
    DividePage
  },

  mixins: [stuTestTableMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {
    searchChildrenRecord() {
      this.tableIsLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.tableIsLoading = false
      }, 800)
    }
  }
}
</script>

<style lang="less" scoped>
.children-temperature-testing {
  .table-content {
    margin-top: 1.6rem;
    margin-left: 0.8rem;
  }
}
</style>
