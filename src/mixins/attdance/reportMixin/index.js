import {
  getStaticTableInfo
} from '@/request/attdance/getAttdenceReportInfo'

export default {
  data() {
    return {
      tableTitlesArr: [],
      tableContentArr: [],
      isLoading: false,
      year: 2020,
      month: 11,
    }
  },
  computed: {
    classIds() {
      // 虚拟存储classIds的值
      return this.$store.state.classIds
    },
    uid() {
      // ? 虚拟存储的uid的值
      return this.$store.state.uid
    },
    startTime() {
      return this.$store.state.startTime
    },
    endTime() {
      return this.$store.state.endTime
    },
    teacherName() {
      return this.$store.state.teacherName
    },
  },
  methods: {
    async requestTable() {
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + 30
      const result = await getStaticTableInfo(
        this.uid,
        this.classIds,
        startTime,
        endTime
      )
      console.log(result);
      if (result.data) {
        const {
          header
        } = result.data.items
        const {
          data
        } = result.data.items
        // console.log(data)
        this.tableTitlesArr.push(...header)
        this.tableContentArr.push(...data)
      }
    },
    async searchTable() {
      if (this.classIds === '') {
        this.$Message.info('你还没有填写班级信息呢')
        return
      }
      if (this.startTime === '' || this.endTime === '') {
        this.$Message.info('请填写正确的时间哦')
        return
      }
      this.isLoading = true
      const uid = this.uid
      const classIds = this.classIds
      const teacherName = this.teacherName
      const startTime = this.startTime
      const endTime = this.endTime
      const otherParams = {
        teacherName
      }
      const result = await getStaticTableInfo(
        uid,
        classIds,
        startTime,
        endTime,
        otherParams
      )
      this.isLoading = false
      if (result.msg === 'Success' && result.data) {
        this.tableTitlesArr = []
        this.tableContentArr = []
        const {
          header
        } = result.data.items
        const {
          data
        } = result.data.items
        this.tableTitlesArr.push(...header)
        this.tableContentArr.push(...data)
      } else {
        this.$Message.error('请求数据失败!请稍后再试')
      }
    }
  },
  created() {
    this.requestTable()
    this.searchTable()
  }
}