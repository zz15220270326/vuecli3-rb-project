<template>
  <querymenu>
    <div slot="first" class="content">
      <div class="content">
        <Input
          placeholder="请输入关键字"
          v-model="inputKeyword"
          @on-blur="getKeyword"
        />
      </div>
      <SearchButton @click.native="handleSearch" />
    </div>
    <div slot="second" class="empty-bg" />
  </querymenu>
</template>

<script>
// ? import-components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SearchButton = () => import('@common/search-button/SearchButton')
// ? import mixins
import simpleMenuMixin from '@mixins/notice-active/simpleMenuMixin'

export default {
  name: 'SimpleMenu',

  components: {
    Querymenu,
    SearchButton
  },

  mixins: [simpleMenuMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.query-menu {
  .full_flex();
  padding: 0.8rem 0;
  .content {
    flex: 2;
    margin-left: 1.2rem;
    .full_flex();
  }
  .empty-bg {
    flex: 7;
  }
}
</style>
