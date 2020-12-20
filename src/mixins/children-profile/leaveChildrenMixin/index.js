const mockChildrenInfoList = require('@mock/children-profile/mockChildrenInfoList')

export default {
  data() {
    return {
      titleList: [
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
          title: '姓名',
          key: 'name',
          width: 100,
          align: 'center'
        },
        {
          title: '性别',
          key: 'gender',
          width: 80,
          align: 'center'
        },
        {
          title: '年龄',
          key: 'age',
          width: 80,
          align: 'center'
        },
        {
          title: '所在班级',
          key: 'class',
          width: 150,
          align: 'center'
        },
        {
          title: '家长账号',
          key: 'parentAccount',
          width: 300,
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
    }
  },
  methods: {
    getTableData() {
      this.dataList = []
      setTimeout(() => {
        const result = mockChildrenInfoList
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          dataList.map(item => {
            this.dataList.push({
              number: item.number,
              name: item.name,
              gender: item.gender,
              age: item.age,
              class: item.class,
              parentAccount: item.parent_account,
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
          this.totalPage = this.dataList.length
        }
      }, 500)
    }
  },
  created() {
    this.getTableData()
  }
}