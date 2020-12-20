const mockCareerList = require('@mock/health-border/mockCareerList')

export default {
  data() {
    return {
      careerTitle: '',
      careerList: []
    }
  },
  methods: {
    getCareerList() {
      setTimeout(() => {
        const result = mockCareerList
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          this.careerTitle = dataList[0].info ? dataList[0].info : ''
          this.careerList = dataList
        }
      }, 300)
    },
    selectCareer(selectCareer) {
      this.careerTitle = selectCareer
    }
  },
  created() {
    this.getCareerList()
  }
}
