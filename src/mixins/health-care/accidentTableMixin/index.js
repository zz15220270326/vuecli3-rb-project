// ? async-functions / mock-data
const mockAccidentList = require('@mock/health-care/mockAccidentList')

export default {
  data() {
    return {
      titleList: [],
      dataList: [],
      tableIsLoading: false,
    }
  },
  methods: {
    getTableData() {
      // ? 1. 设置标题
      this.titleList = [
        {
          type: 'selection',
          width: 80,
          align: 'center'
        },
        {
          title: '序号',
          key: 'number',
          width: 80,
          align: 'center'
        },
        {
          title: '幼儿姓名',
          key: 'name',
          align: 'center',
          width: 120
        },
        {
          title: '所在班级',
          key: 'class',
          align: 'center',
          width: 150
        },
        {
          title: '状况名称',
          key: 'accidentName',
          align: 'center',
          width: 150
        },
        {
          title: '发生场景',
          key: 'enviroment',
          align: 'center',
          width: 150
        },
        {
          title: '处理情况',
          key: 'situation',
          align: 'center',
          width: 150
        },
        {
          title: '当班老师',
          key: 'teacher',
          align: 'center',
          width: 120
        },
        {
          title: '记录时间',
          key: 'time',
          align: 'center',
          width: 200
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ]

      // ? 请求获取表格数据
      setTimeout(() => {
        const result = mockAccidentList
        if (result.msg && result.data) {
          if (result.msg === 'Success') {
            const dataList = result.data
            dataList.map(item => {
              this.dataList.push({
                number: item.number,
                name: item.name,
                class: item.class,
                accidentName: item.accident_name,
                enviroment: item.enviroment,
                situation: item.situation,
                teacher: item.teacher,
                time: item.time,
                imgs: item.imgs,
                operations: [
                  {
                    tag: '详情',
                    type: 'info'
                  },
                  {
                    tag: '编辑',
                    type: 'success'
                  },
                  {
                    tag: '删除',
                    type: 'error'
                  }
                ]
              })
            })
          }
        }
      }, 500)
    }
  },
  created() {
    this.getTableData()
  }
}
