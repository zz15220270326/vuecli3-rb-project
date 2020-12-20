<template>
  <div class="search-teacher-name">
    <Input
      :placeholder="placeHolder"
      v-model="inputValue"
      search
      @on-blur="inputChange"
    />
    <!-- @on-enter="inputChange" -->
  </div>
</template>

<script>
import { GET_TEACHER_NAME } from '@store/storeType'

export default {
  name: 'SearchTeacherName',
  data: () => ({
    inputValue: ''
  }),
  props: {
    placeHolder: {
      type: String,
      default: '请输入教师姓名'
    }
  },
  methods: {
    inputChange() {
      // get teacher_name
      const teacherName = this.inputValue
      this.$store.commit(GET_TEACHER_NAME, teacherName)
    }
  }
}
</script>

<style lang="less" scoped></style>
