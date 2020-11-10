<template>
<div class="search-input">
  <Input
      placeholder="请输入教师姓名"
      v-model="inputValue"
      search
      @on-blur="inputChange"
  />
<!-- @on-enter="inputChange" -->
</div>
</template>

<script>
import {GET_TEACHER_NAME} from '@/store/storeType'

export default {
  name: 'SearchInput',
  data: () => ({
    inputValue: ''
  }),
  methods: {
    inputChange () {
      // get teacher_name
      const teacherName = this.inputValue
      this.$store.commit(GET_TEACHER_NAME, teacherName)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
