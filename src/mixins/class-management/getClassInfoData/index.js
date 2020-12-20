const mockClassInfo = require('@mock/class-management/mockClassInfo')

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
    getClassInfoData() {
      this.titleList = [{
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
          title: '年级',
          key: 'grade',
          width: 150,
          align: 'center'
        },
        {
          title: '班级名称',
          key: 'className',
          width: 150,
          align: 'center'
        },
        {
          title: '幼儿数量',
          key: 'childrenCount',
          width: 150,
          align: 'center'
        },
        {
          title: '入学时间',
          key: 'entryTime',
          width: 150,
          align: 'center'
        },
        {
          title: '班级教师',
          key: 'teachers',
          width: 360,
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center'
        },
      ]
      setTimeout(() => {
        const result = mockClassInfo
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.totalPage = dataSource.length
          dataSource.map(item => {
            this.dataList.push({
              number: item.number,
              grade: item.grade,
              className: item.class_name,
              childrenCount: item.children_count,
              entryTime: item.entry_time,
              teachers: item.teachers,
              operations: [{
                  tag: '升班',
                  type: 'success',
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
        }
      }, 500);
    }
  },
  created() {
    this.getClassInfoData()
  }
}