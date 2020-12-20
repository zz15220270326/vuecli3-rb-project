// ? async-functions / mock-data
const mockCommonImgList = require('@mock/Common/mockCommonImgList')

export default {
  data() {
    return {
      albums: [],
      // ? 当前显示第几页
      pageNumber: 0,
      pageSize: 12,
      // ? 显示的总数
      totalPage: 0,
      showTotal: 0,
      currentIndex: 0,
      currentImgList: [],
      defaultImg: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3865588184,3342697262&fm=26&gp=0.jpg'
    }
  },
  methods: {
    // ? 1. 获取相册
    getAlbums() {
      setTimeout(() => {
        const result = mockCommonImgList
        if (result.status === 'Success' && result.data) {
          // if (result.msg) {
          //   this.$Message.success(result.msg)
          // }
          const {
            albums
          } = result.data
          this.albums = albums
          this.totalPage = result.data.total_page
          this.setAblumData()
        }
      }, 800);
    },
    setAblumData() {
      this.showTotal = 0
      this.currentImgList = []
      // this.currentImgList = this.albums[this.currentIndex].imgs ? this.albums[this.currentIndex].imgs : []
      if (this.albums[this.currentIndex].imgs && this.albums[this.currentIndex].imgs.length > 0) {
        this.albums[this.currentIndex].imgs.map(item => {
          this.currentImgList.push({
            src: item,
            isChecked: false
          })
        })
      }
      this.pageNumber = this.currentIndex
      // for (let item of this.albums) {
      //   this.showTotal += item.imgs.length
      // }
      this.showTotal = this.totalPage * this.pageSize
      // this.showTotal = this.albums[this.currentIndex].imgs.length
    },
    pageChange(page) {
      this.currentIndex = page - 1
      this.setAblumData()
    },
    // ?? 查询相册内容
    handleSearch() {
      // this.$Spin.show()
      setTimeout(() => {
        this.$Message.success('查询成功')
        // this.$Spin.hide()
      }, 500)
    }
  },
  created() {
    this.getAlbums()
  }
}