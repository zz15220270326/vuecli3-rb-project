<template>
  <div class="account-management">
    <div class="top-menu">
      <Button
        v-for="(item, key) of selectTabs"
        :key="key"
        :type="item.type"
        @click.native="switchPages(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div class="content" v-show="currentIndex === 0">
      <account-info />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <change-password />
    </div>
    <div class="content" v-show="currentIndex === 2">
      <change-phone-number />
    </div>
  </div>
</template>

<script>
// ? import components
const AccountInfo = () => import('./child-components/AccountInfo')
const ChangePassword = () => import('./child-components/ChangePassword')
const ChangePhoneNumber = () => import('./child-components/ChangePhoneNumber')

// ? import mixins

export default {
  name: 'AccountManagement',

  components: {
    AccountInfo,
    ChangePassword,
    ChangePhoneNumber
  },

  mixins: [],

  data: () => ({
    selectTabs: [
      {
        tag: '账户信息',
        type: 'primary'
      },
      {
        tag: '修改密码',
        type: 'default'
      },
      {
        tag: '修改手机号',
        type: 'default'
      }
    ],
    currentIndex: 0
  }),

  props: {},

  computed: {},

  methods: {
    switchPages(currentIndex) {
      this.currentIndex = currentIndex
      this.selectTabs.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.account-management {
  color: #666;
  .top-menu {
    padding: 0.8rem 0;
    background-color: #fff;
    .ivu-btn {
      margin: 0 0.8rem;
    }
  }
}
</style>
