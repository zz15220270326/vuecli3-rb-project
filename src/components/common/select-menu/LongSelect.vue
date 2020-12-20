<template>
  <div class="select-menu" v-show="propList.length > 0">
    <Select
      v-model="selectIndex"
      :multiple="isMultiple"
      :style="propStyle"
      @on-select="handleSelect"
    >
      <Option v-for="(item, key) in propList" :key="key" :value="item.key">
        {{ item.info }}
      </Option>
    </Select>
  </div>
</template>

<script>
export default {
  name: 'LongSelect',
  data: () => ({
    selectIndex: 0
  }),
  props: {
    propStyle: {
      type: String,
      default: ''
    },
    // propItem: { key: Number, info: String }
    propList: {
      type: Array,
      default: () => []
    },
    propIndex: {
      type: Number,
      default: 0
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    propIndex(newValue) {
      if (newValue > 0) {
        this.selectIndex = newValue
      }
    }
  },
  methods: {
    handleSelect() {
      this.$emit('handleSelect', this.selectIndex)
    }
  }
}
</script>

<style lang="less" scoped></style>
