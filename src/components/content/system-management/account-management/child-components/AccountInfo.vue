<template>
  <div class="account-info">
    <div class="account-info-menu">
      <Button
        v-for="(item, key) of switchTab"
        :key="key"
        :type="item.type"
        @click.native="selectTabs(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div class="account-info-content" v-show="currentIndex === 0">
      <base-info />
    </div>
    <div class="account-info-content" v-show="currentIndex === 1">
      <other-info />
    </div>
  </div>
</template>

<script>
// ? import components
const BaseInfo = () => import('./account-info/BaseInfo')
const OtherInfo = () => import('./account-info/OtherInfo')
// ? import mixins

export default {
  name: 'AccountInfo',

  components: {
    BaseInfo,
    OtherInfo
  },

  mixins: [],

  data: () => ({
    switchTab: [
      {
        tag: '基本信息',
        type: 'info'
      },
      {
        tag: '其他信息',
        type: 'default'
      }
    ],
    currentIndex: 0
  }),

  props: {},

  computed: {},

  methods: {
    selectTabs(currentIndex) {
      this.currentIndex = currentIndex
      this.switchTab.forEach((item, index) => {
        index === currentIndex ? (item.type = 'info') : (item.type = 'default')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.account-info {
  .account-info-menu {
    padding: 0.6rem 0;
    .ivu-btn {
      margin: 0 0.6rem;
    }
  }
}
</style>
