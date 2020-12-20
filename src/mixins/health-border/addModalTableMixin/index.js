// ? async-funtions / mock-data
const mockAddTable = require('@mock/health-border/mockAddTable')

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
    getAddTableData() {
      this.titleList = [
        {
          title: '序号',
          key: 'number',
          align: 'center'
        },
        {
          title: '日期',
          key: 'date',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '所在班级',
          key: 'currentClass',
          align: 'center'
        },
        {
          title: '晨、午检',
          key: 'checkType',
          align: 'center'
        },
        {
          title: '温度/℃',
          key: 'temperature',
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
          align: 'center',
          render: (h, params) => {
            const {row} = params
            const text = row.symbol
            const color = 'red'
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
          title: '处理方式',
          key: 'handleType',
          align: 'center'
        },
        {
          title: '登记人',
          key: 'registrant',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockAddTable
        if (result.msg === 'Success' && result.data) {
          this.dataList = []
          const sourceData = result.data
          this.totalPage = sourceData.length
          sourceData.map(item => {
            this.dataList.push({
              number: item.number,
              date: item.date,
              name: item.name,
              currentClass: item.current_class,
              checkType: item.check_type,
              temperature: item.temperature,
              healthStatus: item.health_status,
              symbol: item.symbol,
              handleType: item.handle_type,
              registrant: item.registrant
            })
          })
          this.tableIsLoading = false
        }
      }, 800);
    }
  },
  created() {
    this.getAddTableData()
  }
}
