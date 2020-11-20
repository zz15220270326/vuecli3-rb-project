<template>
<Menu mode="horizontal" active-name="1" class="logout-menu">
  <img :src="mockImgUrl" />
  <Submenu name="3">
      <template class="sub-title" slot="title">
        {{mockUsername}}
      </template>
      <MenuItem name="log-out">退出登录</MenuItem>
  </Submenu>
</Menu>
</template>

<script>
export default {
  name: 'UserLogout',
  props: {
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
.logout-menu {
  background-color: rgb(54, 173, 234);
  color: #ffffff !important;
  height: 2.8rem;
  display: flex;
  img {
    height: 2rem;
    width: 2rem;
    margin-top: 0.5rem;
    border-radius: 50%;
  }
  // .ivu-menu-submenu-title {
  //   color: #fff;
  // }
}
</style>
