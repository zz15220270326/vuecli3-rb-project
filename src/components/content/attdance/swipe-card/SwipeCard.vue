<template>
  <div class="swipe-card">
    <swipe-menu @searchTable="searchTable" />
    <swipe-table
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
    />
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components
const DividePage = () => import('@common/divide-page/DividePage')

const SwipeMenu = () => import('./child-components/SwipeMenu')
const SwipeTable = () => import('./child-components/SwipeTable')

// ? mixins
import classMixin from '@mixins/attdance/classMixin'
import swipeTableMixin from '@mixins/attdance/swipeTableMixin'

export default {
  name: 'SwipeCard',
  components: {
    DividePage,

    SwipeMenu,
    SwipeTable
  },
  mixins: [classMixin, swipeTableMixin],
  data: () => ({
    // ? table-data
    tableIsLoading: false
  }),
  methods: {
    searchTable() {
      this.tableIsLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.tableIsLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped></style>
