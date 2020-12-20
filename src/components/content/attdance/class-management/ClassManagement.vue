<template>
  <!-- 班次管理 -->
  <div class="class-management">
    <div class="title">
      <Button type="warning" @click="addClassTime">
        添加班次
        <Icon type="md-add" />
      </Button>
    </div>
    <div class="content">
      <Modal
        v-model="isShowAddModal"
        class="add-class-time-modal"
        :title="addModalTitle"
        width="800px"
        :transfer="false"
        @on-cancel="clearModalTitle"
      >
        <AddClassTime />
      </Modal>
      <Modal
        v-model="isShowEditModal"
        class="edit-class-time-modal"
        :title="addModalTitle"
        width="800px"
        :transfer="false"
        @on-cancel="clearModalTitle"
      >
        <edit-class-time />
      </Modal>
      <Modal
        v-model="isShowManagementModal"
        class="management-modal"
        :title="addModalTitle"
        width="800px"
        :transfer="false"
        @on-cancel="clearModalTitle"
      >
        <person-management />
      </Modal>
      <Table border :columns="titleList" :data="dataList">
        <template slot-scope="{ row }" slot="cardTime">
          <div v-for="(item, key) in row.cardTime" :key="key">
            <div>{{ item }}</div>
          </div>
        </template>
        <template slot-scope="{ index }" slot="operations">
          <Button
            class="operations-button"
            v-for="(item, key) in operations"
            :key="key"
            :type="item.type"
            @click.native="handleAll(index, item.type)"
          >
            {{ item.tag }}
          </Button>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
// ? child-components
const AddClassTime = () => import('./child-components/AddClassTime')
const EditClassTime = () => import('./child-components/EditClassTime')
const PersonManagement = () => import('./child-components/PersonManagement')
export default {
  name: 'ClassManagement',
  components: {
    AddClassTime,
    EditClassTime,
    PersonManagement
  },
  data: () => ({
    isShowAddModal: false,
    isShowEditModal: false,
    isShowManagementModal: false,
    addModalTitle: '',
    titleList: [
      {
        title: '班次',
        key: 'class',
        align: 'center'
      },
      {
        title: '打卡时间',
        slot: 'cardTime',
        align: 'center'
      },
      {
        title: '班次周数',
        key: 'weekTime',
        align: 'center'
      },
      {
        title: '启用时间',
        key: 'startTime',
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
        class: '十点班',
        cardTime: [
          '上午上班打卡时间：10:00',
          '上午下班打卡时间：10:20',
          '下午上班打卡时间：10:40',
          '下午下班打卡时间：11:00'
        ],
        weekTime: '周一，周二，周三，周四，周五，周六，周日',
        startTime: '2020-10-22 00:00:00'
      }
    ],
    operations: [
      {
        tag: '编辑',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      },
      {
        tag: '排班',
        type: 'success'
      }
    ]
  }),
  methods: {
    addClassTime() {
      this.isShowAddModal = true
      this.addModalTitle = '添加班次'
    },
    clearModalTitle() {
      this.addModalTitle = ''
    },
    handleAll(currentIndex, currentType) {
      switch (currentType) {
        case 'primary':
          this.isShowEditModal = true
          this.addModalTitle = '编辑'
          break
        case 'error':
          this.$Modal.confirm({
            title: `删除第${currentIndex + 1}条数据`,
            content: '您是否要删除这条数据, 删除后数据无法恢复',
            onOk: () => {
              setTimeout(() => {
                this.dataList.splice(currentIndex, 1)
                this.$Message.error('删除成功')
              }, 300)
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
            }
          })
          break
        case 'success':
          this.isShowManagementModal = true
          this.addModalTitle = '排班'
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.class-management {
  .title {
    width: 100%;
    margin: 1.2rem 1rem;
    text-align: right;
    .ivu-btn {
      height: 1.6rem;
      width: 6.3rem;
    }
  }
  .content {
    .operations-button {
      margin: 0 0.3rem;
    }
  }
}
</style>
