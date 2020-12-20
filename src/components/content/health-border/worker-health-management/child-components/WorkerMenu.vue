<template>
  <querymenu>
    <div slot="first" class="input">
      <search-teacher-name />
      <datespan />
    </div>
    <div slot="second" class="select">
      <select-menu
        :listTitle="healthStatusTitle"
        :listItems="healthStatusList"
        @handleSelect="selectHealthStatus"
      />
    </div>
    <div slot="third" class="operations">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="menuOperations(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="fourth" class="export">
      <Button type="warning" @click.native="exportTable">
        导出
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SearchTeacherName = () => import('@common/search-input/SearchTeacherName')
const Datespan = () => import('@common/date-span/Datespan')
const SelectMenu = () => import('@common/select-menu/SelectMenu')

// ? import mixins
import healthStatusMixin from '@mixins/health-border/healthStatusMixin'

export default {
  name: 'WorkerMenu',

  components: {
    Querymenu,
    SearchTeacherName,
    Datespan,
    SelectMenu
  },

  mixins: [healthStatusMixin],

  data: () => ({
    operations: [
      {
        type: 'primary',
        tag: '查询'
      },
      {
        type: 'error',
        tag: '删除'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    menuOperations(key) {
      this.$emit('menuOperations', key)
    },
    exportTable() {
      this.$emit('exportTable')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  padding: 0.8rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .select {
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .operations {
    flex: 2;
    .ivu-btn {
      width: 6rem;
      margin: 0 0.8rem;
    }
  }
  .export {
    flex: 2;
    text-align: right;
    margin-right: 1.2rem;
    .ivu-btn {
      width: 6rem;
      margin: 0 0.8rem;
    }
  }
}
</style>
