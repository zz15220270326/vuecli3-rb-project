<template>
  <div class="auth-info">
    <!-- :indeterminate="false" -->
    <!-- <div
      class="list-item"
      v-for="(title, titleIndex) in dataList"
      :key="titleIndex"
    >
      <Checkbox
        :value="title.selected"
        @click.native="handleCheckAll(titleIndex)"
      >
        <span>{{ title.title }}</span>
        <CheckboxGroup>
          <Checkbox
            v-for="(child, childIndex) in title.children"
            :key="childIndex"
            :value="child.selected"
            @click.native="handleCheckItem(titleIndex, childIndex)"
          >
            {{ child.title }}
          </Checkbox>
        </CheckboxGroup>
      </Checkbox>
    </div> -->
    <!-- useTree -->
    <Tree :data="dataList" show-checkbox multiple></Tree>
  </div>
</template>

<script>
const sourceData = require('@mock/worker-management/career-auth/mock.json')

export default {
  name: 'Authtitle',
  data: () => ({
    dataList: []
  }),
  props: {},
  methods: {
    initSourceData() {
      setTimeout(() => {
        const result = sourceData
        const { data } = result
        data.map(item => {
          item.expand = true
          // item.selected = item.checked
        })
        this.dataList = data
      }, 350)
    }
  },
  created() {
    this.initSourceData()
  }
}
</script>

<style lang="less" scoped>
.auth-info {
  height: 20rem;
  overflow-y: scroll;
  color: pink;
  .list-item {
    margin: 0.6rem 0;
  }
  .ivu-tree {
  }
}
</style>
