<template>
  <querymenu>
    <div slot="first" class="approve-status">
      <Button
        v-for="(item, key) in commentStatus"
        :key="key"
        :type="item.type"
        @click.native="handleCommentButtons(key)"
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
    <div slot="third" class="search-button">
      <search-button @click.native="searchComment" />
    </div>
  </querymenu>
</template>

<script>
import SelectMenu from '@common/select-menu/SelectMenu.vue'
import SearchButton from '@common/search-button/SearchButton.vue'
// ? common components
const Querymenu = () => import('@common/query-menu/Querymenu')

export default {
  name: 'WorkMenu',
  components: {
    Querymenu,
    SelectMenu,

    SearchButton
  },
  props: {
    commentStatus: {
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
    handleCommentButtons(currentIndex) {
      this.currentIndex = currentIndex
      this.commentStatus.forEach((item, index) =>
        index === currentIndex ? (item.type = 'error') : (item.type = 'default')
      )
      this.$emit('handleCommentButtons', this.currentIndex)
    },
    // ? select-functions
    selectClass(selectItem) {
      this.$emit('selectClass', selectItem)
    },
    // ? search-function
    searchComment() {
      this.$emit('searchComment')
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
