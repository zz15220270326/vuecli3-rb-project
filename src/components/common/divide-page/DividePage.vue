<template>
  <div class="divide-page">
    <Page :total="totalPage" show-sizer show-elevator show-total />
  </div>
</template>

<script>
export default {
  name: 'DividePage',
  props: {
    totalPage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
.divide-page {
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
