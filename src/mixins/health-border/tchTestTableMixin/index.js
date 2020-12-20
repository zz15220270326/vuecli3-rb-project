const mockWorkerTestData = require('@mock/health-border/mockWorkerTestData')

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
    getTeacherTestData() {
      this.titleList = [
        {
          title: '序号',
          key: 'number',
          align: 'center'
        },
        {
          title: '职工姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '体温/℃',
          key: 'temperatue',
          align: 'center'
        },
        {
          title: '体温状况',
          key: 'healthStatus',
          align: 'center',
          render: (h, params) => {
            const {row} = params
            const text = row.healthStatus
            // const color = text === '正常' ? 'lime' : 'red'
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
          title: '测量时间',
          key: 'date',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockWorkerTestData
        if (result.msg === 'Success' && result.data) {
          const sourceData = result.data
          this.totalPage = sourceData.length
          sourceData.map(item => {
            this.dataList.push({
              number: item.number,
              name: item.name,
              temperatue: item.temperatue,
              healthStatus: item.health_status,
              date: item.date
            })
          })
        }
      }, 800);
    }
  },
  created() {
    this.getTeacherTestData()
  }
}
