<template>
  <!-- <div class="home-content"> -->
  <!-- <left-content /> -->
  <!-- <Col class="right-content" :span="20"> -->
  <!-- Home组件下面的2级路由 -->
  <!-- <router-view /> -->
  <!-- </Col> -->
  <!-- </div> -->
  <div class="home-content">
    <!-- Home组件下面的2级路由 -->
    <router-view />
  </div>
</template>

<script>
// import LeftContent from './LeftContent.vue'
export default {
  name: 'HomeContent'
}
</script>

<style lang="less" scoped>
.home-content {
  background-color: #f6f6f6;
  height: 100vh;
  .left-content {
    height: 100vh;
  }
}
</style>
