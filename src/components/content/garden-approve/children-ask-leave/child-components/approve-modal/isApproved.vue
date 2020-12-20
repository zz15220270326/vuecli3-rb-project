<template>
  <div class="is-approved">
    <div class="left">
      <Card :bordered="false">
        <div class="title" slot="title">
          <Avatar
            src="http://t.static.langlangyun.com/Icon/084b6fbb10729ed4da8c3d3f5a3ae7c9/ab7e4e5b51a04436f082eb06c79924b7"
            size="large"
          />
          <h2>{{ studentName }}家长</h2>
          <Tag type="border" closable color="warning">{{ currentClass }}</Tag>
        </div>
        <div class="content">
          <div class="holiday-child">
            <div class="title">请假幼儿</div>
            <div class="content">{{ studentName }}</div>
          </div>
          <div class="holiday-span">
            <div class="title">请假时间</div>
            <div class="content">
              <div>开始: {{ startTime }}</div>
              <div>结束: {{ endTime }}</div>
            </div>
          </div>
          <div class="holiday-type">
            <div class="title">请假类型</div>
            <div class="content">{{ holidayType }}</div>
          </div>
          <div class="ask-content">
            <div class="title">请假内容</div>
            <div class="content">{{ askContent }}</div>
          </div>
          <div class="fund-time">
            <div class="title">创建时间</div>
            <div class="content">{{ fundTime }}</div>
          </div>
        </div>
      </Card>
    </div>
    <Divider type="vertical" />
    <div class="right">
      <Card>
        <div class="title" slot="title">
          <Tag color="green" size="large">已通过</Tag>
        </div>
        <div class="content">
          <div class="checked">
            <div class="title">审批</div>
            <div class="content">同意</div>
          </div>
          <div class="checked-teacher">
            <div class="title">审批教师</div>
            <div class="content">{{ checkedTeacher }}</div>
          </div>
          <div class="checked-time">
            <div class="title">审批时间</div>
            <div class="content">{{ checkedTime }}</div>
          </div>
          <div class="note">
            <div class="title">备注</div>
            <div class="content">{{ note }}</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'isApproved',
  props: {
    studentName: {
      type: String,
      default: ''
    },
    currentClass: {
      type: String,
      default: ''
    },
    holidayType: {
      type: String,
      default: ''
    },
    startTime: {
      type: String,
      default: ''
    },
    endTime: {
      type: String,
      default: ''
    },
    askContent: {
      type: String,
      default: ''
    },
    fundTime: {
      type: String,
      default: ''
    },
    // ? right
    checkedTeacher: {
      type: String,
      default: ''
    },
    checkedTime: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.is-approved {
  height: 28rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    flex: 1;
    width: 100%;
    height: 100%;
    .ivu-card-head {
      .title {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }
    .content {
      .holiday-child {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #0094ff;
        }
      }
      .holiday-span {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #0094ff;
        }
      }
      .holiday-type {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #0094ff;
        }
      }
      .ask-content {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #0094ff;
        }
      }
      .fund-time {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #0094ff;
        }
      }
    }
  }
  .right {
    flex: 1;
    width: 100%;
    height: 100%;
    .ivu-card-head {
      .title {
        text-align: right;
      }
    }
    .content {
      .checked {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #ff9400;
        }
      }
      .checked-teacher {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #ff9400;
        }
      }
      .checked-time {
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #ff9400;
        }
      }
      .note {
        margin-bottom: 4.3rem;
        .title {
          font-size: 1rem;
          font-weight: 540;
        }
        .content {
          margin: 0.6rem 0;
          font-size: 0.92rem;
          color: #ff9400;
        }
      }
    }
  }
}
</style>
