<template>
  <div class="class-attdance-content">
    <Table border :columns="titleList" :data="dataList" />
  </div>
</template>

<script>
export default {
  name: 'ClassAttdanceContent',

  components: {},

  mixins: [],

  data: () => ({}),

  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.class-attdance-content {
  width: 100%;
  margin: 1.6rem 0.2rem;
  .full_flex();
}
</style>
