<template>
  <Row class="home-wrapper">
    <Col :xs="4" :sm="4" :md="4" :lg="2">
      <span class="platform-name">{{ platformName }}</span>
    </Col>
    <Col :xs="20" :sm="20" :md="20" :lg="18">
      o
    </Col>
    <Col :xs="0" :sm="0" :md="0" :lg="4">
      <user-logout :mock-username="mockUsername" :mock-img-url="mockImgUrl" />
    </Col>
  </Row>
</template>

<script>
// ? import components
import UserLogout from '@common/user-logout/UserLogout.vue'
export default {
  name: 'HomeTop',
  components: {
    UserLogout
  },
  props: {
    platformName: {
      type: String,
      default: ''
    },
    mockUsername: {
      type: String,
      default: ''
    },
    mockImgUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  height: 3.2rem;
  background-color: #36adea;
  .ivu-col {
    display: flex;
    justify-content: center;
    align-items: center;
    .platform-name {
      font-size: 1rem;
      margin-top: 0.93rem;
    }
  }
  :nth-child(2) {
    color: #36adea;
  }
  :last-child {
    color: #fff;
  }
}
</style>
