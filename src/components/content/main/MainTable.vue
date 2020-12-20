<template>
  <div class="main-table">
    <Table
      border
      :columns="titleList"
      :data="dataList"
      :loading="tableIsLoading"
    />
  </div>
</template>

<script>
export default {
  name: 'MainTable',

  components: {},

  data: () => ({}),

  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    tableIsLoading: {
      type: Boolean,
      default: false
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped></style>
