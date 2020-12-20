<template>
  <div class="title">
    <h1>{{yearAndMonth}}月{{identify}}考勤明细</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    yearAndMonth: {
      type: String,
      default: ''
    },
    identify: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
