<template>
  <DatePicker
    v-model="date"
    placeholder="请输入入园日期"
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
import { GET_USER_ENTRY_TIME } from '@store/storeType'
export default {
  name: 'EntryDate',
  data: () => ({
    date: ''
  }),
  methods: {
    handleDate() {
      const entryTime = transformToYMD(dateToMs(this.date))
      this.$store.commit(GET_USER_ENTRY_TIME, entryTime)
    }
  }
}
</script>

<style lang="less" scoped></style>
