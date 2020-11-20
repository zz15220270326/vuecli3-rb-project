<template>
  <DatePicker
    class="month-picker"
    type="month"
    :placeholder="defaultMonth"
    v-model="selectMonth"
    align="right"
    @on-change="selectNewMonth"
  />
  <!-- <Button class="query-button" type="primary" @click.native="selectNewMonth">
      确认查询
    </Button> -->
  <!-- <el-button type="danger" plain onClick="">清空内容</el-button> -->
</template>

<script>
import { dateToMs, transformToYM, transformToYMD } from '@utils/changeTime'

export default {
  name: 'SelectMonth',
  data: () => ({
    selectMonth: '',
    defaultMonth: '选择月份'
  }),
  methods: {
    selectNewMonth() {
      if (this.selectMonth === null || this.selectMonth === '') {
        console.log('不能为空')
      } else {
        const timestamp = dateToMs(this.selectMonth)
        const ymd = transformToYMD(timestamp)
        const ymdArr = ymd.split('-')
        const selectMonth = ymdArr[0] + '-' + ymdArr[1]
        this.$store.commit('getSelectMonth', selectMonth)
        this.$emit('selectMonth', selectMonth)
      }
    },
    getYM(standardTime) {
      // 获取当前的年和月
      const datestamp = dateToMs(standardTime)
      const yearAndMonth = transformToYM(datestamp).toString()
      // console.log(yearAndMonth)
      // 把'年-月'转化成数组
      this.defaultMonth = yearAndMonth
    }
  },
  // life-hooks
  created() {
    this.getYM(Date())
  }
}
</script>

<style lang="less" scoped>
.month-picker {
  margin: 1.2rem;
}
</style>
