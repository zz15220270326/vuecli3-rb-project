<template>
  <div class="attdence-report">
    <div class="title">
      <Querymenu>
        <div class="menu" slot="menu">
          <ChoosableMenu :menuItems="menuItems" />
        </div>
        <div class="input" slot="input">
          <SearchInput />
        </div>
        <div class="date" slot="date">
          <Datespan />
        </div>
        <div class="search-button" slot="search-button">
          <SearchButton @click.native="searchTable" />
        </div>
      </Querymenu>
    </div>
    <div class="content">
      <!-- 统计报表 -->
      <Table :columns="tableTitlesArr" :data="tableContentArr" />
    </div>
    <Spin v-show="isLoading" fix>
      <Icon type="ios-loading" size=25 class="demo-spin-icon-load"></Icon>
      <div>重新查询中...</div>
    </Spin>
  </div>
</template>

<script>
// import times-function
import {dateToMs, transformToYM} from '@/utils/changeTime'
// import request-function
import {getMenuInfo, getStaticTableInfo} from '@/request/getAttdenceReportInfo'
// import components
// common / content components
import Querymenu from '@/components/content/query-menu/Querymenu'
import ChoosableMenu from '@/components/common/choosable-menu/ChoosableMenu'
import SearchInput from '@/components/common/search-input/SearchInput'
import Datespan from '@/components/common/date-span/Datespan'
import SearchButton from '@/components/common/search-button/SearchButton'
// childs-components
export default {
  name: 'AttdenceReport',
  components: {
    Querymenu,
    ChoosableMenu,
    SearchInput,
    Datespan,
    SearchButton
  },
  data: () => ({
    subMenu: '全员教师',
    menuItems: [],
    inputValue: '',
    tableTitlesArr: [],
    tableContentArr: [],
    year: 2020,
    month: 11,
    isLoading: false
  }),
  computed: {
    identify () {
      return this.$store.state.identify
    },
    uid () {
      // 虚拟存储的uid的值
      return this.$store.state.uid
    },
    classIds () {
      // 虚拟存储classIds的值
      return this.$store.state.classIds
    },
    teacherName () {
      return this.$store.state.teacherName
    },
    startTime () {
      return this.$store.state.startTime
    },
    endTime () {
      return this.$store.state.endTime
    },
    storeSelectMonth () {
      // return this.storeSelectMonth
      return this.$store.state.selectMonth
    },
    yearAndMonth () {
      // '年-月'
      const time = this.storeSelectMonth
      const timestamp = dateToMs(time)
      return transformToYM(timestamp).toString()
    }
  },
  methods: {
    // 请求的方法
    async requestMenu () {
      const result = await getMenuInfo(this.uid)
      const {data} = result
      this.menuItems.push(...data)
    },
    async requestTable () {
      const startTime = this.year + '-' + this.month + '-' + '01'
      const endTime = this.year + '-' + this.month + '-' + 30
      const result = await getStaticTableInfo(this.uid, this.classIds, startTime, endTime)
      const {header} = result.data.items
      const {data} = result.data.items
      this.tableTitlesArr.push(...header)
      this.tableContentArr.push(...data)
    },
    // 处理事件
    async searchTable () {
      // this.isLoading = true
      // setTimeout(() => {
      //   this.isLoading = false
      // }, 1000)
      if (this.classIds === '') {
        this.$notify({
          title: '提示:',
          message: '你还没有选择班级呢',
          type: 'warning'
        })
        return
      }
      if (this.startTime === '' || this.endTime === '') {
        this.$notify({
          title: '提示:',
          message: '请选择一下开始和结束日期',
          type: 'warning'
        })
        return
      }
      this.isLoading = true
      const uid = this.uid
      const classIds = this.classIds
      const teacherName = this.teacherName
      const startTime = this.startTime
      const endTime = this.endTime
      this.tableTitlesArr = []
      this.tableContentArr = []
      const otherParams = {
        teacherName
      }
      console.log(uid, classIds, startTime, endTime, otherParams)
      const result = await getStaticTableInfo(uid, classIds, startTime, endTime, otherParams)
      const {header} = result.data.items
      const {data} = result.data.items
      this.tableTitlesArr.push(...header)
      this.tableContentArr.push(...data)
      this.isLoading = false
    }
  },
  /**
   * life-hooks
   **/
  created () {
    this.requestMenu()
    this.requestTable()
  }
}
</script>

<style lang="less" scoped>
.attdence-report{
  margin-top: 1.2rem;
  .title {
    width: 100%;
    .query-menu {
      display: flex;
      .menu {
        flex: 1;
      }
      .input {
        flex: 1;
      }
      .date {
        flex: 3;
        margin-left: 1.2rem;
      }
      .search-button {
        flex: 5;
      }
    }
  }
  .content {
    margin-top: 6rem;
  }
}
</style>
