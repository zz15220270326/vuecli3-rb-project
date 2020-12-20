<template>
  <Querymenu>
    <div class="menu" slot="first">
      <ChoosableMenu :menuItems="menuItems" />
    </div>
    <div class="input" slot="second">
      <SearchTeacherName />
    </div>
    <div class="date" slot="third">
      <SelectMonth />
    </div>
    <div class="search-button" slot="fourth">
      <SearchButton @click.native="searchTable" />
    </div>
  </Querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const ChoosableMenu = () => import('@common/choosable-menu/ChoosableMenu')
const SearchTeacherName = () => import('@common/search-input/SearchTeacherName')
const SelectMonth = () => import('@common/select-month/SelectMonth')
const SearchButton = () => import('@common/search-button/SearchButton')

// ? import mixins
export default {
  name: 'FullMenu',

  components: {
    Querymenu,
    ChoosableMenu,
    SearchTeacherName,
    SelectMonth,
    SearchButton
  },

  data: () => ({}),

  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },

  computed: {},

  methods: {
    searchTable() {
      this.$emit('searchTable')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  margin: 1.2rem;
  display: flex;
  .menu {
    flex: 1;
    margin-top: 0.9rem;
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
    margin-top: 0.6rem;
  }
}
</style>
