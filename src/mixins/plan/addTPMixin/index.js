// ? async / mock (null)
// ? export mixin
export default {
  data() {
    return {
      // ? add-modal
      modalButtonGroup: [{
          tag: '时间方案设置',
          type: 'warning'
        },
        {
          tag: '计划类型设置',
          type: 'warning'
        }
      ],
      setPlanList: [{
          info: '添加方案',
          key: 0
        },
        {
          info: '已添加方案',
          key: 1
        }
      ],
      // ? 计划类型选择菜单 (async mixins)
      planTypeTitle: '',
      planTypeInfo: [],
      isShowAddNewPlan: false,
      isShowAddedPlan: false,
      isShowPlanTypeSetting: false,
      isShowChildModal: false,
      childModalTitle: ''
    }
  },
  props: {
    // ? 小弹窗按钮组
    teachPlanTitle: {
      type: Array,
      default: () => []
    },
    teachPlanContent: {
      type: Array,
      default: () => []
    },
    teachPlanContent2: {
      type: Array,
      default: () => []
    },
  },
  watch: {},
  methods: {
    selectPlan(item) {
      this.$emit('selectPlan', item)
    },
    selectPlanListItem(key) {
      // ? 判断key值
      /* 
      ! 0: 添加方案弹窗   1: 已添加方案弹窗
      */
      switch (key) {
        case 0:
          this.isShowChildModal = true
          this.childModalTitle = '添加方案'
          this.isShowAddNewPlan = true
          this.isShowAddedPlan = false
          this.isShowPlanTypeSetting = false
          break
        case 1:
          this.isShowChildModal = true
          this.childModalTitle = '已添加方案'
          this.isShowAddNewPlan = false
          this.isShowAddedPlan = true
          this.isShowPlanTypeSetting = false
          break
      }
    },
    settingPlanType(currentIndex) {
      if (currentIndex === 1) {
        this.isShowChildModal = true
        this.childModalTitle = '计划类型设置'
        this.isShowAddNewPlan = false
        this.isShowAddedPlan = false
        this.isShowPlanTypeSetting = true
      }
    },
    cancelAddPlan() {
      this.isShowChildModal = false
    },
  }
}