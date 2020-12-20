const classAttdanceInfo = require('@mock/main/classAttdanceInfo')

export default {
  data() {
    return {
      classAttdanceTitleList: [],
      classAttdanceDataList: []
    }
  },
  methods: {
    getClassAttdanceData() {
      this.classAttdanceTitleList = [
        {
          title: '班级名称',
          key: 'className',
          align: 'center'
        },
        {
          title: '应到',
          key: 'shouldArrive',
          align: 'center'
        },
        {
          title: '实到',
          key: 'isArrived',
          align: 'center'
        },
        {
          title: '缺勤',
          key: 'absense',
          align: 'center'
        },
        {
          title: '出勤率',
          key: 'attdancePresent',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = classAttdanceInfo
        if (result.msg === 'Success' && result.data) {
          this.classAttdanceDataList = []
          const dataList = result.data
          dataList.map(item => {
            this.classAttdanceDataList.push({
              className: item.class_name,
              shouldArrive: item.should_arrive,
              isArrived: item.is_arrived,
              absense: item.absense,
              attdancePresent: item.attdance_present
            })
          })
        }
      }, 600);
    }
  },
  created() {
    this.getClassAttdanceData()
  }
}
