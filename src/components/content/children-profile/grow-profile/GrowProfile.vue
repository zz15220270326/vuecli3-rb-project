<template>
  <div class="grow-profile">
    <grow-menu @handleCommon="handleCommon" />
    <profile-table
      :titleList="titleList"
      :dataList="dataList"
      :tableIsLoading="tableIsLoading"
      @getSelectItem="getSelectItem"
      @handleTableItem="handleTableItem"
    />
    <divide-page :totalPage="totalPage" />
    <!-- Modal-content -->
    <Modal
      v-model="isShowInfoModal"
      :title="modalTitle"
      width="750"
      :footer-hide="true"
      @on-cancel="cancelModal"
    >
      <info-content
        :currentClass="currentClass"
        :childName="childName"
        :selectMonth="selectMonth"
        :teacherComment="teacherComment"
        :honner="honner"
        :lifeImages="lifeImages"
        :rateValue="rateValue"
      />
    </Modal>
    <Modal
      v-model="isShowEditModal"
      :title="modalTitle"
      width="750"
      ok-text="发布"
      cancel-text="取消"
      @on-cancel="cancelModal"
    >
      <edit-content
        :honner="honner"
        :lifeImages="lifeImages"
        :rateValue="rateValue"
      />
    </Modal>
    <!--  -->
  </div>
</template>

<script>
// ? import components
const GrowMenu = () => import('./child-components/GrowMenu')
const ProfileTable = () => import('@ChildrenProfile/ProfileTable')

const InfoContent = () => import('./child-components/InfoContent')
const EditContent = () => import('./child-components/EditContent')

const DividePage = () => import('@common/divide-page/DividePage')
// ? mixins
import growProfileMixin from '@mixins/children-profile/growProfileMixin'

export default {
  name: 'GrowProfile',

  components: {
    GrowMenu,
    ProfileTable,
    InfoContent,
    EditContent,
    DividePage
  },

  mixins: [growProfileMixin],

  data: () => ({
    // ? table-data
    tableIsLoading: false,
    selectItem: [],
    // ? modal-data
    modalTitle: '',
    // ?? info-modal
    isShowInfoModal: false,
    currentClass: '',
    childName: '',
    selectMonth: '',
    rateValue: 0,
    honner: [],
    teacherComment: '',
    lifeImages: [],
    // ?? edit-modal
    isShowEditModal: false
  }),

  methods: {
    // ? menu-functions
    handleCommon(selectIndex) {
      switch (selectIndex) {
        case 0:
          // ? 查询
          this.tableIsLoading = true
          setTimeout(() => {
            this.$Message.success('查询成功')
            this.tableIsLoading = false
          }, 1000)
          break
        case 1:
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                this.tableIsLoading = true
                setTimeout(() => {
                  let newDataList = this.dataList.filter(item1 =>
                    this.selectItem.every(
                      item2 => item1.number !== item2.number
                    )
                  )
                  this.dataList = newDataList
                  this.$Message.error('删除成功')
                  this.tableIsLoading = false
                }, 500)
              },
              onCancel: () => {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    // ? table-functions
    getSelectItem(selectItem) {
      this.selectItem = selectItem
    },
    handleTableItem(itemIndex, btnIndex) {
      switch (btnIndex) {
        case 0:
          this.currentClass = this.dataList[itemIndex].class
          this.childName = this.dataList[itemIndex].name
          this.selectMonth = this.dataList[itemIndex].date
          this.teacherComment = '你是真的很不错'
          this.rateValue = this.dataList[itemIndex].rateValue
          this.honner = [
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S-default.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S-default.png'
          ]
          this.lifeImages = [
            'http://t.static.langlangyun.com/Growup/7f1de29e6da19d22b51c68001e7e0e54/eb24d5c12c1316a42f3d87bf90fc02d0?imageView2/1/w/300/h/300',
            'http://t.static.langlangyun.com/Growup/7f1de29e6da19d22b51c68001e7e0e54/4f5a1d776daeb60438d0d940a1b8ce81?imageView2/1/w/300/h/300'
          ]
          this.modalTitle = '详情'
          this.isShowInfoModal = true
          break
        case 1:
          this.honner = [
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S-default.png',
            'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui/images/star/iconpic-star-S-default.png'
          ]
          this.lifeImages = [
            'http://t.static.langlangyun.com/Growup/7f1de29e6da19d22b51c68001e7e0e54/eb24d5c12c1316a42f3d87bf90fc02d0?imageView2/1/w/300/h/300',
            'http://t.static.langlangyun.com/Growup/7f1de29e6da19d22b51c68001e7e0e54/4f5a1d776daeb60438d0d940a1b8ce81?imageView2/1/w/300/h/300'
          ]
          this.rateValue = this.dataList[itemIndex].rateValue
          this.modalTitle = '编辑'
          this.isShowEditModal = true
          break
        case 2:
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}项`,
            content: '是否删除?删除后数据无法恢复',
            onOk: () => {
              this.dataList.splice(itemIndex, 1)
              this.$Message.error(`删除第${itemIndex + 1}项成功`)
            },
            onCancel: () => {
              this.$Message.success('您取消了删除')
            }
          })
          break
      }
    },
    // ? modal-functions
    cancelModal() {
      this.$Message.info('您关闭了本次对话')
    }
  }
}
</script>

<style lang="less" scoped>
.grow-profile {
  color: #666;
}
</style>
