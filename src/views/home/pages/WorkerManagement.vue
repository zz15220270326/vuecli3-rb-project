<template>
  <div class="worker-management">
    <right-header>
      <div slot="left" class="left"></div>
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
const RightHeader = () => import('../content/RightHeader')

export default {
  name: 'WorkerManagement',
  components: {
    // ? common / content
    RightHeader
  },
  computed: {
    activeRoute() {
      return this.$route.path
    }
  },
  data: () => ({
    isLoading: false
  }),
  methods: {
    handleLoading() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$Message.success('刷新页面成功')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.worker-management {
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
