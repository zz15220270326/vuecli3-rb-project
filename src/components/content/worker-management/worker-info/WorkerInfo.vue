<template>
  <div class="worker-info">
    <info-query-menu
      :classTitle="classTitle"
      :classList="classList"
      @handleSelectClass="handleSelectClass"
      :placeHolder="placeHolder"
      :commonOperations="commonOperations"
      :specialOperations="specialOperations"
      @handleCommonOperations="handleCommonOperations"
      @handleSpecialOperations="handleSpecialOperations"
    />
    <!-- 添加职工信息 -->
    <Modal
      v-model="isShowCreateModal"
      class="create-modal"
      :title="modalTitle"
      width="800"
      ok-text="保存"
      cancel-text="取消"
      @on-ok="submitCreateModal"
      @on-cancel="cancelCreateModal"
    >
      <add-worker :selectInfo="selectInfo" @switchInfo="switchInfo" />
    </Modal>
    <!-- 职工详情信息 -->
    <Modal
      v-model="isShowInfoModal"
      class="info-modal"
      :title="modalTitle"
      width="800"
      ok-text="确认"
      cancel-text="取消"
      @on-ok="confirmInfoModal"
      @on-cancel="cancelInfoModal"
    >
      <div>你好啊</div>
    </Modal>
    <!-- 编辑职工信息 -->
    <Modal
      v-model="isShowEditModal"
      class="edit-modal"
      :title="modalTitle"
      width="800"
      ok-text="保存"
      cancel-text="取消"
      @on-ok="confirmEditModal"
      @on-cancel="cancelEditModal"
    ></Modal>
    <!-- <Modal></Modal> -->
    <worker-table
      :titleList="titleList"
      :dataList="dataList"
      :isLoading="isLoading"
      @getSelectItem="getSelectItem"
      @handleItemOperations="handleItemOperations"
    />
  </div>
</template>

<script>
// ? child-components
const InfoQueryMenu = () => import('./child-components/InfoQueryMenu')
const WorkerTable = () => import('./child-components/WorkerTable')
const AddWorker = () => import('./child-components/AddWorker')
// ? common components
export default {
  name: 'WorkerInfo',
  components: {
    InfoQueryMenu,
    WorkerTable,
    // ? About Modal
    AddWorker
  },
  data: () => ({
    placeHolder: '请输入职工姓名',
    classTitle: '全部班级',
    classList: [
      { info: '全部班级', key: 0 },
      { info: '朗云小班', key: 1 },
      { info: '计算机201', key: 2 },
      { info: '朗云3班中班级', key: 3 },
      { info: 'langyun班级', key: 4 }
    ],
    commonOperations: [
      {
        tag: '查询',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ],
    specialOperations: [
      {
        tag: '添加职工',
        icon: 'md-add',
        type: 'warning'
      },
      {
        tag: '模板导入',
        icon: 'ios-arrow-down',
        // <Icon type="ios-arrow-down" />
        type: 'warning'
      },
      {
        tag: '批量导出',
        icon: 'md-cloud-upload',
        // <Icon type="md-cloud-upload" />
        type: 'warning'
      }
    ],
    itemOperations: [
      {
        tag: '详情',
        type: 'success'
      },
      {
        tag: '编辑',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ],
    titleList: [
      {
        type: 'selection',
        width: 80,
        align: 'center'
      },
      {
        title: '序号',
        key: 'number',
        width: 100,
        align: 'center'
      },
      {
        title: '姓名',
        key: 'name',
        width: 170,
        align: 'center'
      },
      {
        title: '性别',
        key: 'gender',
        width: 100,
        align: 'center'
      },
      {
        title: '手机号',
        key: 'phone',
        width: 180,
        align: 'center'
      },
      {
        title: '负责班级',
        key: 'class',
        width: 340,
        align: 'center'
      },
      {
        title: '职位',
        key: 'career',
        width: 170,
        align: 'center'
      },
      {
        title: '操作',
        slot: 'operations',
        width: 380,
        align: 'center'
      }
    ],
    dataList: [
      {
        number: 1,
        name: '测试刘老师',
        gender: '女',
        phone: '13008800729',
        class: '朗云小班',
        career: '测试主任'
      },
      {
        number: 2,
        name: '黄振3',
        gender: '男',
        phone: '15220270326',
        class: '朗云小班',
        career: '园所管理员'
      },
      {
        number: 3,
        name: '小冯老师',
        gender: '男',
        phone: '13715260952',
        class: '朗云小班，朗云3班中班级，计算机201',
        career: '开发专用角色'
      },
      {
        number: 4,
        name: '卡卡西老师',
        gender: '男',
        phone: '15336361985',
        class: '朗云小班，朗云3班中班级，计算机201',
        career: '主班教师'
      },
      {
        number: 5,
        name: '发',
        gender: '女',
        phone: '13276406084',
        class: '',
        career: '园所管理员'
      },
      {
        number: 6,
        name: '开发韩老师',
        gender: '女',
        phone: '18128874425',
        class: '朗云小班，朗云3班中班级',
        career: '开发专用角色'
      }
    ],
    isLoading: false,
    selectItem: [],
    modalTitle: '',
    // ? especial-modal
    isShowCreateModal: false,
    // isShowImportModal: false, // ? 下载 / 上传教师模板
    // isShowExportModal: false,  // ? 这里直接导出
    isShowInfoModal: false,
    isShowEditModal: false,
    // ? add-worker
    selectInfo: [
      {
        tag: '基本信息',
        type: 'primary'
      },
      {
        tag: '详细信息',
        type: 'default'
      }
    ]
  }),
  methods: {
    handleSelectClass(selectItem) {
      this.classTitle = selectItem
    },
    getSelectItem(selection) {
      this.selectItem = selection
    },
    handleCommonOperations(currentType) {
      switch (currentType) {
        case 'primary':
          this.isLoading = true
          setTimeout(() => {
            this.isLoading = false
            this.$Message.success('查询计划成功')
          }, 800)
          break
        case 'error':
          if (this.selectItem.length === 0) {
            this.$Message.warning('请选择要删除的计划项')
          } else {
            this.$Modal.confirm({
              title: '删除表格中选中的信息',
              content: '您是否要删除这些已经选中的信息? 删除后数据无法恢复!',
              onOk: () => {
                let newDataList = this.dataList.filter(item1 =>
                  this.selectItem.every(item2 => item1.number !== item2.number)
                )
                this.dataList = newDataList
                this.$Message.error('删除成功')
              },
              onCancel() {
                this.$Message.warning('您取消了本次操作')
              }
            })
          }
          break
      }
    },
    handleSpecialOperations(currentTag) {
      switch (currentTag) {
        case '添加职工':
          this.isShowCreateModal = true
          this.modalTitle = '添加职工'
          break
        case '模板导入':
          break
        case '批量导出':
          break
      }
    },
    handleItemOperations(currentTag, selectIndex, table) {
      console.log(table)
      switch (currentTag) {
        case '详情':
          this.$Message.success(`查看详情第${selectIndex + 1}项`)
          setTimeout(() => {
            this.modalTitle = '详情'
            this.isShowInfoModal = true
          }, 300)
          break
        case '编辑':
          this.$Message.info(`编辑第${selectIndex + 1}项`)
          setTimeout(() => {
            this.modalTitle = '编辑'
            this.isShowEditModal = true
          }, 300)
          break
        case '删除':
          this.$Message.error(`删除第${selectIndex + 1}项`)
          this.$Modal.confirm({
            title: `删除第${selectIndex + 1}项`,
            content: '您是否要删除这一条记录? 删除后数据无法恢复!',
            onOk: () => {
              this.dataList.splice(selectIndex, 1)
              this.$Message.error('删除成功')
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
      }
    },
    submitCreateModal() {
      this.$Message.success('保存成功')
      this.modalTitle = ''
    },
    cancelCreateModal() {
      this.$Message.warning('您取消了本次操作')
      this.modalTitle = ''
    },
    confirmInfoModal() {
      this.$Message.warning('查询成功后提示')
      this.modalTitle = ''
    },
    cancelInfoModal() {
      this.$Message.info('您已关闭了查询信息')
      this.modalTitle = ''
    },
    confirmEditModal() {
      this.$Message.success('编辑成功')
      this.modalTitle = ''
    },
    cancelEditModal() {
      this.$Message.warning('您关闭了本次操作')
      this.modalTitle = ''
    },
    // ? add-worker
    switchInfo(currentIndex) {
      this.selectInfo.forEach((item, index) =>
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      )
    }
  },
  created() {
    this.dataList.map(item => (item.operations = this.itemOperations))
    console.log('worked-info created')
  }
}
</script>

<style lang="less" scoped>
.worker-info {
  background-color: pink;
}
</style>
