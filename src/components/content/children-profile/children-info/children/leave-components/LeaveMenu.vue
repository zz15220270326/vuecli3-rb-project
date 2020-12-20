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
        <Input
          placeholder="家长考勤卡号"
          v-model="inputCardNumber"
          @on-change="getInputCardNumber"
        />
      </div>
    </div>
    <div slot="third" class="table-op">
      <Button
        v-for="(item1, key1) in tableOperations"
        :key="key1"
        :type="item1.type"
        @click.native="handleCommon(key1)"
      >
        {{ item1.tag }}
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchStudentName = () => import('@common/search-input/SearchStudentName')

// ? mixins
import classInfoMixins from '@mixins/Common/classMixins'

export default {
  name: 'LeaveMenu',

  components: {
    Querymenu,
    SelectMenu,
    SearchStudentName
  },

  mixins: [classInfoMixins],

  data: () => ({
    inputCardNumber: '',
    tableOperations: [
      {
        tag: '查询',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      },
      {
        tag: '导出',
        type: 'success'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    getInputCardNumber() {
      this.$emit('getInputCardNumber', this.inputCardNumber)
    },
    handleCommon(currentIndex) {
      this.$emit('handleCommon', currentIndex)
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
