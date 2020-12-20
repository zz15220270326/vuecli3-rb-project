<template>
  <div class="search-student-name">
    <Input
      :placeholder="placeHolder"
      v-model="inputValue"
      search
      @on-blur="inputChange"
    />
  </div>
</template>

<script>
import { GET_SEARCH_STUDENT_NAME } from '@store/storeType'

export default {
  name: 'SearchStudentName',
  data: () => ({
    inputValue: ''
  }),
  props: {
    placeHolder: {
      type: String,
      default: '幼儿姓名'
    }
  },
  methods: {
    inputChange() {
      const studentName = this.inputValue
      this.$store.commit(GET_SEARCH_STUDENT_NAME, studentName)
    }
  }
}
</script>

<style lang="less" scoped></style>
