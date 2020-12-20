// ? async functions / mock-data
const gardenHealthTable = require('@mock/main/gardenHealthTable')

export default {
  data() {
    return {
      gardenHealthTitleList: [],
      gardenHealthDataList: []
    }
  },
  methods: {
    getGardenHealthData() {
      this.gardenHealthTitleList = [
        {
          title: '序号',
          key: 'number',
          align: 'center'
        },
        {
          title: '班级名称',
          key: 'className',
          align: 'center'
        },
        {
          title: '健康人数',
          key: 'healthCount',
          align: 'center'
        },
        {
          title: '异常数量',
          key: 'sickCount',
          align: 'center'
        },
        {
          title: '实测人数',
          key: 'totalCount',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = gardenHealthTable
        if (result.msg === 'Success' && result.data) {
          this.gardenHealthDataList = []
          const dataList = result.data
          dataList.map(item => {
            this.gardenHealthDataList.push({
              number: item.number,
              className: item.class_name,
              healthCount: item.health_count,
              sickCount: item.sick_count,
              totalCount: item.total_count
            })
          })
        }
      }, 800);
    }
  },
  created() {
    this.getGardenHealthData()
  }
}
