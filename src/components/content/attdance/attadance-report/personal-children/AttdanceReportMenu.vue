<template>
  <Querymenu>
    <div class="date" slot="first">
      <Datespan />
      <SearchButton @click.native="searchTable" />
    </div>
  </Querymenu>
</template>

<script>
// ? common / content components
const Querymenu = () => import('@common/query-menu/Querymenu')
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () =>
  import('@/components/common/search-button/SearchButton')

export default {
  name: 'AttdanceReportMenu',
  components: {
    // ? common / content
    Querymenu,
    Datespan,
    SearchButton
  },
  methods: {
    searchTable() {
      this.$emit('searchTable')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  display: flex;
  padding: 1.2rem 0;
  .date {
    margin-left: 3rem;
  }
}
</style>
