<template>
  <div class="face-testing-record">
    <div class="top">
      <Button
        v-for="item in selectTabs"
        :key="item.key"
        :type="item.type"
        @click.native="handleSelect(item.key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div class="content" v-show="currentIndex === 0">
      <children-test />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <worker-test />
    </div>
  </div>
</template>

<script>
// ? import child-components
const ChildrenTest = () => import('./children/ChildrenTest')
const WorkerTest = () => import('./worker/WorkerTest')

export default {
  name: 'FaceTestingRecord',

  components: {
    ChildrenTest,
    WorkerTest
  },

  mixins: [],

  data: () => ({
    selectTabs: [
      {
        tag: '幼儿测温',
        type: 'primary',
        key: 0
      },
      {
        tag: '职工测温',
        type: 'default',
        key: 1
      }
    ],
    currentIndex: 0
  }),

  props: {},

  computed: {},

  methods: {
    handleSelect(currentIndex) {
      this.currentIndex = currentIndex
      this.selectTabs.forEach(item =>
        item.key === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      )
    }
  }
}
</script>

<style lang="less" scoped>
.face-testing-record {
  color: #666;
  background-color: #fff;
  .top {
    background-color: #f6f6f6;
    width: 100%;
    padding: 1.2rem 0;
    .ivu-btn {
      width: 6rem;
      margin: 0 1rem;
    }
  }
  .content {
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
}
</style>
