<template>
  <query-menu>
    <div slot="first" class="first">
      <select-menu
        :listTitle="classTitle"
        :listItems="classInfo"
        @handleSelect="handleSelectClass"
      />
      <select-menu
        :listTitle="evaluateTitle"
        :listItems="evaluateInfo"
        @handleSelect="handleSelectEvaluate"
      />
    </div>
    <div slot="second" class="second">
      <Button type="primary" @click="searchItems">
        查询
      </Button>
      <Button type="error" :disabled="false" @click="deleteItems">
        删除
      </Button>
    </div>
    <div slot="third" class="third">
      <Button type="warning" @click.native="createPlan">
        创建计划
        <Icon type="md-add" />
      </Button>
    </div>
  </query-menu>
</template>

<script>
// ? improt components
// ? 1. query-menu
const QueryMenu = () => import('@content/query-menu/Querymenu')
// ? 2. select-menu
const SelectMenu = () => import('@content/select-menu/SelectMenu')
export default {
  name: 'OtherQueryMenu',
  components: {
    QueryMenu,
    SelectMenu
  },
  props: {
    classTitle: {
      type: String,
      default: ''
    },
    classInfo: {
      type: Array,
      default: () => []
    },
    evaluateTitle: {
      type: String,
      default: ''
    },
    evaluateInfo: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelectClass(item) {
      this.$emit('handleSelectClass', item)
    },
    handleSelectEvaluate(item) {
      this.$emit('handleSelectEvaluate', item)
    },
    searchItems() {
      this.$emit('searchItems')
    },
    deleteItems() {
      this.$emit('deleteItems')
    },
    createPlan() {
      this.$emit('createPlan')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  margin: 1.2rem 0;
  padding: 1.2rem 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .first {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .select-menu {
      margin-left: 0.8rem;
    }
  }
  .second {
    flex: 1;
    .ivu-btn {
      margin-left: 0.8rem;
      width: 5rem;
      opacity: 0.95;
    }
  }
  .third {
    flex: 1;
    text-align: right;
    margin-right: 2rem;
  }
}
</style>
