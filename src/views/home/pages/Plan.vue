<template>
  <div class="plan-content">
    <right-header>
      <div slot="left" class="left">计划</div>
      <div slot="right" class="right">
        <Button
          icon="ios-refresh-circle-outline"
          :loading="isLoading"
          type="primary"
          shape="circle"
          @click.native="handleLoading"
        />
      </div>
    </right-header>
    <router-view />
  </div>
</template>

<script>
// ? common / content components
import RightHeader from '../content/RightHeader'
export default {
  name: 'Plan',
  components: {
    // ? common / content components
    RightHeader
  },
  data: () => ({
    headerTab: [
      {
        name: '教学计划',
        type: 'primary'
      },
      {
        name: '学期计划',
        type: 'default'
      },
      {
        name: '整年计划',
        type: 'default'
      },
      {
        name: '其他计划',
        type: 'default'
      },
      {
        name: '工作总结',
        type: 'default'
      },
      {
        name: '工作汇报',
        type: 'default'
      }
    ],
    currentIndex: 0,
    isLoading: false
  }),
  methods: {
    switchTab(currentIndex) {
      this.headerTab.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
      this.currentIndex = currentIndex
    }
  },
  handleLoading() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.$Message.success('刷新页面成功')
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
.plan-content {
  margin-top: 1.2rem;
  background-color: #f6f6f6;
  height: 100vh;
  .header-tab {
    height: 3rem;
    background-color: #fff;
    margin: auto 0;
    padding-left: 1.2rem;
    .ivu-btn {
      margin: 0.5rem 0.6rem;
      padding: 0;
      border-radius: 0;
      width: 7rem;
      height: 2rem;
    }
  }
}
</style>
