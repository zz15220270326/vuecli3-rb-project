const mockSNContent = require('@mock/notice-active/mockSNContent')

export default {
  data() {
    return {
      systemNoticeList: [],
      totalPage: 0
    }
  },
  methods: {
    getSystemNoticeContent() {
      setTimeout(() => {
        const result = mockSNContent
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.totalPage = dataSource.length
          dataSource.map(item => {
            this.systemNoticeList.push({
              title: item.title,
              outer: item.outer,
              avatar: item.avatar,
              content: item.content,
              time: item.time,
              user: item.user,
              icon: item.icon,
              imgs: item.imgs
            })
          })
        }
      }, 800);
    }
  },
  created() {
    this.getSystemNoticeContent()
  }
}