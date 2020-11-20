<template>
  <div class="header">
    <slot name="left" class="left"></slot>
    <slot name="right" class="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'RightHeader'
}
</script>

<style lang="less" scoped>
.header {
  background-color: #f6f6f6;
  font-size: 18px;
  height: 3rem;
  padding: 0.2rem 0.4rem;
  .left {
    display: inline-block;
    left: 0.4rem;
    margin-top: 0.6rem;
    color: #36adea;
  }
  .right {
    margin-right: 1.2rem;
    .el-icon-loading {
      font-size: 1rem;
    }
  }
}
</style>
