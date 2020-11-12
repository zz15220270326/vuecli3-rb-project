<template>
  <!-- 用卡片实现 -->
  <Modal :title="cardDate" v-model="isShow" :mask-closable="disClosed">
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
    // ? 当弹窗后用户要关闭弹窗后才能进行其他操作
    disClosed: false,
    // ? 是否显示弹窗(这里由store控制弹窗的显示)
    isShow: false
  }),
  props: {
    detailInfo: {
      type: Array,
      default: () => []
    },
    cardDate: {
      type: String,
      default: ''
    }
  },
  methods: {
    getIsShow() {
      this.isShow = this.$store.state.isShow
    }
  },
  beforeUpdate() {
    this.getIsShow()
  }
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
