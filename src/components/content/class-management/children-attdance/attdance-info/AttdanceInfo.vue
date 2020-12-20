<template>
  <div class="children-attdance-info">
    <attdance-info-menu @handleSearch="handleSearch" />
    <Spin v-show="isLoading" size="large"> 加载中 </Spin>
    <div class="title">
      <h2>{{ year + '年' + month + '月' + ' ' + currentClass }} 考勤表</h2>
    </div>
    <attdance-info-content />
    <div class="table-content">
      <c-m-table :titleList="titleList" :dataList="dataList" />
    </div>
  </div>
</template>

<script>
// ? import components
const AttdanceInfoMenu = () => import('./child-components/AttdanceInfoMenu')
const AttdanceInfoContent = () =>
  import('./child-components/AttdanceInfoContent')
const CMTable = () => import('@ClassManagement/CMTable')

// ? import mixins
import attdanceInfoMixin from '@mixins/class-management/attdanceInfoMixin'

export default {
  name: 'AttdanceInfo',

  components: {
    AttdanceInfoMenu,
    AttdanceInfoContent,
    CMTable
  },

  mixins: [attdanceInfoMixin],

  data: () => ({}),

  props: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.children-attdance-info {
  .title {
    margin: 0.8rem 0;
    text-align: center;
  }
  .op {
    text-align: right;
    .ivu-btn {
      width: 6rem;
      margin: 0 0.75rem;
    }
  }
}
</style>
