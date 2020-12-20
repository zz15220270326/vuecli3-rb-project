<template>
  <querymenu>
    <div slot="first" class="select-grade">
      <select-menu
        :listTitle="gradeTitle"
        :listItems="gradeList"
        @handleSelect="selectGrade"
      />
    </div>
    <div slot="second" class="operations">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleOperations(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="third" class="add">
      <Button type="warning" @click.native="handleCreate">添加班级</Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')

// ? import mixins
import gradeMixins from '@mixins/Common/gradeMixins'

export default {
  name: 'ClassInfoMenu',

  components: {
    Querymenu,
    SelectMenu
  },

  mixins: [gradeMixins],

  data: () => ({
    operations: [
      {
        tag: '查询',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    handleOperations(key) {
      this.$emit('handleOperations', key)
    },
    handleCreate() {
      this.$emit('handleCreate')
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
  padding: 4/5rem 0;
  background-color: #f6f6f6;
  .full_flex();
  .select-grade {
    flex: 1;
    .full_flex();
  }
  .operations {
    flex: 1;
    .ivu-btn {
      width: 6rem;
      margin: 0 0.75rem;
    }
  }
  .add {
    flex: 3;
    text-align: right;
    padding-right: 3.2rem;
    .ivu-btn {
      width: 6rem;
    }
  }
}
</style>
