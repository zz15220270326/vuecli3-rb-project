<template>
  <querymenu>
    <div slot="first" class="select-date">
      <datespan />
      <search-button @click.native="handleSearch" />
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')

export default {
  name: 'ClassAttdanceMenu',

  components: {
    Querymenu,
    Datespan,
    SearchButton
  },

  mixins: [],

  data: () => ({}),

  props: {},

  computed: {
    startTime() {
      return this.$store.state.startTime
    },
    endTime() {
      return this.$store.state.endTime
    }
  },

  methods: {
    handleSearch() {
      if (this.startTime === '' || this.endTime === '') {
        this.$Message.warning('请选择时间范围')
      } else {
        this.$emit('handleSearch')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  margin: 1.6rem 0;
  padding: 0.8rem 1rem;
}
</style>
