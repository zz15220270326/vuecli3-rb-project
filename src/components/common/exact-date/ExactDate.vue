<template>
  <DatePicker
    class="exact-date"
    type="date"
    :placeholder="exactDateHolder"
    v-model="pickDate"
    @on-change="handleChangeDate"
  />
</template>

<script>
// ? time-functions
import { dateToMs, transformTimeStamp } from '@utils/changeTime'

export default {
  name: 'ExactDate',
  data: () => ({
    pickDate: ''
  }),
  props: {
    exactDateHolder: {
      type: String,
      default: '请选择日期'
    }
  },
  methods: {
    handleChangeDate() {
      this.$emit(
        'handleChangeDate',
        // transformTimeStamp(dateToMs(this.pickDate))
        transformTimeStamp(dateToMs(this.pickDate))
      )
    }
  }
}
</script>

<style lang="less" scoped>
.exact-date {
  color: #666;
}
</style>
