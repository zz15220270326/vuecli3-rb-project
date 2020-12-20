<template>
  <div class="all-class-info">
    <div class="title">班级信息总览</div>
    <div class="content">
      <main-table
        :titleList="classTableTitle"
        :dataList="classTableData"
        :tableIsLoading="tableIsLoading"
      />
    </div>
  </div>
</template>

<script>
// ? import components
const MainTable = () => import('@Main/MainTable')
// ? import mixins
import classInfoTableMixin from '@mixins/main/classInfoTableMixin'

export default {
  name: 'AllClassInfo',

  components: {
    MainTable
  },

  mixins: [classInfoTableMixin],

  data: () => ({
    tableIsLoading: false
  }),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.all-class-info {
  color: #666;
  font-size: 1rem;
  width: 100%;
  height: 23rem;
  margin-bottom: 3rem;
  .title {
    font-weight: 600;
    font-size: 1.3rem;
    margin-left: 1.6rem;
    padding: 0.8rem 0;
  }
  .content {
    width: 100%;
    height: 23rem;
    border: 1px solid #36adea;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.2rem;
  }
}
</style>
