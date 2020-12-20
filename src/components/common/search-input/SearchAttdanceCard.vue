<template>
  <div class="search-teacher-name">
    <Input
      :placeholder="placeHolder"
      v-model="inputValue"
      search
      @on-blur="inputChange"
    />
  </div>
</template>

<script>
import { GET_ATTDANCE_NUMBER } from '@store/storeType'

export default {
  name: 'SearchAttdanceCard',
  data: () => ({
    inputValue: ''
  }),
  props: {
    placeHolder: {
      type: String,
      default: '考勤卡号'
    }
  },
  methods: {
    inputChange() {
      const attdanceNumber = this.inputValue
      this.$store.dispatch(GET_ATTDANCE_NUMBER, attdanceNumber)
    }
  }
}
</script>

<style lang="less" scoped></style>
