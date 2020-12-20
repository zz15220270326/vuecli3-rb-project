<template>
  <Querymenu>
    <div class="menu" slot="first">
      <ChoosableMenu :menuItems="menuItems" />
    </div>
    <div class="input" slot="second">
      <SearchTeacherName />
    </div>
    <div class="date" slot="third">
      <Datespan />
    </div>
    <div class="search-button" slot="fourth">
      <SearchButton @click.native="searchTable" />
    </div>
  </Querymenu>
</template>

<script>
// ? common / content components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SearchTeacherName = () =>
  import('@/components/common/search-input/SearchTeacherName')
const ChoosableMenu = () =>
  import('@/components/common/choosable-menu/ChoosableMenu')
const Datespan = () => import('@/components/common/date-span/Datespan')
const SearchButton = () =>
  import('@/components/common/search-button/SearchButton')

export default {
  name: 'AttdanceReportMenu',
  components: {
    // ? common / content
    Querymenu,
    SearchTeacherName,
    ChoosableMenu,
    Datespan,
    SearchButton
  },
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
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
  .menu {
    flex: 1;
  }
  .input {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .date {
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-button {
    flex: 5;
    margin-top: 0.1rem;
  }
}
</style>
