<template>
  <querymenu>
    <div class="menu" slot="first">
      <choosable-menu :menuItems="menuItems" />
    </div>
    <div class="name" slot="second">
      <SearchTeacherName />
    </div>
    <div class="date" slot="third">
      <DatePicker
        v-model="pickDate"
        type="date"
        placeholder="Select date"
        @on-change="getcurrentDate"
      />
    </div>
    <div class="search-button" slot="fourth">
      <SearchButton @click.native="searchItems" />
    </div>
  </querymenu>
</template>

<script>
// ? common components
const Querymenu = () => import('@common/query-menu/Querymenu')
const ChoosableMenu = () =>
  import('@/components/common/choosable-menu/ChoosableMenu')
const SearchTeacherName = () =>
  import('@/components/common/search-input/SearchTeacherName')
const SearchButton = () =>
  import('@components/common/search-button/SearchButton')

export default {
  name: 'DutyQueryMenu',
  components: {
    Querymenu,
    ChoosableMenu,
    SearchTeacherName,
    SearchButton
  },
  data: () => ({
    pickDate: ''
  }),
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getcurrentDate() {
      this.$emit('getcurrentDate', this.pickDate)
    },
    searchItems() {
      this.$emit('searchItems')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  display: flex;
  margin-top: 1.2rem;
  padding: 1.2rem 0;
  .menu {
    flex: 1;
  }
  .name {
    flex: 1;
    padding: auto 0;
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
