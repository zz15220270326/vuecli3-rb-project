<!--
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:42
 * @LastEditTime: 2020-12-20 12:42:24
 * @FilePath: \langyun_manager\src\components\content\class-management\children-attdance\attdance-info\child-components\AttdanceInfoMenu.vue
-->
<template>
  <querymenu>
    <div slot="first" class="menu-1">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <select-month />
      <search-button @click.native="handleSearch" />
    </div>
    <div slot="second" class="menu-2">
      <Button v-for="(item, key) in operations" :key="key" :type="item.type">
        {{ item.tag }}
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SelectMonth = () => import('@common/select-month/SelectMonth')
const SearchButton = () => import('@common/search-button/SearchButton')

// ? import mixins
import classInfo from '@mixins/Common/classMixins'

export default {
  name: 'AttdanceInfoMenu',

  components: {
    Querymenu,
    SelectMenu,
    SelectMonth,
    SearchButton
  },

  mixins: [classInfo],

  data: () => ({
    operations: [
      {
        tag: '出勤',
        type: 'success'
      },
      {
        tag: '病假',
        type: 'error'
      },
      {
        tag: '事假',
        type: 'warning'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    handleSearch() {
      this.$Message.info('查询中')
      this.$emit('handleSearch')
    }
  }
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.query-menu {
  padding: 0.8rem 0;
  .full_flex();
  .menu-1 {
    flex: 2;
  }
  .menu-2 {
    flex: 3;
    text-align: right;
    margin-right: 2rem;
    .ivu-btn {
      width: 6rem;
      margin: 0 0.8rem;
    }
  }
}
</style>
