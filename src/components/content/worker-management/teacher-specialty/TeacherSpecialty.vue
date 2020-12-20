<template>
  <div class="teacher-specialty">
    <teacher-query-menu
      :selectMenu="selectMenu"
      :defaultTitle="defaultTitle"
      @handleSelectTeacher="handleSelectTeacher"
      :operations="operations"
      :placeHolder="placeHolder"
      @handleOperations="handleOperations"
      @addSpecial="addSpecial"
    />
    <!-- Modal -->
    <!-- 1. 查看详情 -->
    <Modal
      v-model="isShowInfoModal"
      class="info-modal"
      :title="modalTitle"
      width="800"
      ok-text="确认"
      cancel-text="取消"
      @on-ok="confirmInfoModal"
      @on-cancel="cancelInfoModal"
      :transfer="false"
    >
      <teacher-info :checkedTeacher="checkedTeacher" />
    </Modal>
    <!-- 2. 编辑 -->
    <Modal
      v-model="isShowEditModal"
      class="edit-modal"
      :title="modalTitle"
      width="800"
      ok-text="发布"
      cancel-text="取消"
      @on-ok="confirmEditModal"
      @on-cancel="cancelEditModal"
    >
      <teacher-edit :checkedTeacher="checkedTeacher" />
    </Modal>
    <!-- 3. 创建风采 -->
    <Modal
      v-model="isShowAddModal"
      class="add-modal"
      :title="modalTitle"
      width="800"
      ok-text="发布"
      cancel-text="取消"
      @on-ok="confirmAddModal"
      @on-cancel="cancelAddModal"
    >
      <add-specialty />
    </Modal>
    <teacher-special-content
      :teacherInfo="teacherInfo"
      :totalPage="totalPage"
      @checkInfo="checkInfo"
      @showButton="showButton"
      @hideButton="hideButton"
      @editItem="editItem"
      @deleteItem="deleteItem"
      @checkedItem="checkedItem"
    />
    <!-- <Page :total="totalPage" show-sizer show-elevator show-total /> -->
  </div>
</template>

<script>
// ! mock-data
const selectMenu = require('@mock/worker-management/teacher-specialty/selectMenu.json')
const teacherInfo = require('@mock/worker-management/teacher-specialty/teacherInfo.json')
// ? import components
const TeacherQueryMenu = () => import('./child-components/TeacherQueryMenu')
const TeacherSpecialContent = () =>
  import('./child-components/TeacherSpecialContent')
const TeacherInfo = () => import('./child-components/TeacherInfo')
const TeacherEdit = () => import('./child-components/TeacherEdit')
const AddSpecialty = () => import('./child-components/AddSpecialty')
// ? import mixins

export default {
  name: 'TeacherSpecialty',
  components: {
    TeacherQueryMenu,
    TeacherSpecialContent,
    TeacherInfo,
    TeacherEdit,
    AddSpecialty
  },
  data: () => ({
    selectMenu: [],
    defaultTitle: '',
    // ? menu-data
    operations: [
      {
        tag: '查询',
        type: 'primary'
      },
      {
        tag: '全选',
        type: 'success'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ],
    isAbleDelete: false,
    placeHolder: '请输入教师姓名',
    selectItem: [],
    currentType: '',
    teacherInfo: [],
    checkedTeacher: {},
    // ? content-data
    totalPage: 0,
    // ? modal-data
    // ? common
    modalTitle: '',
    isShowInfoModal: false,
    isShowEditModal: false,
    isShowAddModal: false
  }),
  computed: {
    teacherName() {
      return this.$store.state.teacherName
    }
  },
  methods: {
    // ? menu
    handleSelectTeacher(selectItem) {
      this.defaultTitle = selectItem
    },
    handleOperations(currentType) {
      switch (currentType) {
        case 'primary':
          // todo 进行查询操作
          if (this.defaultTitle === '' || this.defaultTitle === '请选择班级') {
            // ? 没有选择教师信息
            this.$Message.warning('请先选择班级哦')
            return
          }
          this.$Loading.start()
          setTimeout(() => {
            this.$Loading.finish()
            this.requestTeacherInfo()
            this.$Message.info('查询成功')
          }, 1000)
          break
        case 'success':
          if (this.operations[1].tag === '全选') {
            // todo 进行全选操作
            this.$Message.success('全部教师选择成功')
            this.operations[1].tag = '取消全选'
          } else {
            // todo 取消全选操作
            this.$Message.success('取消全选的教师')
            this.operations[1].tag = '全选'
          }
          break
        case 'error':
          if (this.operations[1].tag === '全选') {
            this.$Message.warning('请先选择全部教师')
          } else {
            this.$Modal.confirm({
              title: '删除全部选中的信息',
              content: '是否删除? 删除后数据无法恢复',
              onOk: () => {
                // ? 发请求删除
                setTimeout(() => {
                  this.$Message.error('删除成功')
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
    addSpecial() {
      this.$Message.success('正在打开添加界面...')
      setTimeout(() => {
        this.isShowAddModal = true
        this.modalTitle = '添加风采'
      }, 600)
    },
    // ? content
    checkInfo(currentIndex) {
      this.$Message.info(`查看第${currentIndex + 1}条详情信息`)
      setTimeout(() => {
        this.checkedTeacher = this.teacherInfo[currentIndex]
        this.modalTitle = '详情'
        this.isShowInfoModal = true
      }, 300)
    },
    showButton(index) {
      this.teacherInfo[index].showButton = true
    },
    hideButton(index) {
      this.teacherInfo[index].showButton = false
    },
    editItem(event, currentIndex) {
      event.stopPropagation()
      this.$Message.info(`编辑第${currentIndex + 1}项`)
      this.checkedTeacher = this.teacherInfo[currentIndex]
      setTimeout(() => {
        this.isShowEditModal = true
        this.modalTitle = '编辑'
      }, 500)
    },
    deleteItem(event, currentIndex) {
      event.stopPropagation()
      this.$Message.error(`删除第${currentIndex + 1}项`)
      setTimeout(() => {
        this.$Modal.confirm({
          title: `删除教师风采第${currentIndex + 1}项`,
          content: '确认删除? 删除后数据无法恢复!',
          onOk: () => {
            this.teacherInfo.splice(currentIndex, 1)
            this.$Message.error('删除成功')
          },
          onCancel: () => {
            this.$Message.warning('您取消了本次操作')
          }
        })
      }, 500)
    },
    checkedItem(isChecked, selectIndex) {
      this.teacherInfo[selectIndex].checked = isChecked
    },
    // ? Modal-functions
    // ? 1. info-modal
    confirmInfoModal() {},
    cancelInfoModal() {},
    // ? 2. edit-modal
    confirmEditModal() {
      this.$Message.success('编辑成功')
    },
    cancelEditModal() {
      this.$Message.warning('您关闭了编辑')
    },
    // ? 3. add-modal
    confirmAddModal() {
      this.$Message.success('添加成功')
    },
    cancelAddModal() {
      this.$Message.warning('您取消了添加')
    },
    // ? async functions
    requestSelectMenu() {
      setTimeout(() => {
        const result = selectMenu
        const { msg } = result
        if (msg === 'Success') {
          const { data } = result
          data.map((item, index) => {
            this.selectMenu.push({
              info: item.className,
              key: index
            })
          })
          this.defaultTitle = data[0].className
        }
      }, 350)
    },
    requestTeacherInfo() {
      setTimeout(() => {
        const result = teacherInfo
        const { msg } = result
        if (msg === 'Success') {
          const { data } = result
          data.map(item => {
            item.checked = false
            // ? 是否显示按钮
            item.showButton = false
            this.teacherInfo.push(item)
          })
          this.totalPage = result.page_size * 10
        }
      }, 400)
    }
  },
  /**
   * ! life-hooks
   */
  created() {
    this.requestSelectMenu()
    this.requestTeacherInfo()
  }
}
</script>

<style lang="less" scoped></style>
