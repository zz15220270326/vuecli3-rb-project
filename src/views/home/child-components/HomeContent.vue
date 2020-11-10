<template>
  <div class="home-content">
    <Col class="left-content" :span="3"></Col>
    <Col class="right-content" :span="20">
      <div class="header">
        <div class="left">全员报表</div>
        <div class="right">
          <Button icon="ios-refresh-circle-outline" :loading="isLoading" type="primary" shape="circle" />
        </div>
      </div>
      <Divider />
      <div v-show="headerTab.length > 0" class="header-tab" >
        <Button v-for="(item, index) in headerTab" :key="index" :type="item.type"  @click.native="switchTab(index)">
          {{item.name}}
        </Button>
      </div>
      <div v-show="currentIndex === 0">
        <SelectMonth />
        <AttendanceTable />
      </div>
      <div v-show="currentIndex === 1">
        <AttdenceReport />
      </div>
    </Col>
  </div>
</template>

<script>
// common / content components
import SelectMonth from '@content/select-month/SelectMonth'
import AttendanceTable from '@content/attendance-table/AttendanceTable'
import AttdenceReport from '@content/attadance-report/AttdenceReport'

export default {
  name: 'HomeContent',
  components: {
    SelectMonth,
    AttendanceTable,
    AttdenceReport
  },
  data: () => ({
    headerTab: [
      {
        name: '考勤明细',
        type: 'primary'
      },
      {
        name: '考勤报表',
        type: 'default'
      }
    ],
    days: '',
    currentIndex: 0,
    isLoading: true
  }),
  methods: {
    switchTab (currentIndex) {
      this.headerTab.forEach((item, index) => { index === currentIndex ? item.type = 'primary' : item.type = 'default' })
      this.currentIndex = currentIndex
    }
  },
  updated () {
  }
}
</script>

<style lang="less" scoped>
.home-content {
  background-color: #f6f6f6;
  height: 100vh;
  .left-content {
    height: 100vh;
  }
  .right-content {
    height: 100vh;
    background-color: #fff;
    .header {
      background-color: #f6f6f6;
      font-size: 18px;
      height: 3rem;
      padding: 0.2rem 0.4rem;
      .left {
        display: inline-block;
        left: 0.4rem;
        margin-top: 0.6rem;
        color: #36adea;
      }
      .right {
        margin-right: 1.2rem;
        .el-icon-loading {
          font-size: 1rem;
        }
      }
    }
    .el-divider {
      margin: 0;
      padding: 0;
    }
    .header-tab {
      height: 3rem;
      background-color: #f6f6f6;
      margin: auto 2rem;
      .ivu-btn {
        margin: 0.5rem 0.8rem;
        padding: 0;
        border-radius: 0;
        width: 7rem;
        height: 2rem;
      }
    }
  }
}
</style>
