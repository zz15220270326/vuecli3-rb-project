<template>
  <querymenu>
    <div slot="first" class="input">
      <search-user />
    </div>
    <div slot="second" class="search">
      <search-button @click.native="searchName" />
    </div>
    <div slot="second" class="delete">
      <Button type="error" @click.native="deleteWorker">删除</Button>
    </div>
    <div slot="third" class="add">
      <Button type="warning" @click.native="addWorker">
        <span>添加</span>
        <Icon type="md-add" />
      </Button>
    </div>
  </querymenu>
</template>

<script>
import Querymenu from '@common/query-menu/Querymenu'
import SearchUser from '@common/search-input/SearchUser'
import SearchButton from '@common/search-button/SearchButton'
export default {
  name: 'AuthQueryMenu',
  components: {
    Querymenu,
    SearchUser,
    SearchButton
  },
  methods: {
    searchName() {
      this.$emit('searchName')
    },
    deleteWorker() {
      this.$emit('deleteWorker')
    },
    addWorker() {
      this.$emit('addWorker')
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  margin: 0.6rem 0;
  padding: 1.2rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    flex: 1;
  }
  .search {
    flex: 1;
  }
  .delete {
    flex: 1;
    .ivu-btn {
      width: 6rem;
    }
  }
  .add {
    flex: 2;
    text-align: right;
    .ivu-btn {
      width: 6rem;
      margin-right: 1.6rem;
    }
  }
}
</style>
