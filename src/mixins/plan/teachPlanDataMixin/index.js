const mockTeachPlan = require('@mock/plan/mockTeachPlan')

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
    getTPData() {
      this.titleList = [{
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '序号',
          key: 'number',
          width: 80,
          align: 'center'
        },
        {
          title: '提交人',
          key: 'submiter',
          width: 80,
          align: 'center'
        },
        {
          title: '计划名称',
          key: 'planName',
          width: 360,
          align: 'center'
        },
        {
          title: '状态',
          key: 'status',
          align: 'center',
          width: 100
        },
        {
          title: '创建时间',
          key: 'createTime',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center',
        }
      ]
      setTimeout(() => {
        const result = mockTeachPlan
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.totalPage = dataSource.length
          dataSource.map(item => {
            this.dataList.push({
              number: item.number,
              submiter: item.submiter,
              planName: item.plan_name,
              status: item.status,
              createTime: item.create_time,
              operations: [{
                  tag: '详情',
                  type: 'info'
                },
                {
                  tag: '编辑',
                  type: 'primary'
                },
                {
                  tag: '导出',
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
      }, 800);
    }
  },
  created() {
    this.getTPData()
  }
}