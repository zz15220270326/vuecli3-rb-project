<template>
  <querymenu>
    <div slot="first" class="select-class">
      <select-menu
        :listTitle="defaultTitle"
        :listItems="selectMenu"
        @handleSelect="handleSelectTeacher"
      />
    </div>
    <div slot="second" class="inputs">
      <search-teacher-name :placeHolder="placeHolder" />
    </div>
    <div slot="third" class="query-and-delete">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleOperations(item.type)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="fourth" class="other-operations">
      <Button type="warning" @click.native="addSpecial">
        <span>添加风采</span>
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? common components
import Querymenu from '@common/query-menu/Querymenu'
import SelectMenu from '@common/select-menu/SelectMenu'
import SearchTeacherName from '@common/search-input/SearchTeacherName'
export default {
  name: 'TeacherQueryMenu',
  components: {
    Querymenu,
    SelectMenu,
    SearchTeacherName
  },
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    defaultTitle: {
      type: String,
      default: ''
    },
    selectMenu: {
      type: Array,
      default: () => []
    },
    operations: {
      type: Array,
      default: () => []
    },
    specialOperations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelectTeacher(selectItem) {
      this.$emit('handleSelectTeacher', selectItem)
    },
    handleOperations(currentType) {
      this.$emit('handleOperations', currentType)
    },
    addSpecial() {
      this.$emit('addSpecial')
    }
  }
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_evenly() {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.query-menu {
  margin: 1.2rem 0;
  .full_flex();
  .select-class {
    flex: 1;
    margin: 0 1rem;
    .flex();
  }
  .inputs {
    flex: 3;
    .flex_evenly();
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
      width: 6rem;
      margin: 0.5rem;
    }
  }
  .other-operations {
    flex: 3;
    .flex();
    .ivu-btn {
      margin: 0 0.6rem;
      width: 6rem;
    }
  }
}
</style>
