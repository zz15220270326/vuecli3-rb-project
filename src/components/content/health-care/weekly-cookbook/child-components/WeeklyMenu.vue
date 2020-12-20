<template>
  <div class="weekly-menu">
    <querymenu>
      <div slot="first" class="select">
        <select-menu
          :listTitle="yearTitle"
          :listItems="yearList"
          @handleSelect="selectYear"
        />
        <select-menu
          :listTitle="semesterTitle"
          :listItems="semesterList"
          @handleSelect="selectSemester"
        />
        <select-menu
          :listTitle="weekTitle"
          :listItems="weekList"
          @handleSelect="selectWeek"
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
      <div slot="third" class="add">
        <Button type="warning" @click.native="createMenu">
          新建食谱
        </Button>
      </div>
    </querymenu>
  </div>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
import SelectMenu from '@common/select-menu/SelectMenu.vue'

export default {
  name: 'WeeklyMenu',
  components: {
    Querymenu,
    SelectMenu
  },
  props: {
    // ? menu-data
    yearTitle: {
      type: String,
      default: ''
    },
    yearList: {
      type: Array,
      default: () => []
    },
    semesterTitle: {
      type: String,
      default: ''
    },
    semesterList: {
      type: Array,
      default: () => []
    },
    weekTitle: {
      type: String,
      default: ''
    },
    weekList: {
      type: Array,
      default: () => []
    },
    operations: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectYear(item) {
      this.$emit('selectYear', item)
    },
    selectSemester(item) {
      this.$emit('selectSemester', item)
    },
    selectWeek(item) {
      this.$emit('selectWeek', item)
    },
    // ? operations-event
    handleOperations(key) {
      this.$emit('handleOperations', key)
    },
    createMenu() {
      this.$emit('createMenu')
    }
  }
}
</script>

<style lang="less" scoped>
.weekly-menu {
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
      flex: 1;
      .ivu-btn {
        width: 5rem;
        margin: 0 0.5rem;
      }
    }
    .add {
      flex: 2;
      text-align: right;
      .ivu-btn {
        width: 6rem;
        margin-right: 1.2rem;
      }
    }
  }
}
</style>
