<template>
  <!-- 已添加计划弹窗 -->
  <div class="added-plan" v-show="isShowAddedPlan">
    <Table border :columns="titleList" :data="dataList">
      <template slot-scope="{ row, index }" slot="operations">
        <Button
          v-for="(item, key) in operations"
          :key="key"
          :type="item.type"
          :disabled="row.name === 'summer' && key === 1"
          @click.native="handlePlan(key, index)"
        >
          {{ item.tag }}
        </Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: 'AddedPlan',
  data: () => ({
    titleList: [
      {
        title: '方案名称',
        key: 'seasonName',
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
        seasonName: '夏季',
        name: 'summer'
      },
      {
        seasonName: '秋季',
        name: 'autumn'
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
      }
    ],
    editSeason: ''
  }),
  props: {
    isShowAddedPlan: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handlePlan(buttonIndex, rowIndex) {
      switch (buttonIndex) {
        case 0:
          // ? 编辑操作
          this.$Modal.confirm({
            render: h => {
              return h('Input', {
                props: {
                  placeholder: `请填写计划名称, 原计划: ${this.dataList[rowIndex].seasonName}`
                },
                on: {
                  input: value => {
                    this.editSeason = value
                  }
                }
              })
            },
            okText: '确认编辑',
            onOk: () => {
              if (this.editSeason !== '') {
                this.dataList[rowIndex].seasonName = this.editSeason
                this.$Message.success('编辑成功')
                this.editSeason = ''
              } else {
                this.$Message.error('编辑失败, 编辑内容不得为空')
              }
            },
            onCancel: () => {
              this.$Message.warning('您取消了本次操作')
              this.editSeason = ''
            }
          })
          break
        case 1:
          // ? 删除操作
          this.$Modal.confirm({
            title: '删除计划',
            content: '确认删除?',
            onOk: () => {
              this.dataList.splice(rowIndex, 1)
              this.$Message.error('删除成功')
            },
            onCancel: () => {
              this.$Message.info('您取消了本次操作')
            }
          })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.added-plan {
  height: 25rem;
  width: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // .ivu-table {
  //   margin-top: 2.5rem;
  // }
  .ivu-btn {
    margin: 0 0.6rem;
  }
}
</style>
