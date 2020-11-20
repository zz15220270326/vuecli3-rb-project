<template>
  <!-- 新建教学计划的表格 -->
  <div class="add-teach-plan">
    <div class="top">
      <div class="left">
        <Querymenu>
          <div slot="first" class="first">
            <span>周次:</span>
          </div>
          <div slot="second" class="second">
            <select-menu
              :listTitle="yearTitle"
              :listItems="yearInfo"
              @handleSelect="handleSelectYear"
            />
          </div>
          <div slot="third" class="third">
            <select-menu
              :listTitle="semesterTitle"
              :listItems="semesterInfo"
              @handleSelect="handleSelectSemester"
            />
          </div>
          <div slot="fourth" class="fourth">
            <select-menu
              :listTitle="weekTimeTitle"
              :listItems="weekTimeInfo"
              @handleSelect="handleSelectWeekDay"
            />
          </div>
        </Querymenu>
        <!-- <div class="select-class">
          <div class="left-content">选择班级</div>
          <div class="right-content">
            <select-menu
              :listTitle="classTitle"
              :listItems="classInfo"
              @handleSelect="handleSelectClass"
            />
          </div>
        </div>
        <div class="season-choose">
          <div class="left-content">时间方案</div>
          <div class="right-content">
            <select-menu
              :listTitle="seasonTitle"
              :listItems="seasonInfo"
              @handleSelect="handleSelectSeason"
            />
          </div>
        </div> -->
        <Querymenu>
          <div class="first" slot="first">
            <span>选择班级:</span>
          </div>
          <div class="second" slot="second">
            <select-menu
              :listTitle="classTitle"
              :listItems="classInfo"
              @handleSelect="handleSelectClass"
            />
          </div>
          <div class="third" slot="third">
            <span>时间方案:</span>
          </div>
          <div class="fourth" slot="fourth">
            <select-menu
              :listTitle="seasonTitle"
              :listItems="seasonInfo"
              @handleSelect="handleSelectSeason"
            />
          </div>
        </Querymenu>
      </div>
      <div class="right">
        <Dropdown v-for="(item, index) in modalButtonGroup" :key="index">
          <Button :type="item.type" @click.native="settingPlanType(index)">
            {{ item.tag }}
          </Button>
          <DropdownMenu v-if="index === 0" slot="list">
            <DropdownItem
              v-for="(item, key) in setPlanList"
              :key="key"
              @click.native="selectPlanListItem(key)"
            >
              {{ item.info }}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <div class="middle">
      <div class="work-days">
        <Button
          v-for="(item, index) in workDays"
          :key="index"
          :type="item.isSelected ? 'warning' : 'primary'"
          @click.native="selectWeekDay(index)"
        >
          {{ item.tag }}
        </Button>
      </div>
      <div class="noon">
        <Button
          v-for="(item, index) in noonList"
          :key="index"
          :type="item.isSelected ? 'primary' : 'default'"
          @click.native="selectNoon(index)"
        >
          {{ item.tag }}
        </Button>
      </div>
    </div>
    <!-- 三个默认不显示的弹窗: AddNewPlan AddedPlan PlanTypeSetting -->
    <Modal
      v-model="isShowChildModal"
      :title="childModalTitle"
      class="add-new-plan"
      :transfer="false"
      width="800"
      :footer-hide="true"
    >
      <add-new-plan
        :isShowAddNewPlan="isShowAddNewPlan"
        @cancelAddPlan="cancelAddPlan"
      />
      <added-plan :isShowAddedPlan="isShowAddedPlan" />
      <plan-type-setting :isShowPlanTypeSetting="isShowPlanTypeSetting" />
    </Modal>
    <!-- 底部默认显示的Table -->
    <div v-if="noonList[1]">
      <!-- 主要判断数组是否能够加载完成, 解除警告 -->
      <teach-plan-table
        :teachPlanTitle="teachPlanTitle"
        :teachPlanContent="teachPlanContent"
        @selectPlan="selectPlan"
        v-show="noonList[0].isSelected"
      />
      <teach-plan-table
        :teachPlanTitle="teachPlanTitle"
        :teachPlanContent="teachPlanContent2"
        @selectPlan="selectPlan"
        v-show="noonList[1].isSelected"
      />
    </div>
  </div>
</template>

<script>
// ? import components
// ? 1. query-menu
import Querymenu from '@content/query-menu/Querymenu'
// ? 2. select-menu
import SelectMenu from '@content/select-menu/SelectMenu'
// ? 3. teach-plan-table
import TeachPlanTable from './TeachPlanTable'

// ? child-components
import AddNewPlan from './add-plan-child/AddNewPlan'
import AddedPlan from './add-plan-child/AddedPlan'
import PlanTypeSetting from './add-plan-child/PlanTypeSetting'
export default {
  name: 'AddTeachPlan',
  components: {
    Querymenu,
    SelectMenu,
    TeachPlanTable,
    // ? child-components
    AddNewPlan,
    AddedPlan,
    PlanTypeSetting
  },
  data: () => ({
    isShowAddNewPlan: false,
    isShowAddedPlan: false,
    isShowPlanTypeSetting: false,
    isShowChildModal: false,
    childModalTitle: ''
  }),
  props: {
    // ? 年度标题, 内容
    yearTitle: {
      type: String,
      default: ''
    },
    yearInfo: {
      type: Array,
      default: () => []
    },
    // ? 学期标题, 内容
    semesterTitle: {
      type: String,
      default: ''
    },
    semesterInfo: {
      type: Array,
      default: () => []
    },
    // ? 周次标题, 内容
    weekTimeTitle: {
      type: String,
      default: ''
    },
    weekTimeInfo: {
      type: Array,
      default: () => []
    },
    // ? 班级标题, 内容
    classTitle: {
      type: String,
      default: ''
    },
    classInfo: {
      type: Array,
      default: () => []
    },
    // ? 季度方案标题, 内容
    seasonTitle: {
      type: String,
      default: ''
    },
    // ? 夏季 / 秋季
    seasonInfo: {
      type: Array,
      default: () => []
    },
    // ? 小弹窗按钮组
    modalButtonGroup: {
      type: Array,
      default: () => []
    },
    // ? 周一, 周二 ... 周五
    workDays: {
      type: Array,
      default: () => []
    },
    // ? 上午 / 下午
    noonList: {
      type: Array,
      default: () => []
    },
    teachPlanTitle: {
      type: Array,
      default: () => []
    },
    teachPlanContent: {
      type: Array,
      default: () => []
    },
    teachPlanContent2: {
      type: Array,
      default: () => []
    },
    // ? 设置方案的数组
    setPlanList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelectYear(item) {
      this.$emit('handleSelectYear', item)
    },
    handleSelectSemester(item) {
      this.$emit('handleSelectSemester', item)
    },
    handleSelectWeekDay(item) {
      this.$emit('handleSelectWeekDay', item)
    },
    handleSelectClass(item) {
      this.$emit('handleSelectClass', item)
    },
    handleSelectSeason(item) {
      this.$emit('handleSelectSeason', item)
    },
    selectWeekDay(currentIndex) {
      this.$emit('selectWeekDay', currentIndex)
    },
    selectNoon(currentIndex) {
      this.$emit('selectNoon', currentIndex)
    },
    selectPlan(item) {
      this.$emit('selectPlan', item)
    },
    selectPlanListItem(key) {
      // ? 判断key值
      /* 
      ! 0: 添加方案弹窗   1: 已添加方案弹窗
      */
      switch (key) {
        case 0:
          this.isShowChildModal = true
          this.childModalTitle = '添加方案'
          this.isShowAddNewPlan = true
          this.isShowAddedPlan = false
          this.isShowPlanTypeSetting = false
          break
        case 1:
          this.isShowChildModal = true
          this.childModalTitle = '已添加方案'
          this.isShowAddNewPlan = false
          this.isShowAddedPlan = true
          this.isShowPlanTypeSetting = false
          break
      }
    },
    settingPlanType(currentIndex) {
      if (currentIndex === 1) {
        this.isShowChildModal = true
        this.childModalTitle = '计划类型设置'
        this.isShowAddNewPlan = false
        this.isShowAddedPlan = false
        this.isShowPlanTypeSetting = true
      }
    },
    cancelAddPlan() {
      this.isShowChildModal = false
    }
  }
}
</script>

<style lang="less" scoped>
.add-teach-plan {
  height: 32rem;
  .top {
    width: 100%;
    height: 20%;
    margin-top: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      flex: 3;
      height: 100%;
      .query-menu {
        width: 100%;
        display: flex;
        .first {
          flex: 2;
          padding-left: 2.3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 0.92rem;
            font-weight: 600;
          }
        }
        .second {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .third {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 0.92rem;
            font-weight: 600;
          }
        }
        .fourth {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3.2rem;
        }
      }
      .select-class {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-content {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .right-content {
          flex: 7;
          display: flex;
          justify-content: center;
          align-items: center;
          // .select-menu {
          // }
        }
      }
      .season-choose {
        margin-top: 0.8rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-content {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .right-content {
          flex: 7;
          display: flex;
          justify-content: center;
          align-items: center;
          // .select-menu {
          // }
        }
      }
    }
    .right {
      flex: 2;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      .ivu-btn {
        margin-left: 0.8rem;
      }
    }
  }
  .middle {
    width: 100%;
    height: 50%;
    .work-days {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .ivu-btn {
        flex: 1;
        margin: 0 0.6rem;
      }
    }
    .noon {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .ivu-btn {
        flex: 1;
        margin: 0 1.2rem;
        // width: 20rem;
      }
    }
  }
}
</style>
