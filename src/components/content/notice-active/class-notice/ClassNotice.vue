<template>
  <div class="class-notice">
    <!-- @handleOperations="handleOperations"
      @addItem="addItem" -->
    <class-notice-menu />
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
// ? import components
const ClassNoticeMenu = () => import('./child-components/ClassNoticeMenu')
const NoticeContent = () => import('@NoticeActive/NoticeContent')
const AddNotice = () => import('@NoticeActive/AddNotice')
const InfoNotice = () => import('@NoticeActive/InfoNotice')

// ? import mixins
import spinMixin from '@mixins/notice-active/spinMixin'
import noticeMixin from '@mixins/notice-active/noticeMixin'
import classMissionMixin from '@mixins/notice-active/classMissionMixin'

export default {
  name: 'ClassNotice',
  components: {
    ClassNoticeMenu,
    NoticeContent,
    AddNotice,
    InfoNotice
  },
  mixins: [spinMixin, noticeMixin, classMissionMixin]
}
</script>

<style lang="less" scoped>
.class-notice {
  color: #666;
  .ivu-divider {
    background-color: skyblue;
  }
}
</style>
