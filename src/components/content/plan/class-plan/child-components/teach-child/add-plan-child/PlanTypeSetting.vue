<template>
  <!-- 计划类型设置弹窗 -->
  <div class="plan-type-setting" v-show="isShowPlanTypeSetting">
    <div class="header">
      <div class="left">
        <span>计划类型</span>
      </div>
      <div class="middle">
        <Input placeholder="请输入类型名称" v-model="typeName" />
      </div>
      <div class="right">
        <Button type="warning" @click.native="addToList">
          添加至列表
        </Button>
      </div>
    </div>
    <div class="body">
      <Table border :columns="titleList" :data="dataList">
        <template slot-scope="{ row, index }" slot="operations">
          <Button
            v-for="(item, key) in operations"
            :key="key"
            :type="item.type"
            @click.native="handleType(index, item.type)"
          >
            {{ item.tag }}
          </Button>
        </template>
      </Table>
    </div>
    <div class="footer">
      <Button type="primary">确认</Button>
      <Button type="warning">取消</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanTypeSetting',
  data: () => ({
    typeName: '',
    titleList: [
      {
        title: '类型',
        key: 'type',
        align: 'center',
        width: '150'
      },
      {
        title: '操作',
        slot: 'operations',
        align: 'center',
        width: '300'
      }
    ],
    dataList: [
      {
        type: '体育活动',
        name: 'actions'
      },
      {
        type: '读书',
        name: 'reading'
      },
      {
        type: '看kan1',
        name: 'look'
      }
    ],
    operations: [
      {
        tag: '编辑',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'dashed'
      }
    ],
    editType: ''
  }),
  props: {
    isShowPlanTypeSetting: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    addToList() {
      if (this.typeName === '') {
        this.$Message.warning('添加失败, 类型名称不得为空')
      } else {
        let newItem = {}
        newItem.type = this.typeName
        newItem.operations = this.operations
        this.dataList.push(newItem)
        this.$Message.success('添加成功')
        this.typeName = ''
      }
    },
    handleType(currentIndex, currentType) {
      switch (currentType) {
        case 'primary':
          this.$Message.success('点击进行编辑')
          setTimeout(() => {
            this.$Modal.confirm({
              render: h => {
                return h('Input', {
                  props: {
                    placeholder: `请填写计划类型, 原类型: ${this.dataList[currentIndex].type}`
                  },
                  on: {
                    input: value => {
                      this.editType = value
                    }
                  }
                })
              },
              okText: '确认编辑',
              onOk: () => {
                if (this.editType !== '') {
                  this.dataList[currentIndex].type = this.editType
                  this.$Message.success('编辑成功')
                  this.editType = ''
                } else {
                  this.$Message.error('编辑失败, 编辑内容不得为空')
                }
              },
              onCancel: () => {
                this.$Message.warning('您取消了本次操作')
                this.editType = ''
              }
            })
          }, 200)
          break
        case 'dashed':
          this.$Message.info('这里不能够进行删除操作')
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.plan-type-setting {
  height: 25rem;
  width: 100%;
  .header {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .left {
      flex: 1;
      text-align: right;
      span {
        margin-right: 3rem;
        color: #999;
        font-size: 1rem;
      }
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 1;
      .ivu-btn {
        width: 6.5rem;
        margin-left: 2.4rem;
      }
    }
  }
  .body {
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ivu-btn {
      margin: 0 0.6rem;
    }
  }
  .footer {
    height: 20%;
    width: 100%;
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-btn {
      width: 8rem;
      margin: 0 0.75rem;
    }
  }
}
</style>
