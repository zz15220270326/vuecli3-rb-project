<template>
  <div class="to-comment">
    <Card>
      <div slot="title" class="title">
        <div class="big-title">
          <h1>{{ bigTitle }}</h1>
        </div>
        <div class="small-title">{{ smallTitle }}</div>
      </div>
      <div class="content">
        <div class="top">{{ commentContent }}</div>
        <div class="bottom">
          <Tag color="green">点评意见</Tag>
          <Input v-model="inputComment" type="textarea" :rows="4" />
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ToComment',
  data: () => ({
    inputComment: ''
  }),
  props: {
    bigTitle: {
      type: String,
      default: ''
    },
    smallTitle: {
      type: String,
      default: ''
    },
    commentContent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.to-comment {
  height: 28rem;
  .ivu-card-head {
    .big-title {
      margin: 0.8rem 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .small-title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }
  }
  .content {
    width: 100%;
    .top {
      margin: 0.8rem 0;
    }
    .bottom {
      color: #888;
    }
  }
}
</style>
