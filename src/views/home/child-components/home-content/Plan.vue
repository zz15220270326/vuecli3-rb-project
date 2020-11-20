<template>
  <div class="plan-content">
    <right-header>
      <div slot="left" class="left">计划</div>
      <div slot="right" class="right">
        <Button
          icon="ios-refresh-circle-outline"
          :loading="isLoading"
          type="primary"
          shape="circle"
        />
      </div>
    </right-header>
    <!-- <Divider /> -->
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
      <teach-plan />
    </div>
    <div v-show="currentIndex === 1">
      <semester-plan />
    </div>
    <div v-show="currentIndex === 2">
      <all-year-plan />
    </div>
    <div v-show="currentIndex === 3">
      <other-plan />
    </div>
    <div v-show="currentIndex === 4">
      <work-sumary />
    </div>
    <div v-show="currentIndex === 5">
      <work-report />
    </div>
  </div>
</template>

<script>
// ? common / content components
import RightHeader from '../content-children/RightHeader'
// ? child-components
import TeachPlan from '@content/plan/class-plan/child-components/TeachPlan'
import OtherPlan from '@content/plan/class-plan/child-components/OtherPlan'
import SemesterPlan from '@content/plan/semester-plan/SemesterPlan'
import AllYearPlan from '@content/plan/all-year-plan/AllYearPlan'
import WorkSumary from '@content/plan/work-sumary/WorkSumary'
import WorkReport from '@content/plan/work-report/WorkReport'
export default {
  name: 'Plan',
  components: {
    // ? common / content components
    RightHeader,
    // ? child-components
    TeachPlan,
    OtherPlan,
    SemesterPlan,
    AllYearPlan,
    WorkSumary,
    WorkReport
  },
  data: () => ({
    headerTab: [
      {
        name: '教学计划',
        type: 'primary'
      },
      {
        name: '学期计划',
        type: 'default'
      },
      {
        name: '整年计划',
        type: 'default'
      },
      {
        name: '其他计划',
        type: 'default'
      },
      {
        name: '工作总结',
        type: 'default'
      },
      {
        name: '工作汇报',
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
.plan-content {
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
