<template>
  <!-- 教学计划表 -->
  <Table
    class="teach-plan-table"
    border
    :columns="teachPlanTitle"
    :data="teachPlanContent"
  >
    <!-- 计划类型 -->
    <template slot-scope="{ row, index }" slot="planType">
      <select-menu
        :listTitle="row.planType.planTypeTitle"
        :listItems="row.planType.planTypeInfo"
        :key="index"
        @handleSelect="selectPlan($event, index)"
      />
    </template>
    <!-- 计划内容 -->
    <template slot-scope="{ row, index }" slot="planContent">
      <Input
        :placeholder="row.planContent"
        @on-change="handleChange($event, index)"
      />
    </template>
  </Table>
</template>

<script>
// ? select-menu
import SelectMenu from '@content/select-menu/SelectMenu'
export default {
  name: 'TeachPlanTable',
  data: () => ({
    value1: '',
    value2: ''
  }),
  components: {
    SelectMenu
  },
  props: {
    teachPlanTitle: {
      type: Array,
      default: () => []
    },
    teachPlanContent: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectPlan(currentItem, currentIndex) {
      const params = {
        currentItem,
        currentIndex
      }
      this.$emit('selectPlan', params)
    },
    handleChange(event, currentIndex) {
      switch (currentIndex) {
        case 0:
          this.value1 = event.target.value
          break
        case 1:
          this.value2 = event.target.value
      }
    }
  }
}
</script>

<style lang="less" scoped>
.teach-plan-table {
  margin-top: 2rem;
  .ivu-table-body {
    position: fixed !important;
  }
  // .select-menu {
  // }
}
</style>
