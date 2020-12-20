<template>
  <div class="children-attdance">
    <div class="select-tab">
      <Button
        v-for="(item, key) in selectTabs"
        :key="key"
        :type="item.type"
        @click.native="handleSelectTab(key)"
      >
        {{ item.tag }}
      </Button>
      <div class="content" v-show="currentIndex === 0">
        <attdance-info />
      </div>
      <div class="content" v-show="currentIndex === 1">
        <class-attdance />
      </div>
      <div class="content" v-show="currentIndex === 2">
        <grade-attdance />
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const AttdanceInfo = () => import('./attdance-info/AttdanceInfo')
const ClassAttdance = () => import('./class-attdance/ClassAttdance')
const GradeAttdance = () => import('./grade-attdance/GradeAttdance')

// ? import mixins

export default {
  name: 'ChildrenAttdance',

  components: {
    AttdanceInfo,
    ClassAttdance,
    GradeAttdance
  },

  mixins: [],

  data: () => ({
    selectTabs: [
      {
        tag: '考勤明细',
        type: 'primary'
      },
      {
        tag: '班级考勤分析',
        type: 'default'
      },
      {
        tag: '年级考勤分析',
        type: 'default'
      }
    ],
    currentIndex: 0
  }),

  props: {},

  computed: {},

  methods: {
    handleSelectTab(currentIndex) {
      this.currentIndex = currentIndex
      this.selectTabs.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.children-attdance {
  color: #666;
  background-color: #fff;
  .select-tab {
    background-color: #f6f6f6;
    padding: 0.88rem 0;
    .ivu-btn {
      margin: 0 0.8rem;
    }
  }
}
</style>
