/*
 * @Author: 张先生
 * @Date: 2020-12-12 19:14:06
 * @LastEditTime: 2020-12-12 19:39:37
 * @FilePath: \langyun_manager\src\mixins\plan\allYearPlanMixin\index.js
 */
const allYearPlanTable = require('@mock/plan/allYearPlanTable')

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
    getAYPData() {
      this.titleList = [{
          type: 'selection',
          width: 60,
          align: 'center',
          __id: '9f3LRS'
        },
        {
          title: '序号',
          key: 'number',
          width: 80,
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center',
          width: 360
        },
        {
          title: '班级',
          key: 'class',
          width: 100
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
          __id: 'fNYtaT'
        },
        {
          title: '操作',
          slot: 'operations',
          align: 'center',
          __id: '5zArzW'
        }
      ]
      setTimeout(() => {
        const result = allYearPlanTable
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.totalPage = dataSource.length
          dataSource.map(item => {
            this.dataList.push({
              number: item.number,
              title: item.title,
              currentClass: item.current_class,
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
      }, 600)
    }
  },
  created() {
    this.getAYPData()
  }
}