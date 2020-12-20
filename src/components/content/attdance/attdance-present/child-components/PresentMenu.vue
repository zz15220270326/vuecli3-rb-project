<template>
  <querymenu>
    <div slot="first" class="select-day">
      <Button
        v-for="(item, key) in selectDayList"
        :key="key"
        :type="item.type"
        @click.native="handleSelectDay(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="second" class="search-span">
      <datespan />
      <search-button @click.native="searchAttdance" />
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')

export default {
  name: 'PresentMenu',

  components: {
    Querymenu,
    Datespan,
    SearchButton
  },

  data: () => ({}),

  props: {
    selectDayList: {
      type: Array,
      default: () => []
    }
  },

  computed: {},

  methods: {
    handleSelectDay(index) {
      this.$emit('handleSelectDay', index)
    },
    searchAttdance() {
      this.$emit('searchAttdance')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .select-day {
    flex: 1;
    .ivu-btn {
      width: 5.2rem;
      margin: 0 0.8rem;
    }
  }
  .search-span {
    flex: 3;
  }
}
</style>
