<template>
  <querymenu>
    <div slot="first" class="select-input">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <datespan />
    </div>
    <div slot="second" class="search">
      <search-button @click.native="searchTable" />
    </div>
    <div slot="third" class="operations">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleOperations(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const Datespan = () => import('@common/date-span/Datespan')
const SearchButton = () => import('@common/search-button/SearchButton')
// ? import mixins
import classMixins from '@mixins/Common/classMixins'

export default {
  name: 'AddMenu',

  components: {
    Querymenu,
    SelectMenu,
    Datespan,
    SearchButton
  },

  mixins: [classMixins],

  data: () => ({
    operations: [
      {
        tag: '打印',
        type: 'warning'
      },
      {
        tag: '导出',
        type: 'warning'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    searchTable() {
      this.$emit('searchTable')
    },
    handleOperations(key) {
      this.$emit('handleOperations', key)
    }
  }
}
</script>

<style lang="less" scoped>
.common_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_acound() {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.query-menu {
  .common_flex();
  padding: 4/5rem 0;
  .select-input {
    flex: 3;
    .flex_acound();
  }
  .search {
    flex: 1;
  }
  .operations {
    flex: 2;
    text-align: right;
    padding-right: 0.5rem;
    .ivu-btn {
      margin: 0 0.6rem;
      width: 5.2rem;
    }
  }
}
</style>
