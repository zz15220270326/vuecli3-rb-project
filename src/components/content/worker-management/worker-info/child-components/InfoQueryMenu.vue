<template>
  <querymenu>
    <div slot="first" class="select-class">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="handleSelectClass"
      />
    </div>
    <div slot="second" class="inputs">
      <search-teacher-name :placeHolder="placeHolder" />
      <search-attdance-card />
    </div>
    <div slot="third" class="query-and-delete">
      <Button
        v-for="(item, key) in commonOperations"
        :key="key"
        :type="item.type"
        @click.native="handleCommonOperations(item.type)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="fourth" class="other-operations">
      <Button
        v-for="(item, key) in specialOperations"
        :key="key"
        :type="item.type"
        @click.native="handleSpecialOperations(item.tag)"
      >
        <div v-if="key !== 1">
          <span>{{ item.tag }}</span>
          <Icon :type="item.icon" />
        </div>
        <div v-else>
          <Dropdown>
            <span href="javascript:void(0)">
              模板导入
              <Icon type="ios-arrow-down"></Icon>
            </span>
            <DropdownMenu slot="list">
              <DropdownItem>下载教师导入模板</DropdownItem>
              <DropdownItem>教师模板导入</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? common components
import Querymenu from '@common/query-menu/Querymenu'
import SelectMenu from '@common/select-menu/SelectMenu'
import SearchTeacherName from '@common/search-input/SearchTeacherName'
import SearchAttdanceCard from '@common/search-input/SearchAttdanceCard'
export default {
  name: 'InfoQueryMenu',
  components: {
    Querymenu,
    SelectMenu,
    SearchTeacherName,
    SearchAttdanceCard
  },
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    classTitle: {
      type: String,
      default: ''
    },
    classList: {
      type: Array,
      default: () => []
    },
    commonOperations: {
      type: Array,
      default: () => []
    },
    specialOperations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelectClass(selectItem) {
      this.$emit('handleSelectClass', selectItem)
    },
    handleCommonOperations(currentType) {
      this.$emit('handleCommonOperations', currentType)
    },
    handleSpecialOperations(tag) {
      this.$emit('handleSpecialOperations', tag)
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  width: 100%;
  margin: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .select-class {
    flex: 1;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inputs {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .search-teacher-name {
      margin-right: 0.6rem;
    }
    .search-attdance-card {
      margin-left: 0.6rem;
    }
  }
  .query-and-delete {
    flex: 5;
    .ivu-btn {
      width: 5rem;
      margin: 0.5rem;
    }
  }
  .other-operations {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    .ivu-btn {
      margin: 0 0.6rem;
    }
  }
}
</style>
