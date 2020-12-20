<template>
  <div class="garden-notice">
    <garden-notice-menu
      @handleOperations="handleOperations"
      @addItem="addItem"
    />
    <Divider :dashed="true" />
    <Spin fix v-show="isLoading">加载中...</Spin>
    <!-- modal-content -->
    <Modal
      class-name="add-modal"
      v-model="isShowAddModal"
      :title="modalTitle"
      width="960"
      ok-text="提交"
      cancel-text="取消"
      @on-ok="confirmAdd"
      @on-cancel="cancelAdd"
    >
      <add-notice
        @getInputTitle="getAddInputTitle"
        @getInputContent="getAddInputContent"
        @imgListLoad="addImgListLoad"
        :addInputTitle="addInputTitle"
        :addInputContent="addInputContent"
        :addImgList="addImgList"
      />
    </Modal>
    <Modal
      class-name="info-modal"
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="960"
      :footer-hide="true"
    >
      <info-notice :infoItem="infoItem" />
    </Modal>
    <!--  -->
    <notice-content
      :dataList="dataList"
      @handleAllItems="handleAllItems"
      @selectSingleItem="selectSingleItem"
      @deleteItem="deleteItem"
      @handleOperation="handleOperation"
    />
  </div>
</template>

<script>
// ? import components 2
const GardenNoticeMenu = () => import('./child-components/GardenNoticeMenu')
const NoticeContent = () => import('@NoticeActive/NoticeContent')
const AddNotice = () => import('@NoticeActive/AddNotice')
const InfoNotice = () => import('@NoticeActive/InfoNotice')
// ? import mixins 1
import gardenMissionMixin from '@mixins/notice-active/gardenMissionMixin'
import spinMixin from '@mixins/notice-active/spinMixin'
import noticeMixin from '@mixins/notice-active/noticeMixin'

export default {
  name: 'GardenNotice',

  components: {
    GardenNoticeMenu,
    NoticeContent,
    AddNotice,
    InfoNotice
  },

  mixins: [gardenMissionMixin, spinMixin, noticeMixin],

  data: () => ({}),

  methods: {}
}
</script>

<style lang="less" scoped>
.garden-notice {
  color: #666;
  .ivu-divider {
    background-color: lime;
  }
}
</style>
