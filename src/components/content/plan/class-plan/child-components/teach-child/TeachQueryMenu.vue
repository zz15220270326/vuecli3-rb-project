<template>
  <Querymenu>
    <div slot="first" class="first">
      <!-- year-info -->
      <select-menu
        :listTitle="classTitle"
        :listItems="classInfo"
        @handleSelect="handleSelectClass"
      />
      <select-menu
        :listTitle="yearTitle"
        :listItems="yearInfo"
        @handleSelect="handleSelectYear"
      />
      <select-menu
        :listTitle="semesterTitle"
        :listItems="semesterInfo"
        @handleSelect="handleSelectSemester"
      />
      <select-menu
        :listTitle="weekTimeTitle"
        :listItems="weekTimeInfo"
        @handleSelect="handleSelectWeekDay"
      />
    </div>
    <div slot="second" class="second">
      <select-menu
        :listTitle="evaluateTitle"
        :listItems="evaluateInfo"
        @handleSelect="handleSelectEvaluate"
      />
    </div>
    <div slot="third" class="third">
      <Button
        v-for="(item, index) in operations"
        :key="index"
        :type="item.type"
        @click.native="handleAll(item.info)"
      >
        {{ item.info }}
      </Button>
    </div>
    <div slot="fourth" class="fourth">
      <Button type="warning" @click.native="addTeachPlan">
        创建教学计划
        <Icon type="md-add" />
      </Button>
    </div>
  </Querymenu>
</template>

<script>
// ? import components
// ? 1. query-menu
import Querymenu from '@content/query-menu/Querymenu'
// ? 2. select-menu
import SelectMenu from '@content/select-menu/SelectMenu'
export default {
  name: 'TeachQueryMenu',
  components: {
    Querymenu,
    SelectMenu
  },
  props: {
    // ? 班级标题, 信息
    classTitle: {
      type: String,
      default: ''
    },
    classInfo: {
      type: Array,
      default: () => []
    },
    // ? 年度标题, 信息
    yearTitle: {
      type: String,
      default: ''
    },
    yearInfo: {
      type: Array,
      default: () => []
    },
    // ? 学期标题, 信息
    semesterTitle: {
      type: String,
      default: ''
    },
    semesterInfo: {
      type: Array,
      default: () => []
    },
    // ? 周次标题, 信息
    weekTimeTitle: {
      type: String,
      default: ''
    },
    weekTimeInfo: {
      type: Array,
      default: () => []
    },
    // ? 评价标题, 信息
    evaluateTitle: {
      type: String,
      default: ''
    },
    evaluateInfo: {
      type: Array,
      default: () => []
    },
    // ? 操作标题, 信息
    operations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelectClass(item) {
      this.$emit('handleSelectClass', item)
    },
    handleSelectYear(item) {
      this.$emit('handleSelectYear', item)
    },
    handleSelectSemester(item) {
      this.$emit('handleSelectSemester', item)
    },
    handleSelectWeekDay(item) {
      this.$emit('handleSelectWeekDay', item)
    },
    handleSelectEvaluate(item) {
      this.$emit('handleSelectEvaluate', item)
    },
    handleAll(info) {
      this.$emit('handleAll', info)
    },
    addTeachPlan() {
      this.$emit('addTeachPlan')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  background-color: #fff;
  color: #666;
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  .first {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
  }
  .second {
    flex: 1;
    margin-top: 1.2rem;
  }
  .third {
    flex: 1;
    margin-top: 1.2rem;
    .ivu-btn {
      margin-left: 0.6rem;
      width: 5rem;
    }
  }
  .fourth {
    flex: 1;
    margin-top: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
