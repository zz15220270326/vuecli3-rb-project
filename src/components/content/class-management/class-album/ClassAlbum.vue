<template>
  <div class="class-ablums">
    <class-ablum-menu
      :isSelectAll="isSelectAll"
      @handleOperations="handleOperations"
      @handleAbOperations="handleAbOperations"
    />
    <Spin size="large" fix v-if="isLoading">
      加载中
    </Spin>
    <!-- modal-content -->
    <Modal
      v-model="isShowAddModal"
      class-name="add-modal"
      :title="modalTitle"
      width="800"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <add-content @addAblum="addAblum" @cancelAdd="cancelModal" />
    </Modal>
    <Modal
      v-model="isShowUploadModal"
      class-name="upload-modal"
      :title="uploadModalTitle"
      width="960"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <upload-content
        @cancelUpload="cancelModal"
        @uploadSuccess="uploadFinish"
        @handleFailure="uploadFinish"
        @addPlan="addPlan"
      />
    </Modal>
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      class-name="info-modal"
      width="1080"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <info-content
        :infoContent="infoContent"
        :infoImgs="infoImgs"
        @handleItemInfo="handleItemInfo"
        @singleOpsShow="singleOpsShow"
        @singleOpsHide="singleOpsHide"
      />
    </Modal>
    <!--  -->
    <class-ablum-content
      :ablumItems="ablumItems"
      @handleCheckbox="handleCheckbox"
      @showInfo="showInfo"
      @handleItemShow="handleItemShow"
      @handleItemLeave="handleItemLeave"
      @itemBtnOperations="itemBtnOperations"
    />
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import-components
// ?? common components
const DividePage = () => import('@common/divide-page/DividePage')

// ?? child-components
const ClassAblumMenu = () => import('./child-components/ClassAblumMenu')
const ClassAblumContent = () => import('./child-components/ClassAblumContent')
const AddContent = () => import('./child-components/AddContent')
const UploadContent = () => import('./child-components/UploadContent')
const InfoContent = () => import('./child-components/InfoContent')

// ? import-mixins
import getAblumItemsMixin from '@mixins/class-management/getAblumItemsMixin'
import classAblumMixin from '@mixins/class-management/classAblumMixin'

export default {
  name: 'ClassAlbum',

  components: {
    ClassAblumMenu,
    ClassAblumContent,
    AddContent,
    UploadContent,
    InfoContent,

    DividePage
  },

  mixins: [getAblumItemsMixin, classAblumMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.class-ablums {
  color: #666;
}
</style>
