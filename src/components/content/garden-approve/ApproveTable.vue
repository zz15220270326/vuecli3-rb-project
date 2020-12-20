<template>
  <div class="leave-table">
    <Table border :columns="titleList" :data="dataList">
      <template slot-scope="{ index }" slot="operations">
        <Button
          v-for="(item, key) in operations"
          :key="key"
          :type="item.type"
          @click.native="handleSelect(index, item.tag)"
        >
          {{ item.tag }}
        </Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: 'ApproveTable',
  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    operations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect(index, tag) {
      this.$emit('handleSelect', index, tag)
    }
  }
}
</script>

<style lang="less" scoped>
.leave-table {
  width: 90%;
  .ivu-btn {
    width: 5.3rem;
  }
}
</style>
