// ? async-functions / mock-data
const mockAttdanceInfoData = require('@mock/class-management/mockAttdanceInfoData')
// ? time-functions
import {
  getDays,
  getWeekDays
} from '@utils/changeTime'

export default {
  data() {
    return {
      isLoading: false,
      operations: [{
          tag: '出勤',
          type: 'success'
        },
        {
          tag: '病假',
          type: 'error'
        },
        {
          tag: '事假',
          type: 'warning'
        }
      ],
      // ? 表格数据
      year: '',
      month: '',
      day: '',
      days: 0,
      titleList: [],
      dataList: []
    }
  },
  computed: {
    currentClass() {
      const {
        classIds
      } = this.$store.state
      return classIds + '班'
    }
  },
  methods: {
    // ? menu-functions
    handleSearch() {
      this.isLoading = true
      setTimeout(() => {
        this.getYMD()
        this.getTableData()
        this.isLoading = false
      }, 600)
    },
    // ? table-functions
    // ?? sync
    getNameColor(item) {
      return item === '幼儿姓名' ? '#0094ff' : '#666'
    },
    getDayColor(item) { // '#0094ff'
      switch (item) {
        case '√':
          return 'lime'
        case '〇':
          return 'skyblue'
        case 'X':
          return 'red'
        case '-':
          return 'orange'
        case '周六':
          return '#0094ff'
        case '周日':
          return '#0094ff'
        default:
          return '#666'
      }
    },
    getDayText(item) {
      switch (item) {
        case 0:
          return '√'
        case 1:
          return '〇'
        case 2:
          return 'X'
        case 3:
          return '-'
        default:
          return item
      }
    },
    // ?? async
    getYMD() {
      if (this.year === '' || this.month === '' || this.day === '') {
        const {
          defaultYear,
          defaultMonth,
          defaultDay
        } = this.$store.state
        this.year = defaultYear
        this.month = defaultMonth
        this.day = defaultDay
        this.days = getDays(this.year, this.month)
      } else {
        const {
          selectMonth
        } = this.$store.state
        const ymArr = selectMonth.split('-')
        this.year = ymArr[0]
        this.month = ymArr[1]
        this.days = getDays(this.year, this.month)
      }
    },
    getTableTitle() {
      this.titleList = []
      this.titleList.splice(0, 0, {
        type: 'selection',
        width: 60,
        align: 'center',
      })
      this.titleList.push({
        title: '姓名/日期',
        key: 'childrenName',
        align: 'center',
        width: 100,
      })
      let daysArr = []
      for (let i = 0; i < this.days; i++) {
        daysArr.push(i)
      }
      for (let day of daysArr) {
        this.titleList.push({
          title: (day * 1 + 1),
          key: `day${day*1 + 1}`,
          align: 'center',
          width: 80,
          render: (h, params) => {
            const {
              row
            } = params
            const text = this.getDayText(row[`day${day*1 + 1}`])
            const color = this.getDayColor(text)
            return h('span', {
              style: {
                color
              },
              on: {
                hover: () => {
                  console.log('hover');
                }
              }
            }, text)
          }
        })
      }
    },
    getTableData() {
      this.dataList = []
      setTimeout(() => {
        this.getTableTitle()
        this.getFirstData()
        if (this.dataList !== []) {
          const result = mockAttdanceInfoData
          if (result.code === 0 && result.data) {
            this.$Message.success(result.msg)
            const {
              users,
              items
            } = result.data
            users.map((item1, key) => {
              items.map(item2 => {
                if (item1.uid === item2.uid) {
                  this.dataList[key + 1] = {
                    childrenName: item1.name,
                    ...item2
                  }
                }
              })
            })
          }
        }
      }, 800)
    },
    getFirstData() {
      let firstData = {}
      firstData.attdance = '当天考勤'
      firstData.childrenName = '幼儿姓名'
      let daysArr = []
      for (let i = 0; i < this.days; i++) {
        daysArr.push(i)
      }
      for (let day of daysArr) {
        firstData[`day${day*1 + 1}`] = getWeekDays(this.year + '-' + this.month + '-' + (day * 1 + 1))
      }
      if (this.dataList.length === 0) {
        this.dataList.push(firstData)
      }

    },
  },
  created() {
    this.getYMD()
    this.getTableData()
  }
}