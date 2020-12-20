<template>
  <div class="main-class-info">
    <div class="title">
      <datespan />
      <search-button @click.native="searchClassAttdance" />
      <Divider />
    </div>
    <main-table
      :tableIsLoading="tableIsLoading"
      :titleList="classAttdanceTitleList"
      :dataList="classAttdanceDataList"
    />
  </div>
</template>

<script>
// ? import components
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')
const MainTable = () => import('@Main/MainTable')

// ? import mixins
import classAttdanceMixin from '@mixins/main/classAttdanceMixin'

export default {
  name: 'MainClassInfo',

  mixins: [classAttdanceMixin],

  components: {
    Datespan,
    SearchButton,
    MainTable
  },

  data: () => ({
    // ? table-data
    tableIsLoading: false
  }),

  props: {},

  computed: {},

  methods: {
    searchClassAttdance() {
      console.log('查询班级信息')
    }
  }
}
</script>

<style lang="less" scoped>
.main-class-info {
  height: 30rem;
  overflow-y: scroll;
  .title {
  }
  .content {
    padding-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
