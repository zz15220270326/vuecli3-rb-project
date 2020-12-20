<template>
  <div class="inside-notice">
    <inside-notice-menu
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
// ? import components
const InsideNoticeMenu = () => import('./child-components/InsideNoticeMenu')
const NoticeContent = () => import('@NoticeActive/NoticeContent')
const AddNotice = () => import('@NoticeActive/AddNotice')
const InfoNotice = () => import('@NoticeActive/InfoNotice')

// ? import mixins
import spinMixin from '@mixins/notice-active/spinMixin'
import insideMissionMixin from '@mixins/notice-active/insideMissionMixin'
import noticeMixin from '@mixins/notice-active/noticeMixin'

export default {
  name: 'InsideNotice',

  components: {
    InsideNoticeMenu,
    NoticeContent,
    AddNotice,
    InfoNotice
  },

  mixins: [spinMixin, insideMissionMixin, noticeMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.inside-notice {
  width: 100%;
  color: #666;
}
</style>
