<template>
  <div class="info">
    <Card :shadow="true">
      <div class="name">
        <div class="tag">幼儿名称:</div>
        <div class="content">{{ name }}</div>
      </div>
      <div class="sick-desc">
        <div class="tag">疾病症状:</div>
        <div class="content">{{ sinkDesc }}</div>
      </div>
      <div class="drug-name">
        <div class="tag">药物名称:</div>
        <div class="content">{{ drugName }}</div>
      </div>
      <div class="usage">
        <div class="tag">剂量与服法:</div>
        <div class="content">{{ usage }}</div>
      </div>
      <div class="drug-time">
        <div class="tag">用药时间:</div>
        <div class="content">{{ drugTime }}</div>
      </div>
      <div class="drug-circle">
        <div class="tag">用药周期:</div>
        <div class="content">{{ drugCircle }}</div>
      </div>
      <div class="note">
        <div class="tag">备注:</div>
        <div class="content">{{ note }}</div>
      </div>
      <div class="time">
        <div class="tag">时间:</div>
        <div class="content">{{ time }}</div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    name: {
      type: String,
      default: ''
    },
    sinkDesc: {
      type: String,
      default: ''
    },
    drugName: {
      type: String,
      default: ''
    },
    usage: {
      type: String,
      default: ''
    },
    drugTime: {
      type: String,
      default: ''
    },
    drugCircle: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  height: 28rem;
  width: 100%;
  .name {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .sick-desc {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .drug-name {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .usage {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .drug-time {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .drug-circle {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .note {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .time {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
}
</style>
