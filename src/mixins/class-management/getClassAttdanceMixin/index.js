const mockClassAttdanceData = require('@mock/class-management/mockClassAttdanceData')

export default {
  data() {
    return {
      titleList: [],
      dataList: [],
      totalPage: 0
    }
  },
  methods: {
    getTableData() {
      setTimeout(() => {
        const result = mockClassAttdanceData
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          if (dataSource.class_list) {
            const classList = dataSource.class_list
            classList.map(item => {
              this.dataList.push({
                className: item.class_name,
                classId: item.class_id
              })
            })
          }
          if (dataSource.items) {
            this.totalPage = dataSource.items.length
            for (let item1 of dataSource.items) {
              for (let item2 of this.dataList) {
                if (item1.class_id === item2.classId) {
                  item2.shouldArrive = item1.should_arrive
                  item2.isArrived = item1.is_arrived
                  item2.absense = item1.absense
                  item2.thingHoliday = item1.thing_holiday
                  item2.sinkHoliday = item1.sink_holiday
                  item2.attdancePresent = item1.attdance_present
                  item2.absensePresent = item1.absense_present
                  item2.thingHolidayPresent = item1.thing_holiday_present
                  item2.sinkHolidayPresent = item1.sink_holiday_present
                }
              }
            }
          }
          this.setTitleList()
        }
      }, 666);
    },
    setTitleList() {
      this.titleList = [{
          title: '班级名称',
          key: 'className',
          align: 'center',
          width: 200
        },
        {
          title: '应到',
          key: 'shouldArrive',
          align: 'center',
          width: 150
        },
        {
          title: '实到',
          key: 'isArrived',
          align: 'center',
          width: 150
        },
        {
          title: '缺勤',
          key: 'absense',
          align: 'center',
          width: 150
        },
        {
          title: '事假',
          key: 'thingHoliday',
          align: 'center',
          width: 150
        },
        {
          title: '病假',
          key: 'sinkHoliday',
          align: 'center',
          width: 150
        },
        {
          title: '出勤率',
          key: 'attdancePresent',
          align: 'center',
          width: 150
        },
        {
          title: '缺勤率',
          key: 'absensePresent',
          align: 'center',
          width: 150
        },
        {
          title: '事假率',
          key: 'thingHolidayPresent',
          align: 'center',
          width: 150
        },
        {
          title: '病假率',
          key: 'sinkHolidayPresent',
          align: 'center',
          width: 150
        },
      ]
    }
  },
  created() {
    this.getTableData()
  }
}