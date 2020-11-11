<template>
  <!-- 用卡片实现 -->
  <Modal :title="cardDate" v-model="isShowCard" :mask-closable="disClosed">
    <Card v-cloak class="card">
      <Timeline>
        <div v-for="(item, index) in detailInfo" :key="index" class="content">
          <TimelineItem class="check-time">{{ item.checkTime }}</TimelineItem>
          <div class="remark">{{ item.remark }}</div>
          <div class="status">
            <Button :type="item.status === '正常' ? 'info' : 'warning'" round>
              {{ item.status }}
            </Button>
          </div>
        </div>
      </Timeline>
    </Card>
  </Modal>
</template>

<script>
export default {
  name: 'AttdanceReminder',
  data: () => ({
    disClosed: false
  }),
  props: {
    detailInfo: {
      type: Array,
      default: () => []
    },
    cardDate: {
      type: String,
      default: ''
    },
    isShowCard: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  .header {
    display: flex;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .check-time {
      font-weight: 600;
      font-size: 1.2rem;
      padding-top: 0.6rem;
      text-align: center;
    }
    .remark {
      margin-bottom: 1.8rem;
    }
    .status {
      margin-bottom: 1.8rem;
    }
    div {
      margin-top: 0.8rem;
      .el-button {
        opacity: 4 / 5;
      }
    }
  }
}
</style>
