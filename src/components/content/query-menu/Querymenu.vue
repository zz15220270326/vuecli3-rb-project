<template>
<div class="query-menu">
  <slot class="menu" name="menu"></slot>
  <slot class="input" name="input"></slot>
  <slot class="date" name="date"></slot>
  <slot class="search-button" name="search-button"></slot>
</div>
</template>

<script>
export default {
  name: 'Querymenu'
}
</script>

<style lang="less" scoped>
.query-menu {
  background-color: #fff;
}
</style>
