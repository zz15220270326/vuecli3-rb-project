<template>
  <Querymenu>
    <div slot="first" class="first">
      <SearchContent :searchPlaceholder="searchPlaceholder" />
    </div>
    <div slot="second" class="second">
      <Button
        v-for="(item, index) in operations"
        :key="index"
        :type="item.type"
        @click.native="handleAll(item.info)"
      >
        {{ item.info }}
      </Button>
    </div>
    <div slot="third" class="third">
      <Button type="warning" @click.native="handleAdd">
        添加
        <Icon type="md-add" />
      </Button>
    </div>
  </Querymenu>
</template>

<script>
// ? import components
// ? 1. query-menu
import Querymenu from '@common/query-menu/Querymenu'
// ? 3. search-content
import SearchContent from '@common/search-input/SearchContent'
export default {
  name: 'WorkReportQueryMenu',
  components: {
    Querymenu,
    SearchContent
  },
  props: {
    operations: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    inputKeywords: '',
    searchPlaceholder: '请输入标题关键字'
  }),
  methods: {
    handleAll(info) {
      this.$emit('handleAll', info)
    },
    handleAdd() {
      this.$emit('handleAdd')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  background-color: #fff;
  color: #666;
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  .first {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    .search {
      margin-left: 0.8rem;
    }
  }
  .second {
    flex: 2;
    margin-top: 1.2rem;
    .ivu-btn {
      margin-left: 0.6rem;
      width: 5rem;
    }
  }
  .third {
    flex: 1;
    text-align: right;
    margin: 1.2rem;
    .ivu-btn {
      width: 5rem;
    }
  }
}
</style>
