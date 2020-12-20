<template>
  <div class="children-info">
    <div class="title">
      <Button
        v-for="(item, key) in selectButtons"
        :key="key"
        :type="item.type"
        @click.native="handleClick(key)"
      >
        <span>{{ item.tag }}</span>
      </Button>
    </div>
    <div class="content" v-show="currentIndex === 0">
      <inside-children />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <leave-children />
    </div>
  </div>
</template>

<script>
// ? import child-components
const InsideChildren = () => import('./children/InsideChildren')
const LeaveChildren = () => import('./children/LeaveChildren')

export default {
  name: 'ChildrenInfo',
  components: {
    InsideChildren,
    LeaveChildren
  },
  data: () => ({
    selectButtons: [
      {
        tag: '在园幼儿',
        type: 'primary'
      },
      {
        tag: '离园幼儿',
        type: 'default'
      }
    ],
    currentIndex: 0
  }),
  methods: {
    handleClick(currentIndex) {
      this.currentIndex = currentIndex
      this.selectButtons.forEach((item, index) =>
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      )
    }
  }
}
</script>

<style lang="less" scoped>
.children-info {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  color: #666;
  .title {
    padding: 0.8rem 0;
    background-color: #fff;
    .ivu-btn {
      margin: 0 0.8rem;
      width: 6rem;
    }
  }
}
</style>
