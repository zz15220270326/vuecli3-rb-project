<template>
  <div class="garde-attdance">
    <grade-attdance-menu />
    <div class="title">园所出勤状况</div>
    <div class="content">
      <column-picture :chartStyle="chartStyle" :render="render" />
    </div>
  </div>
</template>

<script>
// ? import components
const GradeAttdanceMenu = () => import('./child-components/GradeAttdanceMenu')
const ColumnPicture = () => import('@echart/ColumnPicture')

// ? import mixins
import getGardenAttdanceMixin from '@mixins/class-management/getGardenAttdanceMixin'

export default {
  name: 'GradeAttdance',

  components: {
    GradeAttdanceMenu,
    ColumnPicture
  },

  mixins: [getGardenAttdanceMixin],

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

.garde-attdance {
  .title {
    font-weight: bold;
    color: #464c5b;
    font-size: 1.6rem;
    margin: 1.6rem 0;
    .full_flex();
  }
  .content {
    .full_flex();
  }
}
</style>
