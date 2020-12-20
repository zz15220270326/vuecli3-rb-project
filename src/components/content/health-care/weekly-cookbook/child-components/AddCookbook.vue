<template>
  <div class="add-cookbook">
    <div class="week-time">
      <div class="left">选择周次:</div>
      <div class="right">
        <select-menu
          :listTitle="yearTitle"
          :listItems="yearList"
          @handleSelect="selectYear"
        />
        <select-menu
          :listTitle="semesterTitle"
          :listItems="semesterList"
          @handleSelect="selectSemester"
        />
        <select-menu
          :listTitle="weekTitle"
          :listItems="weekList"
          @handleSelect="selectWeek"
        />
      </div>
    </div>
    <div class="tabs">
      <div class="left">选择天数:</div>
      <div class="right">
        <Button
          v-for="(item, key) in weekDayList"
          :key="key"
          :type="item.type"
          @click.native="selectWeekDay(key)"
        >
          {{ item.tag }}
        </Button>
      </div>
    </div>
    <div class="cookbook-menu">
      <div class="header">规划食谱</div>
      <div class="body">
        <Table border :columns="titleList" :data="dataList">
          <template slot-scope="{ row }" slot="type">
            <Checkbox v-model="row.type.isChecked">
              {{ row.type.name }}
            </Checkbox>
          </template>
          <template slot-scope="{ row, index }" slot="content">
            <List class="input-content">
              <ListItem v-for="(item, key) in row.content" :key="key">
                <div v-if="key === 0">
                  <Input
                    placeholder="菜肴名称"
                    v-model="item.content"
                    :disabled="!row.type.isChecked"
                  />
                </div>
                <div class="new-item" v-else>
                  <Input
                    placeholder="菜肴名称"
                    v-model="item.content"
                    :disabled="!row.type.isChecked"
                  />
                  <Button @click.native="deleteItem(index, key)" type="error"
                    >删除</Button
                  >
                </div>
              </ListItem>
              <Button type="info" @click.native="addContentItem(index)">
                添加菜肴种类
              </Button>
            </List>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const SelectMenu = () => import('@common/select-menu/SelectMenu')
// ? mock-data
const mockYearList = require('@mock/health-care/mockYearList')
const mockSemesterList = require('@mock/health-care/mockSemesterList')
const mockWeekList = require('@mock/health-care/mockWeekList')
const mockAddCookbook = require('@mock/health-care/mockAddCookbook')

export default {
  name: 'AddCookbook',
  components: {
    SelectMenu
  },
  data: () => ({
    // ?? selected
    yearTitle: '',
    yearList: [],
    semesterTitle: '',
    semesterList: [],
    weekTitle: '',
    weekList: [],
    weekDayList: [
      {
        tag: '周一',
        key: 0,
        type: 'warning'
      },
      {
        tag: '周二',
        key: 1,
        type: 'info'
      },
      {
        tag: '周三',
        key: 2,
        type: 'info'
      },
      {
        tag: '周四',
        key: 3,
        type: 'info'
      },
      {
        tag: '周五',
        key: 4,
        type: 'info'
      }
    ],
    // ? 规划食谱 - 表格
    titleList: [],
    dataList: []
  }),
  methods: {
    // ? menu-functions
    selectYear(selectItem) {
      this.yearTitle = selectItem
    },
    selectSemester(selectItem) {
      this.semesterTitle = selectItem
    },
    selectWeek(selectItem) {
      this.weekTitle = selectItem
    },
    selectWeekDay(currentIndex) {
      this.weekDayList.forEach((item, index) => {
        if (index === currentIndex) {
          item.type = 'warning'
        } else {
          item.type = 'info'
        }
      })
    },
    addContentItem(dataListIndex) {
      console.log(dataListIndex)
      let newItem = {
        content: ''
      }
      this.dataList[dataListIndex].content.push(newItem)
    },
    deleteItem(dataListIndex, contentIndex) {
      this.dataList[dataListIndex].content.splice(contentIndex, 1)
    },
    /**
     * ? async functions
     */
    // todo menu-data
    getYear() {
      setTimeout(() => {
        const result = mockYearList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              if (dataList[0].info) {
                this.yearTitle = dataList[0].info
                this.yearList = dataList
              }
            }
          }
        }
      }, 300)
    },
    getSemester() {
      setTimeout(() => {
        const result = mockSemesterList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              if (dataList[0].info) {
                this.semesterTitle = dataList[0].info
                this.semesterList = dataList
              }
            }
          }
        }
      }, 300)
    },
    getWeek() {
      setTimeout(() => {
        const result = mockWeekList
        if (result.msg) {
          const { msg } = result
          if (msg === 'Success') {
            if (result.data) {
              const dataList = result.data
              if (dataList[0].info) {
                this.weekTitle = dataList[0].info
                this.weekList = dataList
              }
            }
          }
        }
      }, 300)
    },
    // ? table-data
    getCookbookData() {
      this.titleList = [
        {
          title: '食谱类型',
          slot: 'type',
          align: 'center',
          width: 120
        },
        {
          title: '菜肴/人(克)',
          slot: 'content',
          align: 'center',
          width: 300
        }
      ]
      setTimeout(() => {
        const result = mockAddCookbook
        if (result.msg === 'Success') {
          if (result.data.menuType) {
            const { menuType } = result.data
            menuType.map(item => {
              this.dataList.push({
                type: {
                  name: item.name,
                  isChecked: item.is_checked
                },
                content: item.menu_list
              })
            })
          }
        }
      }, 300)
    }
  },
  created() {
    this.getYear()
    this.getSemester()
    this.getWeek()
    this.getCookbookData()
  }
}
</script>

<style lang="less" scoped>
.add-cookbook {
  height: 28rem;
  width: 100%;
  background-color: pink;
  overflow: scroll;
  .week-time {
    padding: 0.8rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      flex: 2;
      text-align: right;
    }
    .right {
      flex: 7;
      width: 100%;
      padding-left: 1.2rem;
    }
  }
  .tabs {
    margin-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      flex: 2;
      text-align: right;
    }
    .right {
      flex: 7;
      width: 100%;
      padding-left: 1.2rem;
      .ivu-btn {
        margin: 0 0.8rem;
        width: 5.3rem;
      }
    }
  }
  .cookbook-menu {
    margin-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .header {
      flex: 2;
      text-align: right;
    }
    .body {
      flex: 7;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .input-content {
        height: 6rem;
        width: 100%;
        margin-top: 0.6rem;
        padding: 0.5rem;
        overflow-y: scroll;
        .new-item {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .ivu-btn {
          font-size: 0.5rem;
          margin: 0.3rem;
        }
      }
    }
  }
}
</style>
