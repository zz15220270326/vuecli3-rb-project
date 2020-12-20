<!--
 * @Author: 张先生
 * @Date: 2020-12-12 10:54:15
 * @LastEditTime: 2020-12-12 19:44:51
 * @FilePath: \langyun_manager\src\components\content\plan\PlanTable.vue
-->
<template>
  <div class="plan-table">
    <Table
      border
      ref="selection"
      :columns="titleList"
      :data="dataList"
      :loading="tableIsLoading"
      @on-select-all="getSelectItem"
      @on-select-all-cancel="getSelectItem"
      @on-select="getSelectItem"
      @on-select-cancel="getSelectItem"
    >
      <template class="op-btn" slot-scope="{ row, index }" slot="operations">
        <Button
          class="operation-button"
          v-for="(item, key) in row.operations"
          :key="key"
          :type="item.type"
          @click.native="handleOperations(item.tag, index)"
        >
          {{ item.tag }}
        </Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: 'PlanTable',
  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    tableIsLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOperations(tag, index) {
      const table = this.$refs.selection
      this.$emit('handleOperations', tag, index, table)
    },
    getSelectItem(selectItems) {
      this.$emit('getSelectItem', [...selectItems])
    }
  }
}
</script>

<style lang="less" scoped>
.plan-table {
  width: 100%;
  height: 70vh;
  margin-top: 3rem;
  // background-color: cyan;
  // padding-left: 0.6rem;
  .operation-button {
    margin: 0 0.8rem;
    opacity: 0.9;
  }
}
</style>
