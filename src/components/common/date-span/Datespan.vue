<template>
<DatePicker
  v-model="dateSpan"
  type="daterange"
  align="left"
  format="yyyy-MM-dd"
  @on-change="handleDate"
/>
<!-- :picker-options="pickerOptions" -->
</template>

<script>
// time-functions
import {dateToMs, transformToYMD} from '@utils/changeTime'
// store-types
import {GET_START_TIME, GET_END_TIME} from '@store/storeType'

export default {
  name: 'Datespan',
  data: () => ({
    dateSpan: ''
  }),
  methods: {
    handleDate () {
      // 得到的是一个数组, 先转化成时间戳, 再将时间戳转化为年月日
      if (this.dateSpan.length === 2) {
        const startTime = transformToYMD(dateToMs(this.dateSpan[0]))
        const endTime = transformToYMD(dateToMs(this.dateSpan[1]))
        console.log(startTime, endTime)
        this.$store.commit(GET_START_TIME, startTime)
        this.$store.commit(GET_END_TIME, endTime)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.date-span {
  margin-left: 1.2rem;
}
</style>
