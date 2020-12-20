const mockInsideMissionList = require('@mock/notice-active/mockInsideMissionList')

export default {
  data() {
    return {
      dataList: [],
      totalPage: 0,
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
    getInsideMissionData() {
      setTimeout(() => {
        const result = mockInsideMissionList
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
              color: 'pink',
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
      }, 600);
    }
  },
  created() {
    this.getInsideMissionData()
  }
}