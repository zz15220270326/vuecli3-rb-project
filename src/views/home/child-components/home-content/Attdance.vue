<template>
  <div class="attdance-content">
    <right-header>
      <div slot="left" class="left">报表</div>
      <div slot="right" class="right">
        <Button
          icon="ios-refresh-circle-outline"
          :loading="isLoading"
          type="primary"
          shape="circle"
        />
      </div>
    </right-header>
    <div v-show="headerTab.length > 0" class="header-tab">
      <Button
        v-for="(item, index) in headerTab"
        :key="index"
        :type="item.type"
        @click.native="switchTab(index)"
      >
        {{ item.name }}
      </Button>
    </div>
    <div v-show="currentIndex === 0">
      <PersonalAttdance />
    </div>
    <div v-show="currentIndex === 1">
      <FullAttdance />
    </div>
    <div v-show="currentIndex === 2">
      <AttdenceReport />
    </div>
    <div v-show="currentIndex === 3">
      <AttdanceRules />
    </div>
    <div v-show="currentIndex === 4">
      <AttdanceTypeSetting />
    </div>
  </div>
</template>

<script>
// ? common / content components
import RightHeader from '../content-children/RightHeader'
// ? attdance-components
import PersonalAttdance from '@content/attdance/attendance-table/PersonalAttdance'
import FullAttdance from '@content/attdance/attendance-table/FullAttdance'
import AttdenceReport from '@content/attdance/attadance-report/AttdenceReport'
import AttdanceRules from '@content/attdance/attdance-rules/AttdanceRules'
import AttdanceTypeSetting from '@content/attdance/attdance-type-setting/AttdanceTypeSetting'
export default {
  name: 'Attdance',
  components: {
    RightHeader,
    PersonalAttdance,
    FullAttdance,
    AttdenceReport,
    AttdanceRules,
    AttdanceTypeSetting
  },
  data: () => ({
    headerTab: [
      {
        name: '个人考勤明细',
        type: 'primary'
      },
      {
        name: '全员考勤明细',
        type: 'default'
      },
      {
        name: '考勤报表',
        type: 'default'
      },
      {
        name: '考勤规则',
        type: 'default'
      },
      {
        name: '考勤类型设置',
        type: 'default'
      }
    ],
    days: '',
    currentIndex: 0,
    isLoading: true
  }),
  methods: {
    switchTab(currentIndex) {
      this.headerTab.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
      this.currentIndex = currentIndex
    }
  }
}
</script>

<style lang="less" scoped>
.attdance-content {
  margin-top: 1.2rem;
  background-color: #f6f6f6;
  height: 100vh;
  .header-tab {
    height: 3rem;
    background-color: #fff;
    margin: auto 0;
    padding-left: 1.2rem;
    .ivu-btn {
      margin: 0.5rem 0.6rem;
      padding: 0;
      border-radius: 0;
      width: 7rem;
      height: 2rem;
    }
  }
}
</style>
