<template>
  <querymenu>
    <div slot="first" class="select-career">
      <select-menu
        :listTitle="careerTitle"
        :listItems="careerList"
        @handleSelect="selectCareer"
      />
    </div>
    <div slot="second" class="input">
      <search-teacher-name />
      <datespan />
    </div>
    <div slot="third" class="health-status">
      <select-menu
        :listTitle="healthStatusTitle"
        :listItems="healthStatusList"
        @handleSelect="selectHealthStatus"
      />
    </div>
    <div slot="fourth" class="search">
      <search-button @click.native="searchWorkerRecord" />
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchTeacherName = () => import('@common/search-input/SearchTeacherName')
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')

// ? import mixins
import careerMixin from '@mixins/health-border/careerMixin'
import healthStatusMixin from '@mixins/health-border/healthStatusMixin'

export default {
  name: 'WorkerTestMenu',

  components: {
    Querymenu,
    SelectMenu,
    SearchTeacherName,
    Datespan,
    SearchButton
  },

  mixins: [careerMixin, healthStatusMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {
    searchWorkerRecord() {
      this.$emit('searchWorkerRecord')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  .select-career {
    text-align: center;
    flex: 1;
  }
  .input {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .select-status {
    flex: 1;
  }
  .search {
    flex: 4;
  }
}
</style>
