// ? async-functions / mock-data
const mockPlanType = require('@mock/plan/mockPlanType')
const mockTeachPlanArrangement = require('@mock/plan/mockTeachPlanArrangement')
const mockTPDetail = require('@mock/plan/mockTPDetail')

export default {
  data() {
    return {
      // ? 选择上午还是下午
      noonList: [{
          tag: '上午',
          isSelected: true
        },
        {
          tag: '下午',
          isSelected: false
        }
      ],
      chooseWorkDayIndex: 0,
      chooseNoonIndex: 0,
      // ? 计划类型选择菜单 (async mixins)
      planTypeTitle: '',
      planTypeInfo: [],
      // ? 教学计划时间表内容
      teachPlanTitle: [],
      teachPlanContent: [],
      teachPlanContent2: [],
      // ? info-modal
      // ?? info-title
      firstTitle: '',
      secondTitle: '',
      // ?? info-content (table)
      detailTitle: [],
      detailContent: []
    }
  },
  methods: {
    selectPlan(params) {
      const {
        currentItem,
        currentIndex
      } = params
      this.teachPlanContent[currentIndex].planType.planTypeTitle = currentItem
    },
    addTeachPlan() {
      this.teachPlanContent.map(item => {
        item.planContent = ''
      })
      this.teachPlanContent2.map(item => {
        item.planContent = ''
      })
      this.modalTitle = '创建教学计划'
      this.isShowCreateModal = true
    },
    // ? async-functions
    getPlanType() {
      setTimeout(() => {
        const result = mockPlanType
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.planTypeTitle = dataSource[0].info ? dataSource[0].info : ''
          this.planTypeInfo = dataSource
        }
      }, 320)
    },
    getTeachPlanArrangement() {
      this.teachPlanTitle = [{
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
      ]
      setTimeout(() => {
        const result = mockTeachPlanArrangement
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          if (dataSource.morning_plan && dataSource.afternoon_plan) {
            const {
              morning_plan,
              afternoon_plan
            } = dataSource
            this.teachPlanContent = []
            this.teachPlanContent2 = []
            morning_plan.map(item => {
              this.teachPlanContent.push({
                planTime: item.plan_time,
                planType: {
                  planTypeTitle: this.planTypeTitle,
                  planTypeInfo: this.planTypeInfo
                },
                planContent: item.plan_content
              })
            })
            afternoon_plan.map(item => {
              this.teachPlanContent2.push({
                planTime: item.plan_time,
                planType: {
                  planTypeTitle: this.planTypeTitle,
                  planTypeInfo: this.planTypeInfo
                },
                planContent: item.plan_content
              })
            })
          }
        }
      }, 800)
    },
    getDetailModalData() {
      this.detailTitle = [{
          title: '时间',
          align: 'center',
          children: [{
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
          align: 'center'
        },
        {
          title: '周二',
          key: 'day2',
          align: 'center'
        },
        {
          title: '周三',
          key: 'day3',
          align: 'center'
        },
        {
          title: '周四',
          key: 'day4',
          align: 'center'
        },
        {
          title: '周五',
          key: 'day5',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockTPDetail
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.detailContent = []
          dataSource.map(item => {
            this.detailContent.push(item)
          })
        }
      }, 500)
    }
  },
  created() {
    this.getPlanType()
    this.getTeachPlanArrangement()
    this.getDetailModalData()
  }
}