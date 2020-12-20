export const mockOtherData = {
  // ? 1. 班级信息
  classTitle: '全部班级',
  classInfo: [
    { info: '全部班级', key: 0 },
    { info: '朗云小班', key: 1 },
    { info: '计算机201', key: 2 },
    { info: '朗云3班中班级', key: 3 },
    { info: 'langyun班级', key: 4 }
  ],
  // ? 2. 点评状态
  evaluateTitle: '点评状态',
  evaluateInfo: [
    { info: '点评状态', key: 0 },
    { info: '已点评', key: 1 },
    { info: '未点评', key: 2 }
  ],
  // ? 3. 学年信息
  yearTitle: '请选择学年',
  yearInfo: [
    { info: '请选择学年', key: 0 },
    { info: '2016-2017', key: 1 },
    { info: '2017-2018', key: 2 },
    { info: '2018-2019', key: 3 },
    { info: '2019-2020', key: 4 }
  ],
  // ? 4. 学期信息
  semesterTitle: '全部学期',
  semesterInfo: [
    { info: '全部学期', key: 0 },
    { info: '第一学期', key: 1 },
    { info: '第二学期', key: 2 }
  ],
  // ? 5. 展示表格-标题, 内容
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
      title: '标题',
      key: 'title',
      align: 'center',
      width: 300
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
      title: '提交人',
      key: 'presenter',
      align: 'center',
      width: 100
    },
    {
      title: '创建时间',
      key: 'createTime',
      align: 'center',
      width: 300
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
      title: '看kan1',
      class: '朗云小班',
      status: '待点评',
      presenter: '陆园长',
      createTime: '2020-10-20 10:04:39',
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
}