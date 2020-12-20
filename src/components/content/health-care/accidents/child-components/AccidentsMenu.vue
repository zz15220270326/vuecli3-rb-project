<template>
  <querymenu>
    <div slot="first" class="input">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <div class="serach-input">
        <search-user />
      </div>
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
    <div slot="third" class="add">
      <Button type="warning" @click="handleAdd">
        <span>新建突发状况</span>
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchUser = () => import('@common/search-input/SearchUser')

export default {
  name: 'AccidentsMenu',
  components: {
    Querymenu,
    SelectMenu,
    SearchUser
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
    selectClass(item) {
      this.$emit('selectClass', item)
    },
    handleOperations(handleIndex) {
      this.$emit('handleOperations', handleIndex)
    },
    handleAdd() {
      this.$emit('handleAdd')
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
  .input {
    flex: 1.5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .select-menu {
      flex: 1;
      text-align: center;
    }
    .search-input {
      flex: 1;
      input {
        margin: 0 0.6rem;
      }
    }
  }
  .operations {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ivu-btn {
      width: 5rem;
      margin: 0 0.5rem;
    }
  }
  .add {
    flex: 3;
    text-align: right;
    margin-right: 2rem;
  }
}
</style>
