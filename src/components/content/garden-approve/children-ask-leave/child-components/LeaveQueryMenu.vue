<template>
  <querymenu>
    <div slot="first" class="approve-status">
      <Button
        v-for="(item, key) in approveStatus"
        :key="key"
        :type="item.type"
        @click.native="checkApproveStatus(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="second" class="select-class">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
    </div>
    <div slot="third" class="input-child">
      <search-student-name />
    </div>
    <div slot="third" class="search-button">
      <search-button @click.native="searchStudentName" />
    </div>
  </querymenu>
</template>

<script>
import SelectMenu from '@common/select-menu/SelectMenu.vue'
import SearchButton from '@common/search-button/SearchButton.vue'
// ? common components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SearchStudentName = () => import('@common/search-input/SearchStudentName')

export default {
  name: 'LeaveQuerymenu',
  components: {
    Querymenu,
    SelectMenu,
    SearchStudentName,
    SearchButton
  },
  props: {
    approveStatus: {
      type: Array,
      default: () => []
    },
    classTitle: {
      type: String,
      default: ''
    },
    classList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  methods: {
    checkApproveStatus(currentIndex) {
      this.currentIndex = currentIndex
      this.approveStatus.forEach((item, index) =>
        index === currentIndex ? (item.type = 'error') : (item.type = 'default')
      )
      this.$emit('checkApproveStatus', this.currentIndex)
    },
    selectClass(selectItem) {
      this.$emit('selectClass', selectItem)
    },
    searchStudentName() {
      this.$emit('searchStudentName')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  margin: 1.2rem 0;
  padding: 0.8rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .approve-status {
    flex: 1.2;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .ivu-btn {
      width: 5.6rem;
    }
  }
  .select-class {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-child {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-button {
    flex: 5;
  }
}
</style>
