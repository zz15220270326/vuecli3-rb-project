<template>
  <!-- 排班表 -->
  <div class="duty-roster">
    <duty-query-menu
      @menuItems="menuItems"
      @getcurrentDate="getcurrentDate"
      @searchItems="searchItems"
    />
    <!-- edit-modal -->
    <Modal
      v-model="isShowEditModal"
      class="edit-modal"
      :title="modalTitle"
      ok-text="确认"
      cancel-text="取消"
      @on-ok="confirmEditModal"
      @on-cancel="cancelEditModal"
    >
      <edit-content
        :checkedTeacherName="checkedTeacherName"
        :checkedDate="checkedDate"
        :currentClass="currentClass"
        :updateClassTitle="updateClassTitle"
        :updateClassList="updateClassList"
        @handleSelect="handleSelect"
      />
    </Modal>
    <!-- table -->
    <div class="table-content">
      <Table border :columns="titleList" :data="dataList" size="small"></Table>
    </div>
  </div>
</template>

<script>
// ? import components
// ? child-components
const DutyQueryMenu = () => import('./child-components/DutyQueryMenu')
const EditContent = () => import('./child-components/EditContent')
// ? time-functions
import {
  dateToMs,
  transformToYMD,
  getMondayDate,
  getDays
} from '@utils/changeTime'
// ? pickColor by tag-name
// import pickColor from '@utils/pickColor'
// ? mock-data
const mockUpdateClassList = require('@mock/attdance/duty-roster/mockUpdateClassList.json')

export default {
  name: 'DutyRoster',
  components: {
    DutyQueryMenu,
    EditContent
  },
  data: () => ({
    pickDate: transformToYMD(dateToMs(Date())),
    menuItems: [
      { id: '54,76,86', className: '全园教师' },
      { id: '54', className: '太阳班' },
      { id: '76', className: '太阳班1' },
      { id: '86', className: '测试班级' }
    ],
    titleList: [],
    dataList: [],
    // ? 最近的星期一的日期
    mondayDate: '',
    mondayYear: '',
    mondayMonth: '',
    mondayDay: '',
    days: 0,
    // ? 编辑排班弹窗信息
    isShowEditModal: false,
    modalTitle: '',
    checkedTeacherName: '',
    checkedDate: '',
    currentClass: '',
    updateClassTitle: '',
    updateClassList: []
  }),
  computed: {
    teacherName() {
      return this.$store.state.teacherName
    }
  },
  methods: {
    // ? 获取当前的年月日
    getcurrentDate(pickDate) {
      const timestamp = dateToMs(pickDate)
      const ymd = transformToYMD(timestamp)
      this.pickDate = ymd
    },
    // ? 获取表格的标题部分
    getTitleList() {
      // ? 标题存放的对象
      let titleList = []
      const initObj = {
        title: '姓名/日期',
        key: 'name',
        align: 'center',
        width: 100
      }
      titleList[0] = initObj
      // ? 根据初始日期 / 选择日期计算星期一日期的两周内时间(m-d)
      const mondayDate = getMondayDate(this.pickDate)
      this.mondayDate = mondayDate
      // ? 根据星期一显示两周内的时间
      // ? 首先: 获取这个星期一的具体信息(y-m-d days)
      const dateArr = this.mondayDate.split('-')
      this.mondayYear = dateArr[0]
      this.mondayMonth = dateArr[1]
      this.mondayDay = dateArr[2]
      this.days = getDays(this.mondayYear, this.mondayMonth)
      // ? (mondayDay + 13) 与 days相比
      let mondayDay = this.mondayDay * 1
      let mondayMonth = this.mondayMonth * 1
      const showWeekDays = mondayDay + 13
      if (showWeekDays <= this.days) {
        console.log('在范围之内')
        for (let day = mondayDay; day <= showWeekDays; day++) {
          titleList.push({
            title: `${mondayMonth}-${day.toString()}`,
            key: `day${day - mondayDay + 1}`,
            align: 'center',
            render: (h, params) => {
              const { row, column } = params
              const text = row[`day${day - mondayDay + 1}`].name
              return [
                h(
                  'span',
                  {
                    props: {},
                    style: {
                      width: '5rem',
                      'text-align': 'left',
                      'font-size': '0.8rem',
                      padding: '0'
                    },
                    on: {
                      click: () => {
                        this.showModal(row.name, column.title, text)
                      }
                    }
                  },
                  text
                )
              ]
            }
          })
        }
      } else {
        console.log('超出范围')
        // ? 分成两部分 (当前月份, 和下一月)
        let list1 = []
        let list2 = []
        for (let day = mondayDay; day <= this.days; day++) {
          list1.push({
            title: `${mondayMonth}-${day.toString()}`,
            key: `day${day - mondayDay + 1}`,
            align: 'center',
            render: (h, params) => {
              const { row, column } = params
              const text = row[`day${day - mondayDay + 1}`].name
              return [
                h(
                  'span',
                  {
                    props: {},
                    style: {
                      width: '5rem',
                      'text-align': 'left',
                      'font-size': '0.8rem',
                      padding: '0'
                    },
                    on: {
                      click: () => {
                        this.showModal(row.name, column.title, text)
                      }
                    }
                  },
                  text
                )
              ]
            }
          })
        }
        let nextMonth = mondayMonth * 1 >= 12 ? 1 : mondayMonth * 1 + 1
        for (let day = 1; day <= mondayDay + 13 - this.days; day++) {
          list2.push({
            title: `${nextMonth}-${day.toString()}`,
            key: `day${day + list1.length}`,
            align: 'center',
            render: (h, params) => {
              const { row, column } = params
              const text = row[`day${day + list1.length}`].name
              return [
                h(
                  'span',
                  {
                    props: {},
                    style: {
                      width: '5rem',
                      'text-align': 'left',
                      'font-size': '0.8rem',
                      padding: '0'
                    },
                    on: {
                      click: () => {
                        this.showModal(row.name, column.title, text)
                      }
                    }
                  },
                  text
                )
              ]
            }
          })
        }
        titleList.push(...list1)
        titleList.push(...list2)
      }
      this.titleList = titleList
      titleList = []
    },
    // renderRoster(h, params, day) {
    //   const { row } = params
    //   const text = row[`day${day + 1}`].name
    //   const color = pickColor(row, day)
    //   return [
    //     h(
    //       'div',
    //       {
    //         props: {},
    //         style: {
    //           color,
    //           width: '5rem',
    //           'text-align': 'left',
    //           'font-size': '0.8rem',
    //           padding: '0'
    //         },
    //         on: {
    //           click: () => {}
    //         }
    //       },
    //       text
    //     )
    //   ]
    // },
    showModal(checkedTeacherName, checkedDate, currentClass) {
      this.getUpdateClassList()
      this.checkedTeacherName = checkedTeacherName
      this.checkedDate = checkedDate
      this.currentClass = currentClass
      this.modalTitle = '编辑排班'
    },
    handleSelect(selectItem) {
      this.updateClassTitle = selectItem
    },
    // ? Modal-functions
    confirmEditModal() {
      this.$Message.info('确认编辑')
      setTimeout(() => {
        this.$Message.success('编辑成功')
      }, 500)
    },
    cancelEditModal() {
      this.$Message.warning('您取消了本次操作')
    },
    /**
     * ! async-functions
     */
    getUpdateClassList() {
      setTimeout(() => {
        const result = mockUpdateClassList
        const { msg } = result
        if (msg === 'Success') {
          this.updateClassList = result.data
          this.updateClassTitle = result.data[0].info
          this.isShowEditModal = true
        }
      }, 500)
    },
    // ? 获取表格的内容部分
    getDataList() {
      // ? 先获取第一行静态数据的内容
      const firstData = {
        name: '',
        day1: {
          name: '周一'
        },
        day2: {
          name: '周二'
        },
        day3: {
          name: '周三'
        },
        day4: {
          name: '周四'
        },
        day5: {
          name: '周五'
        },
        day6: {
          name: '周六'
        },
        day7: {
          name: '周日'
        },
        day8: {
          name: '周一'
        },
        day9: {
          name: '周二'
        },
        day10: {
          name: '周三'
        },
        day11: {
          name: '周四'
        },
        day12: {
          name: '周五'
        },
        day13: {
          name: '周六'
        },
        day14: {
          name: '周日'
        }
      }
      this.dataList[0] = firstData
      // // ? 模拟网络请求获取内容
      const mockRequestData = [
        {
          name: '汤姆猫',
          day1: {
            name: 'aaa'
          },
          day2: {
            name: 'aaa'
          },
          day3: {
            name: 'bbb'
          },
          day4: {
            name: 'bbb'
          },
          day5: {
            name: 'bbb'
          },
          day6: {
            name: 'bbb'
          },
          day7: {
            name: 'bbb'
          },
          day8: {
            name: 'bbb'
          },
          day9: {
            name: 'bbb'
          },
          day10: {
            name: 'bbb'
          },
          day11: {
            name: 'bbb'
          },
          day12: {
            name: 'bbb'
          },
          day13: {
            name: 'bbb'
          },
          day14: {
            name: 'bbb'
          }
        },
        {
          name: '超威蓝猫',
          day1: {
            name: 'eeeee'
          },
          day2: {
            name: 'eeeee'
          },
          day3: {
            name: 'eeeee'
          },
          day4: {
            name: 'eeeee'
          },
          day5: {
            name: 'eeeee'
          },
          day6: {
            name: 'eeeee'
          },
          day7: {
            name: 'eeeee'
          },
          day8: {
            name: 'eeeee'
          },
          day9: {
            name: 'eeeee'
          },
          day10: {
            name: 'eeeee'
          },
          day11: {
            name: 'eeeee'
          },
          day12: {
            name: 'eeeee'
          },
          day13: {
            name: 'eeeee'
          },
          day14: {
            name: 'eeeee'
          }
        },
        {
          name: 'fankie',
          day1: {
            name: 'is very good'
          },
          day2: {
            name: 'is very good'
          },
          day3: {
            name: 'is very good'
          },
          day4: {
            name: 'is very good'
          },
          day5: {
            name: 'is very good'
          },
          day6: {
            name: 'is very good'
          },
          day7: {
            name: 'is very good'
          },
          day8: {
            name: 'is very good'
          },
          day9: {
            name: 'is very good'
          },
          day10: {
            name: 'is very good'
          },
          day11: {
            name: 'is very good'
          },
          day12: {
            name: 'is very good'
          },
          day13: {
            name: 'is very good'
          },
          day14: {
            name: 'is very good'
          }
        }
      ]
      setTimeout(() => {
        this.dataList.push(...mockRequestData)
      }, 300)
    },
    searchItems() {
      this.$Message.info('查询中...')
      this.titleList = []
      setTimeout(() => {
        this.getTitleList()
        this.getDataList()
      }, 500)
    }
  },
  /**
   * !! life-hooks
   */
  created() {
    this.getTitleList()
    this.getDataList()
    // console.log('排班表创建')
  }
}
</script>

<style lang="less" scoped>
.table-content {
  margin-top: 1.2rem;
}
</style>
