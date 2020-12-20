<template>
  <!-- 班级计划 -->
  <div class="class-plan">
    <div class="title">
      <Button
        v-for="(item, key) in children"
        :key="key"
        :type="item.type"
        @click.native="selectChild(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div class="content" v-show="currentIndex === 0">
      <teach-plan />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <other-plan />
    </div>
  </div>
</template>

<script>
// ? import components
const TeachPlan = () => import('./child-components/TeachPlan')
const OtherPlan = () => import('./child-components/OtherPlan')

export default {
  name: 'ClassPlan',
  components: {
    TeachPlan,
    OtherPlan
  },
  data: () => ({
    children: [
      {
        tag: '教学计划',
        type: 'primary'
      },
      {
        tag: '其他计划',
        type: 'default'
      }
    ],
    currentIndex: 0
  }),
  methods: {
    selectChild(currentIndex) {
      this.currentIndex = currentIndex
      this.children.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.class-plan {
  background-color: #fff;
  height: 100%;
  .title {
    padding: 0.8rem;
    width: 100%;
    background-color: #f6f6f6;
    .ivu-btn {
      width: 6rem;
      margin: 0 0.75rem;
    }
  }
}
</style>
