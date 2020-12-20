// ? async-functions / mock-data
const mockWorkerHealthData = require('@mock/health-border/mockWorkerHealthData')

export default {
  data() {
    return {
      titleList: [],
      dataList: [],
      tableIsLoading: false,
      totalPage: 0
    }
  },
  methods: {
    getHealthStatusData() {
      this.titleList = [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '教师姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '体温',
          key: 'temperatue',
          align: 'center'
        },
        {
          title: '健康状况',
          key: 'healthStatus',
          align: 'center',
          render: (h, params) => {
            const {row} = params
            const text = row.healthStatus
            const color = text === '正常' ? 'green' : 'red'
            return [
              h(
                'div',
                {
                  style: {
                    color
                  }
                },
                text
              )
            ]
          }
        },
        {
          title: '症状',
          key: 'symbol',
          align: 'center'
        },
        {
          title: '日期',
          key: 'date',
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockWorkerHealthData
        if (result.msg === 'Success' && result.data) {
          const sourceData = result.data
          this.totalPage = sourceData.length
          sourceData.map(item => {
            this.dataList.push({
              name: item.name,
              temperatue: item.temperatue,
              healthStatus: item.health_status,
              symbol: item.symbol,
              date: item.date,
              operations: [
                {
                  tag: '详情',
                  type: 'info'
                },
                {
                  tag: '删除',
                  type: 'error'
                }
              ]
            })
          })
        }
      }, 800)
    }
  },
  created() {
    this.getHealthStatusData()
  }
}
