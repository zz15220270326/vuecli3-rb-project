// const { identify } = this.$store.state

export const mockTeachData = {
  // ? 1. 班级信息
  classTitle: '全部班级',
  classInfo: [
    { info: '全部班级', key: 0 },
    { info: '朗云小班', key: 1 },
    { info: '计算机201', key: 2 },
    { info: '朗云3班中班级', key: 3 },
    { info: 'langyun班级', key: 4 }
  ],
  // ? 2. 学年信息
  yearTitle: '请选择学年',
  yearInfo: [
    { info: '请选择学年', key: 0 },
    { info: '2016-2017', key: 1 },
    { info: '2017-2018', key: 2 },
    { info: '2018-2019', key: 3 },
    { info: '2019-2020', key: 4 }
  ],
  // ? 3. 学期信息
  semesterTitle: '全部学期',
  semesterInfo: [
    { info: '全部学期', key: 0 },
    { info: '第一学期', key: 1 },
    { info: '第二学期', key: 2 }
  ],
  // ? 4. 周次信息
  weekTimeTitle: '全部周次',
  weekTimeInfo: [
    { info: '全部周次', key: 0 },
    { info: '第一周', key: 1 },
    { info: '第二周', key: 2 },
    { info: '第三周', key: 0 },
    { info: '第四周', key: 1 },
    { info: '第五周', key: 2 },
    { info: '第六周', key: 0 },
    { info: '第七周', key: 1 },
    { info: '第八周', key: 2 },
    { info: '第九周', key: 0 },
    { info: '第十周', key: 1 },
    { info: '第11周', key: 2 },
    { info: '第12周', key: 0 },
    { info: '第13周', key: 1 },
    { info: '第14周', key: 2 },
    { info: '第15周', key: 0 },
    { info: '第16周', key: 1 },
    { info: '第17周', key: 2 },
    { info: '第18周', key: 1 },
    { info: '第19周', key: 2 },
    { info: '第20周', key: 0 },
    { info: '第21周', key: 1 },
    { info: '第22周', key: 2 },
    { info: '第23周', key: 0 },
    { info: '第24周', key: 1 },
    { info: '第25周', key: 2 },
    { info: '第26周', key: 0 },
    { info: '第27周', key: 1 },
    { info: '第28周', key: 2 },
    { info: '第29周', key: 0 },
    { info: '第30周', key: 1 }
  ],
  // ? 5. 点评信息
  evaluateTitle: '点评状态',
  evaluateInfo: [
    { info: '点评状态', key: 0 },
    { info: '已点评', key: 1 },
    { info: '未点评', key: 2 }
  ],
  // ? 6. 时间方案信息
  seasonTitle: '夏季',
  seasonInfo: [
    { info: '夏季', key: 0 },
    { info: '秋季', key: 1 }
  ],
  // ? 7. 总体操作信息
  operations: [
    {
      info: '查询',
      type: 'primary'
    },
    {
      info: '删除',
      type: 'error'
    }
  ],
  // ? 8. 显示的content表格信息
  tableTitle: [
    {
      type: 'selection',
      width: 60,
      align: 'center'
    },
    {
      title: '序号',
      key: 'number',
      width: 80,
      align: 'center'
    },
    {
      title: '提交人',
      key: 'identify',
      width: 100,
      align: 'center'
    },
    {
      title: '计划学期',
      key: 'planSemester',
      align: 'center'
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
      align: 'center'
    },
    {
      title: '操作',
      slot: 'operations',
      align: 'center'
    }
  ],
  tableContent: [
    {
      number: 1,
      identify: '陆园长',
      planSemester: '2020~2021学年第一学期学期计划',
      class: '全园',
      status: '待点评',
      createTime: '2020-10-29 14:43:41',
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
          tag: '导出',
          type: 'success'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ]
    },
    {
      number: 2,
      identify: '陆园长',
      planSemester: '2020~2021学年第一学期学期计划',
      class: '朗云小班',
      status: '待点评',
      createTime: '2020-10-29 14:30:56',
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
          tag: '导出',
          type: 'success'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ]
    },
    {
      number: 3,
      identify: '陆园长',
      planSemester: '2020~2021学年第一学期学期计划',
      class: '朗云小班',
      status: '待点评',
      createTime: '2020-10-26 15:10:14',
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
          tag: '导出',
          type: 'success'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ]
    }
  ],
  // ? ...
  // ? 9. 设置modal中的触发小modal的按钮
  modalButtonGroup: [
    {
      tag: '时间方案设置',
      type: 'warning'
    },
    {
      tag: '计划类型设置',
      type: 'warning'
    }
  ],
  setPlanList: [
    {
      info: '添加方案',
      key: 0
    },
    {
      info: '已添加方案',
      key: 1
    }
  ],
  // ? 10. 模拟周一到周五
  workDays: [
    {
      tag: '周一',
      isSelected: true
    },
    {
      tag: '周二',
      isSelected: false
    },
    {
      tag: '周三',
      isSelected: false
    },
    {
      tag: '周四',
      isSelected: false
    },
    {
      tag: '周五',
      isSelected: false
    }
  ],
  // ? 11. 选择上午还是下午
  noonList: [
    {
      tag: '上午',
      isSelected: true
    },
    {
      tag: '下午',
      isSelected: false
    }
  ],
  // ? ...
   // ? 12. 教学计划时间表标题
   teachPlanTitle: [
    {
      title: '计划时间',
      key: 'planTime',
      align: 'center'
    },
    {
      title: '计划类型',
      slot: 'planType',
      align: 'center'
    },
    {
      title: '计划内容',
      slot: 'planContent',
      align: 'center'
    }
  ],
  // ? 13. 计划类型选择菜单
  planTypeTitle: '无',
  planTypeInfo: [
    {
      info: '无',
      key: 0
    },
    {
      info: '体育活动',
      key: 1
    },
    {
      info: '看书',
      key: 2
    },
    {
      info: '其他',
      key: 3
    }
  ],
  // ? 14. 教学计划时间表内容 
  // ? 14.1 上午的内容
  teachPlanContent: [
    {
      planTime: '07:00—09:00',
      planType: {
        planTypeTitle: '无',
        planTypeInfo: [
          {
            info: '无',
            key: 0
          },
          {
            info: '体育活动',
            key: 1
          },
          {
            info: '看书',
            key: 2
          },
          {
            info: '其他',
            key: 3
          }
        ]
      },
      planContent: `请输入07:00—09:00的时间计划`
    },
    {
      planTime: '09:00—10:00',
      planType: {
        planTypeTitle: '无',
        planTypeInfo: [
          {
            info: '无',
            key: 0
          },
          {
            info: '体育活动',
            key: 1
          },
          {
            info: '看书',
            key: 2
          },
          {
            info: '其他',
            key: 3
          }
        ]
      },
      planContent: `请输入09:00—10:00的时间计划`
    }
  ],
  // ? 14.2 下午的内容
  teachPlanContent2: [
    {
      planTime: '15:00-16:00',
      planType: {
        planTypeTitle: '无',
        planTypeInfo: [
          {
            info: '无',
            key: 0
          },
          {
            info: '体育活动',
            key: 1
          },
          {
            info: '看书',
            key: 2
          },
          {
            info: '其他',
            key: 3
          },
        ]
      },
      planContent: `请输入07:00—09:00的时间计划`
    }
  ],
  // ? 详情界面中的内容
   // ? 存储列表的数据类型
   detailTitle: [
     {
       title: '时间',
       align: 'center',
       children: [
         {
           title: '上午/下午',
           key: 'noon',
           align: 'center',
           width: 100
         },
         {
           title: '时间段',
           key: 'time',
           align: 'center',
           width: 180
         }
       ]
     },
     {
       title: '周一',
       key: 'day1',
       align: 'center',
     },
     {
       title: '周二',
       key: 'day2',
       align: 'center',
     },
     {
       title: '周三',
       key: 'day3',
       align: 'center',
     },
     {
       title: '周四',
       key: 'day4',
       align: 'center',
     },
     {
       title: '周五',
       key: 'day5',
       align: 'center',
     }
    ],
    detailContent: [
      {
        noon: '上午',
        time: '07:00-08:00',
        day1: `aaa`,
        day2: `bbb`,
        day3: ``,
        day4: ``,
        day5: ``
      },
      {
        noon: '上午',
        time: '09:00-10:00',
        day1: ``,
        day2: ``,
        day3: `ccc`,
        day4: ``,
        day5: ``
      },
      {
        noon: '下午',
        time: '13:30-14:30',
        day1: `aaa`,
        day2: ``,
        day3: ``,
        day4: `ddd`,
        day5: `eee`
      },
    ]
}