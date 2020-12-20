<template>
  <!-- 假期类型设置  -->
  <div class="attdance-type-setting">
    <div class="add-holiday-type">
      <Modal
        v-model="isShowAddCard"
        title="添加节假日类型"
        @on-ok="confirmAdd"
        @on-cancel="confirmCancel"
        :transfer="false"
      >
        <div class="set-holiday-card">
          <Tag class="holiday-tag" checkable color="primary">假期类型</Tag>
          <Input
            class="holiday-input"
            v-model="inputHolidayType"
            placeholder="请输入节假日类型..."
            width="200px"
          />
          <Tag class="comment-tag" checkable color="success">假期备注</Tag>
          <Input
            class="comment-input"
            v-model="inputComment"
            placeholder="请输入假期备注"
            width="200px"
          />
        </div>
      </Modal>
      <Button class="add-type-btn" type="success" @click="handleAddType">
        添加节假日类型
      </Button>
    </div>
    <Table border :columns="titleList" :data="dataList" size="large">
      <template slot-scope="{ row }" slot="holidayType">
        <strong>{{ row.holidayType }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="operation">
        <Modal
          v-model="isShowEditCard"
          title="编辑假期类型"
          @on-ok="updateHolidayType"
          @on-cancel="confirmCancel"
        >
          <div class="set-holiday-card">
            <Tag class="holiday-tag" checkable color="primary">假期类型</Tag>
            <Input
              class="holiday-input"
              v-model="inputHolidayType"
              :placeholder="placeHolidayType"
              width="200px"
            />
            <Tag class="comment-tag" checkable color="success">假期备注</Tag>
            <Input
              class="comment-input"
              v-model="inputComment"
              :placeholder="placeComment"
              width="200px"
            />
          </div>
        </Modal>
        <Button
          class="opration-button"
          :type="item.type"
          size="large"
          @click="handleItem(index, item.type)"
          v-for="(item, key) in row.operation"
          :key="key"
        >
          {{ item.name }}
        </Button>
      </template>
    </Table>
  </div>
</template>

<script>
// 异步请求的方法
import {
  getHolidayType,
  addHolidayType,
  editHolidayType,
  deleteHolidayType
} from '@request/attdance/holidayType'

export default {
  name: 'AttdanceTypeSetting',
  data: () => ({
    titleList: [],
    dataList: [],
    isShowAddCard: false,
    // ? 输入的假期类型内容
    inputHolidayType: '',
    // ? 输入的备注内容
    inputComment: '',
    // ? 默认提示的假类和备注
    placeHolidayType: '',
    placeComment: '',
    // ? 当前假勤id
    currentId: 0,
    currentIndex: 0,
    isShowEditCard: false
  }),
  computed: {
    gardenId() {
      return this.$store.state.gardenId
    }
  },
  methods: {
    getTitle() {
      this.titleList = [
        {
          title: '假类名称',
          slot: 'holidayType',
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operation',
          align: 'center'
        }
      ]
    },

    handleItem(index, type) {
      this.currentIndex = index
      if (type === 'error') {
        // ? 设置假勤id
        this.currentId = this.dataList[index].id
        this.$Modal.confirm({
          title: '删除假期类型',
          content: '是否要删除该假期类型 ? ',
          onOk: async () => {
            const result = await deleteHolidayType(this.currentId)
            const { msg } = result
            if (msg === 'Success') {
              this.getHolidayTypeList()
              this.$Message.error('删除假期类型成功')
            } else {
              this.$Message.warning('删除假期类型失败')
            }
            this.currentId = 0
          },
          onCancel: () => {
            this.$Message.info('您取消了本次操作')
          }
        })
      }
      if (type === 'default') {
        // this.$Message.info('正在打开编辑框')
        this.isShowEditCard = true
        // ? placeholder显示默认的内容
        this.placeHolidayType = this.dataList[index].holidayType
        this.placeComment = this.dataList[index].comment
        // ? 设置假勤id
        this.currentId = this.dataList[index].id
      }
    },
    handleAddType() {
      this.isShowAddCard = true
    },
    confirmCancel() {
      this.$Message.info('您取消了本次操作')
      this.inputComment = ''
      this.inputHolidayType = ''
    },
    /**
     * ! 异步请求的方法
     */
    async getHolidayTypeList() {
      const result = await getHolidayType(this.gardenId)
      const { msg } = result.data
      if (msg === 'Success') {
        const { data } = result.data
        // console.log(data)
        let newList = []
        data.map(item => {
          let newItem = {}
          // ? 通过type判断假类是否能被编辑
          if (item.type === 0) {
            newItem.operation = [
              {
                name: '删除',
                type: 'error'
              }
            ]
          } else {
            newItem.operation = [
              {
                name: '删除',
                type: 'error'
              },
              {
                name: '编辑',
                type: 'default'
              }
            ]
          }
          newItem.holidayType = item.name
          newItem.comment = item.comment
          newItem.id = item.id
          newList.push(newItem)
        })
        this.dataList = newList
      }
    },
    async confirmAdd() {
      const { gardenId, inputComment, inputHolidayType } = this
      if (inputHolidayType === '' || inputComment === '') {
        this.$Message.error('新增失败! 假期类型或假期备注不得为空!')
      } else {
        const result = await addHolidayType(
          gardenId,
          inputHolidayType,
          inputComment
        )
        const { msg } = result
        if (msg === 'Success') {
          this.getHolidayTypeList()
          this.$Message.success('新增假期类型成功')
        } else {
          this.$Message.error('新增失败: 考勤规则名称重复')
        }
        this.inputComment = ''
        this.inputHolidayType = ''
        this.currentId = 0
      }
    },
    async updateHolidayType() {
      const { currentId, gardenId, placeComment, placeHolidayType } = this
      let { inputComment, inputHolidayType } = this
      if (inputComment === '') {
        inputComment = placeComment
      }
      if (inputHolidayType === '') {
        inputHolidayType = placeHolidayType
      }
      const result = await editHolidayType(
        currentId,
        gardenId,
        inputHolidayType,
        inputComment
      )
      const { msg } = result
      if (msg === 'Success') {
        this.getHolidayTypeList()
        this.$Message.success('编辑假期类型成功')
      } else {
        this.$Message.error('编辑失败')
      }

      this.inputComment = ''
      this.inputHolidayType = ''
    }
  },
  created() {
    this.getTitle()
    this.getHolidayTypeList()
  }
}
</script>

<style lang="less" scoped>
.attdance-type-setting {
  .add-holiday-type {
    height: 3rem;
    .add-type-btn {
      float: right;
      margin-right: 0.7rem;
    }
    .holiday-tag {
      cursor: pointer;
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .holiday-input {
      margin-top: 0.8rem;
      display: block;
    }
    .comment-tag {
      margin-top: 0.8rem;
      cursor: pointer;
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .comment-input {
      margin-top: 0.8rem;
      display: block;
    }
  }
  margin-top: 3rem;
  .opration-button {
    margin: 0.6rem;
  }
}
</style>
