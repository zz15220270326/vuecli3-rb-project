<template>
  <div class="choosable-menu">
    <Dropdown split-button type="primary">
      <Button type="default">
        {{ menuTitle }}
        <Icon type="ios-arrow-down" />
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem
          v-for="(item, index) in menuItems"
          :key="index"
          @click.native="handleSelect(index)"
        >
          {{ item.className }}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
// store-types
import { GET_CLASS_IDS } from '@/store/storeType'

export default {
  name: 'ChoosableMenu',
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menuTitle:
        this.menuItems.length > 0 ? this.menuItems[0].className : '全员教师'
    }
  },
  methods: {
    handleSelect(key) {
      this.menuTitle = this.menuItems[key].className
      const classIds = this.menuItems[key].id
      this.$store.commit(GET_CLASS_IDS, classIds)
    }
  },
  /* life-hooks */
  created() {}
}
</script>

<style lang="less" scoped>
.choosable-menu {
  margin: auto 0;
  // overflow: hidden;
  height: 2.5rem;
  border-radius: 0.05rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    // background-color: #409EFF;
    background-color: #f6f6f6;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 8%;
  }
  .el-menu-demo {
    .selectItems {
      color: #666;
    }
  }
}
// 动态绑定class
.itemIsSelected {
  color: orange;
}
</style>
