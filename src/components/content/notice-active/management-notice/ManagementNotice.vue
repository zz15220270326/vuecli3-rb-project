<template>
  <div class="management-notice">
    <simple-menu @handleSearch="handleSearch" />
    <Divider :dashed="true" />
    <Spin fix v-show="isLoading">加载中...</Spin>
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
const SimpleMenu = () => import('./child-components/SimpleMenu')
const NoticeContent = () => import('@NoticeActive/NoticeContent')
const InfoNotice = () => import('@NoticeActive/InfoNotice')
// ? import mixins
import spinMixin from '@mixins/notice-active/spinMixin'
import mnMixin from '@mixins/notice-active/mnMixin'
import noticeMixin from '@mixins/notice-active/noticeMixin'

export default {
  name: 'ManagementNotice',
  components: {
    SimpleMenu,
    InfoNotice,
    NoticeContent
  },
  mixins: [spinMixin, mnMixin, noticeMixin],
  data: () => ({
    isLoading: false
  }),
  methods: {
    handleSearch() {
      this.isLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.isLoading = false
      }, 666)
    }
  }
}
</script>

<style lang="less" scoped>
.management-notice {
  color: #666;
}
</style>
