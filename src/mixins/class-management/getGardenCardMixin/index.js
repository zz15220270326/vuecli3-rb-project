// ? async-functions / mock-data
const mockGardenCard = require('@mock/class-management/mockGardenCard')

export default {
  data() {
    return {
      gardenCardTitle: '',
      gardenCardList: []
    }
  },
  methods: {
    getGardenCardData() {
      setTimeout(() => {
        const result = mockGardenCard
        if (result.status === 'Success' && result.data) {
          const dataSource = result.data.garden_card
          this.gardenCardTitle = dataSource[0].info ? dataSource[0].info : ''
          this.gardenCardList = dataSource
        }
      }, 300)
    },
    selectGardenCard(selectGardenCard) {
      this.gardenCardList = selectGardenCard
    }
  },
  created() {
    this.getGardenCardData()
  }
}