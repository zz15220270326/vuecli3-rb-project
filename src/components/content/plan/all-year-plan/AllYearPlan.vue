<!--
 * @Author: 张先生
 * @Date: 2020-12-12 10:54:15
 * @LastEditTime: 2020-12-12 20:11:17
 * @FilePath: \langyun_manager\src\components\content\plan\all-year-plan\AllYearPlan.vue
-->
<template>
  <div class="all-year-plan">
    <all-year-query-menu @handleAll="handleAll" @addYearPlan="addYearPlan" />
    <Modal
      v-model="isShowCreateModal"
      class="create-plan-modal"
      :title="modalTitle"
      width="850"
      ok-text="提交"
      cancel-text="取消"
      @on-ok="submitCreatePlan"
      @on-cancel="cancelCreatePlan"
      :transfer="false"
    >
      <AddPlan @inputContentChange="inputContentChange" />
    </Modal>
    <PlanTable
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @handleOperations="handleOperations"
      @getSelectItem="getSelectItem"
    />
  </div>
</template>

<script>
// ? import components
// ? 1. common / content components
import PlanTable from '@content/plan/PlanTable'
// ? 2. child-components
import AllYearQueryMenu from './child-components/AllYearQueryMenu'
import AddPlan from './child-components/AddPlan'

// ? mixins
import allYearPlanMixin from '@mixins/plan/allYearPlanMixin'
import contentCommonMixin from '@mixins/plan/contentCommonMixin'

export default {
  name: 'AllYearPlan',
  components: {
    PlanTable,
    AllYearQueryMenu,
    AddPlan
  },
  mixins: [allYearPlanMixin, contentCommonMixin],

  data: () => ({}),

  methods: {
    addYearPlan() {
      this.modalTitle = '创建学期计划'
      this.isShowCreateModal = true
    },
    addSemesterPlan() {
      this.modalTitle = '创建学期计划'
      this.isShowCreateModal = true
    }
  }
  // created() {
  //   this.addSemesterPlan()
  // }
}
</script>

<style lang="less" scoped></style>
