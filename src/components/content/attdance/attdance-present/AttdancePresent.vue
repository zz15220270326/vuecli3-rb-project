<template>
  <!-- 出勤率分析 -->
  <div class="attdance-present">
    <present-menu
      :selectDayList="selectDayList"
      @handleSelectDay="handleSelectDay"
      @searchAttdance="searchAttdance"
    />
    <div class="line-content">
      <line-chart :option="lineOption" :chartStyle="chartStyle" />
    </div>
  </div>
</template>

<script>
// ? import components
const PresentMenu = () => import('./child-components/PresentMenu')
const LineChart = () => import('@echart/LineChart')
// ? import mixins
import lineMixin from '@mixins/attdance/lineMixin'
export default {
  name: 'AttdancePresent',

  mixins: [lineMixin],

  components: {
    PresentMenu,
    LineChart
  },

  data: () => ({
    // ? menu-data
    selectDayList: [
      {
        tag: '七天',
        type: 'primary'
      },
      {
        tag: '14天',
        type: 'default'
      },
      {
        tag: '30天',
        type: 'default'
      }
    ],
    currentIndex: 0,
    // ? line-data
    chartStyle: {
      width: '72rem',
      height: '36rem'
    }
  }),

  props: {},

  computed: {},

  methods: {
    handleSelectDay(currentIndex) {
      this.currentIndex = currentIndex
      this.selectDayList.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
    },
    searchAttdance() {
      console.log('searchAttdance')
    }
  }
}
</script>

<style lang="less" scoped>
.attdance-present {
  .line-content {
    margin-top: 1.6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
