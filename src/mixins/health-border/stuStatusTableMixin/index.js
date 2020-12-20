// ? async-functions / mock-data
const mockDailyCareData = require('@mock/health-border/mockDailyCareData')

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
          title: '班级',
          key: 'currentClass',
          width: 120,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          width: 100,
          align: 'center'
        },
        {
          title: '晨、午检',
          key: 'checkType',
          width: 100,
          align: 'center'
        },
        {
          title: '体温',
          key: 'temperatue',
          width: 100,
          align: 'center'
        },
        {
          title: '健康状况',
          key: 'healthStatus',
          width: 150,
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
          width: 100,
          align: 'center'
        },
        {
          title: '处理方式',
          key: 'handleType',
          width: 130,
          align: 'center'
        },
        {
          title: '登记人',
          key: 'registrant',
          width: 180,
          align: 'center'
        },
        {
          title: '日期',
          key: 'date',
          width: 150,
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockDailyCareData
        if (result.msg === 'Success' && result.data) {
          const sourceData = result.data
          this.totalPage = sourceData.length
          sourceData.map(item => {
            this.dataList.push({
              currentClass: item.current_class,
              name: item.name,
              checkType: item.check_type,
              temperatue: item.temperatue,
              healthStatus: item.health_status,
              symbol: item.symbol,
              handleType: item.handle_type,
              registrant: item.registrant,
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
      }, 800);
    }
  },
  created() {
    this.getHealthStatusData()
  }
}
