// ? async-functions / mock-data
const mockAblumTypes = require('@mock/class-management/mockAblumTypes')

export default {
  data() {
    return {
      ablumTypesTitle: '',
      ablumTypesList: []
    }
  },
  methods: {
    getAlbumTypesData() {
      setTimeout(() => {
        const result = mockAblumTypes
        if (result.status === 'Success' && result.data) {
          if (result.data.items) {
            const {
              items
            } = result.data
            this.ablumTypesTitle = items[0].info ? items[0].info : ''
            this.ablumTypesList = items
          }
        }
      }, 500);
    }
  },
  created() {
    this.getAlbumTypesData()
  }
}