<template>
  <querymenu>
    <div slot="first" class="select">
      <select-menu />
    </div>
    <div slot="second" class="input-teacher-name">
      <search-teacher-name />
    </div>
    <div slot="third" class="date-span">
      <datespan />
    </div>
    <div slot="fourth" class="search">
      <search-button @click.native="searchTable" />
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const Datespan = () => import('@common/date-span/Datespan')
const SearchTeacherName = () => import('@common/search-input/SearchTeacherName')
const SearchButton = () => import('@common/search-button/SearchButton')

export default {
  name: 'SwipeMenu',
  components: {
    Querymenu,
    SelectMenu,
    Datespan,
    SearchTeacherName,
    SearchButton
  },
  data: () => ({
    classTitle: '',
    classList: []
  }),
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectClass() {},
    searchTable() {
      this.$emit('searchTable')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  margin: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .select {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-teacher-name {
    flex: 1;
  }
  .date-span {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    flex: 4;
  }
}
</style>
