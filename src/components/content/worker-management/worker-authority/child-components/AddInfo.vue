<template>
  <div class="add-info">
    <div class="init-module">
      <div class="init-module-title">初始化权限模板</div>
      <div class="init-module-content">
        <Select
          v-model="selectItem"
          style="width: 250px"
          @on-change="selectChange"
          v-cloak
        >
          <Option
            v-for="item in initAuthModuleContent"
            :key="item.key"
            :value="item.info"
          >
            {{ item.info }}
          </Option>
        </Select>
      </div>
    </div>
    <div class="title">
      <div class="tag">名称</div>
      <div class="input-content">
        <Input v-model="inputTitle" @on-change="titleChange" />
      </div>
    </div>
    <div class="content">
      <div class="tag">备注</div>
      <div class="input-content">
        <Input
          type="textarea"
          maxlength="100"
          show-word-limit
          :rows="4"
          v-model="inputContent"
          @on-change="contentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
// ? common components

export default {
  name: 'AddInfo',
  data: () => ({
    selectItem: '不使用默认模板',
    inputTitle: '',
    inputContent: ''
  }),
  props: {
    initAuthModuleContent: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectChange() {
      this.$emit('moduleSelectChange', this.selectItem)
    },
    titleChange() {
      this.$emit('titleChange', this.inputTitle)
    },
    contentChange() {
      this.$emit('contentChange', this.inputContent)
    }
  }
}
</script>

<style lang="less" scoped>
.add-info {
  height: 25rem;
  background-color: pink;
  color: #777;
  .init-module {
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .init-module-title {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .init-module-content {
      flex: 5;
    }
  }
  .title {
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input-content {
      flex: 5;
      margin-right: 1.6rem;
    }
  }
  .content {
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input-content {
      flex: 5;
      margin-right: 1.6rem;
    }
  }
}
</style>
