<template>
  <TimePicker
    v-model="pickTime"
    format="HH:mm"
    type="time"
    placeholder="Select time"
    @on-change="handleChangeTime"
  />
</template>

<script>
export default {
  name: 'ExactTime',
  data: () => ({
    pickTime: ''
  }),
  methods: {
    handleChangeTime() {
      this.$emit('handleChangeTime', this.pickTime)
    }
  }
}
</script>

<style lang="less" scoped></style>
