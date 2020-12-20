<template>
  <div class="class-info">
    <class-info-menu
      @handleOperations="handleOperations"
      @handleCreate="handleCreate"
    />
    <div class="table-content">
      <c-m-table
        :titleList="titleList"
        :dataList="dataList"
        :tableIsLoading="tableIsLoading"
        @getSelectItem="getSelectItem"
        @handleTableItem="handleTableItem"
      />
    </div>
    <!-- modal-content -->
    <Modal
      v-model="isShowAddModal"
      :title="modalTitle"
      width="800"
      ok-text="添加"
      cancel-text="取消"
      @on-cancel="handleCancelModal"
    >
      <add-content />
    </Modal>
    <Modal
      v-model="isShowEditModal"
      :title="modalTitle"
      width="800"
      ok-text="添加"
      cancel-text="取消"
      @on-cancel="handleCancelModal"
    >
      <add-content
        :editClassName="editClassName"
        :editChildrenCount="editChildrenCount"
        :editEntryTime="editEntryTime"
        :editGrade="editGrade"
        :editTeachers="editTeachers"
        :editSlogan="editSlogan"
      />
    </Modal>
    <!--  -->
    <divide-page />
  </div>
</template>

<script>
// ? import components
const ClassInfoMenu = () => import('./child-components/ClassInfoMenu')
const CMTable = () => import('@ClassManagement/CMTable')
const AddContent = () => import('./child-components/AddContent')
const DividePage = () => import('@common/divide-page/DividePage')
// ? import mixins
import getClassInfoData from '@mixins/class-management/getClassInfoData'
import classInfoMixin from '@mixins/class-management/classInfoMixin'

export default {
  name: 'ClassInfo',

  components: {
    ClassInfoMenu,
    CMTable,
    AddContent,
    DividePage
  },

  mixins: [getClassInfoData, classInfoMixin],

  data: () => ({}),

  methods: {}
}
</script>

<style lang="less" scoped>
.class-info {
  background-color: #fff;
  height: 100vh;
  padding-bottom: 1.2rem;
}
</style>
