// ? mock-data(tmp)
const mockSwipeTable = require('@mock/attdance/swipe-table/mockSwipeTable')
// ? async-function

export default {
  data() {
    return {
      titleList: [],
      dataList: [],
      totalPage: 0
    }
  },
  methods: {
    getSwipeTable() {
      this.titleList = [
        {
          title: '序号',
          key: 'number',
          align: 'center',
          width: 100
        },
        {
          title: '教师姓名',
          key: 'teahcerName',
          align: 'center'
        },
        {
          title: '卡号',
          key: 'card',
          align: 'center'
        },
        {
          title: '刷卡日期',
          key: 'swipeDate',
          align: 'center'
        },
        {
          title: '刷卡时间',
          key: 'swipeTime',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockSwipeTable
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          this.totalPage = dataList.length
          dataList.map(item => {
            this.dataList.push({
              number: item.number,
              teahcerName: item.teacher_name,
              card: item.card,
              swipeDate: item.swipe_date,
              swipeTime: item.swipe_time
            })
          })
        }
      }, 1000);
    }
  },
  created() {
    this.getSwipeTable()
  }
}