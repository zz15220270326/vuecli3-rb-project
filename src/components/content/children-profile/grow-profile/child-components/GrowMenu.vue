<template>
  <querymenu>
    <div slot="first" class="select">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
    </div>
    <div slot="second" class="input">
      <search-student-name />
      <div class="card-number">
        <select-month />
      </div>
    </div>
    <div slot="third" class="table-op">
      <Button
        v-for="(item, key) in tableOperations"
        :key="key"
        :type="item.type"
        @click.native="handleCommon(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchStudentName = () => import('@common/search-input/SearchStudentName')
const SelectMonth = () => import('@common/select-month/SelectMonth')
// ? import mixins
import classInfoMixins from '@mixins/Common/classMixins'

export default {
  name: 'GrowMenu',

  components: {
    Querymenu,
    SelectMenu,
    SearchStudentName,
    SelectMonth
  },

  mixins: [classInfoMixins],

  data: () => ({
    tableOperations: [
      {
        tag: '查询',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    handleCommon(key) {
      this.$emit('handleCommon', key)
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  margin: 0.5rem 0;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .select {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .table-op {
    flex: 3;
    .ivu-btn {
      width: 5.4rem;
      margin: 0 0.8rem;
    }
  }
  .other-op {
    flex: 3;
    text-align: right;
    margin-right: 1.2rem;
    .ivu-btn {
      width: 6.6rem;
      margin: 0 0.8rem;
    }
  }
}
</style>
