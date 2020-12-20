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
              :listItems="yearList"
              @handleSelect="selectYear"
            />
          </div>
          <div slot="third" class="third">
            <select-menu
              :listTitle="semesterTitle"
              :listItems="semesterList"
              @handleSelect="selectSemester"
            />
          </div>
          <div slot="fourth" class="fourth">
            <select-menu
              :listTitle="weekTimeTitle"
              :listItems="weekTimeList"
              @handleSelect="selectWeekTime"
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
              :listItems="classList"
              @handleSelect="selectClass"
            />
          </div>
          <div class="third" slot="third">
            <span>时间方案:</span>
          </div>
          <div class="fourth" slot="fourth">
            <select-menu
              :listTitle="seasonTitle"
              :listItems="seasonList"
              @handleSelect="selectSeason"
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
          v-for="(item, key) in workDayList"
          :key="key"
          :type="item.type"
          @click.native="selectWorkDay(key)"
        >
          {{ item.tag }}
        </Button>
      </div>
      <div class="noon">
        <Button
          v-for="(item, key) in noonList"
          :key="key"
          :type="item.type"
          @click.native="selectNoon(key)"
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
    <div class="bottom-table">
      <!-- 主要判断数组是否能够加载完成, 解除警告 -->
      <teach-plan-table
        :teachPlanTitle="teachPlanTitle"
        :teachPlanContent="teachPlanContent"
        @selectPlan="selectPlan"
        v-show="currentIndex === 0"
      />
      <teach-plan-table
        :teachPlanTitle="teachPlanTitle"
        :teachPlanContent="teachPlanContent2"
        @selectPlan="selectPlan"
        v-show="currentIndex === 1"
      />
    </div>
  </div>
</template>

<script>
// ? import components
// ? 1. query-menu
import Querymenu from '@common/query-menu/Querymenu'
// ? 2. select-menu
import SelectMenu from '@common/select-menu/SelectMenu'
// ? 3. teach-plan-table
import TeachPlanTable from './TeachPlanTable'

// ? child-components
import AddNewPlan from './add-plan-child/AddNewPlan'
import AddedPlan from './add-plan-child/AddedPlan'
import PlanTypeSetting from './add-plan-child/PlanTypeSetting'

// ? import mixins
import yearMixins from '@mixins/Common/yearMixins'
import semesterMixins from '@mixins/Common/semesterMixins'
import weekTimeMixins from '@mixins/Common/weekTimeMixins'
import classMixins from '@mixins/Common/classMixins'
import workDaysMixins from '@mixins/Common/workDaysMixins'
import noonMixins from '@mixins/Common/noonMixins'

import seasonMixin from '@mixins/plan/seasonMixin'
import addTPMixin from '@mixins/plan/addTPMixin'

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
  mixins: [
    yearMixins,
    semesterMixins,
    weekTimeMixins,
    classMixins,
    seasonMixin,
    workDaysMixins,
    noonMixins,
    addTPMixin
  ],
  data: () => ({}),
  props: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.flex_common() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_full() {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.add-teach-plan {
  height: 32rem;
  .top {
    height: 20%;
    margin-top: 1.8rem;
    .flex_full();
    .left {
      flex: 3;
      height: 100%;
      .query-menu {
        width: 100%;
        display: flex;
        .first {
          flex: 2;
          padding-left: 2.3rem;
          .flex_common();
          span {
            font-size: 0.92rem;
            font-weight: 600;
          }
        }
        .second {
          flex: 3;
          .flex_common();
        }
        .third {
          flex: 3;
          .flex_common();
          span {
            font-size: 0.92rem;
            font-weight: 600;
          }
        }
        .fourth {
          flex: 3;
          .flex_common();
          height: 3.2rem;
        }
      }
      .select-class {
        .flex_full();
        .left-content {
          flex: 3;
          .flex_common();
        }
        .right-content {
          flex: 7;
          .flex_common();
          // .select-menu {
          // }
        }
      }
      .season-choose {
        margin-top: 0.8rem;
        .flex_full();
        .left-content {
          flex: 3;
          .flex_common();
        }
        .right-content {
          flex: 7;
          .flex_common();
          // .select-menu {
          // }
        }
      }
    }
    .right {
      flex: 2;
      height: 100%;
      .flex_full();
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
      height: 50%;
      .flex_full();
      .ivu-btn {
        flex: 1;
        margin: 0 0.6rem;
      }
    }
    .noon {
      height: 50%;
      .flex_full();
      .ivu-btn {
        flex: 1;
        margin: 0 1.2rem;
        // width: 20rem;
      }
    }
  }
}
</style>
