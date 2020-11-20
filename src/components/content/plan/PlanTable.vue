<template>
  <div class="plan-table">
    <Table
      border
      ref="selection"
      :columns="tableTitle"
      :data="tableContent"
      :loading="isLoading"
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
    tableTitle: {
      type: Array,
      default: () => []
    },
    tableContent: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOperations(tag, index) {
      const table = this.$refs.selection
      this.$emit('handleOperations', tag, index, table)
    },
    getSelectItem(selection) {
      this.$emit('getSelectItem', [...selection])
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
