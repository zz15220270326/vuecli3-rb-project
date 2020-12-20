<template>
  <div class="attdance-rules">
    <div class="first">
      <div class="left">
        有效考勤记录大于
        <InputNumber
          :max="intervalMinutesBetweenAttendance"
          :min="intervalMinutesBetweenAttendance"
          v-model="intervalMinutesBetweenAttendance"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle" />
      <div class="right">
        每月可申请补卡次数
        <InputNumber
          :max="reissueCardLimit"
          :min="reissueCardLimit"
          v-model="reissueCardLimit"
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
          :max="overtimeMinLimit"
          :min="overtimeMinLimit"
          v-model="overtimeMinLimit"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle"></div>
      <div class="right">
        提前多少分钟下班不记早退
        <InputNumber
          :max="earlyLimit"
          :min="earlyLimit"
          v-model="earlyLimit"
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
          :max="lateLimit"
          :min="lateLimit"
          v-model="lateLimit"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle"></div>
      <div class="right">
        早退多少分钟记为旷工
        <InputNumber
          :max="absentEarlyLimit"
          :min="absentEarlyLimit"
          v-model="absentEarlyLimit"
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
          :max="absentLateLimit"
          :min="absentLateLimit"
          v-model="absentLateLimit"
          :editable="enableEdit"
        />
        分钟
      </div>
      <div class="middle" />
      <div class="right" />
    </div>
    <Divider />
    <div class="eidt-button">
      <Modal
        :title="cardTitle"
        v-model="isShowCard"
        class="edit-card"
        @on-ok="submitEdit"
        @on-cancel="cancelEdit"
      >
        <div class="modal-child">
          有效考勤记录大于多少分钟:
          <InputNumber
            :max="300"
            :min="0"
            v-model="submitIntervalMinutesBetweenAttendance"
          />
        </div>
        <div class="modal-child">
          每月可申请补卡次数:
          <InputNumber :min="0" v-model="submitReissueCardLimit" />
        </div>
        <div class="modal-child">
          加班申请最小时长多少分钟:
          <InputNumber :min="0" v-model="submitOvertimeMinLimit" />
        </div>
        <div class="modal-child">
          提前多少分钟下班不记早退:
          <InputNumber :min="0" v-model="submitEarlyLimit" />
        </div>
        <div class="modal-child">
          迟到多少分钟记为迟到:
          <InputNumber :min="0" v-model="submitLateLimit" />
        </div>
        <div class="modal-child">
          早退多少分钟记为旷工:
          <InputNumber :min="0" v-model="submitAbsentEarlyLimit" />
        </div>
        <div class="modal-child">
          迟到多少分钟记为旷工:
          <InputNumber :min="0" v-model="submitAbsentLateLimit" />
        </div>
      </Modal>
      <Button type="primary" @click.native="editRules">编辑</Button>
    </div>
  </div>
</template>

<script>
// ? 请求方法
// ? 1. 请求---获取考勤规则
import {
  getAttdanceRule,
  editAttdanceRule
} from '@request/attdance/attdanceRule'
export default {
  name: 'AttdanceRules',
  data: () => ({
    // ? 界面界面不可以直接编辑
    enableEdit: false,
    // ? 有效考勤记录间隔时间大于
    intervalMinutesBetweenAttendance: 0,
    submitIntervalMinutesBetweenAttendance: 0,
    // ? 每月可申请补卡次数
    reissueCardLimit: 0,
    submitReissueCardLimit: 0,
    // ? 加班申请最小时长
    overtimeMinLimit: 0,
    submitOvertimeMinLimit: 0,
    // ? 提前多少分钟下班不记早退
    earlyLimit: 0,
    submitEarlyLimit: 0,
    // ? 迟到多少分钟记为迟到
    lateLimit: 0,
    submitLateLimit: 0,
    // ? 早退多少分钟记为旷工
    absentEarlyLimit: 0,
    submitAbsentEarlyLimit: 0,
    // ? 迟到多少分钟记为旷工
    absentLateLimit: 0,
    submitAbsentLateLimit: 0,
    /* 弹窗相关 */
    // 1. 是否显示
    isShowCard: false,
    // 2. 弹窗标题
    cardTitle: '编辑考勤规则',
    ruleId: 0
  }),
  computed: {
    gardenId() {
      return this.$store.state.gardenId
    }
  },
  methods: {
    editRules() {
      this.isShowCard = true
    },
    /**
     * ! 异步请求的方法
     */
    async getAttdanceRuleList() {
      const result = await getAttdanceRule(this.gardenId)
      const { data } = result
      this.intervalMinutesBetweenAttendance =
        data.interval_minutes_between_attendance
      this.reissueCardLimit = data.reissue_card_limit
      this.overtimeMinLimit = data.overtime_min_limit
      this.earlyLimit = data.early_limit
      this.lateLimit = data.late_limit
      this.absentEarlyLimit = data.absent_early_limit
      this.absentLateLimit = data.absent_late_limit
      this.ruleId = data.id
    },
    async submitEdit() {
      const {
        ruleId,
        submitIntervalMinutesBetweenAttendance,
        submitReissueCardLimit,
        submitOvertimeMinLimit,
        submitEarlyLimit,
        submitLateLimit,
        submitAbsentEarlyLimit,
        submitAbsentLateLimit
      } = this
      const result = await editAttdanceRule(
        ruleId,
        submitIntervalMinutesBetweenAttendance,
        submitLateLimit,
        submitEarlyLimit,
        submitAbsentEarlyLimit,
        submitAbsentLateLimit,
        submitOvertimeMinLimit,
        submitReissueCardLimit
      )
      const { msg } = result
      switch (msg) {
        case 'Success':
          await this.getAttdanceRuleList()
          this.$Message.success('修改成功')
          this.submitIntervalMinutesBetweenAttendance = 0
          this.submitLateLimit = 0
          this.submitEarlyLimit = 0
          this.submitAbsentEarlyLimit = 0
          this.submitAbsentLateLimit = 0
          this.submitOvertimeMinLimit = 0
          this.submitReissueCardLimit = 0
          break
        case '无任何修改':
          this.$Message.info('您没有进行修改哦')
          break
        default:
          this.$Message.error('您输入的内容有误, 请重新编辑')
          break
      }
    },
    cancelEdit() {
      this.$Message.info('您取消了本次编辑')
      this.submitIntervalMinutesBetweenAttendance = 0
      this.submitLateLimit = 0
      this.submitEarlyLimit = 0
      this.submitAbsentEarlyLimit = 0
      this.submitAbsentLateLimit = 0
      this.submitOvertimeMinLimit = 0
      this.submitReissueCardLimit = 0
    }
  },
  created() {
    this.getAttdanceRuleList()
  }
}
</script>

<style lang="less" scoped>
.attdance-rules {
  color: #666;
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
