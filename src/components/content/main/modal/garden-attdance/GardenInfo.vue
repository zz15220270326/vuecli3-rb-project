<template>
  <div class="main-garden-info">
    <div class="title">
      <datespan />
      <search-button @click.native="searchGardenAttdance" />
      <Divider />
    </div>
    <div class="content">
      <column-picture :chartStyle="chartStyle" :render="render" />
    </div>
  </div>
</template>

<script>
// ? import components
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')
const ColumnPicture = () => import('@echart/ColumnPicture')

// ? import mixins
import columnPictureMixin from '@mixins/main/columnPictureMixin'

export default {
  name: 'MainGardenInfo',

  mixins: [columnPictureMixin],

  components: {
    Datespan,
    SearchButton,
    ColumnPicture
  },

  data: () => ({
    // ? echart-data
    chartStyle: {
      width: '52rem',
      height: '26rem'
    }
  }),

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
    searchGardenAttdance() {
      console.log('查询园所柱状图')
    }
  }
}
</script>

<style lang="less" scoped>
.main-garden-info {
  height: 30rem;
  .title {
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
