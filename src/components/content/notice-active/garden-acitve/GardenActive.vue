<template>
  <div class="garden-active">
    <simple-menu @handleSearch="handleSearch" @handleCreate="handleCreate" />
    <Divider :dashed="true" />
    <!-- modal-content -->
    <Modal
      v-model="isShowAddModal"
      :title="modalTitle"
      width="960"
      ok-text="存草稿"
      cancel-text="取消"
    >
      <add-content
        :editTitle="editTitle"
        :editIntroduce="editIntroduce"
        :editIsSetTop="editIsSetTop"
        :editImg="editImg"
        :editInputContent="editInputContent"
      />
    </Modal>
    <Modal
      v-model="isShowEditModal"
      :title="modalTitle"
      width="960"
      ok-text="存草稿"
      cancel-text="取消"
    >
      <add-content
        :editTitle="editTitle"
        :editIntroduce="editIntroduce"
        :editIsSetTop="editIsSetTop"
        :editImg="editImg"
        :editInputContent="editInputContent"
      />
    </Modal>
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="960"
      :footer-hide="true"
    >
      <info-content
        :infoTitle="infoTitle"
        :infoAvatar="infoAvatar"
        :infoAuthor="infoAuthor"
        :infoTime="infoTime"
        :infoContent="infoContent"
      />
    </Modal>
    <!--  -->
    <Spin fix v-show="isLoading">加载中...</Spin>
    <garden-active-content
      :topList="topList"
      :commonList="commonList"
      @handleUserOperations="handleUserOperations"
      @handleItemOperations="handleItemOperations"
    />
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import-components
const SimpleMenu = () => import('./child-components/SimpleMenu')
const GardenActiveContent = () =>
  import('./child-components/GardenActiveContent')
const AddContent = () => import('./child-components/AddContent')
const InfoContent = () => import('./child-components/InfoContent')

const DividePage = () => import('@common/divide-page/DividePage')

// ? import-mixins
import gardenActiveMixin from '@mixins/notice-active/gardenActiveMixin'
import gardenActiveContentMixin from '@mixins/notice-active/gardenActiveContentMixin'

export default {
  name: 'GardenActive',
  components: {
    SimpleMenu,
    GardenActiveContent,
    AddContent,
    InfoContent,
    DividePage
  },
  mixins: [gardenActiveMixin, gardenActiveContentMixin]
}
</script>

<style lang="less" scoped>
.garden-active {
  color: #666;
  .ivu-divider {
    background-color: orange;
  }
}
</style>
