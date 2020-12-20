<template>
  <Querymenu>
    <div slot="first" class="first">
      <!-- year-info -->
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
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
        :listTitle="weekTimeTitle"
        :listItems="weekTimeList"
        @handleSelect="selectWeekTime"
      />
    </div>
    <div slot="second" class="second">
      <select-menu
        :listTitle="commentStatusTitle"
        :listItems="commentStatusList"
        @handleSelect="selectCommentStatus"
      />
    </div>
    <div slot="third" class="third">
      <Button
        v-for="(item, index) in operations"
        :key="index"
        :type="item.type"
        @click.native="handleAll(item.tag)"
      >
        {{ item.tag }}
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
import Querymenu from '@common/query-menu/Querymenu'
// ? 2. select-menu
import SelectMenu from '@common/select-menu/SelectMenu'
// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import yearMixins from '@mixins/Common/yearMixins'
import semesterMixins from '@mixins/Common/semesterMixins'
import weekTimeMixins from '@mixins/Common/weekTimeMixins'
import commentStatusMixin from '@mixins/plan/commentStatusMixin'
import menuCommonMixin from '@mixins/plan/menuCommonMixin'

export default {
  name: 'TeachQueryMenu',
  components: {
    Querymenu,
    SelectMenu
  },
  mixins: [
    classMixins,
    yearMixins,
    semesterMixins,
    weekTimeMixins,
    commentStatusMixin,

    menuCommonMixin
  ],
  props: {},
  methods: {
    addTeachPlan() {
      this.$emit('addTeachPlan')
    }
  }
}
</script>

<style lang="less" scoped>
.common_flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.query-menu {
  background-color: #fff;
  color: #666;
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  .first {
    flex: 3;
    padding: 1.2rem;
    .common_flex();
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
    padding: 1.2rem;
  }
}
</style>
