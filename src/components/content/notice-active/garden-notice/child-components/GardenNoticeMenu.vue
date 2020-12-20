<template>
  <querymenu>
    <div slot="first" class="search">
      <Input placeholder="请输入关键字" v-model="inputKeyword" length="200" />
      <Button
        class="op-btn"
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleOperations(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="second" class="add">
      <Button type="warning" @click.native="addItem">
        <span>创建草稿</span>
        <Icon type="md-add" />
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
// ? import mixins
import noticeMenuOpMixin from '@mixins/notice-active/noticeMenuOpMixin'

export default {
  name: 'GardenNoticeMenu',

  components: {
    Querymenu
  },

  mixins: [noticeMenuOpMixin]
}
</script>

<style lang="less" scoped>
.common_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.query-menu {
  padding: 1.2rem 0;
  .common_flex();
  .search {
    flex: 1;
    margin: 0 1rem;
    .common_flex();
    .op-btn {
      margin: 0 0.5rem;
      width: 6rem;
    }
  }
  .add {
    flex: 3;
    text-align: right;
    margin-right: 2rem;
    .ivu-btn {
      margin: 0 0.5rem;
      width: 6.4rem;
    }
  }
}
</style>
