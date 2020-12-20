<template>
  <querymenu>
    <div slot="first" class="select">
      <select-menu
        :listItems="classList"
        :listTitle="classTitle"
        @handleSelect="selectClass"
      />
    </div>
    <div slot="second" class="operations">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleOperations(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="third" class="export">
      <Button type="warning" @click.native="handleExport">导出</Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')

export default {
  name: 'DRMenu',
  components: {
    Querymenu,
    SelectMenu
  },
  props: {
    classTitle: {
      type: String,
      default: ''
    },
    classList: {
      type: Array,
      default: () => []
    },
    operations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectClass(selectItem) {
      this.$emit('selectClass', selectItem)
    },
    handleOperations(handleIndex) {
      this.$emit('handleOperations', handleIndex)
    },
    handleExport() {
      this.$emit('handleExport')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .select {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .operations {
    flex: 2;
    .ivu-btn {
      width: 5rem;
      margin: 0 0.5rem;
    }
  }
  .export {
    flex: 5;
    text-align: right;
    .ivu-btn {
      width: 6rem;
      margin-right: 2rem;
    }
  }
}
</style>
