// ? async-functions / mock-data
const mockClassCard = require('@mock/class-management/mockClassCard')

export default {
  data() {
    return {
      classCardTitle: '',
      classCardList: []
    }
  },
  methods: {
    getClassCardData() {
      setTimeout(() => {
        const result = mockClassCard
        if (result.status === 'Success' && result.data) {
          const dataSource = result.data.class_card
          this.classCardTitle = dataSource[0].info ? dataSource[0].info : ''
          this.classCardList = dataSource
        }
      }, 300);
    },
    selectClassCard(selectClassCard) {
      this.classCardTitle = selectClassCard
    }
  },
  created() {
    this.getClassCardData()
  }
}