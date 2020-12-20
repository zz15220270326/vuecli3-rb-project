<template>
  <div class="search-user">
    <Input
      :placeholder="placeHolder"
      v-model="inputValue"
      search
      @on-blur="inputChange"
    />
  </div>
</template>

<script>
import { GET_SEARCH_USER } from '@store/storeType'

export default {
  name: 'SearchUser',
  data: () => ({
    inputValue: ''
  }),
  props: {
    placeHolder: {
      type: String,
      default: '名称'
    }
  },
  methods: {
    inputChange() {
      const searchUsername = this.inputValue
      this.$store.commit(GET_SEARCH_USER, searchUsername)
    }
  }
}
</script>

<style lang="less" scoped></style>
