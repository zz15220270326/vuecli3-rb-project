const mockGardenActiveList = require('@mock/notice-active/mockGardenActiveList')

export default {
  data() {
    return {
      topList: [],
      commonList: [],
      totalPage: 0
    }
  },
  methods: {
    getGardenActiveData() {
      setTimeout(() => {
        const result = mockGardenActiveList
        if (result.msg === 'Success' && result.data) {
          const dataSource = result.data
          this.totalPage = dataSource.length
          dataSource.map((item) => {
            switch (item.is_set_top) {
              case true:
                // ? 已经置顶, 显示在topList
                this.topList.push({
                  title: item.title,
                  content: item.content,
                  imgs: item.imgs,
                  author: item.author,
                  avatar: item.avatar,
                  time: item.time,
                  isDispatched: item.is_dispatched,
                  userOperations: [{
                      tag: '删除',
                      type: 'error',
                      icon: 'ios-trash-outline'
                    },
                    {
                      tag: '取消置顶',
                      type: 'warning',
                      icon: 'ios-arrow-down'
                    },
                  ],
                  isChecked: false
                })
                break
              case false:
                // ? 还没有置顶, 显示在commonList中
                this.commonList.push({
                  title: item.title,
                  content: item.content,
                  imgs: item.imgs,
                  author: item.author,
                  avatar: item.avatar,
                  time: item.time,
                  isDispatched: item.is_dispatched,
                  userOperations: [{
                      tag: '删除',
                      type: 'error',
                      icon: 'ios-trash-outline'
                    },
                    {
                      tag: '置顶',
                      type: 'success',
                      icon: 'ios-arrow-up'
                    },
                  ],
                  isChecked: false
                })
            }
            this.topList.map((item) => {
              switch (item.isDispatched) {
                case true:
                  // ? 已经发布
                  item.itemOperations = [{
                    tag: '详情',
                    type: 'info'
                  }]
                  break
                case false:
                  // ? 还没发布
                  item.userOperations = [{
                      tag: '编辑',
                      type: 'primary',
                      icon: 'ios-build-outline'
                    },
                    {
                      tag: '删除',
                      type: 'error',
                      icon: 'ios-trash-outline'
                    },
                    {
                      tag: '取消置顶',
                      type: 'warning',
                      icon: 'ios-arrow-down'
                    },
                  ]
                  item.itemOperations = [{
                      tag: '预览',
                      type: 'info'
                    },
                    {
                      tag: '发布',
                      type: 'success'
                    }
                  ]
                  break
              }
            })
            this.commonList.map(item => {
              switch (item.isDispatched) {
                case true:
                  item.itemOperations = [{
                    tag: '详情',
                    type: 'info'
                  }]
                  break
                case false:
                  item.userOperations = [{
                      tag: '编辑',
                      type: 'primary',
                      icon: 'ios-build-outline'
                    },
                    {
                      tag: '删除',
                      type: 'error',
                      icon: 'ios-trash-outline'
                    },
                    {
                      tag: '置顶',
                      type: 'success',
                      icon: 'ios-arrow-up'
                    },
                  ]
                  item.itemOperations = [{
                      tag: '预览',
                      type: 'info'
                    },
                    {
                      tag: '发布',
                      type: 'success'
                    }
                  ]
                  break
              }
            })
          })
        }
      }, 666);
    },
    checkIsDispatched(item, index, list) {
      switch (item.is_dispatched) {
        case true:
          // ? 已经发布
          list[index].userOperations = [{
              tag: '删除',
              type: 'error',
              icon: 'ios-trash-outline'
            },
            {
              tag: '取消置顶',
              type: 'warningng',
              icon: 'ios-arrow-down'
            }
          ]
          list[index].itemOperations = [{
            tag: '详情',
            type: 'info'
          }]
          break
        case false:
          list[index].userOperations = [{
              tag: '编辑',
              type: 'primary',
              icon: 'ios-clipboard-outline'
            },
            {
              tag: '删除',
              type: 'error',
              icon: 'ios-trash-outline'
            },
            {
              tag: '取消置顶',
              type: 'warningng',
              icon: 'ios-arrow-down'
            }
          ]
          list[index].itemOperations = [

            {
              tag: '预览',
              type: 'info'
            },
            {
              tag: '发布',
              type: 'success'
            }
          ]
          break
      }
    },
  },
  created() {
    this.getGardenActiveData()
  }
}