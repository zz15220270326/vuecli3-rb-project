<template>
  <div class="home-menu">
    <slot class="menu-logo" name="menu-logo"></slot>
    <slot class="menu-content" name="menu-content"></slot>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu'
}
</script>

<style lang="less" scoped>
.home-menu {
  // width: 100vw;
  height: 7rem;
  /* margin: 2rem 1.2rem; */
  display: flex;
  background-color: #fff;
  .menu-logo {
    flex: 1;
    width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin: auto;
    }
  }
  .menu-content {
    flex: 8;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
