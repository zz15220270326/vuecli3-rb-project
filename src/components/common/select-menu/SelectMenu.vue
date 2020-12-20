<template>
  <Dropdown class="select-menu" split-button type="primary" :transfer="true">
    <Button type="default">
      {{ listTitle }}
      <Icon type="ios-arrow-down" />
    </Button>
    <DropdownMenu slot="list">
      <DropdownItem
        v-for="(item, index) in listItems"
        :key="index"
        @click.native="handleSelect(index)"
      >
        {{ item.info }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'SelectMenu',
  props: {
    // ? menu-item
    listItems: {
      type: Array,
      default: () => []
    },
    listTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSelect(key) {
      this.$emit('handleSelect', this.listItems[key].info)
    }
  }
}
</script>

<style lang="less" scoped>
.select-menu {
  margin-left: 0.8rem;
}
</style>
