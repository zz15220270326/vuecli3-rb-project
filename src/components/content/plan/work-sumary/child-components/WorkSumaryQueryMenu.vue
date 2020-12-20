<template>
  <Querymenu>
    <div slot="first" class="first">
      <!-- year-info -->
      <select-menu
        :listTitle="classTitle"
        :listItems="classInfo"
        @handleSelect="handleSelectClass"
      />
      <SearchContent :searchPlaceholder="searchPlaceholder" />
    </div>
    <!-- <div slot="second" class="second"></div> -->
    <div slot="third" class="third">
      <Button
        v-for="(item, index) in operations"
        :key="index"
        :type="item.type"
        @click.native="handleAll(item.info)"
      >
        {{ item.info }}
      </Button>
    </div>
    <div slot="fourth" class="fourth">
      <Button type="warning" @click.native="handleAdd">
        新建
        <Icon type="md-add" />
      </Button>
    </div>
  </Querymenu>
</template>

<script>
// ? import components
// ? 1. query-menu
import Querymenu from '@common/query-menu/Querymenu'
// ? 2. select-menu
import SelectMenu from '@common/select-menu/SelectMenu'
// ? 3. search-content
import SearchContent from '@common/search-input/SearchContent'
export default {
  name: 'WorkSumaryQueryMenu',
  components: {
    Querymenu,
    SelectMenu,
    SearchContent
  },
  props: {
    // ? 班级标题, 信息
    classTitle: {
      type: String,
      default: ''
    },
    classInfo: {
      type: Array,
      default: () => []
    },
    // ? 操作标题, 信息
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
    handleSelectClass(item) {
      this.$emit('handleSelectClass', item)
    },
    handleSelectYear(item) {
      this.$emit('handleSelectYear', item)
    },
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
  }
  .third {
    flex: 1;
    margin-top: 1.2rem;
    .ivu-btn {
      margin-left: 0.6rem;
      width: 5rem;
    }
  }
  .fourth {
    flex: 1;
    margin-top: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
