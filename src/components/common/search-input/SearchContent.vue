<template>
  <div class="search">
    <Input
      :placeholder="searchPlaceholder"
      v-model="searchContent"
      search
      @on-blur="inputChange"
    />
  </div>
</template>

<script>
// ? GET_SEARCH_CONTENT
import { GET_SEARCH_CONTENT } from '@store/storeType'

export default {
  name: 'SearchContent',
  props: {
    searchPlaceholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data: () => ({
    searchContent: ''
  }),
  methods: {
    inputChange() {
      // ? input to change searchContent in store
      const searchContent = this.searchContent
      this.$store.commit(GET_SEARCH_CONTENT, searchContent)
    }
  }
}
</script>

<style lang="less" scoped></style>
