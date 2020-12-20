<template>
  <div class="record" v-if="recordList.length !== 0">
    <Table :columns="titleList" :data="recordList" />
  </div>
</template>

<script>
export default {
  name: 'Record',
  data: () => ({
    titleList: [
      {
        title: '服药时间',
        key: 'time',
        align: 'center'
      },
      {
        title: '服药老师',
        key: 'teacher',
        align: 'center'
      },
      {
        title: '备注',
        key: 'note',
        align: 'center'
      }
    ]
  }),
  props: {
    recordList: {
      type: Array,
      default: () => []
    }
  },
  methods: {},
  created() {},
  updated() {}
}
</script>

<style lang="less" scoped>
.record {
  height: 28rem;
  width: 100%;
}
</style>
