<template>
  <DatePicker
    v-model="date"
    placeholder="请输入出生日期"
    type="date"
    align="left"
    format="yyyy-MM-dd"
    @on-change="handleDate"
  />
</template>

<script>
// ? time-functions
import { dateToMs, transformToYMD } from '@utils/changeTime'
// ? store-types
import { GET_USER_BIRTH_DATE } from '@store/storeType'

export default {
  name: 'BirthDate',
  data: () => ({
    date: ''
  }),
  methods: {
    handleDate() {
      const birthDay = transformToYMD(dateToMs(this.date))
      this.$store.commit(GET_USER_BIRTH_DATE, birthDay)
    }
  }
}
</script>

<style lang="less" scoped></style>
