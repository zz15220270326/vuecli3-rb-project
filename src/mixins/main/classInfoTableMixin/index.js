// ? async functions / mock-data
const classInfoTable = require('@mock/main/classInfoTable')

export default {
  data() {
    return {
      classTableTitle: [],
      classTableData: []
    }
  },
  methods: {
    getClassInfo() {
      this.classTableTitle = [
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
          title: '类型',
          key: 'type',
          align: 'center'
        },
        {
          title: '教师分配数量',
          key: 'teacherCount',
          align: 'center'
        },
        {
          title: '幼儿在册人数',
          key: 'childrenCount',
          align: 'center'
        },
      ]
      setTimeout(() => {
        const result = classInfoTable
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          this.classTableData = []
          dataList.map(item => {
            this.classTableData.push({
              number: item.number,
              className: item.class_name,
              type: item.type,
              teacherCount: item.teacher_count,
              childrenCount: item.children_count
            })
          })
        }
      }, 1000);
    }
  },
  created() {
    this.getClassInfo()
  }
}