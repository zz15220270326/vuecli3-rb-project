<template>
  <div class="worker-authority">
    <auth-query-menu
      @searchName="searchName"
      @deleteWorker="deleteWorker"
      @addWorker="addWorker"
    />
    <!-- 添加弹窗 -->
    <Modal
      v-model="isShowCreateModal"
      class="create-modal"
      :title="modalTitle"
      width="750"
      ok-text="提交"
      cancel-text="取消"
      @on-ok="submitCreateModal"
      @on-cancel="cancelCreateModal"
    >
      <add-info
        :initAuthModuleTitle="initAuthModuleTitle"
        :initAuthModuleContent="initAuthModuleContent"
        @moduleSelectChange="moduleSelectChange"
        @titleChange="addTitleChange"
        @contentChange="addContentChange"
      />
    </Modal>
    <!-- 授权弹窗 -->
    <Modal
      v-model="isShowAuthModal"
      class="create-modal"
      :title="modalTitle"
      width="750"
      ok-text="保存"
      cancel-text="取消"
      @on-ok="submitCreateModal"
      @on-cancel="cancelCreateModal"
    >
      <auth-info />
    </Modal>
    <!-- 编辑弹窗 -->
    <Modal
      v-model="isShowEditModal"
      class="create-modal"
      :title="modalTitle"
      ok-text="保存"
      cancel-text="取消"
      @on-ok="confirmEdit"
      @on-cancel="cancelEdit"
    >
      <edit-info
        :editName="editName"
        :editDesc="editDesc"
        @titleChange="editTitleChange"
        @contentChange="editContentChange"
      />
    </Modal>
    <!-- 显示表格 -->
    <auth-table
      :titleList="titleList"
      :dataList="dataList"
      :isLoading="isLoading"
      @getSelectItem="getSelectItem"
      @handleItemOperations="handleItemOperations"
    />
  </div>
</template>

<script>
// ? import components
// ? 1. user-menu
const AuthQueryMenu = () => import('./child-components/AuthQueryMenu')
// ? 2. user-table
const AuthTable = () => import('./child-components/AuthTable')
// ? 3. user-info
const AddInfo = () => import('./child-components/AddInfo')
const EditInfo = () => import('./child-components/EditInfo')
const AuthInfo = () => import('./child-components/AuthInfo')

export default {
  name: 'WorkerAuthority',
  components: {
    AuthQueryMenu,
    AuthTable,
    AddInfo,
    EditInfo,
    AuthInfo
  },
  data: () => ({
    titleList: [
      {
        type: 'selection',
        width: 80,
        align: 'center'
      },
      {
        title: '序号',
        width: 100,
        key: 'number',
        align: 'center'
      },
      {
        title: '名称',
        key: 'name',
        align: 'center'
      },
      {
        title: '备注',
        key: 'desc',
        align: 'center'
      },
      {
        title: '操作',
        slot: 'operations',
        align: 'center'
      }
    ],
    dataList: [
      {
        number: 1,
        name: '测试主任',
        desc: '测试专用职位，请勿随意进行授权'
      },
      {
        number: 2,
        name: '开发专用角色',
        desc: '开发专用角色'
      },
      {
        number: 3,
        name: '体育老师',
        desc: '负责幼儿早操等活动'
      },
      {
        number: 4,
        name: '配班',
        desc: '采用超管后台'
      },
      {
        number: 5,
        name: '主班教师',
        desc: '采用后台模板'
      },
      {
        number: 6,
        name: '园所管理员',
        desc: '超级管理员'
      }
    ],
    isLoading: false,
    selectItem: [],
    operations: [
      {
        tag: '授权',
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
    dataListCurrentIndex: 0,
    // ? add-modal
    isShowCreateModal: false,
    initAuthModuleTitle: '',
    initAuthModuleContent: [],
    addName: '',
    addDesc: '',
    // ? auth-modal
    isShowAuthModal: false,
    // ? edit-modal
    isShowEditModal: false,
    // ? 需要子组件变化而编辑的Name和Desc
    editName: '',
    editDesc: '',
    // ? 初始化的Name和Desc
    initName: '',
    initDesc: '',
    modalTitle: ''
  }),
  computed: {
    searchUser() {
      return this.$store.state.searchUser
    }
  },
  methods: {
    initDataList() {
      this.dataList.map(item => (item.operations = this.operations))
    },
    // ? query-menu
    searchName() {
      console.log('searchName')
      this.isLoading = true
      setTimeout(() => {
        this.$Message.success('查询成功')
        this.isLoading = false
      }, 500)
    },
    deleteWorker() {
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
    },
    addWorker() {
      this.$Message.info('添加新的职工')
      setTimeout(() => {
        this.isShowCreateModal = true
        this.initAuthModuleTitle = '不使用默认模板'
        this.initAuthModuleContent = [
          {
            info: '不使用默认模板',
            key: 0
          },
          {
            info: '主班老师',
            key: 1
          },
          {
            info: '配班老师',
            key: 2
          },
          {
            info: '保健老师',
            key: 3
          }
        ]
        this.modalTitle = '添加'
      }, 500)
    },
    // ? auth-table
    getSelectItem(selection) {
      this.selectItem = selection
    },
    handleItemOperations(currentTag, currentIndex, table) {
      console.log(`
        当前的标签: ${currentTag}
        当前为第${currentIndex}行
        当前表格: ${table}
      `)
      this.dataListCurrentIndex = currentIndex
      switch (currentTag) {
        case '授权':
          this.$Message.success(`第${currentIndex + 1}条数据进行授权`)
          setTimeout(() => {
            this.isShowAuthModal = true
            this.modalTitle = '授权'
          }, 500)
          break
        case '编辑':
          this.$Message.info(`编辑第${currentIndex + 1}条数据`)
          setTimeout(() => {
            this.editName = this.dataList[currentIndex].name
            this.editDesc = this.dataList[currentIndex].desc
            this.initName = this.dataList[currentIndex].name
            this.initDesc = this.dataList[currentIndex].desc
            this.isShowEditModal = true
            this.modalTitle = '编辑'
          }, 500)
          break
        case '删除':
          this.$Modal.confirm({
            title: `删除第${currentIndex + 1}项`,
            content: '您是否要删除这一条记录? 删除后数据无法恢复!',
            onOk: () => {
              this.dataList.splice(currentIndex, 1)
              this.$Message.error('删除成功')
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
      }
    },
    // ? add-modal
    moduleSelectChange(selectItem) {
      this.initAuthModuleTitle = selectItem
    },
    addTitleChange(title) {
      this.addName = title
    },
    addContentChange(content) {
      this.addDesc = content
    },
    // ? edit-modal
    editTitleChange(title) {
      this.editName = title
    },
    editContentChange(content) {
      this.editDesc = content
    },
    confirmEdit() {
      // ! 编辑成功
      this.$Message.success('编辑成功! ')
      console.log(this.editName, this.editDesc)
      this.dataList[this.dataListCurrentIndex].name = this.editName
      this.dataList[this.dataListCurrentIndex].desc = this.editDesc
      this.editName = ''
      this.editDesc = ''
    },
    cancelEdit() {
      this.$Message.info('您取消了本次操作')
      this.editName = ''
      this.editDesc = ''
    },
    // ? submit / close modal
    submitCreateModal() {
      this.$Message.success('您提交了本次会话')
      setTimeout(() => {
        if (this.addName === '' || this.addDesc === '') {
          this.$Message.warning('编辑失败, 名称和备注不能为空')
          this.isShowCreateModal = false
          this.isShowEditModal = false
          this.isShowAuthModal = false
          this.addName = ''
          this.addDesc = ''
          return
        }

        this.dataList.push({
          number: this.dataList.length + 1,
          name: this.addName,
          desc: this.addDesc,
          operations: this.operations
        })
        this.$Message.success('编辑成功')
        this.isShowCreateModal = false
        this.isShowEditModal = false
        this.isShowAuthModal = false
        this.addName = ''
        this.addDesc = ''
      }, 500)
    },
    cancelCreateModal() {
      this.isShowCreateModal = false
      this.isShowEditModal = false
      this.isShowAuthModal = false
      this.addName = ''
      this.addDesc = ''
      this.$Message.warning('您关闭了本次会话')
    }
  },
  created() {
    this.initDataList()
  }
}
</script>

<style lang="less" scoped>
.worker-authority {
  background-color: pink;
}
</style>
