<template>
  <div class="table-content">
    <Table
      border
      ref="selection"
      :columns="titleList"
      :data="dataList"
      :loading="isLoading"
      @on-select-all="getSelectItem"
      @on-select-all-cancel="getSelectItem"
      @on-select="getSelectItem"
      @on-select-cancel="getSelectItem"
    >
      <template slot-scope="{ row, index }" slot="operations">
        <Button
          v-for="(item, key) in row.operations"
          :key="key"
          :type="item.type"
          class="item-operations"
          @click.native="handleItemOperations(item.tag, index)"
        >
          {{ item.tag }}
        </Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: 'AuthTable',
  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getSelectItem(selection) {
      this.$emit('getSelectItem', [...selection])
    },
    handleItemOperations(tag, index) {
      const table = this.$refs.selection
      this.$emit('handleItemOperations', tag, index, table)
    }
  }
}
</script>

<style lang="less" scoped>
.table-content {
  margin: 2rem 1.8rem;
  .ivu-btn {
    width: 5rem;
    margin: 0 0.5rem;
  }
}
</style>
