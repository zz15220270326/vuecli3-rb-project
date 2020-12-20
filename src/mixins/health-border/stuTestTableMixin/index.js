const mockChildrenTestData = require('@mock/health-border/mockChildrenTestData')

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
    getChildrenTestData() {
      this.titleList = [
        {
          title: '序号',
          key: 'number',
          align: 'center'
        },
        {
          title: '班级名称',
          key: 'className',
          align: 'center'
        },
        {
          title: '幼儿姓名',
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
        const result = mockChildrenTestData
        if (result.msg === 'Success' && result.data) {
          const sourceData = result.data
          this.totalPage = sourceData.length
          sourceData.map(item => {
            this.dataList.push({
              number: item.number,
              className: item.class_name,
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
    this.getChildrenTestData()
  }
}
