<template>
  <div class="system-notice">
    <simple-menu @handleSearch="handleSearch" />
    <Divider :dashed="true" />
    <Spin fix v-show="isLoading">加载中...</Spin>
    <s-n-content
      :dataList="systemNoticeList"
      @handleClickItem="handleClickItem"
    />
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="960"
      :footer-hide="true"
    >
      <system-notice-info :infoItem="infoItem" />
    </Modal>
    <divide-page :totalPage="totalPage" />
  </div>
</template>

<script>
// ? import components
const SimpleMenu = () => import('./child-components/SimpleMenu')
const SNContent = () => import('./child-components/SNContent')
const SystemNoticeInfo = () => import('./child-components/SystemNoticeInfo')
const DividePage = () => import('@common/divide-page/DividePage')

// ? import mixins
import systemNoticeMixin from '@mixins/notice-active/systemNoticeMixin'

export default {
  name: 'SystemNotice',

  components: {
    SimpleMenu,
    SNContent,
    SystemNoticeInfo,
    DividePage
  },

  mixins: [systemNoticeMixin],

  data: () => ({
    isLoading: false,
    infoItem: {},
    // ? modal-data
    modalTitle: '',
    isShowInfoModal: false
  }),

  methods: {
    handleSearch() {
      this.isLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.isLoading = false
      }, 666)
    },
    handleClickItem(currentIndex) {
      this.infoItem = this.systemNoticeList[currentIndex]
      this.modalTitle = '详情'
      this.isShowInfoModal = true
    }
  }
}
</script>

<style lang="less" scoped>
.system-notice {
  color: #666;
  .ivu-divider {
    background-color: pink;
  }
}
</style>
