<template>
  <div class="class-plan">
    <div class="title">
      <Button
        v-for="(item, index) in selectPlan"
        :key="index"
        :type="item.type"
        @click.native="handleSelectPlan(index)"
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
// ? child-components
const TeachPlan = () => import('./child-components/TeachPlan')
const OtherPlan = () => import('./child-components/OtherPlan')

export default {
  name: 'ClassPlan',
  components: {
    OtherPlan,
    TeachPlan
  },
  data() {
    return {
      selectPlan: [
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
    }
  },
  methods: {
    handleSelectPlan(currentIndex) {
      this.currentIndex = currentIndex
      this.selectPlan.forEach((item, index) =>
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      )
    }
  }
}
</script>

<style lang="less" scoped>
.class-plan {
  .title {
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 0 0.8rem;
    .ivu-btn {
      margin: 0 0.5rem;
      width: 6rem;
    }
  }
}
</style>
