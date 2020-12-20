// ? import mock-data
const mockClassMissionList = require('@mock/notice-active/mockClassMissionList')

export default {
  data() {
    return {
      dataList: [],
      totalPage: 0
    }
  },
  computed: {
    identify() {
      return this.$store.state.identify
    },
    avatar() {
      return this.$store.state.avatar
    },
    uid() {
      return this.$store.state.uid
    },
    thisYear() {
      return this.$store.state.defaultYear
    },
    thisMonth() {
      return this.$store.state.defaultMonth
    },
    thisDay() {
      return this.$store.state.defaultDay
    }
  },
  methods: {
    getClassMissionData() {
      const result = mockClassMissionList
      if (result.msg === 'Success' && result.data) {
        const dataSource = result.data
        this.totalPage = dataSource.length
        dataSource.map(item => {
          this.dataList.push({
            title: item.title,
            content: item.content,
            charger: item.charger,
            avatar: item.avatar,
            type: item.type,
            color: 'blue',
            time: item.time,
            readStatus: item.read_status,
            img: item.img,
            isChecked: item.is_checked,
            operations: [{
              tag: '查看详情',
              type: 'info'
            }]
          })
        })
      }
    }
  },
  created() {
    this.getClassMissionData()
  }
}