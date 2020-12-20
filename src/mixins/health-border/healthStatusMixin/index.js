// ? async functions / mock-data
const mockHealthStatusList = require('@mock/health-border/mockHealthStatusList')

export default {
  data() {
    return {
      healthStatusTitle: '',
      healthStatusList: []
    }
  },
  methods: {
    gethealthStatusData() {
      setTimeout(() => {
        const result = mockHealthStatusList
        if (result.msg === 'Success' && result.data) {
          const healthStatusList = result.data
          this.healthStatusTitle = healthStatusList[0].info ? healthStatusList[0].info : ''
          this.healthStatusList = healthStatusList
        }
      }, 320);
    },
    selectHealthStatus(item) {
      this.healthStatusTitle = item
    }
  },
  created() {
    this.gethealthStatusData()
  }
}
