const mockChildrenProfile = require('@mock/children-profile/mockChildrenProfile')

export default {
  data() {
    return {
      titleList: [
        {
          type: 'selection',
          width: 100,
          align: 'center'
        },
        {
          title: '序号',
          key: 'number',
          width: 100,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          width: 120,
          align: 'center'
        },
        {
          title: '性别',
          key: 'gender',
          width: 100,
          align: 'center'
        },
        {
          title: '年龄',
          key: 'age',
          width: 100,
          align: 'center'
        },
        {
          title: '所在班级',
          key: 'class',
          width: 170,
          align: 'center'
        },
        {
          title: '入园日期',
          key: 'date',
          width: 240,
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        }
      ],
      dataList: [],
      totalPage: 0,
    }
  },
  methods: {
    getTableData() {
      this.dataList = []
      setTimeout(() => {
        const result = mockChildrenProfile
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          dataList.map(item => {
            this.dataList.push({
              number: item.number,
              name: item.name,
              gender: item.gender,
              age: item.age,
              class: item.class,
              date: item.date,
              rateValue: item.rate_value,
              operations: [
                {
                  tag: '详情',
                  type: 'info'
                },
                {
                  tag: '编辑',
                  type: 'primary'
                },
                {
                  tag: '删除',
                  type: 'error'
                }
              ]
            })
          })
          this.totalPage = this.dataList.length
        }
      }, 500)
    }
  },
  created() {
    this.getTableData()
  }
}