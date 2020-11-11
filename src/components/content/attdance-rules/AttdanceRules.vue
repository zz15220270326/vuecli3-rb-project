<template>
  <div class="attdance-rules">
    <div class="first">
      <div class="left">
        有效考勤记录大于
        <InputNumber
          :max="effectRecord"
          :min="effectRecord"
          v-model="effectRecord"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle"></div>
      <div class="right">
        每月可申请补卡次数
        <InputNumber
          :max="cardReplaceMent"
          :min="cardReplaceMent"
          v-model="cardReplaceMent"
          :editable="enableEdit"
        />
        次
      </div>
    </div>
    <Divider />
    <div class="second">
      <div class="left">
        加班申请最小时长
        <InputNumber
          :max="minOTtime"
          :min="minOTtime"
          v-model="minOTtime"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle"></div>
      <div class="right">
        提前多少分钟下班不记早退
        <InputNumber
          :max="lessThanLeaveEarly"
          :min="lessThanLeaveEarly"
          v-model="lessThanLeaveEarly"
          :editable="enableEdit"
        />
        分钟
      </div>
    </div>
    <Divider />
    <div class="third">
      <div class="left">
        迟到多少分钟记为迟到
        <InputNumber
          :max="moreThanBeLate"
          :min="moreThanBeLate"
          v-model="moreThanBeLate"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle"></div>
      <div class="right">
        早退多少分钟记为旷工
        <InputNumber
          :max="leaveEarlyBeAbsent"
          :min="leaveEarlyBeAbsent"
          v-model="leaveEarlyBeAbsent"
          :editable="enableEdit"
        />
        分钟
      </div>
    </div>
    <Divider />
    <div class="fourth">
      <div class="left">
        迟到多少分钟记为旷工
        <InputNumber
          :max="lateBeAbsent"
          :min="lateBeAbsent"
          v-model="lateBeAbsent"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle" />
      <div class="right" />
    </div>
    <Divider />
    <div class="eidt-button">
      <Modal :title="cardTitle" v-model="isShowCard" class="edit-card">
        <div class="modal-child">
          有效考勤记录大于多少分钟:
          <InputNumber :max="300" :min="1" v-model="effectRecord" />
        </div>
        <div class="modal-child">
          每月可申请补卡次数:
          <InputNumber :min="1" v-model="cardReplaceMent" />
        </div>
        <div class="modal-child">
          加班申请最小时长多少分钟:
          <InputNumber :min="1" v-model="minOTtime" />
        </div>
        <div class="modal-child">
          提前多少分钟下班不记早退:
          <InputNumber :min="1" v-model="lessThanLeaveEarly" />
        </div>
        <div class="modal-child">
          迟到多少分钟记为迟到:
          <InputNumber :min="1" v-model="moreThanBeLate" />
        </div>
        <div class="modal-child">
          早退多少分钟记为旷工:
          <InputNumber :min="1" v-model="leaveEarlyBeAbsent" />
        </div>
        <div class="modal-child">
          迟到多少分钟记为旷工:
          <InputNumber :min="1" v-model="lateBeAbsent" />
        </div>
      </Modal>
      <Button type="primary" @click.native="editRules">编辑</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttdanceRules',
  data: () => ({
    // 界面界面不可以直接编辑
    enableEdit: false,
    // 有效考勤记录间隔时间大于
    effectRecord: 1,
    // 每月可申请补卡次数
    cardReplaceMent: 1,
    // 加班申请最小时长
    minOTtime: 60,
    // 提前多少分钟下班不记早退
    lessThanLeaveEarly: 2,
    // 迟到多少分钟记为迟到
    moreThanBeLate: 20,
    // 早退多少分钟记为旷工
    leaveEarlyBeAbsent: 2,
    // 迟到多少分钟记为旷工
    lateBeAbsent: 50,
    /* 弹窗相关 */
    // 1. 是否显示
    isShowCard: false,
    // 2. 弹窗标题
    cardTitle: '编辑考勤规则'
  }),
  methods: {
    editRules() {
      this.isShowCard = true
    }
  }
}
</script>

<style lang="less" scoped>
.attdance-rules {
  height: 50vh;
  padding-top: 2.4rem;
  .first {
    background-color: #fff;
    height: 3rem;
    width: 100%;
    margin-top: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      flex: 1;
      text-align: center;
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  .second {
    background-color: #fff;
    height: 3rem;
    width: 100%;
    margin-top: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      flex: 1;
      text-align: center;
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  .third {
    background-color: #fff;
    height: 3rem;
    width: 100%;
    margin-top: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      flex: 1;
      text-align: center;
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  .fourth {
    background-color: #fff;
    height: 3rem;
    width: 100%;
    margin-top: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      flex: 1;
      text-align: center;
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  .eidt-button {
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    .modal-child {
      background-color: pink;
    }
  }
}
</style>
