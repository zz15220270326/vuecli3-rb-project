<template>
  <div class="cookbook-info">
    <div class="title">
      <h2>{{ infoTitle }}</h2>
    </div>
    <div class="content">
      <Table border :columns="titleList" :data="dataList"></Table>
    </div>
  </div>
</template>

<script>
// ? import components

// ? mock-data
const mockCookbookInfo = require('@mock/health-care/mockCookbookInfo')

export default {
  name: 'CookbookInfo',
  props: {
    infoTitle: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    titleList: [],
    dataList: []
  }),
  methods: {
    getTableData() {
      this.titleList = [
        {
          title: '菜肴类型',
          key: 'type',
          width: 100,
          align: 'center'
        },
        {
          title: '周一',
          key: 'day1',
          align: 'center'
        },
        {
          title: '周二',
          key: 'day2',
          align: 'center'
        },
        {
          title: '周三',
          key: 'day3',
          align: 'center'
        },
        {
          title: '周四',
          key: 'day4',
          align: 'center'
        },
        {
          title: '周五',
          key: 'day5',
          align: 'center'
        }
      ]
      setTimeout(() => {
        const result = mockCookbookInfo
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const { data } = result
              data.map(item => {
                this.dataList.push({
                  type: item.name,
                  day1: item.content.day1,
                  day2: item.content.day2,
                  day3: item.content.day3,
                  day4: item.content.day4,
                  day5: item.content.day5
                })
              })
            }
          }
        }
      }, 300)
    }
  },
  created() {
    this.getTableData()
  }
}
</script>

<style lang="less" scoped>
.cookbook-info {
  height: 28rem;
  width: 100%;
  .title {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7bcbf4;
    color: #fff;
  }
  .content {
  }
}
</style>
