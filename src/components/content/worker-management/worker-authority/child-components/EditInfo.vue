<template>
  <div class="edit-info">
    <div class="title">
      <div class="tag">名称</div>
      <div class="input-content">
        <Input
          :placeholder="editName"
          v-model="inputTitle"
          @on-change="titleChange"
        />
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
          :placeholder="editDesc"
          v-model="inputContent"
          @on-change="contentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditInfo',
  data: () => ({
    inputTitle: '',
    inputContent: ''
  }),
  props: {
    initAuthModuleContent: {
      type: Array,
      default: () => []
    },
    editName: {
      type: String,
      default: ''
    },
    editDesc: {
      type: String,
      default: ''
    }
  },
  methods: {
    titleChange() {
      this.$emit('titleChange', this.inputTitle)
    },
    contentChange() {
      this.$emit('contentChange', this.inputContent)
    }
  },
  /**
   * ! life-hooks
   */
  created() {},
  updated() {}
}
</script>

<style lang="less" scoped>
.edit-info {
  height: 20rem;
  background-color: pink;
  color: #777;
  .title {
    padding-top: 3rem;
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
