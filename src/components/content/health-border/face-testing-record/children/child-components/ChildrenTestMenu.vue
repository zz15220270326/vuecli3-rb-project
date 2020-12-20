<!--
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:42
 * @LastEditTime: 2020-12-20 12:49:21
 * @FilePath: \langyun_manager\src\components\content\health-border\face-testing-record\children\child-components\ChildrenTestMenu.vue
-->
<template>
  <querymenu>
    <div slot="first" class="select-class">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
    </div>
    <div slot="second" class="input">
      <search-student-name />
      <datespan />
    </div>
    <div slot="third" class="select-status">
      <select-menu
        :listTitle="healthStatusTitle"
        :listItems="healthStatusList"
        @handleSelect="selectHealthStatus"
      />
    </div>
    <div slot="fourth" class="search">
      <search-button @click.native="searchChildrenRecord" />
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchStudentName = () => import('@common/search-input/SearchStudentName')
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')
// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import healthStatusMixin from '@mixins/health-border/healthStatusMixin'

export default {
  name: 'ChildrenTestMenu',

  components: {
    Querymenu,
    SelectMenu,
    SearchStudentName,
    Datespan,
    SearchButton
  },

  mixins: [classMixins, healthStatusMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {
    searchChildrenRecord() {
      this.$emit('searchChildrenRecord')
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
  .select-class {
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
