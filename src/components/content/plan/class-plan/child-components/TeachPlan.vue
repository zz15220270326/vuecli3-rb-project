<template>
  <div class="teach-plan">
    <!-- 教学计划-最上面的菜单 -->
    <teach-query-menu @handleAll="handleAll" @addTeachPlan="addTeachPlan" />
    <!-- 创建教学计划-Modal -->
    <Modal
      v-model="isShowCreateModal"
      class="create-plan-modal"
      :title="modalTitle"
      width="1000"
      ok-text="提交"
      @on-ok="submitCreatePlan"
      @on-cancel="cancelCreatePlan"
      cancel-text="取消"
      :transfer="false"
    >
      <add-teach-plan
        :teachPlanTitle="teachPlanTitle"
        :teachPlanContent="teachPlanContent"
        :teachPlanContent2="teachPlanContent2"
        @selectPlan="selectPlan"
      />
    </Modal>
    <!-- 教学计划详情弹窗 -->
    <Modal
      v-model="isShowDetailModal"
      class="check-detail-modal"
      title="详情"
      width="1000"
    >
      <DetailTeachPlan
        :firstTitle="firstTitle"
        :secondTitle="secondTitle"
        :titleList="detailTitle"
        :dataList="detailContent"
      />
    </Modal>
    <!-- 计划表格 -->
    <PlanTable
      :titleList="titleList"
      :dataList="dataList"
      @handleOperations="handleOperations"
      :isLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
    />
  </div>
</template>

<script>
// ! 教学计划
// ? common / content components
// ? 1. query-menu
// import Querymenu from '@content/query-menu/Querymenu'
// ? 2. select-menu
// import SelectMenu from '@content/select-menu/SelectMenu'
// ? 3. plan-table
import PlanTable from '@content/plan/PlanTable'
// ? child-components
import TeachQueryMenu from './teach-child/TeachQueryMenu'
import AddTeachPlan from './teach-child/AddTeachPlan'
import DetailTeachPlan from './teach-child/DetailTeachPlan'
// ? import mixins
import contentCommonMixin from '@mixins/plan/contentCommonMixin'
import teachPlanContentMixin from '@mixins/plan/teachPlanContentMixin'

export default {
  name: 'TeachPlan',
  components: {
    // ? common / content components
    // Querymenu,
    // SelectMenu,
    PlanTable,
    // ? child-components
    TeachQueryMenu,
    AddTeachPlan,
    DetailTeachPlan
    // TeachPlanTable
  },
  mixins: [contentCommonMixin, contentCommonMixin, teachPlanContentMixin],
  data: () => ({
    titleList: [],
    dataList: [],
    tableIsLoading: false
  }),
  methods: {
    selectNoon(currentIndex) {
      this.noonList.forEach((item, index) =>
        index === currentIndex
          ? (item.isSelected = true)
          : (item.isSelected = false)
      )
      this.chooseNoonIndex = currentIndex
    }
  },
  created() {
    console.log('Teach plan component created')
  }
}
</script>

<style lang="less" scoped>
.teach-plan {
  // background-color: red;
  // height: 70vh;
  .create-plan-modal {
    background-color: #fff;
  }
}
</style>
