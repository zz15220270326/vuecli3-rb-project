<template>
  <div class="detail-teach-plan">
    <div class="header">
      <div class="first-title">
        <h1>{{ firstTitle }}</h1>
      </div>
      <div class="second-title">{{ secondTitle }}</div>
    </div>
    <div class="body">
      <Table
        border
        :columns="titleList"
        :data="dataList"
        :span-method="handleSpan"
      ></Table>
    </div>
    <Divider />
    <div class="footer">
      <div class="span">点评内容</div>
      <div class="content">{{ evaluateMain }}</div>
      <div class="span">点评人</div>
      <div class="content">{{ evaluater }}</div>
      <div class="span">点评时间</div>
      <div class="content">{{ evaluateTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTeachPlan',
  props: {
    firstTitle: {
      type: String,
      default: 'modalTitle'
    },
    secondTitle: {
      type: String,
      default: 'time'
    },
    titleList: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    evaluateMain: {
      type: String,
      default: '还未点评'
    },
    evaluater: {
      type: String,
      default: '还未点评'
    },
    evaluateTime: {
      type: String,
      default: '还未点评'
    }
  },
  methods: {
    handleSpan({ rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return [2, 1]
      }
      if (rowIndex === 1 && columnIndex === 0) {
        return [0, 0]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-teach-plan {
  height: 30rem;
  overflow-y: scroll;
  width: 100%;
  .header {
    .first-title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .second-title {
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .body {
    background-color: skyblue;
    margin: 1.2rem 0;
  }
  .footer {
    margin-top: 1.2rem;
    height: 16rem;
    .span {
      color: #999;
    }
    .content {
      color: #333;
      font-size: 1rem;
      margin: 0.5rem 0;
    }
  }
}
</style>
