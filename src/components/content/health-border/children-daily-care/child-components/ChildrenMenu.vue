<template>
  <querymenu>
    <div slot="first" class="select">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <select-menu
        :listTitle="healthStatusTitle"
        :listItems="healthStatusList"
        @handleSelect="selectHealthStatus"
      />
    </div>
    <div slot="second" class="input">
      <search-student-name />
      <datespan />
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
    <div slot="fourth" class="create-report">
      <Button type="warning" @click.native="createTable">
        生成报表
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchStudentName = () => import('@common/search-input/SearchStudentName')
const Datespan = () => import('@common/date-span/Datespan')

// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import healthStatusMixin from '@mixins/health-border/healthStatusMixin'

export default {
  name: 'ChildrenMenu',

  components: {
    Querymenu,
    SelectMenu,
    SearchStudentName,
    Datespan
  },

  mixins: [classMixins, healthStatusMixin],

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
    menuOperations(index) {
      this.$emit('menuOperations', index)
    },
    createTable() {
      this.$emit('createTable')
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
  .create-report {
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
