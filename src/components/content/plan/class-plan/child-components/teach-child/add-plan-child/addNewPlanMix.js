/*
 * @Author: 张先生
 * @Date: 2020-12-20 23:26:33
 * @LastEditTime: 2020-12-20 23:35:18
 * @FilePath: \langyun_manager\src\components\content\plan\class-plan\child-components\teach-child\add-plan-child\addNewPlan.js
 */
// ? async functions / mock-data

export default {
  data() {
    return {
      planName: '',
      startTime: '00:00',
      endTime: '01:00',
      titleList: [
        {
          title: '作息时间',
          key: 'time',
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
          time: '12:30-13:30',
          name: '开始计划'
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
      editTimeSpan: ''
    }
  },

  props: {
    isShowAddNewPlan: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    getChangeTime(timeSpan) {
      const { startTime, endTime } = timeSpan
      this.startTime = startTime
      this.endTime = endTime
    },
    addToList() {
      if (this.planName === '') {
        this.$Message.error('方案名称不能为空')
        return
      }
      if (this.startTime === '' || this.endTime === '') {
        this.$Message.error('开始时间或结束时间不能为空')
        return
      }
      let newPlan = {}
      newPlan.name = this.planName
      newPlan.time = this.startTime + '-' + this.endTime
      newPlan.operations = this.operations
      this.dataList.map(item => {
        let itemArr = item.time.split('')
        const startTime =
          itemArr[0] + itemArr[1] + itemArr[2] + itemArr[3] + itemArr[4]
        const endTime =
          itemArr[itemArr.length - 5] +
          itemArr[itemArr.length - 4] +
          itemArr[itemArr.length - 3] +
          itemArr[itemArr.length - 2] +
          itemArr[itemArr.length - 1]
        if (this.startTime === startTime || this.endTime === endTime) {
          // ? 计划开始或结束时间相同, 不能同时加入进行
          this.$Message.warning('这个时间段已被占用,请重新选择')
        } else {
          this.dataList.push(newPlan)
          this.$Message.success('添加成功')
        }
      })
    },
    handlePlan(currentIndex, rowIndex) {
      switch (currentIndex) {
        case 0:
          this.$Modal.confirm({
            render: h => {
              return h('TimePicker', {
                props: {
                  format: 'HH:mm',
                  type: 'timerange',
                  placeholder: `默认: ${this.dataList[rowIndex].time}`
                },
                on: {
                  input: input => {
                    if (input.length !== 0) {
                      this.editTimeSpan = input[0] + '-' + input[1]
                    }
                  }
                }
              })
            },
            okText: '确认编辑',
            onOk: () => {
              if (this.editTimeSpan === '' || this.editTimeSpan === '-') {
                this.$Message.error('编辑失败, 编辑内容不能为空')
                return
              }
              this.dataList[rowIndex].time = this.editTimeSpan
              this.$Message.success('修改成功')
              this.editTimeSpan = ''
            },
            cancelText: '取消编辑',
            onCancel: () => {
              this.$Message.warning('您取消了编辑')
              this.editTimeSpan = ''
            }
          })
          break
        case 1:
          // 进行删除操作
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
    },
    savePlan() {
      // if (this.dataList.length === '') {}
      this.$Message.success('保存成功')
      setTimeout(() => {
        this.$emit('cancelAddPlan')
      }, 300)
    },
    cancelAddPlan() {
      this.$Message.warning('您取消了本次操作')
      this.$emit('cancelAddPlan')
    }
  },

  created() {}
}
