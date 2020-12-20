<template>
  <div class="class-attdance">
    <Spin size="large" v-show="isLoading">加载中</Spin>
    <class-attdance-menu @handleSearch="handleSearch" />
    <div class="title">班级考勤表</div>
    <class-attdance-content :titleList="titleList" :dataList="dataList" />
  </div>
</template>

<script>
// ? store-data
// import { GET_START_TIME, GET_END_TIME } from '@store/storeType'

// ? import components
const ClassAttdanceMenu = () => import('./child-components/ClassAttdanceMenu')
const ClassAttdanceContent = () =>
  import('./child-components/ClassAttdanceContent')

// ? import mixins
import classAttdanceContentMixin from '@mixins/class-management/classAttdanceContentMixin'
import getClassAttdanceMixin from '@mixins/class-management/getClassAttdanceMixin'

export default {
  name: 'ClassAttdance',

  components: {
    ClassAttdanceMenu,
    ClassAttdanceContent
  },

  mixins: [classAttdanceContentMixin, getClassAttdanceMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.class-attdance {
  .title {
    font-weight: bold;
    color: #464c5b;
    font-size: 1.6rem;
    .full_flex();
  }
}
</style>
