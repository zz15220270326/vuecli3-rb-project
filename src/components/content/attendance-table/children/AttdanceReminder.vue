<template>
<!-- 用卡片实现 -->
<div class="attdance-reminder">
  <Card class="card">
  <div slot="title">
    <span>{{cardDate}}</span>
    <Button style="float: right;" type="error" @click.native="closeCard"  icon="el-icon-delete">关闭</Button>
  </div>
  <div v-for="(item, index) in detailInfo" :key="index" class="content">
    <div class="check-time">{{item.checkTime}}</div>
    <div class="remark">{{item.remark}}</div>
    <div class="status">
      <Button :type="item.status === '正常' ? 'info' : 'warning'" round>{{item.status}}</Button>
    </div>
  </div>
</Card>
</div>
</template>

<script>
export default {
  name: 'AttdanceReminder',
  // data: () => ({
  //   drawer: false
  // }),
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
    closeCard () {
      this.$emit('closeCard')
    }
  }
}
</script>

<style lang="less" scoped>
.attdance-reminder {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 25rem;
    .header {
      display: flex;
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        margin-top: 0.8rem;
        .el-button {
          opacity: 4 / 5;
        }
      }
    }
  }
}
</style>
