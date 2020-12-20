<template>
  <div class="garden-approve">
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
// ? common components
import RightHeader from '../content/RightHeader'
export default {
  name: 'GardenApprove',
  components: {
    RightHeader
  },
  data: () => ({
    isLoading: false
  }),
  methods: {
    handleLoading() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$Message.success('刷新成功')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.garden-approve {
  color: #666;
}
</style>
